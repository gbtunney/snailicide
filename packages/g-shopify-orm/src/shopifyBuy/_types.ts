import ShopifyBuy from "shopify-buy";
import { Store } from "vuex";
import _Vue from "vuex/types/vue";

export interface ShopifyPluginOptions extends ShopifyBuy.Config {
  store: Store<any> | boolean;
  checkoutStorageKey?: string
}

export interface EasyAccessStore extends Store<any> {
  get?: any
 set?: any
}
