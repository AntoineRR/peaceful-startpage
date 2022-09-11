import { createApp } from "vue";
import App from "./App.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faReddit, faYoutube, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./assets/main.css";

library.add(faReddit, faYoutube, faTwitch, faGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
