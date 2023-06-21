<template>
  <JobCard
    company="FrackOptima"
    link="http://frackoptima.com/"
    years="May 2016 - October 2017"
    short-description="Full Stack"
  >
    <template v-slot:image>
      <img alt="frackoptima logo" src="@/assets/frackoptima.png" />
    </template>
    <p>
      I worked part-time at FrackOptima as a software engineer while working full-time for Applied
      Invention. FrackOptima is a hydraulic fracturing company that specializes in software and
      services for optimal hydraulic fracturing treatments. There's several systems which make this
      all possible. Most of my work has been on the company website and the fracking simulator.
    </p>
  </JobCard>
</template>

<script setup lang="ts">
import JobCard from './JobCard.vue'
</script>
