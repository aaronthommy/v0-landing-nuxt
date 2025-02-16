<template>
    <section id="testimonials" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-50 p-6 rounded-lg shadow-md">
            <p class="text-gray-600 mb-4">"{{ testimonial.quote }}"</p>
            <div class="font-semibold">{{ testimonial.name }}</div>
            <div class="text-sm text-gray-500">{{ testimonial.role }}</div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const testimonials = [
    { name: 'John Doe', role: 'CEO, TechCorp', quote: 'StreamLine has revolutionized how we manage our projects. It\'s a game-changer!' },
    { name: 'Jane Smith', role: 'CTO, InnovateCo', quote: 'The productivity boost we\'ve seen with StreamLine is incredible. Highly recommended!' },
    { name: 'Alex Johnson', role: 'Product Manager, FutureTech', quote: 'StreamLine\'s intuitive interface and powerful features have made our team more efficient than ever.' },
  ]
  </script>