import {createApp,App} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import WebFont from "webfontloader";

import {gIconify, gKabob, InlineSvg} from '@snailicide/g-patternlab';

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

import {tg_isNotUndefined}from '@snailicide/g-library'


//import './styles/_product-grid-card.scss'

import {useWindiCSSRuntimeDom} from '@snailicide/g-windi'

import router from './router'
import * as process from "process";

import {ProductRecommendationsContainer} from "@snailicide/g-shopify-apollo";

//todo:move to env someqhwe.
const LOGGING = true;

//TODO: MOVE THIS TO g-vue
const createVueApp = ( _config ={}) : App => {
    const app = createApp({})
    //TODO: MAKE THIS INTO CONFIG LIKE g-vue
    app.component("g-icon", gIconify)
    app.component("g-kabob", gKabob)
    app.component('inline-svg', InlineSvg);
    app.component('product-recommendations',ProductRecommendationsContainer)
    return app
}
const mountApp = (_id : string, _app:App =   createVueApp() )=>{
    if ( document.querySelector(_id ) ){
        _app.mount(document.querySelector(_id ) )
        if ( LOGGING ) console.log( "VUEAPP MOUNTED ID:" ,_id,_app)
    }else{
        if ( LOGGING ) console.error( "VUEAPP MOUNT FAILED ID:" ,_id,_app)
    }
}

WebFont.load({
    fontactive: function (familyName: string, fvd) {
        if ( LOGGING ) console.log("WebFont.load", familyName);
    },
    typekit: {
        id: process.env.VUE_APP_TYPEKIT_ID,
    },
});


/**
 * create and mount vue instance(s)
 */
const mainAppID ='#mainApp'
const headerAppID ='#headerApp'
const footerAppID ='#footerApp'

mountApp( mainAppID)
mountApp( headerAppID)
mountApp( footerAppID)

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
