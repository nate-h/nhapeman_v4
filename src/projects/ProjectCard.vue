<template>
  <!-- Show summary in project card. -->
  <div class="project-card">
    <div class="summary-image">
      <slot name="summaryImage" class="thumbnail"></slot>
    </div>
    <header>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </header>
    <slot name="summaryText"></slot>
    <div class="overlay" @click="showModal = true"></div>
  </div>
  <!-- Show all in modal. -->
  <div class="modal" v-if="showModal" @click="showModal = false">
    <div class="inner-modal" @click.stop>
      <header>
        <h1 class="title">{{ title }}</h1>
        <h2>{{ description }}</h2>
        <button class="close" @click="showModal = false">✕</button>
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
import { ref, watch } from 'vue'

defineProps<{
  title: string
  description: string
}>()
const showModal = ref(false)

function close(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    showModal.value = false
    console.log('Close via key press')
  }
}

watch(showModal, async (latestShowModel, _oldVal) => {
  const body = document.querySelector('body')
  if (body?.style) {
    if (latestShowModel) {
      body.style.overflow = 'hidden'
      document.addEventListener('keyup', close)
    } else {
      body.style.overflow = 'auto'
      document.removeEventListener('keyup', close)
    }
  }
})
</script>

<style lang="scss">
@import '../scss/main.scss';

.project-card {
  overflow: hidden;
  border-radius: 10px;
  background-color: $light1;
  padding: 1rem;
  width: 100%;
  position: relative;
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
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}

.modal {
  position: fixed;
  background-color: rgba(200, 200, 200, 0.3);
  inset: 0;
  z-index: 1000;
  overflow: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-modal {
    @extend %shadow;
    width: 70%;
    max-width: 1000px;
    background-color: white;
    display: flex;
    flex-direction: column;

    margin-top: auto; // Need these for center aligning + height of child > parent.
    margin-bottom: auto; // ^^^

    header {
      position: relative;
      background-color: black;
      padding: 1rem;
      .close {
        top: 2rem;
        right: 2rem;
        position: absolute;
        border: none;
        background: none;
        color: white;
        font-size: 200%;
        cursor: pointer;
      }
    }

    .demo {
      display: flex;
      justify-content: center;
      > * {
        margin: 1rem;
        display: block;
      }
    }

    .full-text {
      padding: 1rem;
      list-style: inside;
    }
  }
}

@media screen and (max-width: $break-large) {
  .ProjectCard {
    padding: $padding-large;

    .show-less {
      @include holder('t-to-b', 'lt', 'ca');
    }
  }
}
</style>
