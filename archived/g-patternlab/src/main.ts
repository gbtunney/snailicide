import Vue from 'vue'
import App from './App.vue'
//import './styles/scss/tailwind.scss'
import "./assets/windi.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
