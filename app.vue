<script setup>
import { onMounted } from "vue";
import { useLanguageStore } from "~/stores/languageStore";
import { useThemeStore } from "~/stores/themeStore";

useHead({
  title: "Aaron Thommy - Musik, die bewegt",
  meta: [
    {
      name: "description",
      content:
        "Aaron Thommy - Entdecke meine musikalische Welt mit Gitarre und Klavier.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});

const languageStore = useLanguageStore();
const themeStore = useThemeStore();

onMounted(() => {
  // Spracheinstellungen initialisieren
  languageStore.initLocale();

  // Theme-Einstellungen initialisieren
  themeStore.initTheme();
});
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
