<template>
  <div class="min-h-screen bg-dark-950 flex items-center justify-center px-6">
    <div class="max-w-md w-full text-center">
      <!-- Success Icon -->
      <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center animate-bounce">
        <svg class="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 class="text-3xl font-bold text-white mb-4">Redirecting to WhatsApp...</h1>
      <p class="text-white/60 mb-8">
        Thank you for your interest! We are redirecting you to WhatsApp to complete your booking.
      </p>

      <div class="space-y-4">
        <a 
          :href="whatsappUrl" 
          target="_blank"
          class="btn-primary w-full block py-4 flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Click if not redirected
        </a>
        
        <router-link to="/" class="block text-sm text-white/40 hover:text-white transition-colors">
          Return to Home
        </router-link>
      </div>
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

  // 2. Redirect to WhatsApp after short delay
  setTimeout(() => {
    window.location.href = whatsappUrl.value
  }, 1500)
})

useHead({
  title: 'Redirecting... | Car Rental Delhi',
  script: [
    {
      innerHTML: `
        gtag('event', 'conversion', {'send_to': 'AW-17948014697/P9Y_CIOMp_gbEOnwo-5C'});
      `
    }
  ]
})
</script>
