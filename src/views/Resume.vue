<template>
  <div class="resume">
    <iframe
      src="https://drive.google.com/file/d/1dPxjQ3kOS0bORjg5x8Te-yNRe7FLYrRE/preview"
      class="pdf"
      frameBorder="0"
      scrolling="auto"
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '../scss/main.scss';
.resume {
  display: flex;
  width: 100%;

  .pdf {
    width: 100%;
  }
}
</style>
