<template>
  <div>
    <Head>
      <Title>Guest Transportation Delhi NCR | Honda City with Driver</Title>
      <Meta name="description" content="Premium Honda City with professional driver for guest transportation in Delhi NCR. Airport pickup, city travel. Full-day packages from ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Guest Transportation Service – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Guest Transportation"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Hosting out-of-town guests or business visitors? Our Honda City with professional driver provides reliable transportation throughout their Delhi NCR stay. From airport pickup to city travel and meetings—ensure your guests travel in comfort. Available for booking today.`

const whyChoose = [
  'Airport pickup and city transfers',
  'Professional drivers',
  'Flexible scheduling for guest itineraries',
  'Multi-day packages for extended stays',
  'Transparent pricing—car, driver, and fuel included'
]

const pricing = `Guest transportation packages start from ₹2,999 per day. Fare includes car, driver, and fuel. Tolls, parking, and permits are extra. Multi-day discounts available.`

const cta = `Arrange guest transportation. Call or WhatsApp with arrival details.`

const relatedLinks = [
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Full-Day South Delhi', url: '/hire/south-delhi' },
  { title: 'Corporate Travel', url: '/corporate/gurgaon' },
  { title: 'Wedding Car Rental', url: '/events/wedding-car-rental' }
]
</script>
