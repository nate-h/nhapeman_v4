import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SVGLink from './components/SVGLink.vue'
import HeaderCard from './components/HeaderCard.vue'
import AExt from './components/AExt.vue'
//import Snippet from "./components/Snippet.vue";

const app = createApp(App)

app.use(router)

app.component('SVGLink', SVGLink)
app.component('a-ext', AExt)
app.component('HeaderCard', HeaderCard)
//app.component("snippet", Snippet);

app.mount('#app')
