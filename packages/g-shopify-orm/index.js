import store from "./src/store";
//import ProductChild from "./src/components/bk/ProductChild.vue";
//import GroupInstance from "./src/components/bk/GroupInstance.vue";

import ProductProvider from "./src/components/dataProvider/ProductProvider.vue";
//import ProductInstanceProvider from "./src/components/dataProvider/ProductInstanceProvider.vue";

import ProductGroupProvider from "./src/components/dataProvider/ProductGroupProvider.vue";
import ProductInstanceProvider from "./src/components/dataProvider/ProductInstanceProvider.vue";

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
