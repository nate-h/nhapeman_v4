<template>
    <prism :language="lang">
        <slot></slot>
    </prism>
</template>

<script>
import Prism from "vue-prism-component";

export default {
    components: {
        Prism,
    },
    props: {
        lang: {
            type: String,
            default: "javascript",
        },
    },
};
</script>
