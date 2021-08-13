import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import "@/assets/styles/main.css";
import PrimeVue from 'primevue/config';

createApp(App).use(store).use(router).use(PrimeVue).mount('#app')
