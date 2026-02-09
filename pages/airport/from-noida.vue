<template>
  <div>
    <Head>
      <Title>Noida to Delhi Airport Car Service | Honda City ₹2,999</Title>
      <Meta name="description" content="Premium Honda City with professional driver from Noida to IGI Airport. Sector 62, Film City, Greater Noida pickup. Starting ₹2,999. Book today." />
    </Head>
    
    <LandingPage
      h1="Noida to Delhi Airport Transfer – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Noida to Airport"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Heading to the airport from Noida? Our Honda City with professional driver picks you up from any sector—Film City, Sector 62, Noida Expressway, or Greater Noida—and ensures you reach IGI Terminal on time. Experienced drivers know the best routes via DND or Ring Road. Available for booking today.`

const whyChoose = [
  'Pickup from all Noida locations—residential sectors, tech parks, and Greater Noida',
  'Professional drivers who know the routes well',
  'Comfortable Honda City with AC and luggage space',
  'Transparent pricing—car, driver, and fuel included',
  '24/7 service for all flight schedules'
]

const pricing = `Noida to Airport transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly. Greater Noida pickup at adjusted rates.`

const cta = `Book your airport transfer. Call or WhatsApp with pickup sector and flight time.`

const relatedLinks = [
  { title: 'Airport to Noida', url: '/airport/to-noida' },
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Corporate Noida', url: '/corporate/noida' },
  { title: 'Full-Day Hire', url: '/hire/south-delhi' }
]
</script>
