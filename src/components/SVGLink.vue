<template>
  <a :href="link" class="svg-link" :class="{ light: light }">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  link: string
  light?: boolean
}>()
</script>

<style lang="scss">
@import '../scss/main.scss';

.svg-link {
  @extend %l-to-r, %pop;

  transition: all $transition-time $transition-function;

  img {
    height: $logo;
    width: $logo;
  }

  .svg-label {
    margin-left: $margin;
  }

  &.light {
    filter: invert(1);
  }
}
</style>
