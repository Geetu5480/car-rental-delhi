<template>
  <div>
    <Head>
      <Title>Gurgaon to Delhi Airport Transfer | Honda City ₹2,999</Title>
      <Meta name="description" content="Book Honda City with professional driver from Gurgaon to Delhi Airport. Cyber City, DLF, Golf Course Road pickup. Starting ₹2,999. 24/7 service." />
    </Head>
    
    <LandingPage
      h1="Gurgaon to Delhi Airport Transfer – Honda City with Professional Driver"
      :intro="intro"
      :whyChoose="whyChoose"
      :pricing="pricing"
      :cta="cta"
      startingPrice="₹2,999"
      serviceBadge="Gurgaon to Airport"
      :relatedLinks="relatedLinks"
    />
  </div>
</template>

<script setup lang="ts">
const intro = `Catching a flight from Delhi Airport? Our Honda City with professional driver picks you up from any Gurgaon location—Cyber City offices, DLF residences, Golf Course Road, or Sohna Road—and delivers you to Terminal 1, 2, or 3 on time. Experienced drivers know the best routes to get you there comfortably. Available for booking today.`

const whyChoose = [
  'Pickup from any Gurgaon location—MG Road, Sector 29, Udyog Vihar, Manesar',
  'Professional drivers who know the airport routes well',
  'Comfortable Honda City with AC and space for luggage',
  'Transparent pricing—car, driver, and fuel included',
  'Early morning and late-night service available'
]

const pricing = `Gurgaon to Airport one-way transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly.`

const cta = `Book your airport drop. Call or WhatsApp with pickup address and flight time.`

const relatedLinks = [
  { title: 'Airport to Gurgaon', url: '/airport/to-gurgaon' },
  { title: 'Delhi Airport General', url: '/airport/delhi' },
  { title: 'Corporate Gurgaon', url: '/corporate/gurgaon' },
  { title: 'Daily Commute', url: '/corporate/delhi-gurgaon-commute' }
]
</script>
