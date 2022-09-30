<script setup>
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import AppVideoCard from '@/components/AppVideoCard.vue'
import 'vueperslides/dist/vueperslides.css'

const emit = defineEmits(['someEvent'])

const limit = ref(8)
const skip = ref(0)
const leftArrow = '<'
const rightArrow = '>'
const zindex = ref('')

const incrementLimitAndSkip = () => {
  skip.value += 8
  emit('fetchVideo', { limit: limit.value, skip: skip.value })
}

const props = defineProps({
  videos: Array,
})

const addZIndex = () => {
  zindex.value = 'relative z-50'
}

const removeZIndex = () => {
  zindex.value = ''
}
</script>

<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="4"
    :bullets="false"
    slide-multiple
    fixed-height="410px"
    :gap="2"
    :slide-ratio="1 / 4"
    :dragging-distance="200"
    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    @next="incrementLimitAndSkip"
    :class="zindex"
  >
    <template #arrow-left>
      <span
        class="bg-secondary-color text-white text-3xl rounded-full block h-12 w-12 flex justify-center items-center"
      >
        {{ leftArrow }}
      </span>
    </template>

    <template #arrow-right>
      <span
        class="bg-secondary-color text-white text-3xl rounded-full block h-12 w-12 flex justify-center items-center"
      >
        {{ rightArrow }}
      </span>
    </template>
    <vueper-slide v-for="video in videos" :key="video._id">
      <template #content>
        <AppVideoCard :video-data="video" @mouseenter="addZIndex" @mouseleave="removeZIndex" />
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<style>
.vueperslides__arrows--outside .vueperslides__arrow--prev {
  top: 30%;
  left: -48px;
}

.vueperslides__arrows--outside .vueperslides__arrow--next {
  top: 30%;
  right: -48px;
}
</style>
