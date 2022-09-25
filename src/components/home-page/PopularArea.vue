<script setup lang="ts">
import VideoCard from '@/components/global/VideoCard.vue'

const props = defineProps({
  videoDataset: Object,
  title: String,
})
</script>

<template>
  <div class="mt-6">
    <h3 class="text-2xl font-semibold flex text-slate-100 ml-16">
      {{ title }}
      <slot></slot>
    </h3>
  </div>
  <div class="flex justify-between w-full pl-16 mb-60">
    <VideoCard
      v-for="(videoData, index) in videoDataset"
      :key="index"
      :video-data="videoData"
      :show-description="true"
      class="first:mt-10 last:mt-16"
    />
  </div>
</template>
