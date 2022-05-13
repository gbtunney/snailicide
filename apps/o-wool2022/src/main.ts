import {createApp} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import WebFont from "webfontloader";

import {gIconify, gKabob, InlineSvg} from '@snailicide/g-patternlab';
// or as a component
//import InlineSvg from 'vue-inline-svg';

/* * WindiCSS + PREFLIGHT* */
import 'windi.css'

/* * MEYER RESET * */
import '@snailicide/g-patternlab/stylesheets/reset.scss'

/* *OWOOL 2012 styles * */
import './styles/styles.theme.2012.scss'

/* * OWOOL STYLESHEET NEW * */
import './styles/main.scss'

//import './styles/_product-grid-card.scss'

import {useWindiCSSRuntimeDom} from '@snailicide/g-windi'

import router from './router'

WebFont.load({
    fontactive: function (familyName: string, fvd) {
        console.log("loading   ", familyName);
    },
    typekit: {
        id: process.env.VUE_APP_TYPEKIT_ID,
    },

});

const createVueApp = () => {
    const app = createApp({})
    //console.log("Hde",HelloWorld)
    /**
     * vue components
     * auto-import all vue components
     */
    /*    const vueComponents = require.context('@/components/', true, /\.(vue|js)$/)

        vueComponents.keys().forEach(key => {
            const component = vueComponents(key).default
            // if a component has a name defined use the name, else use the path as the component name
            const name = component.name
                ? component.name
                : key.replace(/\.(\/|vue|js)/g, '').replace(/(\/|-|_|\s)\w/g, (match) => match.slice(1).toUpperCase())
            app.component("hello-world", HelloWorld)
        })*/
    app.component("g-icon", gIconify)
    app.component("g-kabob", gKabob)
    app.component('inline-svg', InlineSvg);

    return app
}

/**
 * create and mount vue instance(s)
 */
const appElement = document.querySelector('#app')

if (appElement) {

    createVueApp().mount(appElement)
    const runtimeDom = useWindiCSSRuntimeDom({el: '#app'})
} else {
    //   const vueElements = document.querySelectorAll('[vue]')
    //  if (vueElements) vueElements.forEach(el => createVueApp().mount(el))
}
