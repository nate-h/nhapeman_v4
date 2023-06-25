<template>
  <a target="_blank" rel="noopener noreferrer" :href="link">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>

<style lang="scss">
@import '../scss/main.scss';
</style>
