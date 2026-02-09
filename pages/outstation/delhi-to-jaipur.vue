<template>
  <div>
    <Head>
      <Title>Delhi to Jaipur Honda City with Driver | Premium Service</Title>
      <Meta name="description" content="Book Honda City with professional driver for Delhi to Jaipur trip. One-way & round-trip from ₹5,999. Comfortable highway travel." />
    </Head>
    
    <LandingPage
      h1="Delhi to Jaipur Honda City Rental with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹5,999"
      serviceBadge="Outstation Trip"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `The 280-kilometer drive from Delhi to Jaipur deserves a comfortable journey. Our Honda City with professional driver transforms highway travel into a relaxed experience. Whether heading for business or leisure, ride in a well-maintained sedan with an experienced driver. Available for booking today.`

const whyChoose = [
  'Experienced drivers familiar with Delhi-Jaipur route',
  'Multiple stops allowed en route',
  'One-way drops and round-trip packages available',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included'
]

const pricing = `Delhi to Jaipur one-way starts from ₹5,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly. Overnight trips may include driver allowance.`

const cta = `Plan your Jaipur trip. Call or WhatsApp with your travel dates.`

const relatedLinks = [
  { title: 'Delhi to Agra', url: '/outstation/delhi-to-agra' },
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Full-Day Hire', url: '/hire/south-delhi' },
  { title: 'Guest Transportation', url: '/hire/guest-transportation' }
]
</script>
