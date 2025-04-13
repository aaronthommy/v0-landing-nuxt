<template>
  <section class="flex flex-col md:flex-row md:justify-between gap-4 px-4 md:px-40 pt-8">
    <!-- Linke Spalte: Zwei Boxen übereinander (70% der Breite auf Desktop) -->
    <div class="flex flex-col gap-4 w-full md:w-[80%]">
      <!-- Boxen: Inhalt, Link und optional ein Hintergrundbild -->
      <BaseBox size="M" title="Willkommen!" text="Hier erfährst du, wer ich bin und was ich mache." link="/about"
        linkText="Mehr erfahren" />
      <BaseBox size="M" title="Angebote" text="Entdecke meine Kurse, Affiliate-Produkte und digitale Angebote."
        link="/offers" linkText="Zu den Angeboten" />
    </div>
    <!-- Rechte Spalte: Eine quadratische Box (30% der Breite auf Desktop) -->
    <div class="w-full md:w-[30%]">
      <BaseBox size="Q" title="aaron<br>thommy"
        titleClass="text-6xl font-extrabold mt-14s text-left" text="I make music." textClass="text-xl mt-6 text-gray-600 text-left" />
    </div>

  </section>
</template>
  
<script setup>
import BaseBox from '~/components/BaseBox.vue'
</script>
  

