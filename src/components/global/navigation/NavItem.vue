<script setup lang="ts">
import HomeIcon from '@/components/icons/IconHome.vue'
const props = defineProps({ path: String })
</script>

<template>
  <li
    class="mb-12 mr-auto ml-auto relative h-10 flex justify-center rounded-lg w-11/12 transform bg-transparent navlink z-20"
    :class="{ 'animate-navlink': $route.path === props.path }"
  >
    <RouterLink :to="props.path" class="flex justify-center items-center">
      <HomeIcon :color="$route.path !== props.path ? '#CF6D00' : '#fff'" :class="{ 'animate-navicon': $route.path === props.path }" />
    </RouterLink>
  </li>
</template>

<style scoped>
.animate-navlink .router-link-exact-active::after {
  content: '';
  position: absolute;
  top: 13px;
  right: 7px;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: #eb9176;
}

.navlink {
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.animate-navlink {
  background: #566b34;
  transform: translateX(45px);
}

.animate-navicon {
  transform: translateX(-45px);
}
</style>
