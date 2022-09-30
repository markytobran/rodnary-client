<script setup lang="ts">
const props = defineProps({
  title: String,
  url: String,
})
</script>

<template>
  <div class="-mb-20 font-bold text-lg text-slate-100 tracking-wide">
    <span class="text-lime-600 mr-3">rodnary</span>
    <span class="text-2xl mr-3">{{ props.title }}</span>
    <RouterLink class="text-secondary-color text-base cursor-pointer relative z-20" :to="props.url">
      See more
    </RouterLink>
  </div>
</template>
