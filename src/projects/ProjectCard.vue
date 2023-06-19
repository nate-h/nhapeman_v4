<template>
  <div class="project-card">
    <div class="overlay" v-if="!showMore"></div>
    <!-- Show Less -->
    <div class="show-less" v-if="!showMore">
      <div class="summary-image">
        <slot name="summaryImage" class="thumbnail"></slot>
      </div>
      <div>
        <header>
          <h1>{{ title }}</h1>
          <h2>{{ description }}</h2>
        </header>
        <div>
          <slot name="summaryText"></slot>
        </div>
      </div>
    </div>
    <!-- Show More -->
    <div class="show-more" v-else>
      <header>
        <h1 class="title">{{ title }}</h1>
        <span class="description">{{ description }}</span>
      </header>
      <div class="demo">
        <slot name="demo"></slot>
      </div>
      <div class="full-text">
        <slot name="fullText"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  showMore: boolean
}>()
</script>

<style lang="scss">
@import '../scss/main.scss';

$img-side: 200px;

.project-card {
  background-color: $light1;
  padding: 1rem;
  width: 100%;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      opacity: 1;
    }
  }

  .show-more {
    @extend %t-to-b, .lt;
    margin: 0 $margin-xxx-large;

    .text {
      padding: $padding-x-large;
      text-align: left;
    }
  }

  .show-less {
    display: flex;
    flex-direction: column;
    gap: 1em;

    header {
      font-size: 80%;
    }

    .summary-image {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: start;

      img,
      svg {
        max-width: 100%;
        max-height: 200px;
      }

      svg {
        width: $img-side;
      }
    }
  }
}

@media screen and (max-width: $break-large) {
  .ProjectCard {
    padding: $padding-large;

    .show-less {
      @include holder('t-to-b', 'lt', 'ca');
    }

    .show-more {
      margin: 0;

      .text {
        padding: 0;
        text-align: left;
      }
    }
  }
}
</style>
