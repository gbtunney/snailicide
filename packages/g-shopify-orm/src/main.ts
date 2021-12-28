import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import {replaceCharacters} from "@snailicide/g-library"
Vue.config.productionTip = false
console.log("here",replaceCharacters("._.str!n_g_", ["!"]))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
