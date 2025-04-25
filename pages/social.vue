<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('social.title') }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ $t('social.subtitle') }}
        </p>
      </div>

      <!-- Content Filter -->
      <div class="flex justify-center mb-8">
        <div class="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800">
          <button @click="activeCategory = 'all'" class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="activeCategory === 'all'
              ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'">
            {{ $t('social.filter.all') }}
          </button>
          <button v-for="category in categories" :key="category.id" @click="activeCategory = category.id"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors" :class="activeCategory === category.id
              ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'">
            {{ category.name }}
          </button>
        </div>
      </div>

      <!-- Highlighted/Featured Video -->
      <div v-if="featuredVideo && (activeCategory === 'all' || activeCategory === featuredVideo.category)" class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Featured
          <span class="text-blue-500 dark:text-blue-400">Performance</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          <div class="md:col-span-3">
            <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <SocialEmbed :videoUrl="featuredVideo.url" :type="featuredVideo.platform" />
            </div>
          </div>

          <div class="md:col-span-2">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ featuredVideo.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ featuredVideo.description }}</p>

            <div class="flex items-center space-x-2 mb-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                :class="getCategoryColor(featuredVideo.category)">
                {{ getCategoryName(featuredVideo.category) }}
              </span>

              <span class="inline-flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ formatDate(featuredVideo.date) }}
              </span>
            </div>

            <div class="flex flex-wrap gap-2">
              <a v-for="(link, platform) in featuredVideo.links" :key="platform" :href="link" target="_blank"
                class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                :class="getPlatformStyles(platform)">
                <component :is="getPlatformIcon(platform)" class="h-5 w-5 mr-2" />
                {{ platform }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Gallery Grid -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Recent Performances
          <span v-if="filteredVideos.length" class="text-base font-normal text-gray-600 dark:text-gray-400 ml-2">{{
            filteredVideos.length }} Videos</span>
        </h2>

        <div v-if="filteredVideos.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(video, index) in filteredVideos" :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            @click="openVideoModal(video)">
            <div class="cursor-pointer">
              <SocialEmbed :videoUrl="getPreferredVideoUrl(video)" :type="getPreferredPlatform(video)" />

              <div class="p-4">
                <h3 class="font-medium text-gray-900 dark:text-white mb-2 line-clamp-1">{{ video.title }}</h3>

                <div class="flex items-center justify-between">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="getCategoryColor(video.category)">
                    {{ getCategoryName(video.category) }}
                  </span>

                  <div class="flex space-x-1">
                    <div v-if="video.platforms.includes('instagram')" class="text-pink-600 dark:text-pink-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div v-if="video.platforms.includes('tiktok')" class="text-gray-800 dark:text-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z" />
                      </svg>
                    </div>
                    <div v-if="video.platforms.includes('youtube')" class="text-red-600 dark:text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="flex flex-col items-center justify-center py-16">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <p class="text-gray-500 dark:text-gray-400 text-lg">Keine Videos in dieser Kategorie gefunden.</p>
        </div>
      </div>

      <!-- Follow Me Section -->
      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('social.follow.title') }}</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          {{ $t('social.follow.text') }}
        </p>

        <div class="flex justify-center space-x-5">
          <a href="https://www.tiktok.com/@aaronthommy" target="_blank"
            class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/aaronthommy_" target="_blank"
            class="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@aaronthommy" target="_blank"
            class="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        @click="closeVideoModal">
        <div class="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
          <div class="p-4 sm:p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ selectedVideo?.title }}</h3>
              <button @click="closeVideoModal"
                class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div v-if="selectedVideo" class="w-full">
              <SocialEmbed :videoUrl="getPreferredVideoUrl(selectedVideo)" :type="getPreferredPlatform(selectedVideo)" />

              <div class="mt-4">
                <p v-if="selectedVideo.description" class="text-gray-600 dark:text-gray-300 mb-4">{{
                  selectedVideo.description }}</p>

                <div class="flex items-center space-x-2 mb-4">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                    :class="getCategoryColor(selectedVideo.category)">
                    {{ getCategoryName(selectedVideo.category) }}
                  </span>

                  <span class="inline-flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ formatDate(selectedVideo.date) }}
                  </span>
                </div>

                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Auf allen Platformen anschauen:</h4>
                <div class="flex flex-wrap gap-2">
                  <a v-for="(url, platform) in selectedVideo.urls" :key="platform" :href="url" target="_blank"
                    class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    :class="getPlatformStyles(platform)">
                    <component :is="getPlatformIcon(platform)" class="h-5 w-5 mr-2" />
                    {{ platform }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import { useThemeStore } from '~/stores/themeStore';
import SocialEmbed from "~/components/SocialEmbed.vue";

const { t } = useI18n();
const themeStore = useThemeStore();

// Kategorien für die Videos
const categories = [
  { id: 'guitar-covers', name: 'Guitar Covers' },
  { id: 'piano', name: 'Piano' },
  { id: 'guitar-tabs', name: 'Guitar Tabs' }
];

// Aktive Kategorie für Filterung
const activeCategory = ref("all");

// Featured Video
const featuredVideo = ref({
  title: "November Rain Guitar Solo (Slowed)",
  description: "Ein besonderer Moment - der November Rain Solo Teil, langsamer gespielt für mehr Gefühl und Atmosphäre.",
  category: "guitar-covers",
  date: "2025-04-20",
  platform: "instagram", // Bevorzugte Plattform für die Anzeige
  url: "https://www.instagram.com/reel/DGJU5Tlu4kC/", // Bevorzugte URL für die Anzeige
  links: {
    Instagram: "https://www.instagram.com/reel/DGJU5Tlu4kC/",
    TikTok: "https://www.tiktok.com/@aaronthommy/video/7472101611305766166",
    YouTube: "https://youtube.com/shorts/VS35l758cRE?si=BvQAixkAJJ1FNQkx"
  }
});

const videos = ref([
  {
    id: 1,
    title: "November Rain Guitar Solo (Slowed)",
    description: "Ein besonderer Moment - der November Rain Solo Teil, langsamer gespielt für mehr Gefühl und Atmosphäre.",
    category: "guitar-covers",
    date: "2025-04-20",
    platforms: ["instagram", "tiktok", "youtube"],
    urls: {
      instagram: "https://www.instagram.com/reel/DGJU5Tlu4kC/",
      tiktok: "https://www.tiktok.com/@aaronthommy/video/7472101611305766166",
      youtube: "https://youtube.com/shorts/VS35l758cRE?si=BvQAixkAJJ1FNQkx"
    }
  },
  {
    id: 2,
    title: "Sweet Child O' Mine Guitar Solo",
    description: "Einer der ikonischsten Gitarrensolos aller Zeiten von Guns N' Roses.",
    category: "guitar-covers",
    date: "2025-04-15",
    platforms: ["instagram", "tiktok"],
    urls: {
      instagram: "https://www.instagram.com/reel/DGBc1BDOPMi/",
      tiktok: "https://www.tiktok.com/@aaronthommy/video/7449251378452599051"
    }
  },
  {
    id: 3,
    title: "Hotel California Guitar Solo",
    description: "Das legendäre Gitarrensolo von den Eagles - eines meiner persönlichen Favoriten.",
    category: "guitar-covers",
    date: "2025-04-10",
    platforms: ["instagram", "youtube"],
    urls: {
      instagram: "https://www.instagram.com/reel/DFyPyKcOtQO/",
      youtube: "https://youtube.com/shorts/N5qJVvyKAJE?si=jDdPPv7hJKQ2JHLn"
    }
  },
  {
    id: 4,
    title: "Killer Queen Guitar Solo",
    description: "Brian Mays einzigartiger Gitarrenstil in diesem Queen-Klassiker.",
    category: "guitar-covers",
    date: "2025-04-05",
    platforms: ["instagram"],
    urls: {
      instagram: "https://www.instagram.com/reel/DF3fgDyOcgA/"
    }
  },
  {
    id: 5,
    title: "Smells Like Teen Spirit Guitar Solo One String",
    description: "Eine kreative Herausforderung: Das Solo nur auf einer Saite spielen!",
    category: "guitar-tabs",
    date: "2025-04-01",
    platforms: ["instagram"],
    urls: {
      instagram: "https://www.instagram.com/reel/DHZHEByufOh/"
    }
  },
  {
    id: 6,
    title: "Nothing Else Matters Guitar Solo",
    description: "Metallicas emotionalste Ballade, mit einem wunderschönen Solo von Kirk Hammett.",
    category: "guitar-covers",
    date: "2025-03-25",
    platforms: ["instagram"],
    urls: {
      instagram: "https://www.instagram.com/reel/DIrTMkfMY4N/"
    }
  },
 
]);

// Gefilterte Videos basierend auf ausgewählter Kategorie
const filteredVideos = computed(() => {
  if (activeCategory.value === "all") {
    return videos.value;
  }
  return videos.value.filter(video => video.category === activeCategory.value);
});

// Video Modal Funktionalität
const showModal = ref(false);
const selectedVideo = ref(null);

const openVideoModal = (video) => {
  selectedVideo.value = video;
  showModal.value = true;
  document.body.style.overflow = 'hidden'; // Verhindere Scrolling im Hintergrund
};

// Für Plattform-Icons im Modal
import { h } from 'vue';

// Aktualisiere Fensterbreite für responsive Anpassungen
const updateWindowWidth = () => {
  // Diese Funktion wird in dieser Version nicht mehr benötigt,
  // da wir auf CSS Grid für Responsiveness setzen
};

onMounted(() => {
  // Social Media Widgets bei Bedarf neu laden
  setTimeout(() => {
    if (window.TIKTOK && typeof window.TIKTOK.reload === "function") {
      window.TIKTOK.reload();
    }
    if (window.instgrm && typeof window.instgrm.Embeds.process === "function") {
      window.instgrm.Embeds.process();
    }
  }, 1000);

  // Themeeinstellungen initialisieren
  themeStore.initTheme();
});

onBeforeUnmount(() => {
  // Event-Listener entfernen, falls notwendig
});

const getPlatformStyles = (platform) => {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600';
    case 'tiktok':
      return 'bg-black text-white hover:bg-gray-900';
    case 'youtube':
      return 'bg-red-600 text-white hover:bg-red-700';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600';
  }
};

