<template>
  <div>
    <Head>
      <Title>Delhi to Agra Honda City with Driver | Taj Mahal Trip</Title>
      <Meta name="description" content="Book Honda City with professional driver for Delhi to Agra trip. Yamuna Expressway, same-day return available. Starting ₹4,999." />
    </Head>
    
    <LandingPage
      h1="Delhi to Agra Honda City Rental with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹4,999"
      serviceBadge="Taj Mahal Trip"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `The iconic Taj Mahal deserves a comfortable journey. Our Honda City with professional driver takes you from Delhi to Agra via the Yamuna Expressway in under 3 hours. Whether planning a same-day visit or overnight stay, travel in comfort with an experienced driver. Available for booking today.`

const whyChoose = [
  'Direct Yamuna Expressway route',
  'Same-day return trips available',
  'Overnight packages with driver allowance',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included'
]

const pricing = `Delhi to Agra day trip starts from ₹4,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly. Overnight trips may include additional driver allowance.`

const cta = `Book your Agra trip. Call or WhatsApp with your preferred date.`

const relatedLinks = [
  { title: 'Delhi to Jaipur', url: '/outstation/delhi-to-jaipur' },
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Full-Day Hire', url: '/hire/south-delhi' },
  { title: 'Guest Transportation', url: '/hire/guest-transportation' }
]
</script>
