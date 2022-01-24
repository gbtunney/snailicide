import _Vue, { PluginObject } from "vue";
import { defaultMutations } from "vuex-easy-access";

import ShopifyBuy, { ProductVariant, LineItem } from "shopify-buy";
import  store from "./../store"
const moduleName = "ShopifyBuy";

const tempStore = store as any
//const store = tempStore
/**
 * state
 */
const state = {
  client: false,
  checkoutStorageKey: "gOrmNotSet",
  checkoutId: false,
  cart: false,
};
/**
 * getters
 */
const getters = {
  get_checkoutID: ({ checkoutStorageKey }) => {
    return window.localStorage.getItem(checkoutStorageKey) || "";
  },
  get_checkoutIDValid: (state) => (key: string) => {
    const { checkoutStorageKey = false } = state;
    return window.localStorage.getItem(checkoutStorageKey) === key;
  },
};

/**
 * mutations
 */
const mutations = {
  ...defaultMutations(state),
};

/**
 * actions
 */
const actions = {
  async initClient(
    { state, commit, dispatch, getters },
    payload: ShopifyBuy.Config
  ) {
    await tempStore.set(
      `${moduleName}/client`,
      await ShopifyBuy.buildClient({
        domain: payload.domain,
        storefrontAccessToken: payload.storefrontAccessToken,
      })
    );
  },
  async invalidateCart(
    { state, commit, dispatch, getters },
    payload: ShopifyBuy.Config
  ) {
    tempStore.set(`${moduleName}/checkoutId`, false);
    tempStore.set(`${moduleName}/cart`, false);
  },
  async getCart(
    { state, commit, dispatch, getters },
    payload: ShopifyBuy.Config
  ) {
    const {
      cart = false,
      checkoutId = false,
      checkoutStorageKey,
      client = false,
    } = await state;
    if (
      !store.getters[`${moduleName}/get_checkoutIDValid`](checkoutId) ||
      (checkoutId === false && client !== false)
    ) {
      const cart = await client.checkout.create();

      tempStore.set(`${moduleName}/checkoutId`, cart.id as string);
      window.localStorage.setItem(checkoutStorageKey, cart.id as string);
      tempStore.set(`${moduleName}/cart`, cart as ShopifyBuy.Cart);
      console.log(
        "INITIALIZING CART!!!!",
        cart.id,
          tempStore.get(`${moduleName}/checkoutId`)
      );
    }
    if (store.getters[`${moduleName}/get_checkoutIDValid`](checkoutId)) {
      const payload = await client.checkout.fetch(checkoutId);
      console.log("UPDATING CART!!!!", payload);
      tempStore.set(`${moduleName}/cart`, payload as ShopifyBuy.Cart);
    }
  },
};

/**
 * export
 */
export const ShopifyBuyModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
export default ShopifyBuyModule;

/* * Shopify Buy Plugin - registers its own module. * */
export const ShopifyBuyPlugin: PluginObject<any> = {
  install(Vue: typeof _Vue, options?: ShopifyBuy.Config) {
    if (typeof options === "undefined") throw Error("Shopify Buy Plugin: Please provide the domain and storefront access token");

    console.log("plugin options!!!!" ,options)


    tempStore.registerModule('ShopifyBuy', ShopifyBuyModule)
    //store.dispatch('ShopifyBuy/invalidateCart')
    if (tempStore.hasModule(moduleName)) {
      tempStore.dispatch("ShopifyBuy/initClient", options);
      // const {checkoutKey:false}=options
      if (options["checkoutStorageKey"]) {
        tempStore.set(
          `${moduleName}/checkoutStorageKey`,
          options["checkoutStorageKey"]
        );
      }
      tempStore.dispatch("ShopifyBuy/getCart");
    }
  },
};

/*
const CHECKOUT_ID_STORAGE_KEY = 'vue-shopify-checkout-id'

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
   /!* init(config: ShopifyBuy.Config) {
        Vue.set(State, 'client', ShopifyBuy.buildClient({
            domain: config.domain,
            storefrontAccessToken: config.storefrontAccessToken
        }))

        return this
    },*!/

   /!* getClient() {
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
    },*!/

    async addItem(variant: ProductVariant, qty: number = 1) {
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
        // @ts-ignore
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
}*/

//export default Shopify
