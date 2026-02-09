<template>
  <div>
    <Head>
      <Title>Full Day Car Rental Dwarka | Honda City with Driver</Title>
      <Meta name="description" content="Hire Honda City with professional driver for full day in Dwarka. Sectors 9-23, Dwarka Expressway. 8-hour packages from ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Full-Day Honda City Hire with Driver – Dwarka & West Delhi"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Full-Day Dwarka"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Dwarka's expanding sectors and proximity to the airport make it a hub for activity. Our Honda City with professional driver covers all Dwarka sectors, Palam area, and connects to Gurgaon via Dwarka Expressway. Manage appointments across Dwarka with complete flexibility. Available for booking today.`

const whyChoose = [
  'Complete Dwarka coverage—Sector 9 to Sector 23, Palam Vihar',
  'Easy airport connectivity',
  '8-hour and 12-hour packages available',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included'
]

const pricing = `Dwarka full-day hire starts from ₹2,999 for 8 hours/80 km. Fare includes car, driver, and fuel. Extra hours and kilometers billed separately. Tolls are extra.`

const cta = `Book your Dwarka day rental. Call or WhatsApp with your requirements.`

const relatedLinks = [
  { title: 'Airport to Dwarka', url: '/airport/to-dwarka' },
  { title: 'Full-Day South Delhi', url: '/hire/south-delhi' },
  { title: 'Guest Transportation', url: '/hire/guest-transportation' },
  { title: 'Delhi Airport General', url: '/airport/delhi' }
]
</script>
