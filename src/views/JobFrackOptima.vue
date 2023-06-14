<template>
    <JobContainer
        company="FrackOptima"
        :img="'../assets/frackoptima.png'"
        link="http://frackoptima.com/"
        years="May 2016 - October 2017"
        short-description="Software Engineer"
      >
        <p>
          I worked part-time at FrackOptima as a software engineer while working full-time for
          Applied Invention. FrackOptima is a hydraulic fracturing company that specializes in
          software and services for optimal hydraulic fracturing treatments. There's several systems
          which make this all possible. Most of my work has been on the company website and the
          fracking simulator.
        </p>
      </JobContainer>
</template>

<script setup lang="ts">
import JobContainer from '../components/Job.vue'
</script>