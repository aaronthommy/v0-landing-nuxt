<template>
    <div class="flex flex-col min-h-screen">
      <AppHeader />
      <main class="flex-grow">
        <HeroSection
          title="Kontaktieren Sie uns"
          subtitle="Wir freuen uns, von Ihnen zu hören!"
          buttonLabel="E-Mail"
          backgroundImage="/img/contact.png"
        />
        <TestimonialsSection/>
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from "~/components/AppHeader.vue";
  import HeroSection from "~/components/HeroSection.vue";
  import FeaturesSection from "~/components/FeaturesSection.vue";
  import TestimonialsSection from "~/components/TestimonialsSection.vue";
  import PricingSection from "~/components/PricingSection.vue";
  import CallToAction from "~/components/CallToAction.vue";
  import AppFooter from "~/components/AppFooter.vue";
  </script>
  