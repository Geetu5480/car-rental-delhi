<template>
  <div>
    <Head>
      <Title>Aerocity Corporate Car Rental | Honda City with Driver</Title>
      <Meta name="description" content="Premium Honda City with professional driver for Aerocity business travel. WorldMark, JW Marriott, Pullman hotel area. Starting ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Honda City Corporate Car Service with Driver – Aerocity Delhi"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Corporate Aerocity"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Aerocity is Delhi's premier business district, hosting global corporations and luxury hotels minutes from IGI Airport. Our Honda City with professional driver is ideal for executives based in Aerocity hotels or visiting for conferences. Move seamlessly between WorldMark towers, hotels, and the airport terminal. Available for booking today.`

const whyChoose = [
  'Familiar with Aerocity area and hotel locations',
  'Quick airport terminal connectivity',
  'Hourly and full-day options available',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included'
]

const pricing = `Aerocity corporate packages start from ₹2,999. Fare includes car, driver, and fuel. Hourly rentals available for quick transfers.`

const cta = `Arrange your Aerocity transportation. Call or WhatsApp with your requirements.`

const relatedLinks = [
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Corporate Gurgaon', url: '/corporate/gurgaon' },
  { title: 'Corporate CP', url: '/corporate/connaught-place' },
  { title: 'Airport to Gurgaon', url: '/airport/to-gurgaon' }
]
</script>
