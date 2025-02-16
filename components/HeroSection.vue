<template>
  <section
    class="relative bg-center bg-no-repeat bg-cover flex items-center justify-center text-white py-32"
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
const props = defineProps({
  title: {
    type: String,
    default: "Streamline Your Workflow",
  },
  subtitle: {
    type: String,
    default: "Boost productivity and simplify collaboration with StreamLine",
  },
  buttonLabel: {
    type: String,
    default: "Start Free Trial",
  },
  gradientFrom: {
    type: String,
    default: "primary",
  },
  gradientTo: {
    type: String,
    default: "primary-dark",
  },
  backgroundImage: {
    type: String,
    default: null,
  },
});
</script>
