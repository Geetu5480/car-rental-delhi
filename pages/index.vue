<template>
  <div class="min-h-screen bg-dark-950">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-lg border-b border-white/5">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3">
          <div class="w-10 h-10 relative">
            <!-- C-Wheel Logo -->
            <img src="/images/logo.svg" alt="Car Rental Delhi Logo" class="w-full h-full object-contain" />
          </div>
          <div>
            <span class="text-lg font-bold text-white">Car Rental Delhi</span>
            <span class="block text-xs text-accent -mt-1">Book Premium Sedan</span>
          </div>
        </a>

        <!-- Nav Links (Desktop) -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm text-white/60 hover:text-white transition-colors">About</a>
          <a href="#services" class="text-sm text-white/60 hover:text-white transition-colors">Services</a>
          <a href="#testimonials" class="text-sm text-white/60 hover:text-white transition-colors">Reviews</a>
          <a href="#faq" class="text-sm text-white/60 hover:text-white transition-colors">FAQ</a>
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
          <a href="#about" @click="mobileMenuOpen = false" class="text-white/60 hover:text-white transition-colors">About</a>
          <a href="#services" @click="mobileMenuOpen = false" class="text-white/60 hover:text-white transition-colors">Services</a>
          <a href="#testimonials" @click="mobileMenuOpen = false" class="text-white/60 hover:text-white transition-colors">Reviews</a>
          <a href="#faq" @click="mobileMenuOpen = false" class="text-white/60 hover:text-white transition-colors">FAQ</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section with Canvas Scroll -->
    <section class="relative">
      <CarScroll />

      <!-- Scroll Indicator - Bottom side -->
      <div class="fixed bottom-24 lg:bottom-28 left-4 lg:left-6 z-30 flex items-center gap-3 animate-fade-in pointer-events-none">
        <div class="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div class="w-1.5 h-3 bg-accent rounded-full animate-bounce"></div>
        </div>
        <span class="text-white/50 text-xs uppercase tracking-wider hidden md:inline">Scroll to explore</span>
      </div>

      <!-- Booking Form Overlay - Desktop Bottom Bar -->
      <div class="fixed bottom-0 left-0 right-0 z-40 animate-slide-up hidden lg:block">
        <div class="bg-dark-950/90 backdrop-blur-lg border-t border-white/10">
          <div class="max-w-6xl mx-auto px-6 py-4">
            <div class="flex items-center gap-4">
              <div class="flex-1 grid grid-cols-4 gap-3">
                <input
                  v-model="form.pickup"
                  type="text"
                  placeholder="Pickup location"
                  class="input-glass py-2.5 text-sm"
                />
                <input
                  v-model="form.destination"
                  type="text"
                  placeholder="Destination"
                  class="input-glass py-2.5 text-sm"
                />
                <input
                  ref="dateInputDesktop"
                  v-model="form.date"
                  type="datetime-local"
                  class="input-glass py-2.5 text-sm cursor-pointer"
                  @click="openDatePicker('desktop')"
                />
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="input-glass py-2.5 text-sm"
                />
              </div>
              <button @click="openWhatsApp" type="button" class="btn-primary flex items-center gap-2 py-2.5 px-6 shrink-0">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Floating CTA -->
      <div class="fixed bottom-6 left-4 right-4 z-40 lg:hidden animate-slide-up">
        <button @click="openWhatsApp" type="button" class="btn-primary w-full flex items-center justify-center gap-2 py-4">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book Now via WhatsApp
        </button>
      </div>
    </section>



    <!-- Services Section -->
    <section id="services" class="relative z-10 bg-dark-900 py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-accent text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Our Services</h2>
          <p class="text-lg text-white/60 max-w-2xl mx-auto">
            Premium sedan with professional driver for Delhi NCR and outstation trips
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.title" class="service-card group overflow-hidden">
            <!-- Service Image -->
            <div class="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
              <img 
                :src="service.image" 
                :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
            </div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                {{ service.title }}
              </h3>
            </div>
            <p class="text-white/50 text-sm leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>


      </div>
    </section>

    <!-- About Honda City Section -->
    <section id="about" class="relative z-10 bg-gradient-to-b from-dark-900 to-dark-950 py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Car Image -->
          <div class="order-2 lg:order-1">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/honda-city.png" 
                alt="Honda City Premium Sedan"
                class="w-full h-auto object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent"></div>
            </div>
          </div>
          
          <!-- Car Info -->
          <div class="order-1 lg:order-2">
            <span class="text-accent text-sm font-semibold uppercase tracking-wider">The Car</span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Honda City</h2>
            <p class="text-lg text-white/70 mb-8 leading-relaxed">
              The Honda City is one of India's most trusted sedans, combining proven reliability 
              with luxurious comfort. Perfect for both city drives and long outstation journeys.
            </p>

            <div class="space-y-3">
              <div v-for="feature in carFeatures" :key="feature.title" class="glass-card p-4 flex gap-3 items-start">
                <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white">{{ feature.title }}</h4>
                  <p class="text-sm text-white/50 mt-0.5">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Propositions Section -->
    <section id="why-us" class="relative z-10 bg-dark-950 py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-accent text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">The Difference We Make</h2>
          <p class="text-lg text-white/60 max-w-2xl mx-auto">
            Experience premium travel without the premium price tag
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in valueProps" :key="value.title" class="text-center group">
            <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="value.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ value.title }}</h3>
            <p class="text-white/50 text-sm leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="relative z-10 bg-dark-900 py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-accent text-sm font-semibold uppercase tracking-wider">What Our Customers Say</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Testimonials</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="glass-card p-6">
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            
            <p class="text-white/70 mb-6 italic">"{{ testimonial.text }}"</p>
            
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-dark-950 font-bold">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div>
                <div class="font-semibold text-white">{{ testimonial.name }}</div>
                <div class="text-sm text-white/50">{{ testimonial.trip }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What's Included Section -->
    <section id="pricing" class="relative z-10 bg-dark-950 py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-accent text-sm font-semibold uppercase tracking-wider">Transparent Pricing</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">What's in Your Booking?</h2>
          <p class="text-lg text-white/60 max-w-2xl mx-auto">
            Know exactly what you're paying for — no surprises
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Included -->
          <div class="glass-card p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <svg class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">Included</h3>
            </div>
            <ul class="space-y-4">
              <li v-for="item in includedItems" :key="item.title" class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                  </svg>
                </div>
                <div>
                  <span class="font-medium text-white">{{ item.title }}</span>
                  <p class="text-sm text-white/50">{{ item.description }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Not Included -->
          <div class="glass-card p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">Extra Charges</h3>
            </div>
            <ul class="space-y-4">
              <li v-for="item in extraCharges" :key="item.title" class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                  </svg>
                </div>
                <div>
                  <span class="font-medium text-white">{{ item.title }}</span>
                  <p class="text-sm text-white/50">{{ item.description }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="relative z-10 bg-dark-900 py-24 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-accent text-sm font-semibold uppercase tracking-wider">Got Questions?</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">FAQ</h2>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="glass-card overflow-hidden">
            <button
              @click="toggleFaq(index)"
              class="w-full p-5 flex justify-between items-center text-left"
            >
              <span class="font-semibold text-white pr-4">{{ faq.question }}</span>
              <svg
                class="w-5 h-5 text-accent shrink-0 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :class="openFaq === index ? 'max-h-48' : 'max-h-0'"
            >
              <p class="px-5 pb-5 text-white/60">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Booking Section -->
    <section id="booking" class="lg:hidden relative z-10 bg-dark-950 py-16 px-6">
      <div class="max-w-md mx-auto">
        <h2 class="text-3xl font-bold text-white mb-2 text-center">Book Your Ride</h2>
        <p class="text-white/50 text-center mb-6">Premium sedan for your travels</p>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-white/60 mb-1.5">Pickup Location <span class="text-white/30">(optional)</span></label>
            <input
              v-model="form.pickup"
              type="text"
              placeholder="Delhi, Gurgaon, Noida..."
              class="input-glass"
            />
          </div>

          <div>
            <label class="block text-sm text-white/60 mb-1.5">Destination <span class="text-white/30">(optional)</span></label>
            <input
              v-model="form.destination"
              type="text"
              placeholder="Local or Outstation"
              class="input-glass"
            />
          </div>

          <div>
            <label class="block text-sm text-white/60 mb-1.5">Date & Time <span class="text-white/30">(optional)</span></label>
            <input
              ref="dateInputMobile"
              v-model="form.date"
              type="datetime-local"
              class="input-glass cursor-pointer"
              @click="openDatePicker('mobile')"
            />
          </div>

          <div>
            <label class="block text-sm text-white/60 mb-1.5">Your Name <span class="text-white/30">(optional)</span></label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your name"
              class="input-glass"
            />
          </div>

          <button @click="openWhatsApp" type="button" class="btn-primary w-full flex items-center justify-center gap-2 py-4 mt-6">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 bg-dark-950 border-t border-white/5">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10">
                <img src="/images/logo.svg" alt="Car Rental Delhi Logo" class="w-full h-full object-contain" />
              </div>
              <div>
                <span class="text-lg font-bold text-white">Car Rental Delhi</span>
                <span class="block text-xs text-accent -mt-1">Book Premium Sedan</span>
              </div>
            </div>
            <p class="text-white/50 mb-6 max-w-md">
              Premium car booking service with professional drivers in Delhi NCR. Experience the 
              comfort and reliability of our premium sedan for your city drives and outstation trips.
            </p>
            <button @click="openWhatsApp" type="button" class="btn-primary inline-flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact on WhatsApp
            </button>
            <div class="mt-4 flex items-center gap-3">
              <span class="text-white/40 text-sm">No WhatsApp?</span>
              <a :href="'tel:' + WHATSAPP_NUMBER" class="text-accent hover:text-white transition-colors flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ DISPLAY_NUMBER }}
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold text-white mb-4">Quick Links</h4>
            <ul class="space-y-3">
              <li><a href="#about" class="text-white/50 hover:text-accent transition-colors">About The Car</a></li>
              <li><a href="#services" class="text-white/50 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#why-us" class="text-white/50 hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" class="text-white/50 hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#faq" class="text-white/50 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-semibold text-white mb-4">Coverage Area</h4>
            <ul class="space-y-3 text-white/50">
              <li>Delhi</li>
              <li>Gurgaon</li>
              <li>Noida</li>
              <li>Greater Noida</li>
              <li>Faridabad</li>
              <li>Ghaziabad</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/5 py-6 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-white/40 text-sm">
            © {{ new Date().getFullYear() }} Car Rental Delhi. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-white/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useHead({
  title: 'Car Rental Delhi - Premium Sedan Car Rental with Driver | Delhi NCR',
  meta: [
    {
      name: 'description',
      content: 'Book premium sedan with professional driver in Delhi NCR. Outstation trips to Jaipur, Agra, Rishikesh & more. Airport transfers, corporate travel available.',
    },
    { property: 'og:title', content: 'Car Rental Delhi - Premium Sedan with Professional Driver' },
    {
      property: 'og:description',
      content: 'Book premium sedan with professional driver in Delhi NCR. Airport transfers, corporate travel, outstation trips.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'keywords', content: 'premium sedan rental Delhi, car with driver, car hire Delhi NCR, outstation car booking, airport transfer Delhi' },
  ],
})

// Contact numbers
const WHATSAPP_NUMBER = '+918178070797' // Business number for WhatsApp
const DISPLAY_NUMBER = '+91 8178070797' // Formatted for display

// Mobile menu state
const mobileMenuOpen = ref(false)

// Form state
const form = reactive({
  pickup: '',
  destination: '',
  date: '',
  name: '',
})

// Date input refs
const dateInputDesktop = ref<HTMLInputElement | null>(null)
const dateInputMobile = ref<HTMLInputElement | null>(null)

// Open date picker when clicking on the input
const openDatePicker = (type: 'desktop' | 'mobile') => {
  const input = type === 'desktop' ? dateInputDesktop.value : dateInputMobile.value
  if (input) {
    input.showPicker()
  }
}

// FAQ state
const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

// Car specifications
const carSpecs = [
  { value: '121', label: 'HP Power' },
  { value: '1.5L', label: 'i-VTEC Engine' },
  { value: '5', label: 'Seater Comfort' },
  { value: 'CVT', label: 'Smooth Transmission' },
]

// Car features
const carFeatures = [
  { title: 'Premium Interiors', description: 'Leather seats, automatic climate control, and spacious cabin' },
  { title: 'Advanced Safety', description: 'Airbags, ABS with EBD, and Honda Sensing suite' },
  { title: 'Experienced Drivers', description: 'Courteous drivers who know every route' },
  { title: 'Well Maintained', description: 'Regularly serviced with full insurance coverage' },
]

// Services data
const services = [
  {
    title: 'Airport Transfer',
    description: 'Reliable airport pickups and drops. On-time service for domestic and international terminals with flight tracking.',
    icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5',
    image: '/images/airport-transfer.png',
  },
  {
    title: 'Tour & Travel',
    description: 'Explore destinations like Jaipur, Agra, Rishikesh. Comfortable long drives with experienced drivers who know the best routes and stops.',
    icon: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z',
    image: '/images/tour-travel.png',
  },
  {
    title: 'Corporate',
    description: 'Reliable transportation for business professionals. Client meetings, conferences, and corporate events with punctual service.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    image: '/images/corporate.png',
  },
  {
    title: 'VIP Transport',
    description: 'Executive-level comfort for distinguished guests. Discreet, premium service with professionally trained drivers.',
    icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
    image: '/images/vip-transport.png',
  },
  {
    title: 'Personal Travel',
    description: 'Weekend getaways, family trips, or daily commutes. Flexible packages for hourly, daily, or weekly bookings.',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    image: '/images/personal-travel.png',
  },
  {
    title: 'Events & Occasions',
    description: 'Perfect for parties, functions, and special occasions. Arrive in style with a premium car.',
    icon: 'M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z',
    image: '/images/events-occasions.png',
  },
]



// Value propositions
const valueProps = [
  {
    title: 'Professional Drivers',
    description: 'Experienced, verified drivers with excellent knowledge of routes and traffic patterns.',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges. Get clear quotes upfront with all costs included.',
    icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z',
  },
  {
    title: 'Always On Time',
    description: 'Punctuality guaranteed. Your driver arrives before the scheduled pickup time.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Premium & Comfortable',
    description: 'Well-maintained premium sedan with plush interiors, AC, and smooth ride quality.',
    icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 00-.879-2.121l-2.317-2.317A3 3 0 0014.172 9H14.25m-2.25 0h4.5M4.5 9h.008v.008H4.5V9zm0 3h.008v.008H4.5V12zm0 3h.008v.008H4.5V15z',
  },
]

// What's included
const includedItems = [
  { title: 'Premium Sedan', description: 'Clean, well-maintained sedan with AC', icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 00-.879-2.121l-2.317-2.317A3 3 0 0014.172 9H14.25m-2.25 0h4.5M4.5 9h.008v.008H4.5V9zm0 3h.008v.008H4.5V12zm0 3h.008v.008H4.5V15z' },
  { title: 'Experienced Driver', description: 'Skilled driver for your trip duration', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
  { title: 'Fuel', description: 'Fuel costs included in the package price', icon: 'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z' },
  { title: 'Time/Distance Package', description: 'Based on hours or kilometers as per booking', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
]

// Extra charges
const extraCharges = [
  { title: 'Tolls & Parking', description: 'Highway tolls and parking fees as applicable', icon: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' },
  { title: 'Extra Hours/KMs', description: 'Additional charges beyond package limits', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'State Permits', description: 'For outstation trips outside Delhi NCR', icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z' },
]

// Testimonials
const testimonials = [
  {
    name: 'Rahul Sharma',
    trip: 'Airport Transfer',
    text: 'Excellent airport pickup! Received a confirmation call beforehand and the driver was ready at arrivals. Professional service and knew the best route to avoid traffic.',
  },
  {
    name: 'Priya Gupta',
    trip: 'Tour & Travel - Jaipur',
    text: 'Our family trip to Jaipur was wonderful. Comfortable ride, safe driving on the highway, and the driver was completely professional. Highly recommended!',
  },
  {
    name: 'Amit Kumar',
    trip: 'Corporate Travel',
    text: 'We use their service regularly for client meetings and conferences. Always punctual, clean cars, and courteous service. Highly recommended for business travel!',
  },
  {
    name: 'Sneha Reddy',
    trip: 'Tour & Travel - Rishikesh',
    text: 'Perfect trip! Very smooth ride and the driver was reliable and focused on safety. Booking via WhatsApp was super convenient too.',
  },
  {
    name: 'Vikram Singh',
    trip: 'VIP Transport',
    text: 'Booked for a high-profile client visit. The car was spotless, service was discreet and professional. Five stars!',
  },
  {
    name: 'Meera Joshi',
    trip: 'Weekend Getaway',
    text: 'Used their service for our weekend trip. Flexible booking, safe driving on all roads, and the driver was punctual and reliable. Great experience!',
  },
]

// FAQs
const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, UPI, and bank transfers. Payment terms are 50% at the start of your journey and the remaining 50% at the end.',
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No hidden costs! We believe in transparent pricing. The quoted price is what you pay. Tolls, parking, and state permits are clearly communicated upfront before your trip.',
  },
  {
    question: 'How experienced are your drivers?',
    answer: 'Our drivers speak both English and Hindi fluently and have more than 15 years of driving experience. They are well-versed with all routes across Delhi NCR and outstation destinations.',
  },
  {
    question: 'Can I change my destination mid-trip?',
    answer: 'Yes, we are flexible with your destination and booking mid-trip, including last-minute changes. Just inform your driver and we will accommodate your request.',
  },
  {
    question: 'Can I carry rooftop luggage?',
    answer: 'Rooftop luggage is illegal in India. All luggage must be stored inside the vehicle. Our Honda City sedan has a spacious trunk that can accommodate standard travel bags and suitcases.',
  },
  {
    question: 'Is the car available at Delhi Airport?',
    answer: 'Yes, our car is available for pickup and drop at Delhi Airport (Terminal 1, 2, and 3). Our driver will meet you at the arrivals gate.',
  },
  {
    question: 'How do I book a car?',
    answer: 'Simply click the WhatsApp button and send us your trip details. You can also fill out the optional form fields to pre-populate your message. We will confirm availability and pricing.',
  },
]

// Generate WhatsApp link - always works, fields are optional
const openWhatsApp = () => {
  const formattedDate = form.date
    ? new Date(form.date).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      })
    : ''

  let message = `🚗 *Premium Sedan Booking Inquiry*\n\n`
  
  if (form.name) message += `👤 *Name:* ${form.name}\n`
  if (form.pickup) message += `📍 *Pickup:* ${form.pickup}\n`
  if (form.destination) message += `🎯 *Destination:* ${form.destination}\n`
  if (formattedDate) message += `📅 *Date & Time:* ${formattedDate}\n`
  
  message += `\nPlease share availability, package options, and fare details. Thank you!`

  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
  
  if (typeof (window as any).gtag_report_conversion === 'function') {
    (window as any).gtag_report_conversion()
  }

  window.open(url, '_blank')
}

// Scroll to booking section (mobile)
const scrollToBooking = () => {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
