<template>
  <div class="hello ">
  <div class="group selection:text-fuchsia-900">    <h1 class="gillian bg-red-600  btn  ">{{ msg }}</h1>
   <div :ref="testme" style="" >
     <p :class="selected_classes"> This is the target element !!</p>
     selected: <p v-text="selected_variant"></p>
     <hr>
     <Multiselect autocomplete="on"
         :searchable="true"
         v-model="selected_variant"
         :options="variants"
     />

       <span>COLORS:  <Multiselect autocomplete="on"
           :searchable="true"
           @change="InjectWindiStyles"
           v-model="selected_colors"
           mode="multiple"
           :options="Colors"
       /></span>
     <div>
       Windi Classes
       <Multiselect autocomplete="on"
           v-model="selected_classes"
           @change="InjectWindiStyles"
           :searchable="true"   mode="multiple"
           :options="staticclasses"
       />
     </div>colors

     <button class="text-primary bg-wacky-600">G GRADIENT {{selected_classes}} !!</button>

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
import Multiselect from '@vueform/multiselect'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components:{Multiselect},
  setup(){
    const value = ref('bg-yellow-600')


    const target_value  = ref([''])

const selected_classes = ref([])

    const variants  = ref([
      'Batman',
      'Robin',
      'Joker',
    ])
    const selected_variant  = ref([])

    const Colors  = ref([
      'Batman',
      'Robin',
      'Joker',
    ])
    const selected_colors = ref([])


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
    const{completions: {static:staticclasses, color:colors },processor:{allVariant }}=  styleProcessor
  const InjectWindiStyles= ( value : Array<string> )=>{
    ////get the class targett

    const {success,styleSheet} = getWindiStyles((value).toString())


    console.log("THE InjectWindiStyles ISSS","target " , (value).toString() , getWindiStyles('text-pink-900 bg-red-600'), value,success ,styleSheet )
    target_value.value =  [...success,... target_value.value ]
    injectWindiStyles( value,undefined,{} )
  }
    console.log("THE IcolorsnjectWindiStyles ISSS",colors)

    Colors.value =colors
    variants.value =allVariant
    return {target_value,styleProcessor,Colors,InjectWindiStyles, getWindiStyles,colors,variants,selected_variant,selected_classes,staticclasses}
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
<style src="@vueform/multiselect/themes/default.css"></style>
