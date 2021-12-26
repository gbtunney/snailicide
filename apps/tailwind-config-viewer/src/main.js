import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/index.css'

Vue.config.productionTip = false


export const TYPEKIT_ID = "kxg6qeb"

export const WEBFONT_CONFIG = {
  typekit: {
    id: TYPEKIT_ID
  }/*,
    custom: {
        families: [
            "Corso Regular",
            "Corso Medium",
            "Corso Bold"
        ]
    }*/,
  fontloading: function (familyName, fvd) {
    console.log("loading", familyName, fvd)
  },
  fontactive: function (familyName, fvd) {
    console.log("fontactive", familyName, fvd)
  },
  fontinactive: function (familyName, fvd) {
   console.error("fontinactive", familyName, fvd)
  }
};
import WebFont from 'webfontloader'
console.log("GILLIAN IS HERE")
WebFont.load(WEBFONT_CONFIG);


new Vue({
  render: h => h(App)
}).$mount('#app')
