<template>
  <ProjectCard title="Minesweeper Remake" description="Javascript" :showMore="showMore">
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/minesweeper.png" />
    </template>
    <template v-slot:summaryText>
      <p>
        Minesweeper was one of the first games I remade as a programmer. Never played the game too
        much but thought it would be fun to recreate and more importantly achievable. Brace yourself
        for the sound effects :D
      </p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <iframe
        src="https://nate-h.github.io/minesweeper_js/"
        frameborder="0"
        allow="autoplay; encrypted-media"
        scrolling="no"
        allowfullscreen
        style="width: 400px; height: 370px"
      ></iframe>
    </template>
    <template v-slot:fullText>
      <p>
        Minesweeper was one of the first games I remade as a programmer. Never played the game too
        much but thought it would be fun to recreate and more importantly achievable. Brace yourself
        for the sound effects :D
      </p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
defineProps<{
  showMore: boolean
}>()
</script>
