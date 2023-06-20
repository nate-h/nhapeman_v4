<template>
  <div class="header-card">
    <h1 class="header">{{ header }}</h1>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  header: string
}>()
</script>

<style lang="scss">
@import '../scss/main.scss';

.header-card {
  @extend %shadow;
  align-items: center;
  background-color: $light1;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin: $margin-small 0;
  max-width: map-get($breakpoints, large);
  padding: $padding-large;
  width: 100%;

  & > .header {
    background-color: $light1;
    padding: $padding-large;
    z-index: 1;
  }

  & > .body {
    width: 100%;
  }

  .header + .body {
    border-top: solid 1px #e4e6e8;
    padding-top: 30px !important;
    margin-top: -30px !important;
  }
}
</style>
