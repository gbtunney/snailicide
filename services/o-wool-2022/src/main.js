/**
 * imports
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

/*
import {gVueUtils} from "gbt-shopify/src/library/plugin/gVueUtils.plugin";
import init from "gbt-shopify/src/library/plugin/init"
import store from '@lib/store'
*/

//import './css/main.css'
//import './styles/scss/main.scss'
// import './styles/scss/timber.scss'
// import './styles/scss/theme.scss'

/* * STYLES * */
//import '@lib/styles/scss/tailwind.scss'
//import '@lib/styles/project/project.scss'
import 'vue-select/dist/vue-select.css'
//import '@storefront-ui/vue/styles.scss'
//Vue.use(Vuex)

/* * 3rd party plugins * */
import VTooltip from "v-tooltip";
Vue.use(VTooltip)

/* * Custom Project Vue Init Stuff * */
//import {gVueUtils} from "@lib/plugin/gVueUtils.plugin";
//import init from "@lib/plugin/init"
//import store from '@lib/store'
//Vue.use(gVueUtils,init)
//Vue.use(Vuex)

/**
 * vuex
 * auto-import all modules and prepare shared store
 */
const vuexModules = require.context('./vue/store/', true, /\.js$/)
const modules = {}


vuexModules.keys().forEach(key => {
    const name = key.replace(/\.(\/|js)/g, '').replace(/\s/g, '-')
    modules[name] = vuexModules(key).default
})

var router = new VueRouter({
    mode: 'history',
    routes: []
});

/**
 * create vue instance
 */

/**
 * create vue instance function
 */
const createVueApp = () => {

    const app = Vue
    /**
     * vue components
     * auto-import all vue components
     */
    const vueComponents = require.context('./vue/components/', true, /\.(vue|js)$/)


    vueComponents.keys().forEach(key => {
        const component = vueComponents(key).default

        // if a component has a name defined use the name, else use the path as the component name
        const name = component.name
            ? component.name
            : key.replace(/\.(\/|vue|js)/g, '').replace(/(\/|-|_|\s)\w/g, (match) => match.slice(1).toUpperCase())
        console.log("installing" , name ,component)
        app.component(name, component)
    })

    /**
     * vue directives
     * auto-register all directives with a 'global' keyword in their filename
     */
    const directives = require.context('./vue/directives/', true, /.*global.*\.js$/)

    directives.keys().forEach(key => {
        const directive = directives(key).default
        app.directive(directive.name, directive.directive)
    })

    return app
}

/**
 * create and mount vue instance(s)
 */
const appElement = document.querySelector('#app')

if (appElement) {
    //Vue.use(store)
  //  Vue.use(gVueUtils, init)
    createVueApp()
    console.log("Hihih",init)

    new Vue({
        el: '#app',

        router
    })
} else {
    //\\const vueElements = document.querySelectorAll('[vue]')
    // if (vueElements) vueElements.forEach(el => createVueApp().mount(el))
}

/**
 * fixes for Shopify sections
 * 1. properly render vue components on user insert in the theme editor
 * 2. reload the current page to rerender async inserted sections with vue components
 *
 * add the 'vue' keyword to the section's wrapper classes if the section uses any vue functionality e.g.:
 * {% schema %}
 * {
 *   "class": "vue-section"
 * }
 * {% endschema %}
 */
/*if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => {
    if (event.target.classList.value.includes('vue')) {
      new Vue({
        el: event.target,
        store,
        router
      })
    //  createVueApp().mount(event.target)
    }
  })
} else if (!Shopify.designMode && process.env.NODE_ENV === 'development') {
  new MutationObserver((mutationsList) => {
    mutationsList.forEach(record => {
      const vue = Array.from(record.addedNodes).find(node => node.classList && node.classList.value.includes('vue'))
      if (vue) window.location.reload()
    })
  }).observe(document.body, {
    childList: true,
    subtree: true
  })
}*/
