import * as RA from "ramda-adjunct";
import Vue from "vue";
import { defaultMutations } from "vuex-easy-access";
import {
  parseGidWithParams,
  composeGid,
} from "@shopify/admin-graphql-api-utilities";

import ShopifyBuy, { Client,ProductVariant, LineItem } from "shopify-buy";
const CHECKOUT_ID_STORAGE_KEY = "vue-shopify-checkout-id";

interface CustomArribute {
  key: string | null;
  value: string | null;
}

interface AddToCartData {
  variantId: string;
  quantity: number;
  customAttributes: Array<CustomArribute> | null;
}

interface StateConfig {
  cart?: ShopifyBuy.Cart;
  loading: boolean;
}

/**
 * state
 */
const state = {
  cart: false,
  loading: false,
};
/**
 * getters
 */
const getters = {
  get_checkoutID: (state) => {
    return window.localStorage.getItem(CHECKOUT_ID_STORAGE_KEY) || "";
  },
  get_client: (state) :Partial<Client> => {
    return   Vue["shopify"] || "";
  },
};

/**
 * mutations
 */
const mutations = {
  cart_updated({ state, store, commit, dispatch, getters }, payload) {
    this.set("shopifycart/cart", payload);
    this.set("shopifycart/loading", false);
  },
  ...defaultMutations(state),
};

/**
 * actions
 */
const actions = {
  async getCart({ state, store, commit, dispatch, getters }) {
    this.set("shopifycart/loading", true);
    commit(
      "cart_updated",
      // @ts-expect-error i dk my bff jill???
      await Vue.shopify.checkout.fetch(getters["get_checkoutID"])
    );
    return;
  },
  async addToCart({ state, store, commit, dispatch, getters }, payload) {
    const instanceArr = RA.ensureArray(payload).map(function (instanceItem) {
      const { quantity = 1, variant_id = false } = instanceItem;
      const testme: Partial<AddToCartData> = {
        customAttributes: [{ key: "message", value: "ff" }],
        variantId: composeGid("ProductVariant", variant_id),
        quantity,
      };
      return testme;
    });
    const updatedCart = await getters["get_client"].checkout.addLineItems(
      getters["get_checkoutID"],
      instanceArr
    );
    return dispatch("getCart");
  },
};

/**
 * export
 */
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
