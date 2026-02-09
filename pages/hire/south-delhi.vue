<template>
  <div>
    <Head>
      <Title>Full Day Car Hire South Delhi | Honda City with Driver</Title>
      <Meta name="description" content="Hire Honda City with professional driver for full day in South Delhi. GK, Defence Colony, Vasant Kunj coverage. 8-12 hour packages from ₹2,999." />
    </Head>
    
    <LandingPage
      h1="Full-Day Honda City Hire with Driver – South Delhi"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Full-Day Hire"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `South Delhi's sprawling neighborhoods require reliable transportation. Our full-day Honda City with professional driver covers Greater Kailash, Defence Colony, Hauz Khas, Saket, and Vasant Kunj. Whether you have multiple appointments or shopping trips, enjoy flexible mobility with a dedicated driver. Available for booking today.`

const whyChoose = [
  'Complete coverage of South Delhi—GK I, GK II, Nehru Place, Malviya Nagar',
  '8-hour and 12-hour packages with flexible start times',
  'Same driver for full duration',
  'Comfortable Honda City with AC',
  'Transparent pricing—car, driver, and fuel included'
]

const pricing = `Full-day packages start from ₹2,999 for 8 hours/80 km. Fare includes car, driver, and fuel. Extra hours and kilometers billed separately. Tolls and parking are extra.`

const cta = `Book your full-day vehicle. Call or WhatsApp with your schedule.`

const relatedLinks = [
  { title: 'Airport to South Delhi', url: '/airport/to-south-delhi' },
  { title: 'Full-Day Dwarka', url: '/hire/dwarka' },
  { title: 'Guest Transportation', url: '/hire/guest-transportation' },
  { title: 'Corporate Travel', url: '/corporate/gurgaon' }
]
</script>
