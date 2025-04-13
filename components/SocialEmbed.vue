<template>
    <div ref="embedContainer" v-html="embedHtml"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  // Die Komponente erwartet als Prop die vollständige Video-URL
  const props = defineProps({
    videoUrl: { type: String, required: true }
  })
  
  // Hier speichern wir den generierten Embed-Code als HTML-String
  const embedHtml = ref("")
  
  onMounted(() => {
    // Wir generieren einen Embed-Code. Häufig reicht es,
    // den TikTok-Embed-Code mit der URL und Video-ID (am Ende der URL) zu verwenden.
    const parts = props.videoUrl.split('/')
    const videoId = parts[parts.length - 1]  // Annahme: Die Video-ID steht am Ende der URL
    embedHtml.value = `
      <blockquote class="tiktok-embed" cite="${props.videoUrl}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;">
        <section></section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    `
  })
  </script>
  