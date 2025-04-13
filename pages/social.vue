<template>
    <div class="tiktok-carousel">
      <!-- Beispiel mit Swiper.js -->
      <swiper :slides-per-view="1" space-between="10" navigation pagination>
        <swiper-slide v-for="(video, index) in tiktokVideos" :key="index">
          <SocialEmbed :videoUrl="video.url" />
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import SocialEmbed from '~/components/SocialEmbed.vue'
  // Importiere die Swiper-Komponenten und Styles gemäß der Swiper-Dokumentation
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  
  const tiktokVideos = ref([
    { url: "https://www.tiktok.com/@deinaccount/video/1234567890" },
    { url: "https://www.tiktok.com/@deinaccount/video/0987654321" },
    // füge weitere Videos hinzu…
  ])
  </script>
  