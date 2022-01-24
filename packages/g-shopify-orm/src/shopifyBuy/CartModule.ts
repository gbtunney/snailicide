import * as RA from "ramda-adjunct";
import Vue from "vue";
import { defaultMutations } from "vuex-easy-access";
import ShopifyBuy, { ProductVariant } from "shopify-buy";
import {
  composeGid,
} from "@shopify/admin-graphql-api-utilities";
import {
  toInteger,
} from "@snailicide/g-library";

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
  get_client: (state) => {
    return Vue["shopify"] || "";
  },
};

/**
 * mutations
 */
const mutations = {
  cart_updated({ state, store, commit, dispatch, getters }, payload) {
    console.log("trying to update cart commit",payload)
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
    // @ts-expect-error jhhhjj
     const payload =  await Vue.shopify.checkout.fetch(getters["get_checkoutID"])
    commit(
      "cart_updated",
        payload
    );
    return;
  },
  async updateItemQuantity(
    { state, store, commit, dispatch, getters },
    payload
  ) {
    const instanceArr= RA.ensureArray(payload).map(function (instanceItem) {
      const { quantity = 1, variantId = false, id } = instanceItem;
      return{
        quantity: toInteger(quantity),
        id,
      };
    });
    const updatedCart = await getters["get_client"].checkout.updateLineItems(
      getters["get_checkoutID"],
      [...instanceArr]
    );
    return dispatch("getCart");
  },
  async addToCart({ state, store, commit, dispatch, getters }, payload) {
    const instanceArr = RA.ensureArray(payload).map(function (instanceItem) {
      const { quantity = 1, variant_id = false } = instanceItem;
      const data: Partial<AddToCartData> = {
        customAttributes: [{ key: "message", value: "ff" }],
        variantId: composeGid("ProductVariant", variant_id),
        quantity,
      };
      return data;
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
