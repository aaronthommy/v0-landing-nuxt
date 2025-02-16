<template>
    <section id="features" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose StreamLine?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <component :is="feature.icon" class="w-12 h-12 text-primary mb-4" />
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Zap, Users, Lock, Sparkles } from 'lucide-vue-next'
  
  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Accelerate your workflow with our intuitive interface' },
    { icon: Users, title: 'Team Collaboration', description: 'Seamlessly work together with your team in real-time' },
    { icon: Lock, title: 'Secure & Reliable', description: 'Your data is protected with enterprise-grade security' },
    { icon: Sparkles, title: 'AI-Powered Insights', description: 'Gain valuable insights with our advanced AI analytics' },
  ]
  </script>