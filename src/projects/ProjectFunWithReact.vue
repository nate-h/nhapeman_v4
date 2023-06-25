<template>
  <ProjectCard title="Fun with React" description="React, TypeScript, Sass, clsx">
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/react_logo.png" />
    </template>
    <template v-slot:summaryText>
      <p>
        Fun-with-react is a collection of small react examples I created to play around with React
        and understand the basics.
      </p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <img alt="React logo" src="@/assets/react_logo.png" />
    </template>
    <template v-slot:fullText>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nate-h/fun-with-react"
          >fun-with-react</a
        >
        is a collection of small React examples. Live example

        <a target="_blank" rel="noopener noreferrer" href="https://nate-h.github.io/fun-with-react/"
          >here</a
        >.
      </p>
      <br />
      <h2>Some quick thoughts on React coming from Vue</h2>
      <br />
      <p>
        React isn't the first web framework I learned or even second so it was interesting trying to
        translate ideas from other frameworks over. It's hard to say what I don't like and what I'm
        frankly not used to. It was nice seeing that there was a dozen ways to do things but was
        surprised to see how much Javascript in general things took. That and how many additional
        installs I needed to try to get some of the behaviors I wanted (clsx, styled-components).
      </p>
      <br />
      <p>
        One of the interesting things was trying to translate Vue's computed over to React and
        learning that the concept is basically inverted. What I mean is in Vue when I define a const
        variable, that variable won't be recreated on re-renders. Meanwhile in React, a const
        variable will get recomputed on re-renders/useState changes. So the analog of a Vue computed
        prop is a regular React component variable.
      </p>
      <br />
      <p>
        The obvious plus side to React is its huge community. Whether you're looking at the numerous
        packages, tutorials, stackoverflow help, etc. For any question I had, it was a breeze
        finding a good answer. And I never considered this until exploring React but it made me
        realize how annoying Vue's vue2->vue3 transition is in terms of actively avoiding vue2
        search results due to how different the options API is compared to the composition API.
      </p>
      <br />
      <p>
        Overall it's been a mostly positive experience learning React with the exception of some
        things relating to custom styling which I think Vue's single file components gets right. I
        might eventually like css-in-js one day but it definitely still feels weird.
      </p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

.demo img {
  height: 100px;
}
</style>
