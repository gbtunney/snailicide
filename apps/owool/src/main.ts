import Vue from "vue";
import VueRouter from "vue-router";
import WebFont from "webfontloader";
import { ShopifyBuyPlugin } from "@snailicide/g-shopify-orm";

/* * 3rd party plugins * */
import VTooltip from "v-tooltip";
import PortalVue from "portal-vue";
import vSelect from "vue-select";
import VueShopifyBuy from "vue-shopify-buy";
import vToolTip from "v-tooltip";

Vue.config.productionTip = false

WebFont.load({
  fontactive: function (familyName, fvd) {
    console.log("loading   ", familyName);
  },
  typekit: {
    id: "kxg6qeb",
  },
});
//Vue.use(VueRouter)
/* * STYLES * */
import "./styles/scss/main.scss";
import "vue-select/dist/vue-select.css";

const router = new VueRouter({
  mode: "history",
  routes: [],
});

import DefaultProductPage from "./components/product/DefaultProductPage.vue";
//Vue.component("default-product-page", DefaultProductPage);
import { ProductProvider } from "@snailicide/g-shopify-orm";
//Vue.component("product-provider", ProductProvider);
import { ProductInstanceProvider } from "@snailicide/g-shopify-orm";
//Vue.component("product-instance", ProductInstanceProvider);

import { BuyCartProvider } from "@snailicide/g-shopify-orm";
import gPatternlab from "@snailicide/g-patternlab";

import { store } from "@snailicide/g-shopify-orm";
import gVueConfigPlugin from "@snailicide/g-vue";

const plugins = [
  [
    ShopifyBuyPlugin,
    {
      domain: "o-wool-stage.myshopify.com", // Insert your Shopify Domain
      storefrontAccessToken: "c20015f58d86ebe8863bbf7c7e2993d9", // Insert your Shopify Storefront Access Token,
      checkoutStorageKey: "rrrrrr",
    },
  ],
  [VueRouter],
  [gPatternlab],
  [vToolTip],
  [PortalVue],
  [VTooltip],
];
const components = {
  "default-product-page": DefaultProductPage,
  "product-provider": ProductProvider,
  "buy-cart-provider": BuyCartProvider,
  "product-instance": ProductInstanceProvider,
  "v-select": vSelect,
};
const app_options = {
  components,
  plugins,
  logging: true,
  store,
};
Vue.use(gVueConfigPlugin, app_options);

console.log("storeeeeeee",app_options)
console.log("Module list::::", store._modules.root._children);

Vue.use(VueShopifyBuy, {
  domain: 'o-wool-stage.myshopify.com', // Insert your Shopify Domain
  storefrontAccessToken: 'c20015f58d86ebe8863bbf7c7e2993d9' // Insert your Shopify Storefront Access Token
})

const root_el = "body-wrapper"; /// using inner because the other liquid one errors

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
    el: `#${root_el}`,
    router,
  });
}
//
