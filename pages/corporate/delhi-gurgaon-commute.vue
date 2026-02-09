<template>
  <div>
    <Head>
      <Title>Delhi to Gurgaon Daily Car Service | Honda City Driver</Title>
      <Meta name="description" content="Daily Honda City with professional driver for Delhi to Gurgaon office commute. Reliable service, monthly packages from ₹45,000." />
    </Head>
    
    <LandingPage
      h1="Delhi to Gurgaon Daily Commute – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹45,000/month"
      serviceBadge="Daily Commute"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `The daily Delhi to Gurgaon commute is demanding—traffic, tolls, and parking hassles. Our Honda City with professional driver service eliminates these frustrations. Start your day in comfort as an experienced driver navigates NH48 or Dwarka Expressway while you prepare for the day. Available for trial bookings.`

const whyChoose = [
  'Dedicated driver for your daily schedule',
  'Flexible pickup and drop timings',
  'Professional drivers who know the Delhi-Gurgaon corridor',
  'Same Honda City for your subscription period',
  'Monthly packages with significant savings'
]

const pricing = `Monthly commute packages start from ₹45,000 for 22-24 working days. Fare includes car, driver, and fuel. Tolls are extra. Weekly trials available.`

const cta = `Upgrade your daily commute. Call or WhatsApp to discuss your schedule.`

const relatedLinks = [
  { title: 'Corporate Gurgaon', url: '/corporate/gurgaon' },
  { title: 'Airport to Gurgaon', url: '/airport/to-gurgaon' },
  { title: 'Gurgaon to Airport', url: '/airport/from-gurgaon' },
  { title: 'Corporate Noida', url: '/corporate/noida' }
]
</script>
