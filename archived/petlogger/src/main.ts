import Vue from 'vue'
import App from './App.vue'
//import './assets/tailwind.css'
import 'windi.css'
import store from './store'
import petLoggerFirestorePlugin from "./firestore.plugin";
//Vue.use( FirestorePlugin)
import router from './router'

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.use(petLoggerFirestorePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
