<template>
  <ProjectCard
    title="Fun with React"
    description="React, TypeScript, Sass, clsx"
    :showMore="showMore"
  >
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/react_logo.png" />
    </template>
    <template v-slot:summaryText>
      <p>A collection of small React.js projects.</p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <div style="position: relative; padding-top: 56.25%">
        <iframe
          src="https://www.youtube.com/embed/EMslyjWIPGo"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        ></iframe>
      </div>
    </template>
    <template v-slot:fullText>
      <p>TODO</p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
defineProps<{
  showMore: boolean
}>()
</script>
