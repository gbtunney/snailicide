import _Vue, { PluginObject } from "vue";
import { defaultMutations } from "vuex-easy-access";

import ShopifyBuy, { ProductVariant, LineItem } from "shopify-buy";
import  store from "./../store"
const moduleName = "shopifybuy";

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
        console.log("payload!!",payload, this)
        debugger
        await this.set(
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
        this.set(`${moduleName}/checkoutId`, false);
        this.set(`${moduleName}/cart`, false);
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

            this.set(`${moduleName}/checkoutId`, cart.id as string);
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
