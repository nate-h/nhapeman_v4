<template>
  <ProjectCard
    title="Whirling: an AI-driven audio visualizer"
    description="Librosa, OpenGL, Python, Spleeter, NumPy"
  >
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img src="@/assets/tiled_whirling.png" />
    </template>
    <template v-slot:summaryText>
      <p>
        A music visualizer that uses audio feature extraction and segmentation to create more
        representative visuals. Built from scratch and heavily optimized so it could run near 60fps
        while using python ;)
      </p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <iframe
        src="https://player.vimeo.com/video/454955980"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        style="width: 100%; height: 500px"
      >
      </iframe>
    </template>
    <template v-slot:fullText>
      <p>
        Code
        <a-ext link="https://github.com/nate-h/Whirling"> https://github.com/nate-h/Whirling</a-ext>
      </p>
      <br />
      <h2>TLDR - I built a music visualizer</h2>
      <p>
        The colors map to separated sources. <br />
        Here's the key:
      </p>
      <ul>
        <li style="color: green">Green -> vocals</li>
        <li style="color: blue">Blue -> other (piano, guitar, etc.)</li>
        <li style="color: red">Red -> Drums</li>
        <li style="color: purple">Purple -> Bass</li>
      </ul>
      <br />
      <h2>What is Whirling?</h2>
      <p>
        Whirling is a music visualizer that tries to intelligently understand as much about the song
        that's playing so it could create a more representative visual. All songs played have to
        undergo a two step preprocessing algorithm that runs a source separator and a feature
        extractor on each of the generated sources. I use Spleeter and Librosa to do source
        separation. Spleeter is able to separate the drums, vocals, bass and other for each track.
        Librosa can separate the percussion and harmonics. For feature extracting, I use Librosa
        exclusively.
      </p>
      <br />
      <p>
        I haven't worked extensively with python for GUI/game development so I decided to use pygame
        and opengl for creating the visualizer. I thought it would be a good learning experience to
        gauge the python based gui/game development tools out there. What it turned into was a good
        understanding on how to use numpy for large array manipulation and opengl for VAO rendering.
        I have 6 visualizers that can be cycled through. Visualizers 1, 4 and 6 make heavy use of
        moving averages, thresholds and other heuristics to get the colors to render just right.
        Visualizers 1 and 4->6 use the same colors to represent the separated source that's heard.
        See color key below for color mappings.
      </p>
      <h2>Brief description of each visualizer</h2>
      <ol>
        <li>
          combo_board: Uses both spectrograms and features to render a grid of squares. Each
          illuminated square represents a certain frequency range heard. Squares near the top right
          of the screen map to higher frequencies. The color of that square represents what source
          it came from.
        </li>
        <li>debug: Shows all features generated for current source separation plan.</li>
        <li>spectrogram: Shows all spectrograms generated for current source separation plan.</li>
        <li>
          concentric_squares: Uses the source separated spectrograms to render concentric square
          rings that represent what frequency is being played. The bigger the ring, the higher the
          frequency. Ring color matches source heard. This visualizer combines colors if 2+ sources
          are playing the same frequency.
        </li>
        <li>stacked_equalizers: Show all frequencies heard with no adjustments.</li>
        <li>
          checkerboard: same as combo_board but with no use of features and much less filtering.
        </li>
      </ol>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';
ul {
  list-style: none;
}

@media screen and (max-width: $break-small) {
  iframe {
    height: 400px !important;
  }
}
</style>
