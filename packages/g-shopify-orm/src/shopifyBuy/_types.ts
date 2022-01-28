import ShopifyBuy from "shopify-buy";
import { Store } from "vuex";
import _Vue from "vuex/types/vue";

export interface ShopifyPluginOptions extends ShopifyBuy.Config {
  store: Store<any> | boolean;
  checkoutStorageKey?: string;
}
export declare interface StateConfig {
  checkoutId: string;
  client?: ShopifyBuy.Client | boolean;
  cart?: ShopifyBuy.Cart;
  cartLoading: boolean;
}
