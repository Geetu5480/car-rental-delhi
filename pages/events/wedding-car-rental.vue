<template>
  <div>
    <Head>
      <Title>Wedding Car Rental Delhi NCR | Honda City with Driver</Title>
      <Meta name="description" content="Premium Honda City with professional driver for weddings in Delhi NCR. Multi-day packages from ₹2,999/day. Book in advance for peak season." />
    </Head>
    
    <LandingPage
      h1="Wedding Car Rental with Professional Driver – Delhi NCR"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999/day"
      serviceBadge="Wedding & Events"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Special occasions deserve reliable transportation. Our Honda City with professional driver provides comfortable, dependable vehicles for weddings, engagements, and family events across Delhi NCR. From venue-to-venue transfers to guest transportation, our drivers ensure timely service. Available for advance bookings.`

const whyChoose = [
  'Reliable venue-to-venue transportation',
  'Professional drivers',
  'Multi-day packages for wedding functions',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included'
]

const pricing = `Wedding packages start from ₹2,999 per day. Fare includes car, driver, and fuel. Tolls, parking, and permits are extra. Advance booking recommended for peak season (November–February).`

const cta = `Plan wedding transportation. Call or WhatsApp with event dates and venue details.`

const relatedLinks = [
  { title: 'Guest Transportation', url: '/hire/guest-transportation' },
  { title: 'Full-Day Hire', url: '/hire/south-delhi' },
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Corporate Travel', url: '/corporate/gurgaon' }
]
</script>
