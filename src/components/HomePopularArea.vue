<script setup lang="ts">
import AppVideoCard from '@/components/AppVideoCard.vue'

const props = defineProps({
  videoDataset: Object,
  title: String,
})
</script>

<template>
  <div class="mt-6">
    <h3 class="text-2xl font-semibold flex text-slate-100">
      {{ title }}
      <slot />
    </h3>
  </div>
  <div class="flex justify-between w-11/12 mb-60 mx-auto">
    <AppVideoCard
      v-for="(videoData, index) in videoDataset"
      :key="index"
      :video-data="videoData"
      :show-description="true"
      class="first:mt-12 last:mt-20 w-84"
    />
  </div>
</template>
