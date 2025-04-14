<template>
  <section class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero-Bereich mit großem Statement -->
    <div class="container mx-auto px-4 py-16 md:py-24">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        aaron<span class="text-blue-500 dark:text-blue-400">thommy</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
        {{ $t('home.hero.subtitle') }}
      </p>
    </div>
    
    <!-- Grid-Layout für Boxen -->
    <div class="container mx-auto px-4 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Große Feature-Box -->
        <BaseBox 
          size="L" 
          :title="$t('home.welcome.title')" 
          :text="$t('home.welcome.text')"
          link="/about"
          :linkText="$t('home.welcome.button')"
          bgColor="bg-gray-100 dark:bg-gray-800"
          class="md:col-span-2"
        />
        
        <!-- Quadratische Box für Social Media Highlights -->
        <BaseBox 
          size="Q" 
          :title="$t('home.social.title')" 
          :text="$t('home.social.text')"
          link="/social"
          :linkText="$t('home.social.button')"
          bgColor="bg-blue-50 dark:bg-blue-900/30"
        />
        
        <!-- Mittlere Boxen für andere Inhalte -->
        <BaseBox 
          size="M" 
          :title="$t('home.courses.title')" 
          :text="$t('home.courses.text')"
          link="/offers"
          :linkText="$t('home.courses.button')"
          bgColor="bg-indigo-50 dark:bg-indigo-900/30"
        />
        
        <BaseBox 
          size="M" 
          :title="$t('home.equipment.title')" 
          :text="$t('home.equipment.text')"
          link="/equipment"
          :linkText="$t('home.equipment.button')"
          bgColor="bg-gray-100 dark:bg-gray-800"
        />
        
        <!-- Featured Video Box -->
        <BaseBox 
          size="M" 
          :title="$t('home.video.title')" 
          :text="$t('home.video.text')"
          link="https://youtube.com"
          :linkText="$t('home.video.button')"
          bgColor="bg-red-50 dark:bg-red-900/20"
          class="md:col-span-1 lg:col-span-1"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from '~/stores/languageStore';
import { useThemeStore } from '~/stores/themeStore';
import BaseBox from '~/components/BaseBox.vue';

const { t } = useI18n();
const languageStore = useLanguageStore();
const themeStore = useThemeStore();

onMounted(() => {
  // Spracheinstellungen initialisieren
  languageStore.initLocale();
  
  // Themeeinstellungen initialisieren
  themeStore.initTheme();
});
</script>