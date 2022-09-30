<script setup>
import HomeScreen from '@/components/HomeScreen.vue'
import HomePopular from '@/components/HomePopular.vue'
import HomeAllVideos from '@/components/HomeAllVideos.vue'
</script>

<template>
  <div class="h-screen">
    <HomeScreen />
    <div class="pl-16 w-11/12">
      <HomePopular />
      <HomeAllVideos />
    </div>
  </div>
</template>
