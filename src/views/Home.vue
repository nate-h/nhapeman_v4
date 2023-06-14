<template>
  <div class="home">
    <about-me-container></about-me-container>

    <HeaderCard header="Job History" class="job-components">
      <JobHRL/>
      <JobAppliedInvention/>
      <JobFrackOptima/>
    </HeaderCard>
  </div>
</template>

<script setup lang="ts">
import JobFrackOptima from '../jobs/JobFrackOptima.vue';
import JobAppliedInvention from '../jobs/JobAppliedInvention.vue'
import JobHRL from '../jobs/JobHRL.vue'
import AboutMeContainer from '../components/AboutMe.vue'

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
