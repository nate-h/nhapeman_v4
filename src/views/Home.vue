<template>
  <div class="home">
    <about-me-container></about-me-container>

    <HeaderCard header="Job History">
      <JobHRL />
      <JobAppliedInvention />
      <JobFrackOptima />
    </HeaderCard>

    <HeaderCard header="Personal Projects" class="projects">
      <ProjectImageEffects />
      <ProjectWhirling />
      <ProjectFunWithReact />
      <ProjectMario />
      <ProjectMyTunes />
      <ProjectVue />
      <ProjectMinesweeper />
      <ProjectPacman />
    </HeaderCard>
  </div>
</template>

<script setup lang="ts">
import AboutMeContainer from '../components/AboutMe.vue'
import JobFrackOptima from '../jobs/JobFrackOptima.vue'
import JobAppliedInvention from '../jobs/JobAppliedInvention.vue'
import JobHRL from '../jobs/JobHRL.vue'
import ProjectFunWithReact from '@/projects/ProjectFunWithReact.vue'
import ProjectImageEffects from '@/projects/ProjectImageEffects.vue'
import ProjectMario from '@/projects/ProjectMario.vue'
import ProjectMinesweeper from '@/projects/ProjectMinesweeper.vue'
import ProjectMyTunes from '@/projects/ProjectMyTunes.vue'
import ProjectPacman from '@/projects/ProjectPacman.vue'
import ProjectVue from '@/projects/ProjectVue.vue'
import ProjectWhirling from '@/projects/ProjectWhirling.vue'
</script>

<style lang="scss">
@import '../scss/main.scss';

.home {
  padding: $padding-large;
  @extend %t-to-b, .ca;

  & > *:not(:last-child) {
    margin-bottom: $margin-large;
  }

  .job-components {
    .job-container:not(:last-child) {
      margin-bottom: $margin-large;
    }
  }

  ul {
    list-style-position: inside;
  }
}

.projects .body {
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 33%;
    flex-grow: 0;
  }
}

@media screen and (max-width: $break-large) {
  .home {
    padding: $padding-large 0;
  }

  .projects .body > * {
    flex: 40%;
  }
}

@media screen and (max-width: $break-medium) {
  .projects .body > * {
    flex: 100%;
  }
}
</style>
