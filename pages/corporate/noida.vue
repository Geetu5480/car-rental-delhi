<template>
  <div>
    <Head>
      <Title>Corporate Car Rental Noida | Honda City Driver Service</Title>
      <Meta name="description" content="Professional Honda City with driver for Noida corporate travel. Sector 62, Film City, Greater Noida. Daily and monthly packages from ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Honda City Corporate Car Service with Driver – Noida & Greater Noida"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Corporate Noida"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Noida's tech corridors and expanding business parks need dependable corporate transportation. Our Honda City with professional driver connects Sector 62, Film City, Noida Expressway offices, and Greater Noida tech hubs. Move between meetings across the city without worrying about parking or traffic. Available for booking today.`

const whyChoose = [
  'Coverage across Sector 62, Sector 18, Film City, and Greater Noida',
  'Professional drivers who know Noida well',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included',
  'GST-compliant invoicing for business bookings'
]

const pricing = `Noida corporate packages start from ₹2,999 for full-day service. Fare includes car, driver, and fuel. Tolls are extra. Monthly retainer discounts available.`

const cta = `Set up your Noida corporate travel. Call or WhatsApp for a quote.`

const relatedLinks = [
  { title: 'Airport to Noida', url: '/airport/to-noida' },
  { title: 'Corporate Gurgaon', url: '/corporate/gurgaon' },
  { title: 'Noida to Airport', url: '/airport/from-noida' },
  { title: 'Full-Day Hire', url: '/hire/south-delhi' }
]
</script>
