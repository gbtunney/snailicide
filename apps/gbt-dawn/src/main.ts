import {createApp, App, defineCustomElement} from 'vue'
import {cleanBooleanType} from "@snailicide/g-library";

/* * WindiCSS + PREFLIGHT* */
import 'windi.css'

import {iStorefrontApiConfig, useCache} from "@snailicide/g-shopify-apollo";
import {gKabob, gIconify, InlineSvg} from "@snailicide/g-patternlab/src/components";
import gProductTestimonial from './components/ProductTestimonial.vue'

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

const mountVueApp = (_id: string, _app: App = createVueApp({}, options)) => {
    if (document.querySelector(_id)) {
        _app.mount(document.querySelector(_id))
        if (LOGGING) console.log("VUEAPP MOUNTED ID:", _id, _app)
    } else if (LOGGING) console.error("VUEAPP MOUNT FAILED ID:", _id, _app)
    if (document.querySelector('.vue')) {
        const vueElements = document.querySelectorAll('.vue')
        if (vueElements) vueElements.forEach(el => _app.mount(el))
    }
}

const custom_elements = {
    "gbt-inline-svg": InlineSvg,
    'gbt-icon': gIconify,
    'gbt-kabob': gKabob,
    'product-testimonial': gProductTestimonial
}


export const registerCustomElement = function (
    elements: unknown,
    logging = false
) {
    Object.entries(elements).forEach(function ([key, value]) {
        customElements.define(key, defineCustomElement(value))
        const log = `CustomElements Registered: key:${key} name: ${
            value["name"] ? value["name"] : "--no name--"
        }`;
        if (logging) console.log(log);
    });
};
//TODO: MOVE THIS TO g-vue
const createVueApp = (_config = {}, options: iStorefrontApiConfig): App => {
    const app = createApp({})
    //TODO: MAKE THIS INTO CONFIG LIKE g-vue
    // Register the custom element.
    registerCustomElement(custom_elements)
    /* app.component('loading-spinner',LoadingSpinner)
     app.component('inner-image-zoom',InnerImageZoom)
     app.use(gShopify, options)*/
    return app
}

/**
 * create and mount vue instance(s)
 */
const mainAppID = '#app'
//const headerAppID ='#headerApp'
//const footerAppID ='#footerApp'

const mountAll = () => {
    mountVueApp(mainAppID, createVueApp({}, options))
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
// @ts-expect-error dkjjk
if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', (event) => {
            // alert();
            const _target = (event.target as HTMLElement)
            console.log("shopify:section:load", event, event.target, _target.classList)
            windiCSS.extractStylesFromHTML(_target, true)
            // alert();
            // if (_target.classList.value.includes('vue')) {
            // mountAll();
            // createVueApp().mount(event.target)
            //}
        }
    )
}
/*else if (!Shopify.designMode && process.env.NODE_ENV === 'development') {
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

if (LOGGING) console.log("NODE ENV:", process.env.NODE_ENV, "ENV FULL", process.env)
import {windiConfig} from "../windi.config";
import {useWindiCSS, windiCSS as WindiCSS} from '@snailicide/g-windi'

const windiCSS = useWindiCSS(windiConfig)
declare global {
    interface Window {
        windiCSS: WindiCSS;
    }
}
if (process.env.NODE_ENV !== 'production') {
    const extract_html = document.getElementById('MainContent')
    windiCSS.extractStylesFromHTML(extract_html, true)
    //console.log("WINDIDIIIII" ,windiCSS.compileCSS('bg-gumleaf-400 text-gumleaf',true) )//window.windiCSS=windiCSS
}
