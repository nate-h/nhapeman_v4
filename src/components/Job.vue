<template>
    <div class="job-container l-to-r lt">
        <!-- Content inserted here! -->
        <div class="left">
            <img :src="getImageUrl(img)" />
        </div>
        <div class="right">
            <h2>
                <a :href="link">{{ company }}</a>
                <small class="date right">{{ years }}</small>
            </h2>

            <h3>{{ shortDescription }}</h3>
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

const getImageUrl = (name: string) => {
    return new URL(props.img, import.meta.url).href
}

const props = defineProps<{
    company: string,
    img: string,
    link: string,
    years: string,
    shortDescription: string
}>()


</script>

<style lang="scss">
@import "../scss/main.scss";
$img-side: 200px;

.job-container {
    .left {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: $padding-large;
        width: $img-side;
    }

    .right {
        flex-grow: 1;

        .date {
            margin-left: $margin-large;
            color: $dark3;
        }
    }

    img:first-of-type {
        height: 200px;
        width: 200px;
    }
}

@media screen and (max-width: $break-large) {
    .job-container {
        @include holder("t-to-b", "lt", "ca");
    }
}
</style>
