<template>
  <div>
    <Head>
      <Title>Delhi Airport Car Rental with Driver | Honda City ₹2,999</Title>
      <Meta name="description" content="Premium Honda City with professional driver for Delhi IGI Airport. Terminal 1, 2, 3 pickup & drop. 24/7 service. Airport transfer starting ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Delhi Airport Car Rental with Professional Driver – IGI Terminal 1, 2 & 3"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Airport Transfer"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Indira Gandhi International Airport handles thousands of travelers daily. Our Honda City with professional driver service provides reliable connectivity between all three terminals and every corner of Delhi NCR. Whether arriving on a domestic flight or landing from overseas, we ensure timely pickup and a comfortable ride to your destination. Available for booking today.`

const whyChoose = [
  'All terminals covered—T1 domestic, T3 international, and T2 arrivals',
  'Professional, experienced drivers who know Delhi NCR routes well',
  'Comfortable Honda City sedan with AC and ample luggage space',
  'Transparent pricing—car, driver, and fuel included in quoted fare',
  '24/7 availability including early morning and late-night flights'
]

const pricing = `Airport transfers start from ₹2,999 one-way. The fare includes car, driver, and fuel. Tolls and parking charges are extra and paid directly as applicable. Contact us for exact fare to your destination.`

const cta = `Book your airport transfer now. Call or WhatsApp with your flight details and destination for a quick quote.`

const relatedLinks = [
  { title: 'Airport to Gurgaon', url: '/airport/to-gurgaon' },
  { title: 'Airport to Noida', url: '/airport/to-noida' },
  { title: 'Airport to South Delhi', url: '/airport/to-south-delhi' },
  { title: 'Corporate Travel', url: '/corporate/gurgaon' }
]
</script>
