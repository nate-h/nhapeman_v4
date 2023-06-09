import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Resume from "./views/Resume.vue";
import Projects from "./views/Projects.vue";

import ProjectMario from "./views/ProjectMario.vue";
import ProjectWhirling from "./views/ProjectWhirling.vue";
import ProjectMinesweeper from "./views/ProjectMinesweeper.vue";
import ProjectMyTunes from "./views/ProjectMyTunes.vue";
import ProjectVue from "./views/ProjectVue.vue";
import ProjectPacman from "./views/ProjectPacman.vue";
import ProjectPixelChaser from "./views/ProjectPixelChaser.vue";

// Setup child routes for projects.
let projectComponents = [
    ProjectMario,
    ProjectWhirling,
    ProjectMinesweeper,
    ProjectMyTunes,
    ProjectVue,
    ProjectPacman,
    ProjectPixelChaser,
];

let projectRoutes = [];
for (let p of projectComponents) {
    projectRoutes.push({
        path: p.path,
        name: p.name,
        component: p,
        listed: p.listed,
    });
}

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/resume",
            name: "Resume",
            component: Resume,
        },
        {
            path: "/projects",
            name: "Projects",
            component: Projects,
            children: projectRoutes,
        },
    ],
});
