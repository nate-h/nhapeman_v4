<template>
  <ProjectCard title="Pacman Remake" description="Javascript">
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/pacman.png" />
    </template>
    <template v-slot:summaryText>
      <p>
        Remake of the basics of Pacman. Funnest part was using Dijkstra's algorithm for some of the
        ghosts. Other ghosts move randomly.
      </p>
    </template>
    <template v-slot:demo>
      <iframe
        src="https://nate-h.github.io/pacman_js/"
        frameborder="0"
        allow="autoplay; encrypted-media"
        scrolling="no"
        allowfullscreen
        style="width: 600px; height: 430px"
      ></iframe>
    </template>
    <!-- Full -->
    <template v-slot:fullText>
      <p>
        A lot of the fun I got from creating this game was in trying to optimize it. For instance,
        rather than rendering everything in the level each frame, I only rendered were the changes
        happened in the game. I also made sure I used the best Data Structures and algorithms so no
        unnecessary work was done.
      </p>
      <p>
        The hardest thing was creating the AI for the ghost. In order to do this, I had to transform
        the original two dimensional array map into a graph. The ghost can then navigate through the
        map using the nodes as reference points. They can use these nodes to move towards Pacman by
        checking which node Pacman is going towards, or to move around the map randomly. The orange
        ghost in the original Pacman moves this way but most people don't notice since they are
        trying to survive. Now to get each ghost to move towards Pacman I used Dijkstra's algorithm
        to compute the fastest path.
      </p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>
