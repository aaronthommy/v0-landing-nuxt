<template>
  <header
    class="
      absolute top-0 left-0 w-full z-50
      flex items-center
      h-16
      px-4
      transition-colors
    "
    :class="darkMode ? 'bg-transparent text-white' : 'bg-transparent text-black'"
  >
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo/Brand -->
      <NuxtLink to="/" class="text-xl font-bold">
        MyPortfolio
      </NuxtLink>

      <!-- Desktop Navigation (hidden auf mobile) -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/blogs">Blogs</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/courses">Courses</NuxtLink>
        <NuxtLink to="/software">Software</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>

        <!-- Sprachumschalter (Flaggen als Platzhalter) -->
        <div class="flex items-center space-x-2">
          <button @click="language = 'de'"><img src="/icons/flag-de.png" alt="Deutsch" class="w-6 h-6" /></button>
          <button @click="language = 'en'"><img src="/icons/flag-en.png" alt="English" class="w-6 h-6" /></button>
        </div>

        <!-- Dark/Light Switch -->
        <button
          class="border px-2 py-1 rounded"
          @click="toggleDarkMode"
        >
          {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </nav>

      <!-- Hamburger Icon (nur sichtbar auf Mobile) -->
      <button
        class="md:hidden"
        @click="toggleMobileMenu"
      >
        <!-- Einfacher "Hamburger" (3 Balken) -->
        <div class="w-6 h-0.5 bg-current mb-1"></div>
        <div class="w-6 h-0.5 bg-current mb-1"></div>
        <div class="w-6 h-0.5 bg-current"></div>
      </button>
    </div>

    <!-- Mobile Navigation Overlay -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white space-y-6 z-40"
      >
        <NuxtLink to="/blogs" @click="closeMobileMenu">Blogs</NuxtLink>
        <NuxtLink to="/projects" @click="closeMobileMenu">Projects</NuxtLink>
        <NuxtLink to="/courses" @click="closeMobileMenu">Courses</NuxtLink>
        <NuxtLink to="/software" @click="closeMobileMenu">Software</NuxtLink>
        <NuxtLink to="/about" @click="closeMobileMenu">About</NuxtLink>

        <!-- Sprachumschalter -->
        <div class="flex space-x-4">
          <button @click="language = 'de'">
            <img src="/icons/flag-de.png" alt="Deutsch" class="w-6 h-6" />
          </button>
          <button @click="language = 'en'">
            <img src="/icons/flag-en.png" alt="English" class="w-6 h-6" />
          </button>
        </div>

        <!-- Dark/Light Switch -->
        <button
          class="border px-4 py-2 rounded"
          @click="toggleDarkMode"
        >
          {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NuxtLink } from '#components'

// Local State (DEMO): darkMode, language, mobileMenu
const darkMode = ref(false)
const language = ref('en')
const mobileMenuOpen = ref(false)

// Umschalten Dark/Light
function toggleDarkMode() {
  darkMode.value = !darkMode.value
}

// Umschalten Mobile-Menü
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
/* Beispiel einer einfachen Fade-Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
