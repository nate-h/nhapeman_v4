<template>
  <ProjectCard title="Fun with React" description="React, TypeScript, Sass, clsx">
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/react_logo.png" />
    </template>
    <template v-slot:summaryText>
      <p>A collection of small React.js projects.</p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <img alt="React logo" src="@/assets/react_logo.png" />
    </template>
    <template v-slot:fullText>
      <p>TODO</p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

.demo img {
  height: 100px;
}
</style>
