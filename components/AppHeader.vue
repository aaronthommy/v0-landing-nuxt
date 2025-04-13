<template>
  <header class="flex items-center justify-between p-4 bg-white shadow relative">
    <!-- Logo / Branding -->
    <div class="logo">
      <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
        aaronthommy
      </NuxtLink>
    </div>
    
    <!-- Desktop-Navigation (ab md sichtbar) -->
    <nav class="hidden md:flex">
      <ul class="flex space-x-6">
        <li>
          <NuxtLink to="/" class="text-gray-700 hover:text-blue-500">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-gray-700 hover:text-blue-500">
            Über mich
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/offers" class="text-gray-700 hover:text-blue-500">
            Angebote
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/social" class="text-gray-700 hover:text-blue-500">
            Social Media
          </NuxtLink>
        </li>
      </ul>
    </nav>
    
    <!-- Aktionen / Platzhalter für Sprache und Darkmode sowie Hamburger-Button -->
    <div class="flex items-center space-x-4">
      <!-- Platzhalter für Sprachumschalter -->
      <button class="text-gray-700 hover:text-blue-500 focus:outline-none">
        Lang
      </button>
      <!-- Platzhalter für Darkmode Toggle -->
      <button class="text-gray-700 hover:text-blue-500 focus:outline-none">
        Dark
      </button>
      <!-- Hamburger-Menü, nur auf mobilen Geräten (unter md) -->
      <button class="md:hidden text-2xl focus:outline-none" @click="toggleMobileMenu">
        <span v-if="isMobileMenuOpen">✕</span>
        <span v-else>☰</span>
      </button>
    </div>
    
    <!-- Mobile Navigation mit Transition -->
    <transition name="slide-fade">
      <nav v-if="isMobileMenuOpen" class="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
        <ul class="flex flex-col space-y-4 p-4">
          <li>
            <NuxtLink to="/" @click="toggleMobileMenu" class="text-gray-700 hover:text-blue-500">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="toggleMobileMenu" class="text-gray-700 hover:text-blue-500">
              Über mich
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/offers" @click="toggleMobileMenu" class="text-gray-700 hover:text-blue-500">
              Angebote
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/social" @click="toggleMobileMenu" class="text-gray-700 hover:text-blue-500">
              Social Media
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Transition-Klassen für Slide-Fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
