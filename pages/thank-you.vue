<template>
  <div class="min-h-screen bg-dark-950 flex items-center justify-center px-6">
    <div class="text-center">
      <!-- Simple Loading Spinner -->
      <div class="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

      <h1 class="text-lg text-white font-medium mb-1">Opening WhatsApp...</h1>

      <!-- Very subtle fallback link -->
      <a :href="whatsappUrl" class="text-xs text-white/20 hover:text-white transition-colors">
        Click here if not redirected
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const WHATSAPP_NUMBER = '+918178070797'

// Construct WhatsApp URL from query params
const whatsappUrl = computed(() => {
  const params = route.query
  
  let message = `🚗 *Premium Sedan Booking Inquiry*\n\n`
  
  if (params.name) message += `👤 *Name:* ${params.name}\n`
  if (params.pickup) message += `📍 *Pickup:* ${params.pickup}\n`
  if (params.destination) message += `🎯 *Destination:* ${params.destination}\n`
  if (params.date) message += `📅 *Date & Time:* ${params.date}\n`
  
  message += `\nPlease share availability, package options, and fare details. Thank you!`
  
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
})

onMounted(() => {
  // 1. Fire Google Ads Conversion
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17948014697/P9Y_CIOMp_gbEOnwo-5C'
    });
  }

  // 2. Redirect to WhatsApp immediately (50ms buffer)
  setTimeout(() => {
    window.location.href = whatsappUrl.value
  }, 50)
})

useHead({
  title: 'Redirecting... | Car Rental Delhi',
  meta: [
    { name: 'robots', content: 'noindex' } // Keep this page out of search results
  ],
  script: [
    {
      innerHTML: `
        gtag('event', 'conversion', {'send_to': 'AW-17948014697/P9Y_CIOMp_gbEOnwo-5C'});
      `
    }
  ]
})
</script>
