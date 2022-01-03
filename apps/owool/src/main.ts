import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
//import store from './store'

import plugin from "@snailicide/g-patternlab";

Vue.use(plugin);

const root_el = "inner"; /// using inner because the other liquid one errors
const element = document.getElementById(root_el);

/*
new Vue({

    render: h => h(App)
}).$mount('#app')
*/

if (
  typeof document.getElementById(root_el) != "undefined" &&
  document.getElementById(root_el) != null
) {
  // Exists.
  alert();
  new Vue({
    el: `#${root_el}`,
  });
  //   vm.$mount('#app');
  // this does not
}
/*
const vm = new Vue({
    template: '<div>I\'m mounted</div>',
    created(){
        console.log('Created');
    },
    mounted(){
        console.log('Mounted');
    }
});
*/
//Vue.config.productionTip = false
/*
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
*/
