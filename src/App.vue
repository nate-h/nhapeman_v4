<template>
  <AppHeader />
  <RouterView class="route-base" />
  <AppFooter />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style lang="scss">
@import '@/scss/general.scss';

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .nav-bar {
    flex: 0 0 auto;
  }

  .route-base {
    flex: 1 0 auto;
  }

  .my-footer {
    flex: 0 0 auto;
  }
}
</style>
