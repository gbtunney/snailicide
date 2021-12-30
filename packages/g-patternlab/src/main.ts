/*import Vue from 'vue'
import App from './App.vue'
import './styles/scss/tailwind.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')*/

import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/ui/sfc/gKabob.vue';

const CustomElement = wrap(Vue, VueWebComponent);

window.customElements.define('g-kabob', CustomElement);
