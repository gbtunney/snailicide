import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'windi.css'


console.log("VUE_APP_TITLE" , process.env.VUE_APP_TITLE)
createApp(App).use(router).mount('#app')
