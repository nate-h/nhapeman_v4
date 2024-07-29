<template>
  <JobCard company="HRL" link="https://www.hrl.com/" years="July 2021 - Present" short-description="Full Stack">
    <template v-slot:image>
      <img alt="hrl logo" src="@/assets/hrl.png" />
    </template>
    <ul>
      <li>Full Stack engineering on a quantum device testing program</li>
    </ul>
    <p></p>
  </JobCard>
</template>

<script setup lang="ts">
import JobCard from './JobCard.vue'
</script>
