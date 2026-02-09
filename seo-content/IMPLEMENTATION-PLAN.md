# Programmatic SEO Implementation Plan
## Honda City Rental - Delhi NCR Landing Pages

**Created:** February 8, 2026  
**Status:** Ready to implement  
**Prerequisites:** New phone number for CTAs

---

## 📋 Pre-Implementation Checklist

- [ ] Obtain new business phone number
- [ ] Set up WhatsApp Business account
- [ ] Prepare Honda City images for landing pages
- [ ] Decide on booking mechanism (phone/WhatsApp/form)

---

## 🏗️ Phase 1: Project Setup (30 mins)

### Step 1.1: Create Pages Directory Structure
```bash
cd /home/gaurav/Documents/car\ rental/website
mkdir -p pages/airport
mkdir -p pages/corporate
mkdir -p pages/hire
mkdir -p pages/outstation
mkdir -p pages/events
```

### Step 1.2: Install Required Dependencies (if needed)
```bash
npm install @nuxtjs/sitemap
```

### Step 1.3: Update nuxt.config.ts
Add the following to `nuxt.config.ts`:
```typescript
modules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/sitemap'  // Add this
],

site: {
  url: 'https://yourdomain.com'  // Replace with actual domain
},

sitemap: {
  hostname: 'https://yourdomain.com',
  gzip: true
}
```

---

## 🏗️ Phase 2: Create Base Layout Component (1 hour)

### Step 2.1: Create Landing Page Template
Create `/components/LandingPage.vue` - a reusable template for all SEO pages:

```vue
<template>
  <main class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>{{ h1 }}</h1>
      <p class="intro">{{ intro }}</p>
      <a :href="ctaLink" class="cta-button">{{ ctaText }}</a>
    </section>

    <!-- Why Choose Section -->
    <section class="features">
      <h2>Why Choose Our Service</h2>
      <ul>
        <li v-for="(point, index) in whyChoose" :key="index">{{ point }}</li>
      </ul>
    </section>

    <!-- Pricing Section -->
    <section class="pricing">
      <h2>Pricing & Availability</h2>
      <p>{{ pricing }}</p>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Book Now</h2>
      <p>{{ cta }}</p>
      <div class="cta-buttons">
        <a :href="'tel:' + phone" class="btn-call">📞 Call Now</a>
        <a :href="'https://wa.me/91' + phone.replace(/[^0-9]/g, '')" class="btn-whatsapp">💬 WhatsApp</a>
      </div>
    </section>
  </main>
</template>

<script setup>
defineProps({
  h1: String,
  intro: String,
  whyChoose: Array,
  pricing: String,
  cta: String,
  ctaText: { type: String, default: 'Book Now' },
  ctaLink: { type: String, default: '#book' },
  phone: { type: String, default: '8178070797' }  // UPDATE THIS
})
</script>
```

---

## 🏗️ Phase 3: Create Airport Transfer Pages (2 hours)

### Priority Order (create in this sequence):

| # | Page | File Path | URL |
|---|------|-----------|-----|
| 1 | Delhi Airport General | `/pages/airport/delhi.vue` | `/airport/delhi` |
| 2 | Airport to Gurgaon | `/pages/airport/to-gurgaon.vue` | `/airport/to-gurgaon` |
| 3 | Airport to Noida | `/pages/airport/to-noida.vue` | `/airport/to-noida` |
| 4 | Airport to South Delhi | `/pages/airport/to-south-delhi.vue` | `/airport/to-south-delhi` |
| 5 | Airport to CP | `/pages/airport/to-connaught-place.vue` | `/airport/to-connaught-place` |
| 6 | Airport to Dwarka | `/pages/airport/to-dwarka.vue` | `/airport/to-dwarka` |
| 7 | Gurgaon to Airport | `/pages/airport/from-gurgaon.vue` | `/airport/from-gurgaon` |
| 8 | Noida to Airport | `/pages/airport/from-noida.vue` | `/airport/from-noida` |

### Example: `/pages/airport/delhi.vue`
```vue
<template>
  <div>
    <Head>
      <Title>Delhi Airport Car Rental with Driver | Honda City ₹2,999</Title>
      <Meta name="description" content="Premium Honda City with driver for Delhi IGI Airport. Terminal 1, 2, 3 pickup & drop. Flight tracking, 24/7 service. Airport transfer starting ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Delhi Airport Car Rental with Professional Driver – IGI Terminal 1, 2 & 3"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      phone="8178070797"
    />
  </div>
</template>

<script setup>
const intro = `Indira Gandhi International Airport handles thousands of travelers daily. Our Honda City with driver service provides seamless connectivity between all three terminals and every corner of Delhi NCR. Whether arriving on a domestic flight or landing from overseas, your driver tracks your flight and waits at arrivals. Professional, punctual, and available today for immediate booking.`

const whyChoose = [
  'Real-time flight tracking—driver monitors delays and adjusts arrival timing automatically',
  'All terminals covered—T1 domestic, T3 international, and T2 arrivals',
  'Meet-and-greet service with name board at arrival gates',
  'Fixed transparent pricing from airport to any Delhi NCR destination',
  '24/7 availability including red-eye flights and early morning departures'
]

const pricing = `Airport transfers start from ₹2,999 one-way. Fixed rates to Gurgaon, Noida, South Delhi, and Central Delhi. All fares include tolls and parking. Available today—confirm your booking now.`

const cta = `Book your airport transfer now. Call or WhatsApp with your flight details. Your driver will be tracking your landing.`
</script>
```

---

