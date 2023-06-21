<template>
  <ProjectCard title="MyTunes: a music player" description="Java, JavaZOOM">
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/mytunes.png" />
    </template>
    <template v-slot:summaryText>
      <p>
        A simple music player that made it a breeze to create playlists. The first and only program
        I wrote in Java to this day.
      </p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <iframe
        src="https://www.youtube.com/embed/1c4erMvMnVQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        style="width: 100%; height: 500px"
      ></iframe>
    </template>
    <template v-slot:fullText>
      <p>
        Before I got into streaming, I had a pretty big music collection. I was really into making
        playlists but was frustrated at how iTunes didn't have the best UI for managing playlists.
        Trying to improve my coding skills, I thought it would be fun to create my own version of
        iTunes with some cool features for managing playlists. So I created MyTunes. In creating it,
        I learned a good amount about multithread synchronization, object serialization, regex
        filters and swing components.
      </p>
      <p>
        I created this media player for the soul purpose of having greater management over my music.
        The layout and functionality is similar to iTunes but it has some additional features like
        hotkeys for inserting songs into playlists or check marks to see which playlist a song is
        in. Speed was a big concern while implementing this media player. When a user adds music to
        the library, all the information for each song is calculated only once (not each time
        myTunes start) then stored in a hashmap that way I can access information in constant time.
        Also, I don't copy the songs to a folder, rather I copy the address then load it when the
        user wants to play. Lastly, when I save the information, I serialize it that way it loads
        fast. Two of the most difficult things to implement were the regex filter for the search bar
        and the multi-threading for playing the sound.
      </p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

@media screen and (max-width: $break-small) {
  iframe {
    height: 300px !important;
  }
}
</style>
