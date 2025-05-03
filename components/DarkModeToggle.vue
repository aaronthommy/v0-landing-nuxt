<template>
    <button 
      @click="toggleTheme" 
      class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none transition-colors p-1"
      aria-label="Darkmode umschalten"
    >
      <!-- Sonne Icon (für den Dark Mode - also "Wechsle zu Light") -->
      <svg 
        v-if="isDark" 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      
      <!-- Mond Icon (für den Light Mode - also "Wechsle zu Dark") -->
      <svg 
        v-else 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useThemeStore } from '~/stores/themeStore';
  
  const themeStore = useThemeStore();
  
  // Computed property für isDark
  const isDark = computed(() => themeStore.isDark);
  
  // Theme umschalten
  const toggleTheme = () => {
    themeStore.toggleDarkMode();
  };
  </script>