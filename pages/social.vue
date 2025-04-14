<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Meine Social Media Highlights
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Entdecke meine neuesten Videos und Performances auf TikTok und
          Instagram.
        </p>
      </div>

      <!-- Platform Toggle -->
      <div class="flex justify-center mb-8">
        <div class="inline-flex rounded-lg p-1 bg-gray-100">
          <button
            @click="activePlatform = 'all'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="
              activePlatform === 'all'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            "
          >
            Alle
          </button>
          <button
            @click="activePlatform = 'tiktok'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="
              activePlatform === 'tiktok'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            "
          >
            TikTok
          </button>
          <button
            @click="activePlatform = 'instagram'"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="
              activePlatform === 'instagram'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            "
          >
            Instagram
          </button>
        </div>
      </div>

      <!-- Social Media Slider -->
      <div class="relative social-slider-container max-w-screen-md mx-auto">
        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-colors focus:outline-none sm:-translate-x-6 md:-translate-x-10"
          aria-label="Vorheriges Video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-colors focus:outline-none sm:translate-x-6 md:translate-x-10"
          aria-label="Nächstes Video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- Swiper Component -->
        <div class="mt-4 mb-10">
          <Swiper
            :modules="[
              SwiperNavigation,
              SwiperPagination,
              SwiperEffectCoverflow,
            ]"
            :slides-per-view="1"
            :space-between="30"
            :pagination="{ clickable: true }"
            :effect="'coverflow'"
            :cover-flow-effect="{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }"
            :centered-slides="true"
            :loop="true"
            @swiper="setSwiper"
          >
            <SwiperSlide
              v-for="(video, index) in filteredVideos"
              :key="index"
              class="py-4"
            >
              <div class="max-w-md mx-auto">
                <SocialEmbed :videoUrl="video.url" :type="video.platform" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <!-- Follow Me Section -->
      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Folge mir</h2>
        <p class="text-gray-600 mb-6">
          Für mehr Inhalte und Updates folge mir auf meinen Social-Media-Kanälen
        </p>

        <div class="flex justify-center space-x-5">
          <a
            href="https://www.tiktok.com/@aaronthommy"
            target="_blank"
            class="text-gray-700 hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/aaronthommy_"
            target="_blank"
            class="text-gray-700 hover:text-pink-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@aaronthommy"
            target="_blank"
            class="text-gray-700 hover:text-red-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation as SwiperNavigation,
  Pagination as SwiperPagination,
  EffectCoverflow as SwiperEffectCoverflow,
} from "swiper/modules";
import SocialEmbed from "~/components/SocialEmbed.vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Deine Video-Sammlung
const videos = ref([
  // Dein Instagram-Reel
  {
    url: "https://www.instagram.com/reel/DF3fgDyOcgA/",
    platform: "instagram",
    title: "Killer Queen Guitar Solo",
  },
  {
    url: "https://www.instagram.com/reel/DHZHEByufOh/",
    platform: "instagram",
    title: "Smells Like Teen Spirit Guitar Solo One String",
  },
  {
    url: "https://www.instagram.com/reel/DGJU5Tlu4kC/",
    platform: "instagram",
    title: "November Rain Guitar Solo Slowed Part 2",
  },
  {
    url: "https://www.instagram.com/reel/DGBc1BDOPMi/",
    platform: "instagram",
    title: "Killer Queen Guitar Solo",
  },
  {
    url: "https://www.instagram.com/reel/DFyPyKcOtQO/",
    platform: "instagram",
    title: "Killer Queen Guitar Solo",
  },
  {
    url: "https://www.tiktok.com/@aaronthommy/video/7472101611305766166",
    platform: "tiktok",
    title: "Nothing Else Matters Guitar Solo",
  },

  // Hier kannst du weitere Videos hinzufügen
]);

// Aktive Plattform für Filterung
const activePlatform = ref("all");

// Gefilterte Videos basierend auf ausgewählter Plattform
const filteredVideos = computed(() => {
  if (activePlatform.value === "all") {
    return videos.value;
  }
  return videos.value.filter(
    (video) => video.platform === activePlatform.value
  );
});

// Swiper Instanz
const swiper = ref(null);

const setSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};

// Navigation-Methoden
const nextSlide = () => {
  if (swiper.value) {
    swiper.value.slideNext();
  }
};

const prevSlide = () => {
  if (swiper.value) {
    swiper.value.slidePrev();
  }
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
});
</script>

<style scoped>
.social-slider-container {
  padding: 20px 0;
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

/* Anpassungen für mobile Geräte */
@media (max-width: 640px) {
  .social-slider-container {
    padding: 10px 0;
  }
}
</style>
