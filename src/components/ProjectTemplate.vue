<template>
    <div class="project-template">
        <!-- Summary -->
        <div class="summary-template" v-if="showSummary()">
            <div class="summary-image">
                <RouterLink :to="'/projects/' + path" class="link" v-if="path">
                    <slot name="summaryImage" class="thumbnail"></slot>
                </RouterLink>
                <slot name="summaryImage" class="thumbnail" v-if="!path"></slot>
            </div>
            <div class="summary-content">
                <div class="header">
                    <h1 class="title">{{ title }}</h1>
                    <span class="description">{{ description }}</span>
                </div>
                <div>
                    <slot name="summaryText"></slot>
                </div>
                <h2 class="footer">
                    <RouterLink :to="'/projects/' + path" class="link">
                        <span>{{ moreInfoButtonText }}</span>
                    </RouterLink>
                </h2>
            </div>
        </div>

        <!-- Demo -->
        <div class="demo-template t-to-b" v-if="showDemo()">
            <div class="header">
                <h1 class="title">{{ title }}</h1>
                <span class="description">{{ description }}</span>
            </div>
            <div class="demo">
                <slot name="demo"></slot>
            </div>
            <div class="text">
                <slot name="summaryText"></slot>
                <slot name="demoDetails"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'


export default {
    name: "ProjectTemplate",
    methods: {
        showSummary: function () {
            return this.$parent.$route.name !== this.name;
        },
        showDemo: function () {
            return this.$parent.$route.name === this.name;
        },
    },
    computed: {
        path: function () {
            return this.$parent.$options.path;
        },
        name: function () {
            return this.$parent.$options.name;
        },
        title: function () {
            return this.$parent.title;
        },
        description: function () {
            return this.$parent.description;
        },
        moreInfoButtonText: function () {
            return this.$parent.moreInfoButtonText;
        },
    },
    created: function () {
        let neededOptions = ["name", "path", "listed"];
        for (const prop of neededOptions) {
            if (
                this.$parent.$options[prop] === null ||
                this.$parent.$options[prop] === undefined
            ) {
                console.error(`Need to override ${prop}`);
            }
        }

        let neededOverrides = ["title", "description", "moreInfoButtonText"];
        for (let prop of neededOverrides) {
            if (
                this.$parent[prop] === null ||
                this.$parent[prop] === undefined
            ) {
                console.error(`Need to override ${prop}`);
            }
        }
    },
};
</script>

<style lang="scss">
@import "../scss/main.scss";

$img-side: 200px;

.project-template {
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

    .footer {
        margin: $margin 0;
        @extend %default-size;
    }

    .summary-template {
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

    .demo-template {
        margin: 0 $margin-xxx-large;

        .header {
            margin-bottom: $margin-large;
        }

        .text {
            padding: $padding-x-large;
            text-align: left;
        }
    }
}

@media screen and (max-width: $break-large) {
    .project-template {
        padding: $padding-large;

        .header {
            .title {
                display: block;
            }
            .description {
                margin-left: 0;
            }
        }

        .summary-template {
            @include holder("t-to-b", "lt", "ca");
        }

        .demo-template {
            margin: 0;

            .text {
                padding: 0;
                text-align: left;
            }
        }
    }
}
</style>
