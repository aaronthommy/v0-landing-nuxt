<script setup>
import { ref, computed, onMounted } from 'vue';
import { useLanguageStore } from '~/stores/languageStore';
import { useNuxtApp } from '#app';

const nuxtApp = useNuxtApp();
const languageStore = useLanguageStore();
const isOpen = ref(false);

// Verfügbare Sprachen mit Flaggen
const availableLocales = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

// Aktuelle Sprache aus dem Store
const currentLocale = computed(() => languageStore.currentLocale);

// Toggle Dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Dropdown schließen
const closeDropdown = () => {
  isOpen.value = false;
};

// Sprachumschaltung
const switchLanguage = (localeCode) => {
  languageStore.setLocale(localeCode);
  closeDropdown();
};

// Für Übersetzungen
const $t = (key) => {
  if (!nuxtApp.$i18n) return key;
  return nuxtApp.$i18n.t(key);
};

onMounted(() => {
  // Store initialisieren
  languageStore.initLocale();
  
  // Click-Outside-Event
  if (process.client) {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('[aria-haspopup="true"]') && isOpen.value) {
        closeDropdown();
      }
    });
  }
});
</script>

<template>
  <div class="relative group">
    <!-- Rest des Templates bleibt gleich -->
    <button 
      @click="toggleDropdown" 
      class="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none transition-colors"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <span class="hidden sm:inline-block mr-1">{{ $t(`language.${currentLocale}`) }}</span>
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
    </button>
    
    <!-- Dropdown-Menü für Sprachauswahl -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-lg z-50"
    >
      <div v-for="locale in availableLocales" :key="locale.code" class="block">
        <button
          @click="switchLanguage(locale.code)"
          class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
          :class="currentLocale === locale.code ? 'text-blue-500 font-medium' : 'text-gray-700'"
        >
          <span class="mr-2">{{ locale.flag }}</span>
          <span>{{ locale.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>