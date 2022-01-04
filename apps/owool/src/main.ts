import Vue from "vue";
import VueRouter from "vue-router";

/* * STYLES * */
import "./styles/scss/main.scss";
import "vue-select/dist/vue-select.css";

const router = new VueRouter({
  mode: "history",
  routes: [],
});

import plugin from "@snailicide/g-patternlab";
import { store } from "@snailicide/g-shopify-orm";

Vue.use(plugin);

import DefaultProductPage from "./components/product/DefaultProductPage.vue";
Vue.component("default-product-page", DefaultProductPage);

import { ProductChild } from "@snailicide/g-shopify-orm";
Vue.component("product-child", ProductChild);

/* * 3rd party plugins * */
import VTooltip from "v-tooltip";

Vue.use(VTooltip);

import vSelect from "vue-select";

Vue.component("v-select", vSelect);

const root_el = "inner"; /// using inner because the other liquid one errors

/*
new Vue({

    render: h => h(App)
}).$mount('#app')
*/

if (
  typeof document.getElementById(root_el) != "undefined" &&
  document.getElementById(root_el) != null
) {
  new Vue({
    store,
    router,
    el: `#${root_el}`,
  });
}

//Vue.config.productionTip = false
