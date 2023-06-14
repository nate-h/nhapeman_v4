<template>
  <div class="projects">
    <ul v-if="$route.name === 'Projects'" class="list">
      <HeaderCard header="Projects">
        <p>Here are some of the fun coding projects I created outside of work. Enjoy!</p>
      </HeaderCard>

      <ProjectMario />
      <ProjectWhirling />
      <ProjectMinesweeper />
      <ProjectMyTunes />
      <ProjectVue />
      <ProjectPacman />
      <!-- <ProjectPixelChaser/> -->
    </ul>

    <router-view class="project-child"></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

import ProjectMario from './ProjectMario.vue'
import ProjectWhirling from './ProjectWhirling.vue'
import ProjectMinesweeper from './ProjectMinesweeper.vue'
import ProjectMyTunes from './ProjectMyTunes.vue'
import ProjectVue from './ProjectVue.vue'
import ProjectPacman from './ProjectPacman.vue'
import ProjectPixelChaser from './ProjectPixelChaser.vue'

const route = useRoute()
const router = useRouter()
debugger
</script>

<style lang="scss">
@import '../scss/main.scss';

.projects {
  padding: $padding-large;
  @extend %t-to-b, .ca;

  .list > *:not(:last-child) {
    margin-bottom: $margin-large;
  }

  .project-child {
    h1,
    h2,
    h3 {
      margin: $margin-medium 0;
    }
    p {
      margin: $margin-medium 0;
    }
    ol {
      padding-left: $padding-large;
    }
    li {
      padding-bottom: $padding;
    }
  }
}

@media screen and (max-width: $break-large) {
  .projects {
    padding: $padding-large 0;
  }
}
</style>
