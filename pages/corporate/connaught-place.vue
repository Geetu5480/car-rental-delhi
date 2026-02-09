<template>
  <div>
    <Head>
      <Title>Corporate Car Rental Connaught Place | Honda City Driver</Title>
      <Meta name="description" content="Professional Honda City with driver for Central Delhi corporate travel. CP, Barakhamba Road, Janpath coverage. Daily packages from ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Honda City Corporate Car Service with Driver – Connaught Place & Central Delhi"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Corporate Central Delhi"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Central Delhi's business corridors demand reliable transportation. Our Honda City with professional driver covers Connaught Place, Barakhamba Road, Kasturba Gandhi Marg, and ITO. Navigate between corporate offices and meetings with a dedicated driver who knows Central Delhi well. Available for booking today.`

const whyChoose = [
  'Professional drivers who know Central Delhi roads',
  'Coverage across CP inner/outer circles, Janpath, Mandi House',
  'Waiting service during meetings—no rebooking hassle',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included'
]

const pricing = `Central Delhi corporate packages start from ₹2,999 for 8 hours/80 km. Fare includes car, driver, and fuel. Tolls and parking are extra. Monthly retainers available.`

const cta = `Book your Central Delhi travel. Call or WhatsApp with your requirements.`

const relatedLinks = [
  { title: 'Airport to CP', url: '/airport/to-connaught-place' },
  { title: 'Corporate Gurgaon', url: '/corporate/gurgaon' },
  { title: 'Corporate Aerocity', url: '/corporate/aerocity' },
  { title: 'Delhi Airport General', url: '/airport/delhi' }
]
</script>
