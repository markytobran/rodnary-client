<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomePopularArea from '@/components/HomePopularArea.vue'
import type { VideoDataType } from '@/types/videoTypes.ts'

let naturalVideosData = ref({})
let commercialVideosData = ref({})

onMounted(async () => {
  const response = await fetch(`/api/videos/topvideos/home?limit=3&skip=0`)
  const json = await response.json()
  const { naturalVideos, commercialVideos }: { naturalVideos: VideoDataType; commercialVideos: VideoDataType } = json
  naturalVideosData.value = naturalVideos
  commercialVideosData.value = commercialVideos
})
</script>

<template>
  <section class="max-h-fit">
    <h1 class="pt-5 text-3xl font-bold text-slate-100 mt-5">Videos we think you'll like</h1>
    <HomePopularArea title="Commercial" :videoDataset="commercialVideosData">
      <img src="@/assets/img/home-page/carp.png" class="h-20 w-32" />
    </HomePopularArea>
    <HomePopularArea title="Natural" :videoDataset="naturalVideosData">
      <img src="@/assets/img/home-page/roach.png" class="h-20 w-24" />
    </HomePopularArea>
  </section>
</template>
