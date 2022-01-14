import Vue from 'vue'
import App from './App.vue'
import {gVueConfigPlugin} from "./plugin";
import HelloWorld from "./components/HelloWorld.vue";
import store from './store'
Vue.config.productionTip = false
import PluginPatternlab,{vFaker,StyledSvgWrapper} from "@snailicide/g-patternlab"
import {defaultMutations} from "vuex-easy-access";

/**
 * state
 */
const state = {iamtestvar:"neweetttt"}
/**
 * getters
 */
//Vue.use(PluginPatternlab)

const testconfig = {
  components : { "hello-world": HelloWorld,
    'styled-svg-wrapper':  StyledSvgWrapper
  },
  alias:  { " $tesTing": "i am a testttttttt",
    " gbtShopify": "gbtShopify"
  },
  directives:{
    'faker':vFaker
  },
   plugins:
   [[  PluginPatternlab,{pluginoptions:"fffgg"}]]
   ,
  modules:{
    'gillian':{
      namespaced: true,
      state,
    }
  },
  store
}
Vue.use(gVueConfigPlugin,testconfig)
Vue.use(gVueConfigPlugin,testconfig)
Vue.component('svg-wrapper',StyledSvgWrapper)

Vue.component('svg-wrapper',StyledSvgWrapper)

Vue.component('svg-wrapper',StyledSvgWrapper)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(gVueConfigPlugin,testconfig)
