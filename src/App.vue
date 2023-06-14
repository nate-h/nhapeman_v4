<template>
  <AppHeader />
  <RouterView class="route-base" />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<style lang="scss">
@import '@/scss/general.scss';

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .app-header {
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
