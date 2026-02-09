<template>
  <div>
    <Head>
      <Title>Delhi Airport to Dwarka Car Service | Honda City Driver</Title>
      <Meta name="description" content="Honda City with professional driver from IGI Airport to Dwarka. Sectors 9-23, Palam, Dwarka Expressway. Quick transfer from ₹1,999." />
    </Head>
    
    <LandingPage
      h1="Delhi Airport to Dwarka Transfer – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹1,999"
      serviceBadge="Airport to Dwarka"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Dwarka is the closest major residential hub to Delhi Airport—just 10-15 minutes away. Our Honda City with professional driver provides quick, comfortable transfers from IGI Terminal to all Dwarka sectors. Whether you live in Sector 9, Sector 23, or along Dwarka Expressway, skip the taxi queue and ride home in comfort. Available for booking today.`

const whyChoose = [
  'Quick airport connectivity—Dwarka is under 15 minutes from IGI Terminal',
  'All sectors covered—Sector 9 to Sector 23, Palam Vihar, Mahavir Enclave',
  'Professional drivers familiar with Dwarka roads',
  'Comfortable Honda City with AC and luggage space',
  'Available round the clock'
]

const pricing = `Airport to Dwarka transfer starts from ₹1,999 given the short distance. Fare includes car, driver, and fuel. Tolls are extra if applicable.`

const cta = `Book your Dwarka transfer. Call or WhatsApp with your flight and sector.`

const relatedLinks = [
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Full-Day Dwarka', url: '/hire/dwarka' },
  { title: 'Airport to Gurgaon', url: '/airport/to-gurgaon' },
  { title: 'Corporate Travel', url: '/corporate/gurgaon' }
]
</script>