const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return {
        render() {
          return h('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'currentColor'
          }, [
            h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })
          ]);
        }
      };
    case 'tiktok':
      return {
        render() {
          return h('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'currentColor'
          }, [
            h('path', { d: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z' })
          ]);
        }
      };
    case 'youtube':
      return {
        render() {
          return h('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'currentColor'
          }, [
            h('path', { d: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' })
          ]);
        }
      };
    default:
      return null;
  }
};

// Formatiere Datum
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  } catch (e) {
    return dateString;
  }
};

// Wähle die bevorzugte Plattform für die Anzeige (Instagram > YouTube > TikTok)
const getPreferredPlatform = (video) => {
  if (video.platforms.includes('instagram')) return 'instagram';
  if (video.platforms.includes('youtube')) return 'youtube';
  if (video.platforms.includes('tiktok')) return 'tiktok';
  return video.platforms[0] || 'auto';
};

// Hole die URL der bevorzugten Plattform
const getPreferredVideoUrl = (video) => {
  const platform = getPreferredPlatform(video);
  return video.urls[platform];
};

const closeVideoModal = () => {
  showModal.value = false;
  document.body.style.overflow = ''; // Erlaube Scrolling wieder
};

// Hilfsfunktionen für UI-Elemente
const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : categoryId;
};

const getCategoryColor = (categoryId) => {
  switch (categoryId) {
    case 'guitar-covers':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    case 'piano':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    case 'guitar-tabs':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  }
};
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Bessere Sichtbarkeit für Paginierung */
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  opacity: 0.5;
  background-color: #3b82f6;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background-color: #3b82f6;
}
</style>

