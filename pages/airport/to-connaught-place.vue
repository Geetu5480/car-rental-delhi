<template>
  <div>
    <Head>
      <Title>Delhi Airport to Connaught Place | Honda City Driver</Title>
      <Meta name="description" content="Book Honda City with professional driver from Delhi Airport to Connaught Place. Central Delhi hotels and offices. Starting ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Delhi Airport to Connaught Place Transfer – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Airport to Central Delhi"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Heading to Central Delhi from the airport? Our Honda City with professional driver connects IGI Terminal to Connaught Place, Barakhamba Road, Janpath, and surrounding areas in 45-60 minutes. Ideal for business travelers staying at CP hotels or attending meetings. Available for booking today.`

const whyChoose = [
  'Direct drop to CP inner and outer circles, ITO, and Mandi House area',
  'Professional drivers who know Central Delhi roads well',
  'Comfortable Honda City with AC and luggage space',
  'Transparent pricing—car, driver, and fuel included',
  '24/7 availability'
]

const pricing = `Airport to Central Delhi transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly.`

const cta = `Book your Central Delhi transfer. Call or WhatsApp with flight and drop location.`

const relatedLinks = [
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Corporate CP', url: '/corporate/connaught-place' },
  { title: 'Airport to Gurgaon', url: '/airport/to-gurgaon' },
  { title: 'Corporate Aerocity', url: '/corporate/aerocity' }
]
</script>
