//import store from "./src/store";

import root_store from "./src/store";

/* * Vuex ORM config.
 * this is VuexOrm plugins only and modules to be added to root vuex store* */
import vuexConfig from "./src/orm.config";

/* * Initialize and get root store * */
const store = root_store.initialize(...vuexConfig);

import ProductProvider from "./src/orm/components/ProductProvider.vue";
//import ProductInstanceProvider from "./src/components/dataProvider/ProductInstanceProvider.vue";
import ProductGroupProvider from "./src/orm/components/ProductGroupProvider.vue";
import ProductInstanceProvider from "./src/orm/components/ProductInstanceProvider.vue";

import BuyCartProvider from "./src/components/dataProvider/BuyCartProvider.ts";
import ShopifyAssetURLMixin from "./src/mixins/ShopifyAssetURLMixin";
import { ShopifyBuyPlugin } from "./src/modules/ShopifyBuy";

export {
  ProductProvider,
  ProductInstanceProvider,
  ProductGroupProvider,
  BuyCartProvider,
  ShopifyAssetURLMixin,
  ShopifyBuyPlugin,
  store,
};
