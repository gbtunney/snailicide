import { createApp } from 'vue'
import App from './App.vue'
import WebFont from "webfontloader";

import router from './router'
import 'windi.css'

WebFont.load({
    fontactive: function (familyName:string, fvd) {
        console.log("loading   ", familyName);
    },
    typekit: {
        id:  process.env.VUE_APP_TYPEKIT_ID,
    },

});

import './styles/styles.theme.2012.css'
import './styles/main.css'

//console.log("VUE_APP_TITLE" , process.env.VUE_APP_TITLE,process.env.VUE_APP_TYPEKIT_ID)
createApp(App).use(router).mount('#appvue')

