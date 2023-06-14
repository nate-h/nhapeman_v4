<template>
  <ProjectCard :title="title" :description="description" :moreInfo="moreInfo">
    <template v-slot:summaryImage>
      <img src="@/assets/mario.jpg" />
    </template>

    <template v-slot:summaryText>
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

    <template v-slot:demoDetails>
      <p></p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
const title = 'Super Mario Bros Reloaded'
const description = 'C++ with SDL'
const moreInfo = 'Demo'
</script>
