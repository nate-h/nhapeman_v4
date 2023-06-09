<template>
    <div class="projects">
        <div v-if="$route.name === 'Projects'" class="list">
            <header-container header="Projects">
                <p>
                    Here are some of the fun coding projects I created outside
                    of work. Enjoy!
                </p>
            </header-container>

            <div v-for="project in projects" :key="project.name">
                <component v-bind:is="project"></component>
            </div>
        </div>

        <router-view class="project-child"></router-view>
    </div>
</template>

<script>
import ProjectMario from "./ProjectMario.vue";
import ProjectWhirling from "./ProjectWhirling.vue";
import ProjectMinesweeper from "./ProjectMinesweeper.vue";
import ProjectMyTunes from "./ProjectMyTunes.vue";
import ProjectVue from "./ProjectVue.vue";
import ProjectPacman from "./ProjectPacman.vue";
import ProjectPixelChaser from "./ProjectPixelChaser.vue";
export default {
    name: "Projects",
    created() {
        this.projects = [
            ProjectMario,
            ProjectWhirling,
            ProjectPixelChaser,
            ProjectVue,
            ProjectMyTunes,
            ProjectPacman,
            ProjectMinesweeper,
        ];
        this.projects = this.projects.filter((p) => p.listed === true);
    },
};
</script>

<style lang="scss">
@import "../scss/main.scss";


.projects {
    padding: $padding-large;
    @extend %t-to-b, .ca;

    .list > *:not(:last-child) {
        margin-bottom: $margin-large;
    }

    .project-child {
        h1,
        h2,
        h3 {
            margin: $margin-medium 0;
        }
        p {
            margin: $margin-medium 0;
        }
        ol {
            padding-left: $padding-large;
        }
        li {
            padding-bottom: $padding;
        }
    }
}

@media screen and (max-width: $break-large) {
    .projects {
        padding: $padding-large 0;
    }
}
</style>
