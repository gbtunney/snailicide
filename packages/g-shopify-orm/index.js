import store from "./src/store";
//import ProductChild from "./src/components/bk/ProductChild.vue";
//import GroupInstance from "./src/components/bk/GroupInstance.vue";

import ProductProvider from "./src/orm/components/ProductProvider.vue";
//import ProductInstanceProvider from "./src/components/dataProvider/ProductInstanceProvider.vue";

import ProductGroupProvider from "./src/orm/components/ProductGroupProvider.vue";
import ProductInstanceProvider from "./src/orm/components/ProductInstanceProvider.vue";

import BuyCartProvider from "./src/components/dataProvider/BuyCartProvider.ts";
import ShopifyAssetURLMixin from "./src/mixins/ShopifyAssetURLMixin";

export {
  ProductProvider,
  ProductInstanceProvider,
  ProductGroupProvider,
  BuyCartProvider,
  ShopifyAssetURLMixin,
  store,
};
