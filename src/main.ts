import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/vcard.css'   // ← only one CSS import

createApp(App).use(router).mount('#app')
