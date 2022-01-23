import Vue from "vue";
//import App from './App.vue'
import { gVueRegisterAll } from "../plugin/plugin";
import { getVuexOrmDatabase, initializeVuexOrmStore } from "../scripts";

Vue.config.productionTip = false;
import PluginPatternlab, {
  vFaker,
  StyledSvgWrapper,
} from "@snailicide/g-patternlab";
import User from "@/examples/models/Users";
import Post from "@/examples/models/Posts";
import axios from "axios";

/**
 * state
 */
const state = {};
/**
 * getters
 */
//Vue.use(PluginPatternlab)
Vue.component("svg-wrapper", StyledSvgWrapper);
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from "@vuex-orm/plugin-change-flags";
import VuexORMSearch from "@vuex-orm/plugin-search";
//************** Register ORM Plugins  *****************//
const plugins = [
  [
    VuexORMAxios,
    {
      baseURL: "http://google.com",
    },
  ],
  [
    VuexORMSearch,
    {
      caseSensitive: true,
      threshold: 0,
    },
  ],
  [
    VuexORMisDirtyPlugin,
    {
      isNewFlagName: "IsNew",
      isDirtyFlagName: "IsDirty",
      exposeFlagsExternally: false,
    },
  ],
];

const orm_options = {
  plugins,
  models: [User, Post],
};

import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [getVuexOrmDatabase([User, Post])],
  state: {
    testvalue: "jkjkjkjkjkjkjkjk",
  },
  mutations: {},
  actions: {},
  modules: {},
});

const testconfig = {
  components: {
    "styled-svg-wrapper": StyledSvgWrapper,
  },
  alias: {
    " $tesTing": "i am a testttttttt",
    " gbtShopify": "gbtShopify",
  },
  directives: {
    faker: vFaker,
  },
  plugins: [[PluginPatternlab, { pluginoptions: "fffgg" }]],
  modules: {
    gillian: {
      namespaced: true,
      state,
    },
  },
  store,
};

Vue.use(gVueRegisterAll, testconfig);

/*
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(gVueRegisterAll,testconfig)
*/
