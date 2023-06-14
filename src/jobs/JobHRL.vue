<template>
    <JobCard
        company="HRL"
        :img="'../assets/hrl_logo.png'"
        link="https://www.hrl.com/"
        years="July 2021 - Present"
        short-description="Software Engineer"
      >
        <ul>
          <li>Full Stack engineering on a quantum device testing program</li>
          <li>TS / SCI</li>
        </ul>
        <p></p>
      </JobCard>
</template>

<script setup lang="ts">
import JobCard from './JobCard.vue'
</script>