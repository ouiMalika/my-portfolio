<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink to="/" class="site-name">Malika Buribayeva</RouterLink>
      <nav class="site-nav" aria-label="Main">
        <RouterLink to="/" exact-active-class="is-active">About</RouterLink>
        <RouterLink to="/research" active-class="is-active">Research</RouterLink>
        <RouterLink to="/tech" active-class="is-active">Tech</RouterLink>
        <RouterLink to="/design" active-class="is-active">Design</RouterLink>
      </nav>
    </div>
  </header>
</template>
