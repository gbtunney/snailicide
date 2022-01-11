import store from "./src/store";
import ProductChild from "./src/components/bk/ProductChild.vue";
import GroupInstance from "./src/components/bk/GroupInstance.vue";

import ProductProvider from "./src/components/dataProvider/ProductProvider.vue";
import ProductInstanceProvider from "./src/components/dataProvider/ProductInstanceProvider.vue";

import ShopifyAssetURLMixin from "./src/mixins/ShopifyAssetURLMixin";

export {
  GroupInstance,
  ProductProvider,
  ProductInstanceProvider,
  ShopifyAssetURLMixin,
  ProductChild,
  store,
};
