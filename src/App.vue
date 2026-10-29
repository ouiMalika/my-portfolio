<template>
  <SiteHeader />
  <main class="page">
    <RouterView />
  </main>
  <footer class="site-footer">
    <span>© {{ year }} Malika Buribayeva</span>
  </footer>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
const year = new Date().getFullYear()
</script>
