<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Community
          </h1>
          <div class="h-1 w-20 bg-blue-500 dark:bg-blue-400 rounded"></div>
        </div>
  
        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Patreon Community Card -->
          <BaseBox 
            size="M" 
            title="Patreon Community" 
            text="Werde Mitglied auf Patreon und erhalte Zugang zu exklusiven Inhalten, Tabs, Backing-Tracks und mehr."
            link="https://www.patreon.com/aaronthommy"
            linkText="Auf Patreon unterstützen"
            bgColor="bg-orange-50 dark:bg-orange-900/30"
          >
            <div class="absolute top-6 right-6 opacity-20 dark:opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z" fill="#F96854" />
              </svg>
            </div>
          </BaseBox>
  
          <!-- Skool Community Card -->
          <BaseBox 
            size="M" 
            title="Skool Community" 
            text="Werde Teil der Skool Community für Lerninhalte, Live-Sessions und direkten Austausch mit mir und anderen Musikern."
            link="https://skool.com/aaronthommy"
            linkText="Zur Skool Community"
            bgColor="bg-blue-50 dark:bg-blue-900/30"
          >
            <div class="absolute top-6 right-6 opacity-20 dark:opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M13.5,12c0,0.83-0.67,1.5-1.5,1.5 s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5S13.5,11.17,13.5,12z" fill="#3B82F6" />
              </svg>
            </div>
          </BaseBox>
  
          <!-- Discord Community Card -->
          <BaseBox 
            size="M" 
            title="Discord Server" 
            text="Auf meinem Discord-Server kannst du dich mit Gleichgesinnten austauschen, Fragen stellen und aktuelle Updates erhalten."
            link="https://discord.gg/aaronthommy"
            linkText="Discord beitreten"
            bgColor="bg-indigo-50 dark:bg-indigo-900/30"
          >
            <div class="absolute top-6 right-6 opacity-20 dark:opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.39-.444.822-.608 1.19a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.19.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2" />
              </svg>
            </div>
          </BaseBox>
  
          <!-- Social Media Community Info -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm md:col-span-3">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Social Media Communities</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8">
              Folge mir auf meinen Social-Media-Kanälen für tägliche Updates, Clips und die Möglichkeit, mit mir und anderen Fans in Kontakt zu treten.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a 
                href="https://www.tiktok.com/@aaronthommy" 
                target="_blank"
                class="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">TikTok</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center mt-2">Tägliche kurze Clips und Performances</p>
              </a>
              
              <a 
                href="https://www.instagram.com/aaronthommy_" 
                target="_blank"
                class="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Instagram</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center mt-2">Reels, Fotos und Behind-the-Scenes</p>
              </a>
              
              <a 
                href="https://www.youtube.com/@aaronthommy" 
                target="_blank"
                class="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">YouTube</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center mt-2">Längere Videos, Tutorials und volle Performances</p>
              </a>
            </div>
          </div>
        </div>
  
        <!-- FAQ Section -->
        <div class="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Häufige Fragen zur Community</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Welche Vorteile bietet die Mitgliedschaft in deiner Community?</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Als Community-Mitglied erhältst du exklusive Inhalte wie Tabs, Backing-Tracks, früheren Zugang zu neuen Releases, direkten Kontakt zu mir für Fragen und Feedback sowie die Möglichkeit, dich mit Gleichgesinnten auszutauschen.
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Welche Community ist die richtige für mich?</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Das hängt von deinen Interessen ab: Patreon bietet exklusive Inhalte und direkte Unterstützung, Skool ist ideal für strukturierte Lerninhalte und Kurse, Discord für schnellen Austausch und Kommunikation mit anderen Community-Mitgliedern.
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Muss ich für alle Communities bezahlen?</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Nein, Social Media und Discord sind kostenlos. Patreon und einige Bereiche von Skool haben kostenpflichtige Mitgliedschaften, die verschiedene Vorteile bieten. Du kannst frei wählen, welcher Community du beitreten möchtest.
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Wie kann ich direkt mit dir in Kontakt treten?</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Die beste Möglichkeit für direkten Kontakt bieten die Patreon- und Skool-Communities, wo ich regelmäßig Fragen beantworte. Auf Discord und Social Media bin ich ebenfalls aktiv, aber aufgrund des höheren Volumens kann die Antwortzeit variieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useThemeStore } from '~/stores/themeStore';
  import BaseBox from '~/components/BaseBox.vue';
  
  const themeStore = useThemeStore();
  
  onMounted(() => {
    // Theme-Einstellungen initialisieren
    themeStore.initTheme();
  });
  </script>