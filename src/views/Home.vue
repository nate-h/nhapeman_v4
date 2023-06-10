<template>
    <div class="home">
        <about-me-container></about-me-container>

        <header-container header="Job History" class="job-components">
            <!-- Inject Job Components -->
            <job-container
                company="HRL"
                :img="'../assets/hrl_logo.png'"
                link="https://www.hrl.com/"
                years="July 2021 - Present"
                short-description="Software Engineer"
            >
                <p>
                    Fullstack engineering on a quantum device testing program.
                </p>
                <p>Secret security clearance.</p>
            </job-container>
            <job-container
                company="Applied Invention"
                :img="'../assets/ai.png'"
                link="https://www.appliedinvention.com/"
                years="June 2014 - June 2021"
                short-description="Software Engineer"
            >
                <p>
                    In short, Applied Invention is a company that helps leading
                    companies and entrepreneurs with any challenging problem
                    they may have. I've been lucky enough to work for AI since
                    they hired me out of college in 2014. All of the projects
                    I've worked on have been extremely interesting and exciting
                    to work on. The first project I worked on was our in-house
                    geo-spacial game engine that was built for simulations. The
                    engine was written in c++ on top of panda3d, an open source
                    3D game engine. Currently I work on a machine learning
                    project and do everything from full stack development, data
                    science to machine learning. My big contribution to this
                    project is creating the majority of an internal annotation
                    website. The website can be used to fully annotate our
                    images but works with external sources of data. It also has
                    powerful tools to analyze the data. Some of the things I do
                    on a weekly basis for this project are: managing and
                    improving the internal annnotation website, making sure all
                    of the annotators are happy and working, running a
                    multi-stage data pipeline on all of our data, and analyzing
                    our annotation data to find useful insights and to shape the
                    direction when need to move it in.
                </p>
            </job-container>
            <job-container
                company="FrackOptima"
                :img="'../assets/frackoptima.png'"
                link="http://frackoptima.com/"
                years="May 2016 - October 2017"
                short-description="Software Engineer"
            >
                <p>
                    I worked part-time at FrackOptima as a software engineer
                    while working full-time for Applied Invention. FrackOptima
                    is a hydraulic fracturing company that specializes in
                    software and services for optimal hydraulic fracturing
                    treatments. There's several systems which make this all
                    possible. Most of my work has been on the company website
                    and the fracking simulator.
                </p>
            </job-container>
        </header-container>
    </div>
</template>

<script setup lang="ts">
import JobContainer from "../components/Job.vue";
import AboutMeContainer from "../components/AboutMe.vue";

const links = [
    { name: "About Me", link: "aboutme" },
    { name: "Job History", link: "jobhistory" },
    { name: "Projects", link: "projects" },
]
</script>

<style lang="scss">
@import "../scss/main.scss";

.home {
    padding: $padding-large;
    @extend %t-to-b, .ca;

    & > *:not(:last-child) {
        margin-bottom: $margin-large;
    }

    .job-components {
        .job-container:not(:last-child) {
            margin-bottom: $margin-large;
        }
    }
}

@media screen and (max-width: $break-large) {
    .home {
        padding: $padding-large 0;
    }
}
</style>
