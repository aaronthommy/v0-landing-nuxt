<template>
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-primary">
          MyNuxtSite
        </NuxtLink>
        <nav class="hidden md:flex space-x-4">
          <NuxtLink to="#features" class="text-gray-600 hover:text-primary">Features</NuxtLink>
          <NuxtLink to="#testimonials" class="text-gray-600 hover:text-primary">Testimonials</NuxtLink>
          <NuxtLink to="#pricing" class="text-gray-600 hover:text-primary">Pricing</NuxtLink>
        </nav>
        <button class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
          Get Started
        </button>
      </div>
    </header>
  </template>