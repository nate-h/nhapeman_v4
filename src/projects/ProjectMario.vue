<template>
  <ProjectCard title="Super Mario Bros Reloaded" description="C++ with SDL">
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/mario.jpg" />
    </template>
    <template v-slot:summaryText>
      <p>
        Core features of Super Mario Bros with some slight quirks. Built using c++ and SDL before I
        got my first job in computer programming. Learned a ton about OOP, threading and data
        structures while creating this.
      </p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <iframe
        src="https://www.youtube.com/embed/EMslyjWIPGo"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        style="width: 100%; height: 500px"
      ></iframe>
    </template>
    <template v-slot:fullText>
      <p>
        Being a 90's kid, I played my fair share of Mario based games. The next logical step was to
        create my own version of my beloved childhood game! So being fairly brand new to
        programming, I thought it was a great idea to recreate some of the basic functionality of
        Super Mario Bros. The hardest part of this for sure was trying to acquire all of the art for
        the game. So much so that I started borrowing assets from other games. It was an amazing
        learning experience to teach me c++ and polymorphism. It was also a good introduction to
        data structures, memory management, and threading.
      </p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

@media screen and (max-width: $break-small) {
  iframe {
    height: 300px !important;
  }
}
</style>
