import {defaultMutations} from "vuex-easy-access";
import Vue from "vue";

/* * GLOBAL SETTINGS MODULE! * */

/**
 * state
 */
const state = {
    asset_url: '',
    drawer_right: false,
    drawer_left: false,
}
/**
 * getters
 */
const getters = {}

/**
 * mutations
 */
const mutations = {
    /*increment(state, payload) {
        // mutate state
        state.count = payload;
        console.log("calling mutation incremen", state.count)
    },*/
    ...defaultMutations(state)
}

/**
 * actions
 */
const actions = {
}

/**
 * export
 */
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
