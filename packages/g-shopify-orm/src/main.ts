import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import './styles/scss/tailwind.scss'
//import "./assets/windi.css"
import initStore from './store/index.js'

//************** Register ORM Plugins  *****************//
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from '@vuex-orm/plugin-change-flags';
import VuexORMSearch from "@vuex-orm/plugin-search";

const plugins = [
  [VuexORMAxios,{
    baseURL:  "http://google.com" }
  ],
  [VuexORMSearch,{
    caseSensitive: true,
    threshold: 0
  }],
  [VuexORMisDirtyPlugin,{
    isNewFlagName: 'IsNew',
    isDirtyFlagName: 'IsDirty',
    exposeFlagsExternally: false
  }]
]
//************** ORM Models  *****************//
import Models  from "./orm";
const store = initStore( Models,plugins)

console.log("here",store)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
