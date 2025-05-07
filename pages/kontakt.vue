<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('footer.contact') }}
          </h1>
          <div class="h-1 w-20 bg-blue-500 dark:bg-blue-400 rounded"></div>
        </div>
  
        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Kontaktformular -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Schreib mir eine Nachricht</h2>
            <h4>Bald verfügbar.<br> Aktueller Kontakt: info@aaronthommy.com</h4>
            
            <form @submit.prevent="sendMessage" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    disabled
                    v-model="contactForm.name" 
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                    required
                  >
                </div>
                
                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email"
                    disabled 
                    id="email" 
                    v-model="contactForm.email" 
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                    required
                  >
                </div>
              </div>
              
              <!-- Betreff -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Betreff</label>
                <input 
                  type="text" 
                  id="subject" 
                  disabled
                  v-model="contactForm.subject" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                  required
                >
              </div>
              
              <!-- Nachricht -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nachricht</label>
                <textarea 
                  id="message" 
                  disabled
                  v-model="contactForm.message" 
                  rows="5"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <!-- Datenschutz Checkbox -->
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    disabled
                    v-model="contactForm.privacy"
                    class="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                    required
                  >
                </div>
                <div class="ml-3 text-sm">
                  <label for="privacy" class="text-gray-600 dark:text-gray-400">
                    Ich habe die <NuxtLink to="/datenschutz" class="text-blue-500 dark:text-blue-400 hover:underline">Datenschutzerklärung</NuxtLink> gelesen und stimme zu, dass meine Angaben zur Kontaktaufnahme verwendet werden.
                  </label>
                </div>
              </div>
              
              <!-- Submit Button -->
              <div>
                <button 
                  type="submit" 
                  class="w-full bg-blue-500 dark:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors flex items-center justify-center"
                  :disabled="isSubmitting" disabled
                >
                  <span v-if="isSubmitting" class="inline-block mr-2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht senden' }}
                </button>
              </div>
            </form>
            
            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium">Vielen Dank für deine Nachricht! Ich werde mich schnellstmöglich bei dir melden.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Kontaktinformationen -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kontaktinformationen</h2>
            
            <div class="space-y-6">
              <!-- Adresse -->
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Adresse</h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">
                    Lampestraße 03<br>
                    30449 Hannover<br>
                    Deutschland
                  </p>
                </div>
              </div>
              
              <!-- Email -->
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">
                    <a href="mailto:info@example.com" class="text-blue-500 dark:text-blue-400 hover:underline">info@aaronthommy.com</a>
                  </p>
                </div>
              </div>
              
              <!-- Social Media -->
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Folge mir auf Social Media</h3>
                <div class="flex space-x-4">
                  <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- FAQ-Bereich -->
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Häufig gestellte Fragen</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Wie schnell antwortest du auf Anfragen?</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Ich bemühe mich, alle Anfragen innerhalb von 24-48 Stunden zu beantworten. Bei dringenden Anliegen kannst du mich auch direkt über meine Social-Media-Kanäle kontaktieren.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Bietest du auch Videounterricht an?</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Ja, ich biete sowohl persönlichen Unterricht als auch Videounterricht über Zoom oder andere Plattformen an. Kontaktiere mich für weitere Details zu verfügbaren Zeiten und Preisen.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Kann ich dich für Privatevents buchen?</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Selbstverständlich! Ich stehe für private Veranstaltungen, Hochzeiten und Firmenfeiern zur Verfügung. Bitte kontaktiere mich frühzeitig für Verfügbarkeit und weitere Informationen.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Hast du spezielle Angebote für Anfänger?</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Natürlich! Ich biete spezielle Einführungskurse für Anfänger an, sowohl für Gitarre als auch für Klavier. Du findest mehr Informationen unter dem Menüpunkt "Angebote".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useThemeStore } from '~/stores/themeStore';
  
  const themeStore = useThemeStore();
  
  // Kontaktformular
  const contactForm = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  const isSubmitting = ref(false);
  const showSuccess = ref(false);
  
  // Formular abschicken
  const sendMessage = () => {
    isSubmitting.value = true;
    
    // Hier würde normalerweise der API-Call stattfinden
    // Simulieren wir eine Verzögerung für die Demo
    setTimeout(() => {
      isSubmitting.value = false;
      showSuccess.value = true;
      
      // Formular zurücksetzen
      contactForm.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
        privacy: false
      };
      
      // Success-Nachricht nach einiger Zeit ausblenden
      setTimeout(() => {
        showSuccess.value = false;
      }, 5000);
    }, 1500);
  };
  
  onMounted(() => {
    // Theme-Einstellungen initialisieren
    themeStore.initTheme();
  });
  </script>