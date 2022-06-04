import {createApp,App} from 'vue'

import MainApp from './App.vue'


import { defineCustomElement } from 'vue'
import 'iconify-icon';

/* * WindiCSS + PREFLIGHT* */
import 'windi.css'
import { iStorefrontApiConfig, useCache} from "@snailicide/g-shopify-apollo";
import { gKabob, InlineSvg} from "@snailicide/g-patternlab/src/components";
//import process from "process";
import {cleanBooleanType} from "@snailicide/g-library";
const MyTestElement =defineCustomElement(gKabob)

const MyVueElement = defineCustomElement({
    // normal Vue component options here
    props: {
        message: {
            default:"message not set",
            type:String
        }
    },
ccomponents:{gKabob},
    emits: {},
    template: `<h1 class="testing">{{$props.message}}<g-kabob path="mdi:alert"></g-kabob></h1>`,

    // defineCustomElement only: CSS to be injected into shadow root
    styles: [`.testing{background:red; }`]
})
console.log(MyVueElement)
const options: iStorefrontApiConfig = {
    domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    version: process.env.VUE_APP_SHOPIFY_STOREFRONT_VERSION,
    persist: cleanBooleanType(process.env.VUE_APP_APOLLO_PERSIST_CACHE) as boolean, //todo: these env variables come in as strings :(
    logging: cleanBooleanType(process.env.VUE_APP_APOLLO_OPERATION_LOGGING) as boolean,
    cache: useCache()
}

//todo:move to env someqhwe.
const LOGGING = true;

const mountApp = (_id : string ,_app:App= createVueApp({},options) )=>{
    if ( document.querySelector(_id ) ){
        _app.mount(document.querySelector(_id ) )
        if ( LOGGING ) console.log( "VUEAPP MOUNTED ID:" ,_id,_app)
    }else{
        if ( LOGGING ) console.error( "VUEAPP MOUNT FAILED ID:" ,_id,_app)
    }
}
//TODO: MOVE THIS TO g-vue
const createVueApp = ( _config ={},options: iStorefrontApiConfig) : App => {
    const app = createApp({})
    //TODO: MAKE THIS INTO CONFIG LIKE g-vue
    // Register the custom element.
// After registration, all `<my-vue-element>` tags
// on the page will be upgraded.
    customElements.define('gbt-vue-element', MyVueElement)
    customElements.define('gbt-kabob', defineCustomElement(gKabob) )
    customElements.define('gbt-inline-svg',defineCustomElement(InlineSvg) )

   // createApp(MainApp).mount('#app')
   // customElements.define('gbt-kabob',gKabob)
    // app.component("g-icon", gIconify)
     //    app.component("g-kabob", gKabob)
      //app.component('gbt-inline-svg', InlineSvg);
     /* app.component('loading-spinner',LoadingSpinner)
      app.component('viewport-sticky',ViewportSticky)
      app.component('product-recommendations',ProductRecommendationsContainer)
      app.component('inner-image-zoom',InnerImageZoom)
      app.use(gShopify, options)*/
    return app
}

/**
 * create and mount vue instance(s)
 */
const mainAppID ='#app'
//const headerAppID ='#headerApp'
//const footerAppID ='#footerApp'

const mountAll = ()=>{
    mountApp( mainAppID,   createVueApp({},options))
    //mountApp( headerAppID)
   // mountApp( footerAppID)
}
mountAll();
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

// @ts-expect-error jjj
if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', (event) => {
   // alert();
     console.log("shopify:section:load", event, event.target)
       const _target = (event.target as Element)
       // alert();
        // if (_target.classList.value.includes('vue')) {
           // mountAll();
            // createVueApp().mount(event.target)
        //}
    })
} /*else if (!Shopify.designMode && process.env.NODE_ENV === 'development') {
    new MutationObserver((mutationsList) => {
        mutationsList.forEach(record => {
            // @ts-expect-error klk
            const vue = Array.from(record.addedNodes).find(node => node.classList && node.classList.value.includes('vue'))
            if (vue) window.location.reload()
        })
    }).observe(document.body, {
        childList: true,
        subtree: true
    })
}*/

import {useWindiCSSRuntimeDom} from '@snailicide/g-windi'

if ( LOGGING) console.log("NODE ENV:", process.env.NODE_ENV , "ENV FULL", process.env)
// const runtimeDom = useWindiCSSRuntimeDom({el: '#app'})
//   const vueElements = document.querySelectorAll('[vue]')
//  if (vueElements) vueElements.forEach(el => createVueApp().mount(el))
//import {windiConfig} from "../windi.config";

if (process.env.NODE_ENV !== 'production'  ) {
    console.error("initializing runtime")
    // @ts-expect-error todo: fix this error
    window.windicssRuntimeOptions = {
        // enabled preflight
        preflight: true,
        // scan the entire dom tree to infer the classnames on page loaded
        extractInitial: true,
        // generate mock classes for browser to do the auto-completeion
        mockClasses: false,
        // the windi config you are used to put in `windi.config.js`
        config: {}

    }
}
