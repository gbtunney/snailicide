import ShopifyBuy, { ProductVariant } from "shopify-buy";
import { defaultMutations } from "vuex-easy-access";
import { PlainObject, toInteger } from "@snailicide/g-library";
import * as RA from "ramda-adjunct";
import { composeGid } from "@shopify/admin-graphql-api-utilities";
import { ModuleTree, ActionTree } from "vuex";
import { EasyAccessStore } from "@snailicide/g-vue";

interface StateConfig {
  checkoutId: string;
  client?: ShopifyBuy.Client | boolean;
  cart?: ShopifyBuy.Cart;
  cartLoading: boolean;
}

const CHECKOUT_ID_STORAGE_KEY = "vue-shopify-checkout-id";
const moduleName = "shopifybuy";

//variant: ProductVariant, qty = 1
interface LineItemAttribute{
  key:string|number|boolean
  value: string|number|boolean
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
};

/**
 * mutations
 */
const mutations = {
  updateCart(state, payload: ShopifyBuy.Cart) {
    const store: EasyAccessStore = this as EasyAccessStore;
    this.set(`${moduleName}/cart`, payload);
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
      // this.set(`${moduleName}/cart`,cart)
      commit("updateCart", cart);
      return cart;
    }
    return state.cart;
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
    state.cartLoading=true
    const instanceArr = RA.ensureArray(payload).map(function (instanceItem) {
      const { quantity = 1, variant_id = false } = instanceItem;
      const data :AddtoCartPayload= {
       customAttributes: [{ key: "message", value: "ff" },{ key: "message2", value: "222" }],
        variantId: btoa(composeGid("ProductVariant", variant_id)),
        quantity,
      };
      return data;
    });
    const updatedCart = await state.client.checkout.addLineItems(
      state.checkoutId,
      instanceArr
    );
    console.log("instance arr ",instanceArr ,payload)
    state.cartLoading=false
    return dispatch("getCart");
  },
  async updateItemQuantity({ state, commit, dispatch, getters }, payload) {
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
