<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li><RouterLink to="/" class="navbar-link">About Me</RouterLink></li>
      <li><RouterLink to="/research" class="navbar-link">Research</RouterLink></li>
      <li><RouterLink to="/tech-projects" class="navbar-link">Tech Projects</RouterLink></li>
      <li><RouterLink to="/design-projects" class="navbar-link">Design Projects</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active { font-weight: bold; }
a.router-link-exact-active { color: var(--vegas-gold); }
</style>
