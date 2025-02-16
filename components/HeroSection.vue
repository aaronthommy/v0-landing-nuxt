<template>
  <section
    :class="[
      'relative flex items-center justify-center bg-center bg-no-repeat bg-cover text-white',
      heroHeightClass,
    ]"
    :style="
      backgroundImage ? `background-image: url('${backgroundImage}')` : ''
    "
  >
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
      <p class="text-xl mb-8">{{ subtitle }}</p>
      <button
        class="bg-white text-primary px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        {{ buttonLabel }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue"; 

const props = defineProps({
  title: { type: String, default: "Streamline Your Workflow" },
  subtitle: { type: String, default: "Boost productivity..." },
  buttonLabel: { type: String, default: "Start Free Trial" },
  backgroundImage: { type: String, default: null },
  heroHeight: {
    type: String,
    default: "full", // 'full' oder 'half'
  },
});

const heroHeightClass = computed(() => {
  switch (props.heroHeight) {
    case "full":
      return "min-h-screen";
    case "half":
      return "py-40";
    default:
      return "";
  }
});
</script>
