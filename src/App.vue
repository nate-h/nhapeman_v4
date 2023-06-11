<template>
  <NavBar />
  <RouterView class="route-base" />
  <MyFooter />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue'
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
