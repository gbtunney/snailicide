import Vue from 'vue'
import App from './App.vue'
import {gVueConfigPlugin} from "@/plugin";
import HelloWorld from "./components/HelloWorld.vue";
import store from './store'
Vue.config.productionTip = false
/*
Vue.use(gVueConfigPlugin,{
  components : { "hello-world": HelloWorld},
  alias:  { "testing": "i am a testttttttt"},
  store:
}
)*/

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
