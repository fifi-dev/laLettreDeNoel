import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Particles from "vue3-particles"

import './index.css'


createApp(App).use(router).use(Particles).mount('#app');
