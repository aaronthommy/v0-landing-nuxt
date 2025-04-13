<template>
  <section class="min-h-screen bg-gray-50">
    <!-- Hero-Bereich mit großem Statement -->
    <div class="container mx-auto px-4 py-16 md:py-24">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
        aaron<span class="text-blue-500">thommy</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 max-w-2xl">
        Ich mache Musik. Gitarre und Klavier, die Emotionen wecken.
      </p>
    </div>
    
    <!-- Grid-Layout für Boxen -->
    <div class="container mx-auto px-4 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Große Feature-Box -->
        <BaseBox 
          size="L" 
          title="Willkommen" 
          text="Tauche ein in meine musikalische Welt und erfahre mehr über meine Leidenschaft für Gitarre und Klavier."
          link="/about"
          linkText="Mehr erfahren"
          bgColor="bg-gray-100"
          class="md:col-span-2"
        />
        
        <!-- Quadratische Box für Social Media Highlights -->
        <BaseBox 
          size="Q" 
          title="Social" 
          text="Folge mir auf TikTok, Instagram und YouTube für tägliche musikalische Inspirationen."
          link="/social"
          linkText="Zu meinen Kanälen"
          bgColor="bg-blue-50"
        />
        
        <!-- Mittlere Boxen für andere Inhalte -->
        <BaseBox 
          size="M" 
          title="Kurse" 
          text="Von Anfänger bis Profi - entdecke meine Tutorials und digitalen Lerninhalte."
          link="/offers"
          linkText="Kurse entdecken"
          bgColor="bg-indigo-50"
        />
        
        <BaseBox 
          size="M" 
          title="Equipment" 
          text="Meine Empfehlungen für Instrumente, Zubehör und Software für deine musikalische Reise."
          link="/equipment"
          linkText="Zu den Empfehlungen"
          bgColor="bg-gray-100"
        />
        
        <!-- Featured Video Box -->
        <BaseBox 
          size="M" 
          title="Neuestes Video" 
          text="Schau dir meine aktuellste Performance an."
          link="https://youtube.com"
          linkText="Jetzt ansehen"
          bgColor="bg-red-50"
          class="md:col-span-1 lg:col-span-1"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseBox from '~/components/BaseBox.vue'
</script>