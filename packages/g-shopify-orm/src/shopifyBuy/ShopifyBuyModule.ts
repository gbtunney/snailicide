import Vue from "vue";
import ShopifyBuy, { ProductVariant } from "shopify-buy";
import { defaultMutations } from "vuex-easy-access";
import { PlainObject, toInteger } from "@snailicide/g-library";
import * as RA from "ramda-adjunct";
import { composeGid } from "@shopify/admin-graphql-api-utilities";

interface StateConfigNew {
  checkoutId: string;
  client?: ShopifyBuy.Client | boolean;
  cart?: ShopifyBuy.Cart;
  cartLoading: boolean;
}

const CHECKOUT_ID_STORAGE_KEY = "vue-shopify-checkout-id";
const moduleName = "shopifybuy";

//variant: ProductVariant, qty = 1
interface AddtoCartPayload {
  variant_id: number | string;
  quantity: number;
  attributes: PlainObject;
}

/**
 * state
 */
const state: StateConfigNew = {
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
};

/**
 * mutations
 */
const mutations = {
  /*increment(state, payload) {
        // mutate state
        state.count = payload;
        console.log("calling mutation incremen", state.count)
    },*/
  updateCart(state, payload: ShopifyBuy.Cart) {
    this.set(`${moduleName}/cart`, payload);
  },
  ...defaultMutations(state),
};

/**
 * actions
 */
const actions = {
  init({ commit }, config: ShopifyBuy.Config) {
    this.set(
      `${moduleName}/client`,
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
      // this.set(`${moduleName}/cart`,cart)
      commit("updateCart", cart);
      return cart;
    }
    return this.get(`${moduleName}/cart`);
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
    { state, store, commit, dispatch, getters },
    payload: any | Array<any>
  ) {
    const instanceArr = RA.ensureArray(payload).map(function (instanceItem) {
      const { quantity = 1, variant_id = false } = instanceItem;
      const data = {
        customAttributes: [{ key: "message", value: "ff" }],
        variantId: btoa(composeGid("ProductVariant", variant_id)),
        quantity,
      };
      return data;
    });
    const updatedCart = await state.client.checkout.addLineItems(
      state.checkoutId,
      instanceArr
    );
    return dispatch("getCart");
  },
  async updateItemQuantity(
    { state, store, commit, dispatch, getters },
    payload
  ) {
    const instanceArr = RA.ensureArray(payload).map(function (instanceItem) {
      const { quantity = 1, variantId = false, id } = instanceItem;
      return {
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

/*getCart() {
    return new Promise<ShopifyBuy.Cart>(async (resolve) => {
        let cart = null

        if (State.checkoutId.length === 0) {
            cart = await this.getClient().checkout.create()
            State.checkoutId = cart.id as string
            window.localStorage.setItem(CHECKOUT_ID_STORAGE_KEY, cart.id as string)

            this.updateCart(cart)
            resolve(cart)
        } else if (!State.cart) {
            cart = await this.getClient().checkout.fetch(State.checkoutId)

            if (!cart) {
                cart = await this.getClient().checkout.create()
            }

            this.updateCart(cart)
            resolve(cart)
        } else {
            resolve(State.cart)
        }
    })
},




interface StateConfig {
    checkoutId: string
    client?: ShopifyBuy.Client
    cart?: ShopifyBuy.Cart
    cartLoading: boolean
}

export const State = Vue.observable<StateConfig>({
    checkoutId: window.localStorage.getItem(CHECKOUT_ID_STORAGE_KEY) || '',
    cart: null,
    cartLoading: false
})

const Shopify = {
    init(config: ShopifyBuy.Config) {
        Vue.set(State, 'client', ShopifyBuy.buildClient({
            domain: config.domain,
            storefrontAccessToken: config.storefrontAccessToken
        }))

        return this
    },

    getClient() {
        return State.client!
    },

    getCart() {
        return new Promise<ShopifyBuy.Cart>(async (resolve) => {
            let cart = null

            if (State.checkoutId.length === 0) {
                cart = await this.getClient().checkout.create()
                State.checkoutId = cart.id as string
                window.localStorage.setItem(CHECKOUT_ID_STORAGE_KEY, cart.id as string)

                this.updateCart(cart)
                resolve(cart)
            } else if (!State.cart) {
                cart = await this.getClient().checkout.fetch(State.checkoutId)

                if (!cart) {
                    cart = await this.getClient().checkout.create()
                }

                this.updateCart(cart)
                resolve(cart)
            } else {
                resolve(State.cart)
            }
        })
    },

    getState() {
        return State
    },

    async addItem(variant: ProductVariant, qty = 1) {
        State.cartLoading = true
        await this.getCart()
        const updatedCart = await this.getClient().checkout.addLineItems(State.checkoutId, [{
            // @ts-ignore
            variantId: variant.id,
            quantity: qty
        }])

        State.cartLoading = false
        this.updateCart(updatedCart)
    },

    async removeItem(item: LineItem) {
        State.cartLoading = true
        await this.getCart()
        const updatedCart = await this.getClient().checkout.removeLineItems(State.checkoutId, [item.id as string])

        State.cartLoading = false
        this.updateCart(updatedCart)
    },

    async updateItemQuantity(item: LineItem, qty: number) {
        State.cartLoading = true
        await this.getCart()
        // @ts-ignore  nnk
        const updatedCart = await this.getClient().checkout.updateLineItems(State.checkoutId, [{
            id: item.id,
            quantity: qty
        }])

        State.cartLoading = false
        this.updateCart(updatedCart)
    },

    updateCart(updatedCart: ShopifyBuy.Cart) {
        Vue.set(State, 'cart', updatedCart)
    }
}

export default Shopify*/
