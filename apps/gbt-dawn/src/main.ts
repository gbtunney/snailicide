import { createApp } from 'vue'
import App from './App.vue'

import { defineCustomElement } from 'vue'

const MyVueElement = defineCustomElement({
    // normal Vue component options here
    props: {
        message: {
            default:"message not set",
            type:String
        }
    },
    emits: {},
    template: `<h1 class="testing">{{$props.message}}</h1>`,

    // defineCustomElement only: CSS to be injected into shadow root
    styles: [`.testing{background:red; }`]
})
console.log(MyVueElement)
// Register the custom element.
// After registration, all `<my-vue-element>` tags
// on the page will be upgraded.
customElements.define('gbt-vue-element', MyVueElement)

//createApp(App).mount('#app')
