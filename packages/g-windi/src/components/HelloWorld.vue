<template>
  <div class="hello ">
  <div class="group selection:text-fuchsia-900">    <h1 class="bg-red-600  btn  ">{{ msg }}</h1>
   <div :ref="testme" style="" >
     <p :class="target_value"> This is the target element !!</p>
     <input
         v-for="i in 6"
         :key="i"
         type="text"
         :data-id="i"
         class="!my-0 !min-w-0"
         :placeholder="`${i}`"
     >
     <button class="text-primary bg-wacky-600">G GRADIENT </button>

     <span> <input placeholder="Enter classes. " class="w-full border-black border-solid border" v-model="value"/> <button @click="getWindiStyles(value)">update target</button></span>
   </div>
  </div>

    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, Ref} from 'vue';
import useWindiCSS from "@/composable/useWindiCSS";
import {ref,watch,computed,onMounted} from 'vue';
import {useElementStyle} from "@vueuse/motion"
import {getColorScaleMap} from './../scripts/colorScale';
import windiConfig from "./../windi.config.obj";
import {MaybeRef} from "@vueuse/core";

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components:{},
  setup(){
    const value = ref('bg-yellow-600')
    const target_value  = ref([''])


    ///**** PROJECT CUSTOM (BASE) COLORS **** uses numbers for shades. ***///
    const colorScaleObj = {
      "newgumleaf": {
        default_color: "afd3c2"
      },
      "gradient": {
        scale: ['yellow', 'red', 'black'],
        default_color: 'red',
        color_count: 9
      },
      "potter-winkle": {
        default_color: 'CCCCFF'
      }
    }
const testvar    ={theme: {
  extend:{
    colors: {
      ...getColorScaleMap(colorScaleObj),
      "wacky": {
        "DEFAULT": "#efc618",
        "50": "#fefcf3",
        "100": "#fdf9e8",
        "200": "#fbf1c5",
        "300": "#f9e8a3",
        "400": "#f4d75d",
        "500": "#efc618",
        "600": "#d7b216",
        "700": "#b39512",
        "800": "#8f770e",
        "900": "#75610c"
      },
    }}
  }}
    const styleProcessor =useWindiCSS( {config:windiConfig} )
    const {getWindiStyles,injectWindiStyles }= styleProcessor
    console.log("THE THING ISSS", getWindiStyles(value.value).compiled)

    return {target_value,styleProcessor,injectWindiStyles, getWindiStyles}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
