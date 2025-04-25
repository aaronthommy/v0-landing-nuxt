<template>
  <div class="social-embed-container relative w-full bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
    <!-- Loading Spinner -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 z-30">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
    </div>

    <!-- TikTok/Instagram/YouTube Embed Container -->
    <div ref="embedContainer" class="w-full mx-auto relative min-h-[500px]">
      <!-- Der Embed-Code wird hier eingefügt -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, onBeforeUnmount } from 'vue';
import { useThemeStore } from '~/stores/themeStore';

const props = defineProps({
  videoUrl: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'auto' // 'auto', 'tiktok', 'instagram', 'youtube'
  }
});

const loading = ref(true);
const embedContainer = ref(null);
const videoIdExtracted = ref(null);
const scriptAdded = ref(false);
const embedScriptId = ref('');
const themeStore = useThemeStore();

// Ermittelt, ob es sich um TikTok, Instagram oder YouTube handelt
const platform = computed(() => {
  if (props.type !== 'auto') {
    return props.type;
  }
  
  if (props.videoUrl.includes('tiktok.com')) {
    return 'tiktok';
  } else if (props.videoUrl.includes('instagram.com')) {
    return 'instagram';
  } else if (props.videoUrl.includes('youtube.com') || props.videoUrl.includes('youtu.be')) {
    return 'youtube';
  } else {
    return null;
  }
});

// Überprüft, ob es sich um ein YouTube Short handelt
const isYouTubeShort = computed(() => {
  return props.videoUrl.includes('youtube.com/shorts/');
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
  } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
    // YouTube URL Format kann variieren
    // Normale Videos: https://www.youtube.com/watch?v=VIDEO_ID
    // Shorts: https://youtube.com/shorts/VIDEO_ID
    // Kurz-URLs: https://youtu.be/VIDEO_ID
    
    let videoId = null;
    
    // YouTube Shorts Format
    if (url.includes('youtube.com/shorts/')) {
      const shortsMatch = url.match(/\/shorts\/([A-Za-z0-9_-]+)/);
      if (shortsMatch && shortsMatch[1]) {
        videoId = shortsMatch[1];
        // Entferne URL-Parameter falls vorhanden
        const questionMarkIndex = videoId.indexOf('?');
        if (questionMarkIndex !== -1) {
          videoId = videoId.substring(0, questionMarkIndex);
        }
        return videoId;
      }
    }
    
    // YouTube Watch Format
    const watchMatch = url.match(/[?&]v=([A-Za-z0-9_-]+)/);
    if (watchMatch && watchMatch[1]) {
      return watchMatch[1];
    }
    
    // YouTube kurze URL
    const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
    if (shortMatch && shortMatch[1]) {
      return shortMatch[1];
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
      data-video-id="${videoId}" data-theme="${themeStore.isDark ? 'dark' : 'light'}" style="max-width: 605px; min-width: 325px; margin: 0 auto;">
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
  // mit der korrekten Video-ID und dem richtigen Theme
  embedContainer.value.innerHTML = `
    <blockquote class="instagram-media" data-instgrm-captioned 
      data-instgrm-permalink="https://www.instagram.com/reel/${videoId}/"
      data-instgrm-version="14" data-instgrm-theme="${themeStore.isDark ? 'dark' : 'light'}"
      style="background:${themeStore.isDark ? '#000' : '#FFF'}; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); 
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

// Fügt YouTube Embed ein (ohne externe Skripte notwendig)
const loadYouTubeEmbed = (videoId) => {
  if (!embedContainer.value) return;
  
  // Lösche vorherigen Inhalt
  embedContainer.value.innerHTML = '';
  
  // Unterschiedliches Format für YouTube Shorts (9:16) vs. normale YouTube-Videos (16:9)
  if (isYouTubeShort.value) {
    // Für YouTube Shorts verwenden wir ein vertikales Format (9:16 Seitenverhältnis)
    embedContainer.value.innerHTML = `
      <div class="youtube-shorts-container" style="margin: 0 auto; max-width: 315px;">
        <div style="position: relative; width: 100%; padding-top: 177.78%; /* 16:9 umgekehrt für 9:16 Format */"> 
          <iframe 
            src="https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&controls=1"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 8px;"
            allowfullscreen
            loading="lazy"
            title="YouTube Shorts Video"
          ></iframe>
        </div>
      </div>
    `;
  } else {
    // Für normale YouTube-Videos verwenden wir das Standardformat (16:9 Seitenverhältnis)
    embedContainer.value.innerHTML = `
      <div class="responsive-iframe-container" style="position: relative; width: 100%; padding-top: 56.25%; margin: 0 auto;">
        <iframe 
          src="https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 8px;"
          allowfullscreen
          loading="lazy"
          title="YouTube Video"
        ></iframe>
      </div>
    `;
  }
  
  // YouTube-Embeds laden schneller, da kein zusätzliches Skript benötigt wird
  loading.value = false;
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
  } else if (platform.value === 'youtube') {
    loadYouTubeEmbed(videoId);
  } else {
    console.error('Nicht unterstützte Plattform:', props.videoUrl);
    loading.value = false;
  }
};

// Beobachten des Dark Mode Status und VideoURL
watch([() => props.videoUrl, () => themeStore.isDark], () => {
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

:deep(.dark) .social-embed-container {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
}

.social-embed-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.1);
}

:deep(.dark) .social-embed-container:hover {
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.5);
}

/* Zusätzliche Stile für die Embeds */
:deep(.tiktok-embed),
:deep(.instagram-media) {
  margin: 0 auto !important;
  border-radius: 8px;
  overflow: hidden;
}

/* Spezifische Stile für YouTube Shorts */
.youtube-shorts-container {
  border-radius: 8px;
  overflow: hidden;
}
</style>