<template>
  <ProjectCard title="Image Effects" description="Python, OpenCV, Jupyter, NumPy, Matplotlib">
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/image-effects.png" />
    </template>
    <template v-slot:summaryText>
      <p>
        A Jupyter notebook that contains a couple dozen image transformations, some recreating
        trivial Photoshop effects and others just having fun with OpenCV.
      </p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <img alt="image effects example" src="@/assets/image-effects-2.png" />
    </template>
    <template v-slot:fullText>
      <div class="demo-text">
        <p>
          A
          <a-ext link="https://github.com/nate-h/image-effects/blob/main/run.ipynb"
            >notebook containing</a-ext
          >
          a couple dozen fun image transformations using mostly OpenCV and NumPy.
        </p>
        <p>
          I love working with things I can see whether its: game development, frontend, or computer
          vision problems. One of the first programs I created for fun was a
          <a-ext
            link="https://www.mathworks.com/matlabcentral/fileexchange/35975-picture-letter-recognition-software"
            >letter recognition software written in Matlab.</a-ext
          >
          I've been lucky enough to work on some computer vision problems in my career but wanted to
          take it slow and explore all the features OpenCV provides. This project was that. A
          deliberate attempt of playing with OpenCV on a ton of small problems so I can learn more
          of the basics OpenCV provides.
        </p>
      </div>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

.demo img {
  max-height: 400px;
}
</style>
