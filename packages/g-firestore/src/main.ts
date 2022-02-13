import Vue from 'vue'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./router";

import {createPinia, PiniaVuePlugin} from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    pinia,
    router,
    //router
}).$mount('#app')
import 'windi.css'

//***** INIT FIREBASE!!!
import firebaseAppConfig from "@/firebase/firebase.config";
import firebaseStore from "@/stores/firebase";

const firebase = firebaseStore()
firebase.initialize(firebaseAppConfig)
