<template>
  <section class="job-container">
    <a-ext :link="link"><slot name="image"></slot></a-ext>
    <div>
      <h2>
        <a-ext :link="link">{{ company }}</a-ext>
        <small class="date right">{{ years }}</small>
      </h2>
      <h3>{{ shortDescription }}</h3>
      <p>
        <slot></slot>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  company: string
  link: string
  years: string
  shortDescription: string
}>()
</script>

<style lang="scss">
@import '../scss/main.scss';

.job-container {
  display: flex;
  align-items: start;
  gap: 2em;

  > div {
    width: 100%;
  }

  h2 small {
    margin-left: $margin-large;
    color: $dark3;
  }

  img {
    width: 100px;
  }
}

@media screen and (max-width: $break-large) {
  .job-container {
    @include holder('t-to-b', 'lt', 'ca');
  }
}
</style>
