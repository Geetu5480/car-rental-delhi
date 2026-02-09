<template>
  <div>
    <Head>
      <Title>Delhi Airport to Noida Car Service | Honda City ₹2,999</Title>
      <Meta name="description" content="Premium Honda City with professional driver from IGI Airport to Noida. Sector 62, Film City, Greater Noida drop. Starting ₹2,999. Book today." />
    </Head>
    
    <LandingPage
      h1="Delhi Airport to Noida Transfer – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Airport to Noida"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Traveling from Delhi Airport to Noida's tech corridors? Our Honda City with professional driver connects IGI Terminal directly to Sector 62, Film City, Noida Expressway offices, and Greater Noida. Drivers know the best routes via DND Flyway or Ring Road to get you there comfortably. Available for booking today.`

const whyChoose = [
  'Coverage across all Noida sectors and Greater Noida',
  'Professional drivers who know Noida roads and routes well',
  'Comfortable Honda City with AC and luggage space',
  'Transparent pricing—car, driver, and fuel included',
  '24/7 service for all flight schedules'
]

const pricing = `Airport to Noida transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly. Greater Noida drops available at adjusted rates.`

const cta = `Book your Noida transfer. Call or WhatsApp with your flight and sector details for a quote.`

const relatedLinks = [
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Noida to Airport', url: '/airport/from-noida' },
  { title: 'Corporate Noida', url: '/corporate/noida' },
  { title: 'Full-Day Hire', url: '/hire/south-delhi' }
]
</script>
