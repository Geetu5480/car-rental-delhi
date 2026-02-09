<template>
  <div>
    <Head>
      <Title>Delhi Airport to South Delhi Car Service | Honda City</Title>
      <Meta name="description" content="Honda City with professional driver from IGI Airport to South Delhi. GK, Defence Colony, Vasant Kunj, Saket drop. Starting ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Delhi Airport to South Delhi Transfer – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Airport to South Delhi"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `South Delhi's premium neighborhoods are just 30-45 minutes from IGI Airport. Our Honda City with professional driver provides direct transfers to Greater Kailash, Defence Colony, Hauz Khas, Saket, Vasant Kunj, and surrounding areas. Travel in comfort with an experienced driver who knows the routes well. Available for booking today.`

const whyChoose = [
  'Direct service to all South Delhi colonies—GK I, GK II, Nehru Place, Malviya Nagar',
  'Professional drivers familiar with South Delhi roads',
  'Comfortable Honda City with AC and luggage space',
  'Transparent pricing—car, driver, and fuel included',
  'Available round the clock'
]

const pricing = `Airport to South Delhi transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls and parking charges are extra and paid directly.`

const cta = `Book your South Delhi transfer. Call or WhatsApp with flight and destination details.`

const relatedLinks = [
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Full-Day South Delhi', url: '/hire/south-delhi' },
  { title: 'Airport to Gurgaon', url: '/airport/to-gurgaon' },
  { title: 'Corporate Travel', url: '/corporate/gurgaon' }
]
</script>
