import { initializeVuexOrmStore } from "@snailicide/g-vue";
import { root_store } from "./src/store/store.config";
const store = initializeVuexOrmStore(root_store, { logging: true });

import ProductProvider from "./src/orm/components/ProductProvider.vue";
//import ProductInstanceProvider from "./src/components/dataProvider/ProductInstanceProvider.vue";
import ProductGroupProvider from "./src/orm/components/ProductGroupProvider.vue";
import ProductInstanceProvider from "./src/orm/components/ProductInstanceProvider.vue";

import BuyCartProvider from "./src/components/dataProvider/BuyCartProvider.ts";
import ShopifyAssetURLMixin from "./src/mixins/ShopifyAssetURLMixin";
//import { ShopifyBuyPlugin } from "./src/modules/ShopifyBuy";

export {
  ProductProvider,
  ProductInstanceProvider,
  ProductGroupProvider,
  BuyCartProvider,
  ShopifyAssetURLMixin,
  //ShopifyBuyPlugin,
  store,
};
