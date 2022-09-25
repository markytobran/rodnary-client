<script setup>
import HomeScreen from '@/components/home-page/HomeScreen.vue'
import PopularSection from '@/components/home-page/PopularSection.vue'
import AutoSlider from '@/components/global/AutoSlider.vue'
</script>

<template>
  <div class="h-screen">
    <HomeScreen />
    <div class="pl-16 w-11/12">
      <PopularSection />
      <AutoSlider />
    </div>
  </div>
</template>
