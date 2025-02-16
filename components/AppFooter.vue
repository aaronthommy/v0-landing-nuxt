<template>
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">MyNuxtSite</h3>
            <p class="text-gray-400">Simplify your workflow and boost productivity with our innovative SaaS platform.</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="#features" class="text-gray-400 hover:text-white">Features</NuxtLink></li>
              <li><NuxtLink to="#testimonials" class="text-gray-400 hover:text-white">Testimonials</NuxtLink></li>
              <li><NuxtLink to="#pricing" class="text-gray-400 hover:text-white">Pricing</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Support</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="#" class="text-gray-400 hover:text-white">FAQ</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-400 hover:text-white">Contact Us</NuxtLink></li>
              <li><NuxtLink to="#" class="text-gray-400 hover:text-white">Privacy Policy</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <NuxtLink to="#" class="text-gray-400 hover:text-white"><Facebook class="w-6 h-6" /></NuxtLink>
              <NuxtLink to="#" class="text-gray-400 hover:text-white"><Twitter class="w-6 h-6" /></NuxtLink>
              <NuxtLink to="#" class="text-gray-400 hover:text-white"><Instagram class="w-6 h-6" /></NuxtLink>
              <NuxtLink to="#" class="text-gray-400 hover:text-white"><Linkedin class="w-6 h-6" /></NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          © {{ new Date().getFullYear() }} MyNuxtSite. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next'
  </script>