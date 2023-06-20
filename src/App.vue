<template>
  <AppHeader />
  <RouterView class="route-base" />
</template>

<script setup lang="ts">
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
    position: fixed;
  }

  .route-base {
    flex: 1;
    margin-top: 65px;
  }
}
</style>
