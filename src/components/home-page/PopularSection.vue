<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PopularArea from '@/components/home-page/PopularArea.vue'
import type { VideoDataType } from '@/types/videoTypes.ts'

let naturalVideosData = ref({})
let commercialVideosData = ref({})

onMounted(async () => {
  const response = await fetch(`/api/video/topvideos/home?limit=3&skip=0`)
  const json = await response.json()
  const { naturalVideos, commercialVideos }: { naturalVideos: VideoDataType; commercialVideos: VideoDataType } = json
  naturalVideosData.value = naturalVideos
  commercialVideosData.value = commercialVideos
})
</script>

<template>
  <section class="h-screen w-11/12">
    <h1 class="pt-5 text-2xl font-bold ml-16 text-slate-100 mt-5">Videos we think you'll like</h1>
    <PopularArea title="Commercial" :videoDataset="commercialVideosData">
      <img src="@/assets/img/home-page/carp.png" class="h-20 w-32" />
    </PopularArea>
    <PopularArea title="Natural" :videoDataset="naturalVideosData">
      <img src="@/assets/img/home-page/roach.png" class="h-20 w-24" />
    </PopularArea>
  </section>
</template>
