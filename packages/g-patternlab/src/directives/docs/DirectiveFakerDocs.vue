<template>
  <component is="$props.el" v-text="getContent" class="DirectiveFakerDocs" />
<!--
    <button v-faker:sentences="'[2 , gggggg ]'">test 2</button>
    <hr>
    <button v-faker:lorem.words="4">test 3</button>
    <hr>
    <button v-faker:lorem>test 4</button>
    <hr>
    <button v-faker:internet.email="'uppercase'">NO DIRECTIVE</button>
    <article class="prose" v-faker:paragraphs>kjjkjkj</article>-->
</template>
<script>
import {vFaker}from "./../"
import Vue from "vue";
import {faker} from "@faker-js/faker";
import {getFakerFunction} from "../directiveFaker";
Vue.directive("faker",vFaker)
export default {
  name: "DirectiveFakerDocs",
  components: {},
  props: {
    /**
     * shortcut values (usually arg in the directive)
     * @values false,default,p,paragraph,ps,paragraphs,s,sentence,ss,sentences,w,word,h,ws,words,n,int,number,f,d,float
     */
    shortcut: {
      type: String|Boolean,
      default: 'default'
    },
   /* : {
      type: String|Boolean,
      default: false
    },*/
    modifiers:{
      type: Object,
      default:()=>{}
    },
    value: {
      type: [Array,Boolean,String,Number],
      default: false
    },
    el:{
      type: String,
      default:'div'
    },
  },
  computed:{
    getContent(){
      return getFakerFunction(this.$props.shortcut,this.$props.value,this.$props.modifiers)
    }
  },
  data: function () {
    return {}
  },}
</script>
<docs lang="md">
This button is amazing, use it responsibly.
## Examples

app-button:

<button v-faker:lorem.words="4">Words Test : Not Set</button>
```

</docs>
