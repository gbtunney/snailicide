import Vue from 'vue'
import App from './App.vue'
import 'windi.css'
import appConfig from "./app.config";
import {registerAllVueConfigs}from "@snailicide/g-vue"
registerAllVueConfigs(appConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
