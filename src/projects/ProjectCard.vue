<template>
  <div class="project-card">
    <!-- Show Less -->
    <div class="show-less" v-if="!showMore">
      <div class="summary-image">
        <slot name="summaryImage" class="thumbnail"></slot>
      </div>
      <div class="summary-content">
        <header>
          <h1 class="title">{{ title }}</h1>
          <span class="description">{{ description }}</span>
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
const props = defineProps<{
  title: string
  description: string
  showMore: boolean
}>()
</script>

<style lang="scss">
@import '../scss/main.scss';

$img-side: 200px;

.project-card {
  border: 1px solid red;
  background-color: $light1;
  max-width: map-get($breakpoints, large);
  padding: $padding-x-large;
  width: 100%;

  .header {
    margin: $margin 0;

    .title {
      display: inline-block;
    }

    .description {
      @extend %default-size;
      color: $dark3;
      font-weight: bold;
      margin-left: $margin;
    }
  }

  .show-more {
    @extend %t-to-b, .lt;
    margin: 0 $margin-xxx-large;

    .header {
      margin-bottom: $margin-large;
    }

    .text {
      padding: $padding-x-large;
      text-align: left;
    }
  }

  .show-less {
    @extend %l-to-r, .lt;

    .summary-image {
      @extend %l-to-r, .ca;
      flex-grow: 0;
      flex-shrink: 0;
      margin-right: $padding-large;
      width: $img-side;

      img {
        width: $img-side;
      }

      svg {
        width: $img-side;
      }
    }

    .summary-content {
      .header {
        .link {
          margin-left: auto;
          @extend %router-link;
        }
      }
    }
  }
}

@media screen and (max-width: $break-large) {
  .ProjectCard {
    padding: $padding-large;

    .header {
      .title {
        display: block;
      }
      .description {
        margin-left: 0;
      }
    }

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
