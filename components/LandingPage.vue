<template>
  <div class="min-h-screen bg-dark-950">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-lg border-b border-white/5">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 relative">
            <img src="/images/logo.svg" alt="Car Rental Delhi Logo" class="w-full h-full object-contain" />
          </div>
          <div>
            <span class="text-lg font-bold text-white">Car Rental Delhi</span>
            <span class="block text-xs text-accent -mt-1">Book Premium Sedan</span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink to="/" class="text-sm text-white/60 hover:text-white transition-colors">Home</NuxtLink>
          <NuxtLink to="/airport/delhi" class="text-sm text-white/60 hover:text-white transition-colors">Airport</NuxtLink>
          <NuxtLink to="/corporate/gurgaon" class="text-sm text-white/60 hover:text-white transition-colors">Corporate</NuxtLink>
          <button @click="openWhatsApp" class="btn-primary text-sm py-2 px-4">Book Now</button>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white p-2">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-dark-900 border-t border-white/5 px-6 py-4">
        <nav class="flex flex-col gap-4">
          <NuxtLink to="/" @click="mobileMenuOpen = false" class="text-white/60 hover:text-white transition-colors">Home</NuxtLink>
          <NuxtLink to="/airport/delhi" @click="mobileMenuOpen = false" class="text-white/60 hover:text-white transition-colors">Airport Transfers</NuxtLink>
          <NuxtLink to="/corporate/gurgaon" @click="mobileMenuOpen = false" class="text-white/60 hover:text-white transition-colors">Corporate Travel</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-6">
      <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent"></div>
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="text-center">
          <span class="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            {{ serviceBadge }}
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {{ h1 }}
          </h1>
          <p class="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
            {{ intro }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="openWhatsApp" class="btn-primary py-4 px-8 text-lg flex items-center justify-center gap-3">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book via WhatsApp
            </button>
            <a :href="'tel:' + phone" class="btn-secondary py-4 px-8 text-lg flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {{ displayPhone }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="py-20 px-6 bg-dark-900">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-accent text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mt-2">Premium Service Guaranteed</h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(point, index) in whyChoose" :key="index" class="glass-card p-6 group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-white/80 leading-relaxed">{{ point }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 px-6 bg-dark-950">
      <div class="max-w-4xl mx-auto">
        <div class="glass-card p-8 md:p-12 text-center">
          <span class="text-accent text-sm font-semibold uppercase tracking-wider">Transparent Pricing</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Pricing & Availability</h2>
          <p class="text-lg text-white/70 leading-relaxed mb-8">
            {{ pricing }}
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="px-6 py-3 bg-white/5 rounded-lg border border-white/10">
              <span class="text-white/50 text-sm block">Starting from</span>
              <span class="text-2xl font-bold text-accent">{{ startingPrice }}</span>
            </div>
            <div class="px-6 py-3 bg-white/5 rounded-lg border border-white/10">
              <span class="text-white/50 text-sm block">Available</span>
              <span class="text-2xl font-bold text-white">24/7</span>
            </div>
            <div class="px-6 py-3 bg-white/5 rounded-lg border border-white/10">
              <span class="text-white/50 text-sm block">Includes</span>
              <span class="text-lg font-bold text-green-400">Car + Driver + Fuel</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 bg-gradient-to-b from-dark-900 to-dark-950">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Book Your Ride Now</h2>
        <p class="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          {{ cta }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="openWhatsApp" class="btn-primary py-4 px-8 text-lg flex items-center justify-center gap-3">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Now
          </button>
          <a :href="'tel:' + phone" class="btn-secondary py-4 px-8 text-lg flex items-center justify-center gap-3">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <section class="py-16 px-6 bg-dark-900 border-t border-white/5">
      <div class="max-w-5xl mx-auto">
        <h3 class="text-xl font-semibold text-white mb-6 text-center">Related Services</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="link in relatedLinks" :key="link.url" :to="link.url" 
            class="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-all">
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark-950 border-t border-white/5 py-12 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8">
                <img src="/images/logo.svg" alt="Car Rental Delhi Logo" class="w-full h-full object-contain" />
              </div>
              <span class="font-bold text-white">Car Rental Delhi</span>
            </div>
            <p class="text-white/50 text-sm">Premium Honda City with professional driver in Delhi NCR.</p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-3">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/" class="text-white/50 hover:text-accent transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/airport/delhi" class="text-white/50 hover:text-accent transition-colors">Airport Transfers</NuxtLink></li>
              <li><NuxtLink to="/corporate/gurgaon" class="text-white/50 hover:text-accent transition-colors">Corporate Travel</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-3">Contact</h4>
            <div class="space-y-2 text-sm">
              <a :href="'tel:' + phone" class="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ displayPhone }}
              </a>
              <button @click="openWhatsApp" class="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </button>
            </div>
          </div>
        </div>
        <div class="border-t border-white/5 pt-6 text-center">
          <p class="text-white/40 text-sm">© {{ new Date().getFullYear() }} Car Rental Delhi. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Mobile Floating CTA -->
    <div class="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-dark-950/90 backdrop-blur-lg border-t border-white/10">
      <button @click="openWhatsApp" class="btn-primary w-full flex items-center justify-center gap-2 py-4">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Book via WhatsApp
      </button>
    </div>

    <!-- Schema Markup -->
    <component :is="'script'" type="application/ld+json">
      {{ schemaMarkup }}
    </component>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  h1: { type: String, required: true },
  intro: { type: String, required: true },
  whyChoose: { type: Array as () => string[], required: true },
  pricing: { type: String, required: true },
  cta: { type: String, required: true },
  startingPrice: { type: String, default: '₹2,999' },
  serviceBadge: { type: String, default: 'Premium Service' },
  phone: { type: String, default: '+918178070797' },
  relatedLinks: { 
    type: Array as () => { title: string; url: string }[], 
    default: () => [
      { title: 'Airport Transfers', url: '/airport/delhi' },
      { title: 'Corporate Travel', url: '/corporate/gurgaon' },
      { title: 'Full-Day Hire', url: '/hire/south-delhi' }
    ]
  }
})

const mobileMenuOpen = ref(false)

const displayPhone = computed(() => props.phone.replace('+91', '+91 '))

const schemaMarkup = computed(() => JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Car Rental Delhi - Honda City with Driver",
  "description": "Premium car rental with professional driver in Delhi NCR",
  "telephone": props.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi NCR",
    "addressCountry": "IN"
  },
  "priceRange": "₹2,999 - ₹45,000",
  "openingHours": "Mo-Su 00:00-23:59"
}))

const openWhatsApp = () => {
  const message = `🚗 *Booking Inquiry*\n\nHi, I'm interested in ${props.serviceBadge}.\n\nPlease share availability and pricing details. Thank you!`
  const url = `https://wa.me/${props.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
  
  // Google Ads Conversion Tracking
  // We call this without URL to track the event but handle navigation ourselves (lazy loading/new tab)
  if (typeof (window as any).gtag_report_conversion === 'function') {
    (window as any).gtag_report_conversion()
  }
  
  window.open(url, '_blank')
}
</script>

<style scoped>
.btn-primary {
  @apply bg-gradient-to-r from-accent to-accent-dark text-dark-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02];
}

.btn-secondary {
  @apply bg-white/5 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30;
}

.glass-card {
  @apply bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm;
}
</style>
