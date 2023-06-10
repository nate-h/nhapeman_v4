<template>
    <prism :language="lang">
        <slot></slot>
    </prism>
</template>

<script setup lang="ts">
import Prism from "vue-prism-component";
defineProps<{
  lang: {type: string, default: "javascript"}
}>()
</script>
