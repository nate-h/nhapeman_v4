import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SVGLink from './components/SVGLink.vue'
import HeaderCard from './components/HeaderCard.vue'
import ProjectCard from './components/ProjectCard.vue'
//import Snippet from "./components/Snippet.vue";

const app = createApp(App)

app.use(router)

app.component('SVGLink', SVGLink)
app.component('HeaderCard', HeaderCard)
app.component('ProjectCard', ProjectCard)
//app.component("snippet", Snippet);

app.mount('#app')
