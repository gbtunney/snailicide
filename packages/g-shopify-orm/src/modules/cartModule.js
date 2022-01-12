import {Cart} from "../orm/models";
import {defaultMutations} from "vuex-easy-access";

/**
 * state
 */
const state = {
    token:false,
    cart:false,
}
/**
 * getters
 */
const getters = {
}

/**
 * mutations
 */
const mutations = {
    /*increment(state, payload) {
        // mutate state
        state.count = payload;
        console.log("calling mutation incremen", state.count)
    },*/
    cartUpdated({state, store, commit, dispatch, getters} , {token=false}) {
        if ( token !== false ){
            console.log("!!setting cart token for ",token,this)
            this.set('shopifycart/token', token)
            const cart= ( Cart.query().where("token", token).exists() )? Cart.query().where("token", token).withAll().first():false

            this.set('shopifycart/cart', cart)

        }
        /* const type = getEntity(model);
         const message = `EVENT:: ${event} \n  TYPE:: ${(type && type.entity) ? upperCase(type.entity) : ""} \n`;
         console.important(message,additional,css)*/
    },
    ...defaultMutations(state)
}

/**
 * actions
 */
const actions = {
    async loadCart({state, store, commit, dispatch, getters}, {MOCK_CART =false}) {
        const resp =  await  Cart.api().fetchCart(MOCK_CART)

        if ( resp && resp.entities.cart && resp.entities.cart.length>0 ){
            console.log("resp",resp.entities.cart[0].token)
            if ( resp.entities.cart[0].token ){
                // store.set('shopifycart/token',  resp.entities.cart[0].token)
                // store.set('shopifycart/cart', resp.entities.cart)
                commit("cartUpdated",  { token:  resp.entities.cart[0].token})

            }
        }
        return;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
