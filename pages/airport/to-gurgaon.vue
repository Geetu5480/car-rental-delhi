<template>
  <div>
    <Head>
      <Title>Delhi Airport to Gurgaon Car Service | Honda City Driver</Title>
      <Meta name="description" content="Book Honda City with professional driver from Delhi Airport to Gurgaon. Cyber City, DLF, Golf Course Road drop. Starting ₹2,999. Book today." />
    </Head>
    
    <LandingPage
      h1="Delhi Airport to Gurgaon Transfer – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Airport to Gurgaon"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Landing at Delhi Airport and heading to Gurgaon's business district? Our Honda City with professional driver delivers you directly from IGI Terminal to Cyber City, DLF phases, Golf Course Road, or any Gurgaon location. Experienced drivers know the best routes—NH48 or Dwarka Expressway—to get you there comfortably. Available for booking today.`

const whyChoose = [
  'Direct drop to any Gurgaon location—Cyber Hub, MG Road, Sohna Road, Udyog Vihar',
  'Professional drivers familiar with Gurgaon roads and traffic patterns',
  'Comfortable Honda City with AC and space for luggage',
  'Transparent pricing—car, driver, and fuel included',
  'Available round the clock for all flight schedules'
]

const pricing = `Airport to Gurgaon transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly. Contact us for exact fare to your drop location.`

const cta = `Book your Gurgaon transfer. Call or WhatsApp with flight details and drop location for a quote.`

const relatedLinks = [
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Gurgaon to Airport', url: '/airport/from-gurgaon' },
  { title: 'Corporate Gurgaon', url: '/corporate/gurgaon' },
  { title: 'Daily Commute', url: '/corporate/delhi-gurgaon-commute' }
]
</script>
