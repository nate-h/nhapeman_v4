<template>
  <JobCard
    company="Applied Invention"
    link="https://www.appliedinvention.com/"
    years="June 2014 - June 2021"
    short-description="Full Stack, Simulation / Game Development, Machine Learning, Data Science"
  >
    <template v-slot:image>
      <img alt="Applied Invention logo" src="@/assets/applied_invention.png" />
    </template>
    <p>
      In short, Applied Invention is a company that helps leading companies and entrepreneurs with
      any challenging problem they may have. I've been lucky enough to work for AI since they hired
      me out of college in 2014. All of the projects I've worked on have been extremely interesting
      and exciting to work on. The first project I worked on was our in-house geo-spacial game
      engine that was built for simulations. The engine was written in c++ on top of panda3d, an
      open source 3D game engine. Currently I work on a machine learning project and do everything
      from full stack development, data science to machine learning. My big contribution to this
      project is creating the majority of an internal annotation website. The website can be used to
      fully annotate our images but works with external sources of data. It also has powerful tools
      to analyze the data. Some of the things I do on a weekly basis for this project are: managing
      and improving the internal annotation website, making sure all of the annotators are happy and
      working, running a multi-stage data pipeline on all of our data, and analyzing our annotation
      data to find useful insights and to shape the direction when need to move it in.
    </p>
  </JobCard>
</template>

<script setup lang="ts">
import JobCard from './JobCard.vue'
</script>
