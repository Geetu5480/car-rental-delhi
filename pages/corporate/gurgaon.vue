<template>
  <div>
    <Head>
      <Title>Corporate Car Rental Gurgaon | Honda City with Driver</Title>
      <Meta name="description" content="Premium Honda City with professional driver for Gurgaon corporate travel. Cyber City, DLF, Golf Course Road. Daily and monthly packages from ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Honda City Corporate Car Service with Driver – Gurgaon"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Corporate Gurgaon"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Gurgaon's business corridors demand reliable transportation. Our Honda City with professional driver service is designed for professionals navigating Cyber City, DLF phases, Golf Course Road, and Udyog Vihar. Skip the stress of parking and traffic. Arrive at every meeting on time with a dedicated driver. Available for booking today.`

const whyChoose = [
  'Professional drivers familiar with Gurgaon business hubs',
  'Flexible hourly and full-day packages for meetings',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included',
  'Monthly packages available with GST invoices'
]

const pricing = `Corporate packages start from ₹2,999 for 8 hours/80 km. Fare includes car, driver, and fuel. Tolls and parking are extra. Monthly retainers available—contact for customized packages.`

const cta = `Set up your corporate travel. Call or WhatsApp to discuss your requirements.`

const relatedLinks = [
  { title: 'Airport to Gurgaon', url: '/airport/to-gurgaon' },
  { title: 'Daily Commute', url: '/corporate/delhi-gurgaon-commute' },
  { title: 'Corporate Noida', url: '/corporate/noida' },
  { title: 'Corporate Aerocity', url: '/corporate/aerocity' }
]
</script>
