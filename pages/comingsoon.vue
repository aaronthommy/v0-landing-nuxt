<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-16">
    <div class="text-center max-w-2xl">
      <!-- Logo bzw. Titel -->
      <h1 class="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        aaron<span class="text-blue-500 dark:text-blue-400">thommy</span>
      </h1>
      
      <!-- Coming Soon Text -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Coming Soon
      </h2>
      
      <!-- Beschreibungstext mit Community-Info -->
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Diese Seite befindet sich noch in Entwicklung. Schau bald wieder vorbei für neue Inhalte.
      </p>

      <!-- Community Highlight Box -->
      <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 mb-10 shadow-sm">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Community <span class="text-blue-500 dark:text-blue-400">jetzt verfügbar!</span>
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Während wir an der vollständigen Website arbeiten, kannst du bereits Teil meiner wachsenden Community werden. Tritt der Skool Community bei für exklusive Inhalte, direkten Austausch und musikalische Inspirationen!
        </p>
        <a 
          href="https://www.skool.com/aaronthommy-music-circle-8546" 
          target="_blank" 
          class="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          Zur Skool Community
        </a>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Aktuell noch kostenlos verfügbar!
        </p>
      </div>
      
      <!-- Countdown (optional) -->
      <div v-if="showCountdown" class="flex flex-wrap justify-center gap-4 mb-10">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-20">
          <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ countdown.days }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Tage</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-20">
          <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ countdown.hours }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Stunden</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-20">
          <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ countdown.minutes }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Minuten</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-20">
          <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ countdown.seconds }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Sekunden</div>
        </div>
      </div>
      
      <!-- Call to Action / Zurück zur Homepage -->
      <div class="space-y-4">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück zur Startseite
        </NuxtLink>
        
        <!-- Social Media Links mit Beschreibung -->
        <div class="mt-10">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Folge mir auf Social Media</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Bleib auf dem Laufenden mit täglichen Updates, Clips und Performances
          </p>
          <div class="flex justify-center space-x-5">
            <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="flex flex-col items-center">
              <div class="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-600 dark:text-gray-300">TikTok</span>
            </a>
            <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="flex flex-col items-center">
              <div class="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-600 dark:text-gray-300">Instagram</span>
            </a>
            <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="flex flex-col items-center">
              <div class="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-600 dark:text-gray-300">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useThemeStore } from '~/stores/themeStore';

// Theme Store für Dark Mode
const themeStore = useThemeStore();

// Countdown-Konfiguration
const showCountdown = ref(false); // auf true setzen, um den Countdown anzuzeigen
const targetDate = new Date('2025-05-31T00:00:00'); // Zieldatum für den Countdown
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

// Countdown-Timer-Intervall
let countdownTimer = null;

// Countdown berechnen
const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;
  
  if (diff <= 0) {
    // Zieldatum erreicht
    countdown.value = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    clearInterval(countdownTimer);
    return;
  }
  
  // Berechne Tage, Stunden, Minuten und Sekunden
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  countdown.value = {
    days,
    hours,
    minutes,
    seconds
  };
};

onMounted(() => {
  // Dark Mode Einstellungen initialisieren
  themeStore.initTheme();
  
  // Countdown starten, wenn aktiviert
  if (showCountdown.value) {
    updateCountdown(); // Initiale Berechnung
    countdownTimer = setInterval(updateCountdown, 1000); // Aktualisiere jede Sekunde
  }
});

onBeforeUnmount(() => {
  // Timer aufräumen
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }
});
</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>