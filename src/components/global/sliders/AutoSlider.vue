<script setup lang="ts">
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
</script>

<template>
  <Carousel :autoplay="2000" :wrap-around="true" :items-to-show="3">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <img src="https://i.ytimg.com/vi/p7H_Gn_HmUA/maxresdefault.jpg" />
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>
