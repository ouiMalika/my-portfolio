<template>
  <main class="main">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>
