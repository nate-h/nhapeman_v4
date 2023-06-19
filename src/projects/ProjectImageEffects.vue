<template>
  <ProjectCard
    title="Image Effects"
    description="Python, OpenCV, Jupyter, NumPy, Matplotlib"
    :showMore="showMore"
  >
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/image-effects.png" />
    </template>
    <template v-slot:summaryText>
      <p>
        A Jupyter notebook that contains a couple dozen image transformations, some recreating
        trivial Photoshop effects and others just having fun with OpenCV.
      </p>
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
