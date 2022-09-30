<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
import Slider from '@/components/AppSlider.vue'
import HomeAllVideosHeader from '@/components/HomeAllVideosHeader.vue'
import { API } from '@/types/videoTypes.ts'
let videos = ref([])
let allVideos = ref([])
let commercialVideos = ref([])
let naturalVideos = ref([])
let riverVideos = ref([])
let feederVideos = ref([])
let floatVideos = ref([])

onMounted(() => {
  fetchVideos()
})

async function fetchVideos() {
  try {
    const { data: videos } = await axios(`/api/videos?limit=${API.LIMIT}&skip=${API.SKIP}`)
    allVideos.value = videos

    const { data: commercial } = await axios('/api/videos/categories/venue/commercial')
    commercialVideos.value = commercial

    const { data: natural } = await axios('/api/videos/categories/venue/natural')
    naturalVideos.value = natural

    const { data: river } = await axios('/api/videos/categories/water/river')
    riverVideos.value = river

    const { data: feeder } = await axios('/api/videos/categories/fishing/feeder')
    feederVideos.value = feeder

    const { data: float } = await axios('/api/videos/categories/fishing/float')
    floatVideos.value = float
  } catch {
    console.log('Something went wrong')
  }
}

async function fetchAllVideo({ limit, skip }) {
  try {
    const { data: videos } = await axios(`/api/videos?limit=${limit}&skip=${skip}`)
    videos.forEach((video) => allVideos.value.push(video))
    console.log(videos)
  } catch {
    console.log('Something went wrong')
  }
}

async function fetchMoreVideos({ limit, skip, key, value }) {
  console.log(key, value)
  try {
    const { data: videos } = await axios(`/api/videos/categories/${key}/${value}?limit=${limit}&skip=${skip}`)
    videos.forEach((video) => {
      if (value === 'commercial') commercialVideos.value.push(video)
      if (value === 'natural') naturalVideos.value.push(video)
      if (value === 'river') riverVideos.value.push(video)
      if (value === 'feeder') feederVideos.value.push(video)
      if (value === 'float') floatVideos.value.push(video)
    })
  } catch {
    console.log('Something went wrong')
  }
}
</script>

<template>
  <section class="min-h-screen ml-10 mt-24">
    <div>
      <h1 class="font-bold text-lg text-slate-100 mb-10 text-2xl">Popular Videos</h1>
      <div>
        <HomeAllVideosHeader title="All Videos" url="/category/venue/all" />
        <Slider :videos="allVideos" @fetch-video="fetchAllVideo" class="mt-20" />
      </div>
    </div>
    <div class="-mt-44">
      <h1 class="font-bold text-lg text-slate-100 text-2xl">Popular Videos By Category</h1>
      <div class="mt-10">
        <HomeAllVideosHeader title="Natural Venue Fishing" url="/category/venue/natural" />
        <Slider
          :videos="naturalVideos"
          @fetch-video="fetchMoreVideos('venue', 'natural')"
          categoryKey="venue"
          categoryValue="natural"
          class="mt-20 -mb-32"
        />
      </div>

      <div class="-mt-44">
        <HomeAllVideosHeader title="Commercial Venue Fishing" url="/category/venue/commercial" />
        <Slider
          :videos="commercialVideos"
          @fetch-video="fetchMoreVideos"
          categoryKey="venue"
          categoryValue="commercial"
          class="mt-20"
        />
      </div>
      <div class="-mt-44">
        <HomeAllVideosHeader title="River Fishing" url="/category/water/river" />
        <Slider
          :videos="riverVideos"
          @fetch-video="fetchMoreVideos"
          categoryKey="water"
          categoryValue="river"
          class="mt-20"
        />
      </div>
      <div class="-mt-44">
        <HomeAllVideosHeader title="Feeder Fishing" url="/category/fishing/feeder" />
        <Slider
          :videos="feederVideos"
          @fetch-video="fetchMoreVideos"
          categoryKey="fishing"
          categoryValue="feeder"
          class="mt-20"
        />
      </div>
      <div class="-mt-44">
        <HomeAllVideosHeader title="Float Fishing" url="/category/fishing/float" />
        <Slider :videos="floatVideos" @fetch-video="fetchMoreVideos" class="mt-20" />
      </div>
    </div>
  </section>
</template>
