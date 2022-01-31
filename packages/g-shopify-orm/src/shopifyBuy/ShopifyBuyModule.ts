import ShopifyBuy, { LineItem, ProductVariant } from "shopify-buy";
import { defaultMutations } from "vuex-easy-access";
import { toInteger } from "@snailicide/g-library";
import * as RA from "ramda-adjunct";
import {
  composeGid,
  parseGidType,
  parseGid,
} from "@shopify/admin-graphql-api-utilities";
import { ActionTree } from "vuex";
import { EasyAccessStore } from "@snailicide/g-vue";
import { ProductInstanceProviderProps } from "./../orm/_types";

//local
import { StateConfig } from "./_types";

const CHECKOUT_ID_STORAGE_KEY = "vue-shopify-checkout-id";
const moduleName = "shopifybuy";

//variant: ProductVariant, qty = 1
interface LineItemAttribute {
  key: string | number | boolean;
  value: string | number | boolean;
}

interface AddtoCartPayload {
  variantId: number | string;
  quantity: number;
  customAttributes: Array<LineItemAttribute>;
}

/**
 * state
 */
const state: StateConfig = {
  checkoutId: window.localStorage.getItem(CHECKOUT_ID_STORAGE_KEY) || "",
  cart: null,
  cartLoading: false,
  client: false,
  // CHECKOUT_ID_STORAGE_KEY : 'default'
};
/**
 * getters
 */
const getters = {
  getClient: (state) => {
    return state.client;
  },
  getCartID: (state): boolean | string => {
    if (state.cart && state.cart.id) {
      // console.log("!!!!!!!!!the cart is ", parseGid(atob(state.cart.id)) )
      return toInteger(parseGid(atob(state.cart.id)));
    }
  },
  getType: (state) => {
    if (state.cart && state.cart.id) {
      return parseGidType(atob(state.cart.id));
    }
    return;
  },
  getLineItems: (state): Array<LineItem> => {
    if (state.cart && state.cart.lineItems) {
      return state.cart.lineItems.map(function (
        item
      ): ProductInstanceProviderProps {
        const {
          id,
          quantity,
          variant: {
            id: variant_id,
            product: { handle },
          },
        } = item;
        console.log("hi this is here!!!", atob(id));
        //gid://shopify/CheckoutLineItem/225892643964060?checkout=757f673990d65b702bcfdc60f21a44f8
        return {
          id: toInteger(parseGid(atob(id))),
          type: parseGidType(atob(id)),
          variant_id: toInteger(parseGid(atob(variant_id))),
          handle,
          quantity,
        };
      });
    }
  },
};

/**
 * mutations
 */
const mutations = {
  updateCart(state, payload: ShopifyBuy.Cart) {
    const store: EasyAccessStore = this as EasyAccessStore;
    state.cart = payload;
  },
  ...defaultMutations(state),
};

/**
 * actions
 */
const actions: ActionTree<any, any> = {
  async init({ commit, dispatch }, config: ShopifyBuy.Config) {
    const store: EasyAccessStore = this as EasyAccessStore;
    dispatch(
      `set/client`,
      ShopifyBuy.buildClient({
        domain: config.domain,
        storefrontAccessToken: config.storefrontAccessToken,
      })
    );
    return this;
  },
  async getCart({ state, commit, dispatch }, payload) {
    let cart = null;
    if (state.checkoutId.length === 0) {
      cart = await dispatch(`createCart`);
      commit("updateCart", cart);
      return cart;
      //if it has a checkout id but no cart.
    } else if (!state.cart) {
      cart = await dispatch(`fetchCart`, state.checkoutId);
      commit("updateCart", cart);
      return cart;
    }
    //temporary, idk?
    cart = await dispatch(`fetchCart`, state.checkoutId);
    commit("updateCart", cart);
    return cart;
  },
  async createCart({ state, getters }) {
    console.log("ACTION: createCart ", " state :", state, getters);
    const cart = await getters.getClient.checkout.create();
    state.checkoutId = cart.id as string;
    window.localStorage.setItem(CHECKOUT_ID_STORAGE_KEY, cart.id as string);
    return cart;
  },
  async fetchCart({ state, dispatch, getters }, checkoutId) {
    let cart = await getters.getClient.checkout.fetch(checkoutId);
    if (!cart) {
      cart = await dispatch(`createCart`);
    }
    return cart;
  },
  async addToCart(
    { state, commit, dispatch, getters },
    payload: any | Array<any>
  ) {
    state.cartLoading = true;
    const instanceArr = RA.ensureArray(payload).map(function (instanceItem) {
      const { quantity = 1, variant_id = false } = instanceItem;
      const data: AddtoCartPayload = {
        customAttributes: [
          { key: "message", value: "ff" },
          { key: "message2", value: "222" },
        ],
        variantId: btoa(composeGid("ProductVariant", variant_id)),
        quantity,
      };
      return data;
    });
    const updatedCart = await state.client.checkout.addLineItems(
      state.checkoutId,
      instanceArr
    );
    state.cartLoading = false;
    return commit("updateCart", updatedCart);
  },
  async updateItemQuantity(
    { state, commit, dispatch, getters },
    payload: any | Array<any>
  ) {
    state.cartLoading = true;
    const instanceArr = RA.ensureArray(payload).map(function (instanceItem) {
      const { id, quantity = false } = instanceItem;
      if (quantity !== false) {
        return {
          quantity: toInteger(quantity),
          id: btoa(
            composeGid("CheckoutLineItem", id, { checkout: state.checkoutId })
          ),
        };
      }
    });
    const updatedCart = await state.client.checkout.updateLineItems(
      state.checkoutId,
      instanceArr
    );
    state.cartLoading = false;
    return commit("updateCart", updatedCart);
  },
};

/**
 * export
 */
const newcart = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
export default newcart;
