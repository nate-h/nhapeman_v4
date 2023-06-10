<template>
  <a :href="link" class="svg-link">
    <slot></slot>
    <p class="svg-label">{{ label }}</p>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  link: string
  label: string
}>()
</script>

<style lang="scss">
@import '../scss/main.scss';

.svg-link {
  @extend %l-to-r, %pop;

  transition: all $transition-time $transition-function;

  svg {
    height: $logo;
    width: $logo;
  }

  .svg-label {
    margin-left: $margin;
  }
}
</style>
