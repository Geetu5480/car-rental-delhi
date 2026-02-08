<template>
  <div ref="containerRef" class="relative" :style="{ height: containerHeight }">
    <!-- Loading Overlay -->
    <div
      v-if="!isLoaded"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950"
    >
      <div class="w-64 h-1 bg-dark-800 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-300"
          :style="{ width: `${loadProgress}%` }"
        />
      </div>
      <p class="mt-4 text-white/60 text-sm">Loading experience... {{ Math.round(loadProgress) }}%</p>
    </div>

    <!-- Sticky Canvas Container -->
    <div ref="stickyRef" class="sticky top-0 h-screen w-full overflow-hidden">
      <canvas
        ref="canvasRef"
        class="absolute inset-0 w-full h-full object-contain"
      />

      <!-- Text Overlays -->
      <div ref="text1Ref" class="scroll-text-left">
        <h2 class="text-shadow text-gradient">Executive Comfort.</h2>
      </div>

      <div ref="text2Ref" class="scroll-text-left opacity-0">
        <h2 class="text-shadow text-gradient max-w-2xl">
          Professional Reliability.<br />Every Trip.
        </h2>
      </div>

      <div ref="text3Ref" class="scroll-text-left flex-col gap-6 opacity-0">
        <h2 class="text-shadow text-gradient">Premium Travel</h2>
        <p class="text-xl md:text-2xl text-white/70 font-light">at Value Pricing.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Props
const props = defineProps<{
  frameCount?: number
  framePath?: string
}>()

const frameCount = props.frameCount || 40
const framePath = props.framePath || '/frames/'
const containerHeight = '250vh'

// Refs
const containerRef = ref<HTMLDivElement | null>(null)
const stickyRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const text1Ref = ref<HTMLDivElement | null>(null)
const text2Ref = ref<HTMLDivElement | null>(null)
const text3Ref = ref<HTMLDivElement | null>(null)

// State
const isLoaded = ref(false)
const loadProgress = ref(0)
const images = ref<HTMLImageElement[]>([])
const currentFrame = ref(0)

// Get canvas context
let ctx: CanvasRenderingContext2D | null = null

// Preload all images
const preloadImages = async () => {
  const imagePromises: Promise<HTMLImageElement>[] = []

  for (let i = 1; i <= frameCount; i++) {
    const frameNumber = String(i).padStart(2, '0')
    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        loadProgress.value = (images.value.length / frameCount) * 100
        resolve(img)
      }
      img.onerror = reject
      img.src = `${framePath}${frameNumber}.jpg`
    })
    imagePromises.push(promise)
  }

  try {
    const loadedImages = await Promise.all(imagePromises)
    images.value = loadedImages
    isLoaded.value = true
    return loadedImages
  } catch (error) {
    console.error('Failed to load images:', error)
    throw error
  }
}

// Draw frame to canvas
const drawFrame = (frameIndex: number) => {
  if (!ctx || !canvasRef.value || images.value.length === 0) return

  const canvas = canvasRef.value
  const img = images.value[Math.min(frameIndex, images.value.length - 1)]

  if (!img) return

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Calculate dimensions - cover behavior with mobile pan effect
  const imgRatio = img.width / img.height
  const canvasRatio = canvas.width / canvas.height
  const isMobile = canvas.width < 768
  const scrollProgress = frameIndex / (frameCount - 1) // 0 to 1

  let drawWidth, drawHeight, drawX, drawY

  if (imgRatio > canvasRatio) {
    // Image is wider - fit height, crop width
    drawHeight = canvas.height
    drawWidth = img.width * (canvas.height / img.height)
    
    // On mobile: start shifted left (showing right side where person is), gradually center
    if (isMobile) {
      const maxOffset = (drawWidth - canvas.width) * 0.15 // 15% of overflow
      const offset = maxOffset * (1 - scrollProgress) // decreases as scroll progresses
      drawX = ((canvas.width - drawWidth) / 2) - offset
    } else {
      drawX = (canvas.width - drawWidth) / 2
    }
    drawY = 0
  } else {
    // Image is taller - fit width, crop height
    drawWidth = canvas.width
    drawHeight = img.height * (canvas.width / img.width)
    drawX = 0
    drawY = (canvas.height - drawHeight) / 2
  }

  ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)
}

// Setup canvas size
const setupCanvas = () => {
  if (!canvasRef.value) return

  const canvas = canvasRef.value
  const dpr = window.devicePixelRatio || 1

  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr

  canvas.style.width = '100%'
  canvas.style.height = '100%'

  ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.scale(dpr, dpr)
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  // Redraw current frame
  drawFrame(currentFrame.value)
}

// Setup GSAP ScrollTrigger
const setupScrollTrigger = () => {
  if (!containerRef.value) return

  // Register plugin
  gsap.registerPlugin(ScrollTrigger)

  // Main scroll animation for frames
  ScrollTrigger.create({
    trigger: containerRef.value,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress
      const frameIndex = Math.floor(progress * (frameCount - 1))
      
      if (frameIndex !== currentFrame.value) {
        currentFrame.value = frameIndex
        drawFrame(frameIndex)
      }
    },
  })

  // Text overlay animations
  // Text 1: Visible from start, fades out at 25%
  gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.value,
      start: 'top top',
      end: '25% top',
      scrub: true,
    },
  })
    .to(text1Ref.value, { opacity: 1, duration: 0.5 }) // stay visible
    .to(text1Ref.value, { opacity: 0, y: -30, duration: 0.5 })

  // Text 2: 30-60% (fade in at 30%, hold, fade out at 60%)
  gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.value,
      start: '28% top',
      end: '58% top',
      scrub: true,
    },
  })
    .fromTo(
      text2Ref.value,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.3 }
    )
    .to(text2Ref.value, { opacity: 1, duration: 0.4 }) // hold visible
    .to(text2Ref.value, { opacity: 0, x: -50, duration: 0.3 })

  // Text 3: 65-100% (fade in at 65%, stay visible)
  gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.value,
      start: '62% top',
      end: 'bottom bottom',
      scrub: true,
    },
  })
    .fromTo(
      text3Ref.value,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4 }
    )
    .to(text3Ref.value, { opacity: 1, duration: 0.6 }) // hold visible
}

// Handle resize
const handleResize = () => {
  setupCanvas()
}

// Lifecycle
onMounted(async () => {
  setupCanvas()
  await preloadImages()
  
  // Draw first frame
  if (images.value.length > 0) {
    drawFrame(0)
  }

  // Setup scroll animations after a small delay to ensure DOM is ready
  await nextTick()
  setupScrollTrigger()

  // Add resize listener
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill())
  window.removeEventListener('resize', handleResize)
})
</script>
