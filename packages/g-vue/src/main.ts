import Vue, {PluginObject} from 'vue'
import App from './App.vue'
import {gVueConfigPlugin} from "./plugin";
import HelloWorld from "./components/HelloWorld.vue";
//import store from './store'
Vue.config.productionTip = false
import PluginPatternlab,{vFaker,StyledSvgWrapper} from "@snailicide/g-patternlab"
import {defaultMutations} from "vuex-easy-access";
import User from '@/models/Users'
import Post from '@/models/Posts'
import {getVuexOrmDatabase} from "./orm"
import VuexORM,{Model,Database,install} from "@vuex-orm/core";
import axios from "axios";

/**
 * state
 */
const state={}
/**
 * getters
 */
//Vue.use(PluginPatternlab)
Vue.component('svg-wrapper',StyledSvgWrapper)
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from '@vuex-orm/plugin-change-flags';
import VuexORMSearch from "@vuex-orm/plugin-search";
//************** Register ORM Plugins  *****************//
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

const orm_options: OrmPluginOptions = {
  plugins,
  models: [User, Post],
};

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins:[getVuexOrmDatabase(orm_options)],
  state: {
    testvalue:"jkjkjkjkjkjkjkjk"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

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

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(gVueConfigPlugin,testconfig)
