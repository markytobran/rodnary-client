<script setup>
import HomeIcon from '@/components/icons/IconHome.vue'
import NavItem from './NavItem.vue'
const pathList = ['/', '/about']
</script>

<template>
  <header class="fixed md:relative bottom-0 h-20 md:h-screen w-full md:w-40 z-50">
    <nav class="bg-primary-color h-full fixed rounded-r-3xl z-20 w-full md:w-40">
      <RouterLink to="/" class="mb-32 pt-6 flex justify-center">
        <img src="@/assets/img/logo/rodnary-logo.png" alt="rodnary-logo" />
      </RouterLink>
      <div>
        <ul>
          <NavItem v-for="path in pathList" :key="path" :path="path" />
        </ul>
      </div>
    </nav>
  </header>
</template>
