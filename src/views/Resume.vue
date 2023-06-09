<template>
    <div class="resume">
        <!-- <embed
            class="pdf"
            type="application/pdf"
            scrolling="auto"
            frameBorder="0"
            :src="require('subs/resume/Nathanial.Hapeman.Resume.pdf')"
        /> -->

        <iframe
            src="https://drive.google.com/file/d/184Bg-YmVp4WCxtJPJvg0LpxFaC3OhvXT/preview"
            class="pdf"
            frameBorder="0"
            scrolling="auto"
        ></iframe>
    </div>
</template>

<script>
export default {
    name: "Resume",
    created() {
        //this.$store.commit("setLinks", this.links);
    },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
.resume {
    display: flex;
    width: 100%;

    .pdf {
        width: 100%;
    }
}
</style>
