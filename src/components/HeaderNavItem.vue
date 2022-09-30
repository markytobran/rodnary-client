<script setup lang="ts">
import IconHome from '@/components/icons/IconHome.vue'
const props = defineProps({ path: String })
</script>

<template>
  <li
    class="mb-12 mr-auto ml-auto relative h-11 flex justify-center rounded-lg w-11/12 transform navlink z-20"
    :class="$route.path === props.path ? 'bg-primary-color-light translate-x-10' : 'bg-transparent'"
  >
    <RouterLink :to="props.path" class="flex justify-center items-center">
      <IconHome
        class="fill-current"
        :class="$route.path === props.path ? 'text-white -translate-x-10' : 'text-secondary-color'"
      />
    </RouterLink>
    <span
      class="rounded-xl h-3 w-3 bg-average-pink absolute top-4 right-2"
      :class="$route.path === props.path ? 'block animate-bounce' : 'hidden'"
    >
    </span>
  </li>
</template>

<style scoped>
.navlink {
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
