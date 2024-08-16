import './assets/main.css'
import router from "./v-router/rout.js";
import store from "./store/store.js";

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
