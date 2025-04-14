<template>
  <div class="social-embed-container relative w-full bg-gray-50 rounded-xl overflow-hidden">
    <!-- Loading Spinner -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-30">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>

    <!-- TikTok/Instagram Embed Container -->
    <div ref="embedContainer" class="w-full mx-auto relative min-h-[500px]">
      <!-- Der Embed-Code wird hier eingefügt -->
    </div>

    
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, onBeforeUnmount } from 'vue';

const props = defineProps({
  videoUrl: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'auto' // 'auto', 'tiktok', 'instagram'
  }
});

const loading = ref(true);
const embedContainer = ref(null);
const videoIdExtracted = ref(null);
const scriptAdded = ref(false);
const embedScriptId = ref('');

// Ermittelt, ob es sich um TikTok oder Instagram handelt
const platform = computed(() => {
  if (props.type !== 'auto') {
    return props.type;
  }
  
  if (props.videoUrl.includes('tiktok.com')) {
    return 'tiktok';
  } else if (props.videoUrl.includes('instagram.com')) {
    return 'instagram';
  } else {
    return null;
  }
});

// Extrahiert die Video-ID aus der URL
const extractVideoId = (url) => {
  if (url.includes('tiktok.com')) {
    // TikTok URL Format kann variieren
    const matches = url.match(/\/video\/(\d+)/);
    return matches && matches[1] ? matches[1] : null;
  } else if (url.includes('instagram.com')) {
    // Instagram URL Format: https://www.instagram.com/reel/CODE/
    // oder https://www.instagram.com/p/CODE/
    const reelMatches = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
    const postMatches = url.match(/\/p\/([A-Za-z0-9_-]+)/);
    
    if (reelMatches && reelMatches[1]) {
      return reelMatches[1];
    } else if (postMatches && postMatches[1]) {
      return postMatches[1];
    }
    return null;
  }
  return null;
};

// Sauberes Entfernen von Scripts
const cleanupScripts = () => {
  if (embedScriptId.value) {
    const script = document.getElementById(embedScriptId.value);
    if (script) {
      script.remove();
    }
    embedScriptId.value = '';
  }
  
  // TikTok-spezifisches Cleanup
  const tiktokScripts = document.querySelectorAll('script[src*="tiktok.com/embed.js"]');
  tiktokScripts.forEach(script => {
    script.remove();
  });
  
  // Instagram-spezifisches Cleanup
  const instagramScripts = document.querySelectorAll('script[src*="instagram.com/embed.js"]');
  instagramScripts.forEach(script => {
    script.remove();
  });
  
  scriptAdded.value = false;
};

// Fügt das TikTok Embed-Script ein
const loadTikTokEmbed = (videoId) => {
  if (!embedContainer.value) return;
  
  // Lösche vorherigen Inhalt
  embedContainer.value.innerHTML = '';
  
  // Erstelle das TikTok Embed HTML
  embedContainer.value.innerHTML = `
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@aaronthommy/video/${videoId}" 
      data-video-id="${videoId}" style="max-width: 605px; min-width: 325px; margin: 0 auto;">
      <section></section>
    </blockquote>
  `;
  
  // Cleanup vorhandener Scripts
  cleanupScripts();
  
  // Lade das TikTok Script
  const script = document.createElement('script');
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  script.id = `tiktok-embed-${Date.now()}`;
  embedScriptId.value = script.id;
  
  script.onload = () => {
    loading.value = false;
    scriptAdded.value = true;
    
    // Manchmal hilft es, TIKTOK.reload() nach dem Laden des Scripts aufzurufen
    if (window.TIKTOK && typeof window.TIKTOK.reload === 'function') {
      setTimeout(() => {
        window.TIKTOK.reload();
      }, 100);
    }
  };
  
  document.body.appendChild(script);
};

// Fügt das Instagram Embed-Script ein
const loadInstagramEmbed = (videoId) => {
  if (!embedContainer.value) return;
  
  // Lösche vorherigen Inhalt
  embedContainer.value.innerHTML = '';

  // Erstelle das Instagram Embed HTML - wir verwenden den vollständigen Embed-Code
  // mit der korrekten Video-ID
  embedContainer.value.innerHTML = `
    <blockquote class="instagram-media" data-instgrm-captioned 
      data-instgrm-permalink="https://www.instagram.com/reel/${videoId}/"
      data-instgrm-version="14" 
      style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); 
      margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:calc(100% - 2px); margin: 0 auto;">
    </blockquote>
  `;
  
  // Cleanup vorhandener Scripts
  cleanupScripts();
  
  // Lade das Instagram Script
  const script = document.createElement('script');
  script.src = '//www.instagram.com/embed.js';
  script.async = true;
  script.id = `instagram-embed-${Date.now()}`;
  embedScriptId.value = script.id;
  
  script.onload = () => {
    loading.value = false;
    scriptAdded.value = true;
    
    // Instagram benötigt manchmal einen manuellen Prozess-Aufruf
    if (window.instgrm && typeof window.instgrm.Embeds.process === 'function') {
      setTimeout(() => {
        window.instgrm.Embeds.process();
      }, 100);
    }
  };
  
  document.body.appendChild(script);
};

// Lade das entsprechende Embed basierend auf der URL
const loadEmbed = () => {
  loading.value = true;
  const videoId = extractVideoId(props.videoUrl);
  videoIdExtracted.value = videoId;
  
  if (!videoId) {
    console.error('Konnte keine Video-ID aus der URL extrahieren:', props.videoUrl);
    loading.value = false;
    return;
  }
  
  if (platform.value === 'tiktok') {
    loadTikTokEmbed(videoId);
  } else if (platform.value === 'instagram') {
    loadInstagramEmbed(videoId);
  } else {
    console.error('Nicht unterstützte Plattform:', props.videoUrl);
    loading.value = false;
  }
};

// Beobachtet Änderungen der videoUrl
watch(() => props.videoUrl, () => {
  loadEmbed();
});

onMounted(() => {
  loadEmbed();
});

onBeforeUnmount(() => {
  cleanupScripts();
});
</script>

<style scoped>
.social-embed-container {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.social-embed-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.1);
}

/* Zusätzliche Stile für die Embeds */
:deep(.tiktok-embed),
:deep(.instagram-media) {
  margin: 0 auto !important;
  border-radius: 8px;
  overflow: hidden;
}
</style>