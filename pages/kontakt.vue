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

          <form @submit.prevent="sendMessage" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                  :class="{ 'border-red-500 dark:border-red-400': errors.name }"
                  required
                />
                <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                  :class="{ 'border-red-500 dark:border-red-400': errors.email }"
                  required
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <!-- Betreff -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Betreff</label>
              <input
                type="text"
                id="subject"
                v-model="contactForm.subject"
                class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                :class="{ 'border-red-500 dark:border-red-400': errors.subject }"
                required
              />
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>

            <!-- Nachricht -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nachricht</label>
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="5"
                class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
                :class="{ 'border-red-500 dark:border-red-400': errors.message }"
                required
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>

            <!-- Datenschutz Checkbox -->
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="privacy"
                  type="checkbox"
                  v-model="contactForm.privacy"
                  class="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  :class="{ 'border-red-500': errors.privacy }"
                  required
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="privacy" class="text-gray-600 dark:text-gray-400">
                  Ich habe die <NuxtLink to="/datenschutz" class="text-blue-500 dark:text-blue-400 hover:underline">Datenschutzerklärung</NuxtLink>
                  gelesen und stimme zu, dass meine Angaben zur Kontaktaufnahme verwendet werden.
                </label>
                <p v-if="errors.privacy" class="text-red-500 text-sm mt-1">{{ errors.privacy }}</p>
              </div>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="w-full bg-blue-500 dark:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors flex items-center justify-center"
                :disabled="isSubmitting"
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
          <div
            v-if="showSuccess"
            class="mt-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium">{{ successMessage }}</p>
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <div
            v-if="showError"
            class="mt-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium">{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Kontaktinformationen -->
        <!-- (Rest unverändert) -->
        <!-- ... -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '~/stores/themeStore'
import { useReCaptcha } from 'vue-recaptcha-v3'

const themeStore = useThemeStore()

// SSR-sicheres reCAPTCHA-Setup
let executeRecaptcha
let recaptchaLoaded

if (process.client) {
  const recaptcha = useReCaptcha()
  executeRecaptcha = recaptcha?.executeRecaptcha
  recaptchaLoaded = recaptcha?.recaptchaLoaded
}

// Kontaktformular Daten
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

// UI-State
const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const successMessage = ref('Vielen Dank für deine Nachricht! Ich werde mich schnellstmöglich bei dir melden.')
const errorMessage = ref('Ein Fehler ist aufgetreten. Bitte versuche es später noch einmal.')

// Formularvalidierung
const validateForm = () => {
  errors.value = {}
  let valid = true

  if (!contactForm.value.name.trim()) {
    errors.value.name = 'Bitte gib deinen Namen ein'
    valid = false
  }
  if (!contactForm.value.email.trim()) {
    errors.value.email = 'Bitte gib deine E-Mail-Adresse ein'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.value.email)) {
    errors.value.email = 'Bitte gib eine gültige E-Mail-Adresse ein'
    valid = false
  }
  if (!contactForm.value.subject.trim()) {
    errors.value.subject = 'Bitte gib einen Betreff ein'
    valid = false
  }
  if (!contactForm.value.message.trim()) {
    errors.value.message = 'Bitte gib eine Nachricht ein'
    valid = false
  } else if (contactForm.value.message.trim().length < 10) {
    errors.value.message = 'Die Nachricht sollte mindestens 10 Zeichen lang sein'
    valid = false
  }
  if (!contactForm.value.privacy) {
    errors.value.privacy = 'Bitte akzeptiere die Datenschutzbestimmungen'
    valid = false
  }

  return valid
}

const sendMessage = async (e) => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;

  try {
    const formData = new FormData();
    // Füge deine Formularwerte hinzu
    formData.append('name', contactForm.value.name);
    formData.append('email', contactForm.value.email);
    formData.append('subject', contactForm.value.subject);
    formData.append('message', contactForm.value.message);

    const response = await fetch('https://formspree.io/f/xdkgbqgd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    const data = await response.json();

    if (response.ok) {
      showSuccess.value = true;
      successMessage.value = "Vielen Dank für deine Nachricht! Ich werde mich schnellstmöglich bei dir melden.";
      contactForm.value = { name: '', email: '', subject: '', message: '', privacy: false };
    } else {
      showError.value = true;
      errorMessage.value = data.error || "Ein Fehler ist aufgetreten. Bitte versuche es später noch einmal.";
    }
  } catch (err) {
    console.error('Fehler beim Senden des Formulars:', err);
    showError.value = true;
    errorMessage.value = "Ein Netzwerkfehler ist aufgetreten. Bitte überprüfe deine Internetverbindung.";
  } finally {
    isSubmitting.value = false;
    if (showSuccess.value) setTimeout(() => (showSuccess.value = false), 5000);
  }
};

onMounted(() => {
  themeStore.initTheme()
})
</script>
