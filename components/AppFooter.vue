<template>
  <footer class="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
    <div class="container mx-auto px-6">
      <!-- Footer Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white">
            aaron<span class="text-blue-500 dark:text-blue-400">thommy</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-300 pr-6">
            {{ $t('home.hero.subtitle') }}
          </p>
          <!-- Social Media Icons -->
          <div class="flex space-x-4 pt-2">
            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
              </svg>
            </a>
            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ $t('home.welcome.title') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('header.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/tabs" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('header.tabs') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('footer.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/offers" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('header.offers') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/social" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('header.social') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ $t('home.courses.title') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/tutorials" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('home.courses.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/equipment" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('home.equipment.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                FAQ
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter Signup -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">Newsletter</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t('home.welcome.text') }}
          </p>
          <form @submit.prevent="subscribeToNewsletter" class="space-y-2">
            <input
              type="email"
              v-model="email"
              placeholder="Email"
              class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
              required
            />
            <button
              type="submit"
              class="w-full bg-blue-500 dark:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Line with Copyright -->
      <div class="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 sm:mb-0">
          {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>

        <!-- Legal Links -->
        <div class="flex space-x-6">
          <NuxtLink to="/impressum" class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors">
            {{ $t('footer.imprint') }}
          </NuxtLink>
          <NuxtLink to="/datenschutz" class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors">
            {{ $t('footer.privacy') }}
          </NuxtLink>
          <NuxtLink to="/kontakt" class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors">
            {{ $t('footer.contact') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '~/stores/themeStore';

const { t } = useI18n();
const themeStore = useThemeStore();
const email = ref('');

const subscribeToNewsletter = () => {
  // Hier könnte später die Newsletter-Anmeldung implementiert werden
  const message = t('language.de') === 'Deutsch' 
    ? `Danke für deine Anmeldung mit ${email.value}!` 
    : `Thank you for subscribing with ${email.value}!`;
  alert(message);
  email.value = '';
};

onMounted(() => {
  // Theme-Einstellungen initialisieren
  themeStore.initTheme();
});
</script>