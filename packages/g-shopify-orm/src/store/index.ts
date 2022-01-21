import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import store from './main.store'

import {mergeOptions, StoreInit} from "./../store/store.config";

 const initializeStore = function (_store :StoreInit){
    //extract only the part we want to modify.
    const { plugins =[], options={} }=_store
    const {logging = false,persist=true ,persist_storage_key="no persist storage key set." } = options
}

export default store//new Vuex.Store({})
