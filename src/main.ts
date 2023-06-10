import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SVGLink from './components/SVGLink.vue'
import HeaderContainer from './components/HeaderContainer.vue'
import ProjectTemplate from './components/ProjectTemplate.vue'
//import Snippet from "./components/Snippet.vue";

const app = createApp(App)

app.use(router)

app.component('svg-link', SVGLink)
app.component('header-container', HeaderContainer)
app.component('project-template', ProjectTemplate)
//app.component("snippet", Snippet);

app.mount('#app')
