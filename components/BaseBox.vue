<template>
    <div :class="boxClasses" :style="boxStyle">
      <!-- Optionales Overlay für den Hintergrund, falls bgImage gesetzt ist -->
      <div class="bg-overlay" v-if="bgImage"></div>
      <div class="relative z-10">
        <!-- Titel wird per v-html ausgegeben, sodass du beispielsweise <br> einfügen kannst -->
        <h2 v-if="title" :class="titleClass" v-html="title"></h2>
        <p v-if="text" :class="textClass">{{ text }}</p>
        <NuxtLink
          v-if="link"
          :to="link"
          class="mt-2 inline-block px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {{ linkText }}
        </NuxtLink>
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    title: { type: String, default: "" },
    text: { type: String, default: "" },
    link: { type: String, default: "" },
    linkText: { type: String, default: "Mehr erfahren" },
    size: { type: String, default: "M" }, // S, M, L, Q (Small, Medium, Large, Square)
    bgImage: { type: String, default: "" },
    customHeight: { type: String, default: "" },
    // Neue Props für individuelle Klassen (optional)
    titleClass: { type: String, default: "text-3xl font-bold mb-2" },
    textClass: { type: String, default: "text-gray-700 text-base" }
  });
  
  const boxClasses = computed(() => {
    let base = "relative overflow-hidden rounded-lg shadow p-4 text-center transition-transform hover:-translate-y-1";
  
    if (props.size === 'Q') {
      // Quadrat: Wir nutzen aspect-square.
      // Zusätzlich setzen wir z. B. eine Breite (w-full oder eine feste Breite, falls gewünscht)
      return base + " w-full aspect-square";
    } else if (props.size === 'S') {
      return base + " h-[40vh]"; // Kleine Box: halbe Viewporthöhe
    } else if (props.size === 'L') {
      return base + " h-[80vh]"; // Große Box: volle Viewporthöhe
    }
    // Default (z. B. für 'M'):
    return base + " h-[38vh]";
  });
  
  
  const boxStyle = computed(() => {
    return props.customHeight ? { height: props.customHeight } : {};
  });
  </script>
  
  <style scoped>
  .bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 5;
  }
  </style>
  