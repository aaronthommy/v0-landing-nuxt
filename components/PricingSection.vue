<template>
    <section id="pricing" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(plan, index) in plans" :key="index" class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-4">{{ plan.name }}</h3>
            <div class="text-4xl font-bold mb-6">{{ plan.price }}<span class="text-sm font-normal">/month</span></div>
            <ul class="mb-8">
              <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="flex items-center mb-2">
                <Check class="w-5 h-5 text-primary mr-2" />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <button class="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Check } from 'lucide-vue-next'
  
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      features: ['5 team members', '10 projects', 'Basic analytics', 'Email support'],
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['Unlimited team members', 'Unlimited projects', 'Advanced analytics', 'Priority support'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom solutions', 'Dedicated account manager', 'On-premise deployment', '24/7 phone support'],
    },
  ]
  </script>