import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resume',
      name: 'resume',
      // route level code-splitting
      // this generates a separate chunk (Resume.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Resume.vue')
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import('@/views/Projects.vue'),
      children: [
        {
          path: "mario",
          name: "Mario",
          component: import('@/views/ProjectMario.vue'),
          //listed: true,
        }
      ],
  },
  ]
})


// import ProjectMario from "@/views/ProjectMario.vue";
// import ProjectWhirling from "@/views/ProjectWhirling.vue";
// import ProjectMinesweeper from "@/views/ProjectMinesweeper.vue";
// import ProjectMyTunes from "@/views/ProjectMyTunes.vue";
// import ProjectVue from "@/views/ProjectVue.vue";
// import ProjectPacman from "@/views/ProjectPacman.vue";
// import ProjectPixelChaser from "@/views/ProjectPixelChaser.vue";


export default router