## 🏗️ Phase 4: Create Corporate Travel Pages (1.5 hours)

| # | Page | File Path | URL |
|---|------|-----------|-----|
| 1 | Corporate Gurgaon | `/pages/corporate/gurgaon.vue` | `/corporate/gurgaon` |
| 2 | Corporate Noida | `/pages/corporate/noida.vue` | `/corporate/noida` |
| 3 | Corporate Aerocity | `/pages/corporate/aerocity.vue` | `/corporate/aerocity` |
| 4 | Daily Commute | `/pages/corporate/delhi-gurgaon-commute.vue` | `/corporate/delhi-gurgaon-commute` |
| 5 | Corporate CP | `/pages/corporate/connaught-place.vue` | `/corporate/connaught-place` |

---

## 🏗️ Phase 5: Create Remaining Pages (1 hour)

### Full-Day Hire (3 pages)
| File Path | URL |
|-----------|-----|
| `/pages/hire/south-delhi.vue` | `/hire/south-delhi` |
| `/pages/hire/dwarka.vue` | `/hire/dwarka` |
| `/pages/hire/guest-transportation.vue` | `/hire/guest-transportation` |

### Outstation (2 pages)
| File Path | URL |
|-----------|-----|
| `/pages/outstation/delhi-to-jaipur.vue` | `/outstation/delhi-to-jaipur` |
| `/pages/outstation/delhi-to-agra.vue` | `/outstation/delhi-to-agra` |

### Events (1 page)
| File Path | URL |
|-----------|-----|
| `/pages/events/wedding-car-rental.vue` | `/events/wedding-car-rental` |

---

## 🏗️ Phase 6: Internal Linking (30 mins)

### Add to each landing page footer:
```vue
<section class="related-services">
  <h3>Related Services</h3>
  <NuxtLink to="/airport/delhi">Airport Transfers</NuxtLink>
  <NuxtLink to="/corporate/gurgaon">Corporate Travel</NuxtLink>
  <NuxtLink to="/hire/south-delhi">Full-Day Hire</NuxtLink>
</section>
```

### Link mapping:
| Page Type | Link To |
|-----------|---------|
| Airport pages | Corporate in same area + main booking |
| Corporate pages | Airport transfer + daily commute |
| Hire pages | Corporate + airport |
| Outstation | Full-day hire + airport |

---

## 🏗️ Phase 7: SEO Optimization (30 mins)

### Step 7.1: Add Schema Markup
Add to each landing page:
```vue
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Honda City Rental with Driver",
  "description": "Premium car rental with professional driver in Delhi NCR",
  "telephone": "+91-8178070797",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi NCR",
    "addressCountry": "IN"
  },
  "priceRange": "₹2,999 - ₹45,000",
  "openingHours": "Mo-Su 00:00-23:59"
}
</script>
```

### Step 7.2: Generate Sitemap
Sitemap auto-generates with `@nuxtjs/sitemap`. Verify at `/sitemap.xml` after build.

---

## 🏗️ Phase 8: Testing & Launch (1 hour)

### Step 8.1: Local Testing
```bash
npm run dev
```
- [ ] Test all 19 landing pages load correctly
- [ ] Verify meta titles and descriptions
- [ ] Test phone/WhatsApp links work
- [ ] Check mobile responsiveness

### Step 8.2: Build & Deploy
```bash
npm run generate
git add .
git commit -m "Add programmatic SEO landing pages"
git push
```

### Step 8.3: Post-Launch Verification
- [ ] All pages indexed (submit sitemap to Google Search Console)
- [ ] Check page speed (aim for 90+ Lighthouse score)
- [ ] Verify canonical URLs are correct
- [ ] Test CTAs on mobile devices

---

## 📞 Phone Number Placeholder

**Search and replace this across all files when you have the new number:**

```
Find: 8178070797
Replace: [Your 10-digit number]

Find: +91-8178070797  
Replace: +91-[Your number]
```

**Files to update:**
1. All `/pages/airport/*.vue` files
2. All `/pages/corporate/*.vue` files
3. All `/pages/hire/*.vue` files
4. All `/pages/outstation/*.vue` files
5. All `/pages/events/*.vue` files
6. `/components/LandingPage.vue` default prop
7. `/seo-content/programmatic-seo-matrix.md`

---

## 📊 Expected Results

### Search Visibility (3-6 months)
- Airport transfer queries: High competition, target position 1-5
- Corporate car rental: Medium competition, target position 1-3
- Location-specific queries: Low competition, target position 1-2

### Conversion Targets
- Airport pages: 3-5% call/WhatsApp rate
- Corporate pages: 2-3% inquiry rate
- Outstation pages: 1-2% booking rate

---

## 🔄 Future Expansion Ideas

1. **More airport routes**: Airport to Faridabad, Airport to Rohini
2. **More corporate areas**: Nehru Place, Saket, Lajpat Nagar
3. **More outstation**: Delhi to Rishikesh, Delhi to Manali
4. **Seasonal pages**: Diwali travel, New Year packages

---

## ✅ Final Checklist Before Going Live

- [ ] New phone number obtained and active
- [ ] WhatsApp Business set up with auto-replies
- [ ] All 19 pages created and tested
- [ ] Phone placeholder replaced in all files
- [ ] Internal links working correctly
- [ ] Schema markup validated
- [ ] Sitemap submitted to Google Search Console
- [ ] Analytics/tracking installed

---

**Content reference:** See `/seo-content/programmatic-seo-matrix.md` for all page content (titles, meta descriptions, H1s, paragraphs, bullet points, CTAs).
