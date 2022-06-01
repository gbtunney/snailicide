import {createApp,App} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
/**
 * WebFont Load
 */
import WebFont from "webfontloader";
import InnerImageZoom from 'vue-inner-image-zoom'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
WebFont.load({
    fontactive: function (familyName: string, fvd) {
        if ( LOGGING ) console.log("WebFont.load", familyName);
    },
    typekit: {
        id: process.env.VUE_APP_TYPEKIT_ID,
    },
});

import {useCache, gShopify, iStorefrontApiConfig,persistCache,LocalStorageWrapper} from "@snailicide/g-shopify-apollo";

const options: iStorefrontApiConfig = {
    domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    version: process.env.VUE_APP_SHOPIFY_STOREFRONT_VERSION,
    persist: cleanBooleanType(process.env.VUE_APP_APOLLO_PERSIST_CACHE) as boolean, //todo: these env variables come in as strings :(
    logging: cleanBooleanType(process.env.VUE_APP_APOLLO_OPERATION_LOGGING) as boolean,
    cache: useCache()
}

import {gIconify, gKabob, InlineSvg,LoadingSpinner,ViewportSticky} from '@snailicide/g-patternlab';

/* * WindiCSS + PREFLIGHT* */
import 'windi.css'

/* * MEYER RESET * */
import '@snailicide/g-patternlab/stylesheets/reset.scss'

/* *OWOOL 2012 styles * */
import './styles/theme2012/index.scss'

/* *OWOOL 2012 RANDOM CUSTON.CSS FIL? * */
import './styles/theme2012/custom/_custom.scss'

/* * OWOOL STYLESHEET NEW * */
import './styles/main.scss'

import {cleanBooleanType, tg_isNotUndefined} from '@snailicide/g-library'


//import './styles/_product-grid-card.scss'

import {useWindiCSSRuntimeDom} from '@snailicide/g-windi'

import router from './router'
import * as process from "process";

import {ProductRecommendationsContainer} from "@snailicide/g-shopify-apollo";

//todo:move to env someqhwe.
const LOGGING = true;

//TODO: MOVE THIS TO g-vue
const createVueApp = ( _config ={},options: iStorefrontApiConfig) : App => {
    const app = createApp({})
    //TODO: MAKE THIS INTO CONFIG LIKE g-vue
    app.component("g-icon", gIconify)
    app.component("g-kabob", gKabob)
    app.component('inline-svg', InlineSvg);
    app.component('loading-spinner',LoadingSpinner)
    app.component('viewport-sticky',ViewportSticky)
    app.component('product-recommendations',ProductRecommendationsContainer)
    app.component('inner-image-zoom',InnerImageZoom)
    app.use(gShopify, options)
    return app
}

const mountApp = (_id : string ,_app:App= createVueApp({},options) )=>{
    if ( document.querySelector(_id ) ){
        _app.mount(document.querySelector(_id ) )
        if ( LOGGING ) console.log( "VUEAPP MOUNTED ID:" ,_id,_app)
    }else{
        if ( LOGGING ) console.error( "VUEAPP MOUNT FAILED ID:" ,_id,_app)
    }
}

/**
 * create and mount vue instance(s)
 */
const mainAppID ='#mainApp'
const headerAppID ='#headerApp'
const footerAppID ='#footerApp'

const mountAll = ()=>{
    mountApp( mainAppID,   createVueApp({},options))
    mountApp( headerAppID)
    mountApp( footerAppID)
}

if (options.persist) {
    persistCache({
        cache: options.cache,
        storage: new LocalStorageWrapper(window.localStorage),
    }).then(() => {
        if (options.cache) {
            console.warn("calling option", options.cache)
            mountAll();
            // mountApp(options)
        }
    })
} else {
    console.warn("calling no promise      option")
    mountAll();
   // mountApp(options)
}


if ( LOGGING) console.log("NODE ENV:", process.env.NODE_ENV , "ENV FULL", process.env)
    // const runtimeDom = useWindiCSSRuntimeDom({el: '#app'})
//   const vueElements = document.querySelectorAll('[vue]')
//  if (vueElements) vueElements.forEach(el => createVueApp().mount(el))
//import {windiConfig} from "../windi.config";
//console.log("windiConfig",windiConfig)
if (process.env.NODE_ENV !== 'production'  ) {
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
