<template>
  <div class="home">
    <about-me-container></about-me-container>

    <HeaderCard header="Job History">
      <JobHRL />
      <JobAppliedInvention />
      <JobFrackOptima />
    </HeaderCard>

    <HeaderCard header="Personal Projects">
      <ProjectMario />
      <ProjectMinesweeper />
      <ProjectMyTunes />
      <ProjectPacman />
      <ProjectVue />
      <ProjectWhirling />
    </HeaderCard>
  </div>
</template>

<script setup lang="ts">
import AboutMeContainer from '../components/AboutMe.vue'
import JobFrackOptima from '../jobs/JobFrackOptima.vue'
import JobAppliedInvention from '../jobs/JobAppliedInvention.vue'
import JobHRL from '../jobs/JobHRL.vue'
import ProjectMario from '@/projects/ProjectMario.vue'
import ProjectMinesweeper from '@/projects/ProjectMinesweeper.vue'
import ProjectMyTunes from '@/projects/ProjectMyTunes.vue'
import ProjectPacman from '@/projects/ProjectPacman.vue'
import ProjectVue from '@/projects/ProjectVue.vue'
import ProjectWhirling from '@/projects/ProjectWhirling.vue'

const links = [
  { name: 'About Me', link: 'aboutme' },
  { name: 'Job History', link: 'jobhistory' },
  { name: 'Projects', link: 'projects' }
]
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

@media screen and (max-width: $break-large) {
  .home {
    padding: $padding-large 0;
  }
}
</style>
