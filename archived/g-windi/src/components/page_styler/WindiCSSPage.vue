<script lang="ts">

import VueTagsInput from "@sipec/vue3-tags-input";
export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {

     // tags: [],
    };
  },
};

</script>
<script lang="ts" setup>
import {randomInt} from '@snailicide/g-library';

import {
  ref,
  Ref,unref,
  defineComponent,
  onMounted, computed,
    reactive,getCurrentInstance, onUpdated, onUnmounted

} from 'vue';
import 'highlight.js/lib/common';
/*
const data =reactive( {
  tag: '',
      tags:['hhello','tag2'],
})
const datatags= ref([{text:'hhello'},{text:'tag2'}])
const datatag:Ref<string> = ref('')
const handlers= ref([])*/
//defineComponent(VueTagsInput)

import CodeBlockSlot from './../generic/CodeBlockSlot.vue';
defineComponent(CodeBlockSlot)

onMounted(() => {
  let instance = getCurrentInstance();
  console.log(instance);
  console.log("mounted!");
});
onUpdated(() => {
  let instance = getCurrentInstance();
  console.log(instance);

  console.log("updated!", tag.value);
});
onUnmounted(() => {
  let instance = getCurrentInstance();
  console.log(instance);
  console.log("unmounted!");
});

const tags = ref([])
const tag = ref('')

const autocomplete =ref ([{
      text: 'Spain',
    }, {
      text: 'France',
    }, {
      text: 'USA',
    }, {
      text: 'Germany',
    }, {
      text: 'China',
    }])
import {useWindiCSS} from './../../composable/useWindiCSS'
const {extractStylesFromHTML} = useWindiCSS()
onMounted(() => {
  // console.log("sta----te being set up!!!!!!",windistore.isInitialized)
})
import * as R from "ramda"
import * as RA from "ramda-adjunct"
const currentID = ref( '')

const onClickApp = (e: PointerEvent) => {
  const el = e.target as HTMLElement
  currentID.value =  (randomInt(0,50000)).toString()
  console.log("vnode is !!!", currentID.value,tag.value)

el.setAttribute("guid",  currentID.value )
 const {compiled,success,styleSheet}= extractStylesFromHTML(el,true )
   console.log("styleSheet sta----te being set up!!!!!!",el,styleSheet)
 // RA.replaceAll('ac', 'ef', 'ac ab ac ab')
  const newarr = styleSheet.children.map((windi_class,index)=>{
    const {meta:{group},selector}=styleSheet.children[index]
   const _selector = RA.replaceAll('.', '', selector)
    const obj ={
      text: _selector,
      ...
          (group === "backgroundColor"
          ||group === "borderColor"
         || group==="textColor" ) ? {classes:`${ _selector}` }:{classes: 'bg-yellow-300'}
    }
    console.log("styleSheet sta----te being set up!!!!!!",group,index,obj )

    return obj
  })

  tags.value = newarr
  styleString.value = compiled

}

const styleString: Ref<string> = ref('')
onMounted(() => {
  document.getElementById('clickwrapper').addEventListener('click', onClickApp)
  //window.document.addEventListener('click', onClickApp)
})

</script>
<template>
  <div class="WindiCSSPage">
    <div class="children:w-1/2">
      <CodeBlockSlot v-if="false" code="const onClickApp = (e: PointerEvent) => {const el = e.target as HTMLElement
  function gillian(){
    return 'jkjkjkjkj'
  }
}"/>
      <CodeBlockSlot v-if="false">
        <div>
          <ul>
            <li>ITEM 1</li>
            <li>ITEM 2</li>
          </ul>
        </div>
      </CodeBlockSlot>
    </div>

    <hr>
    <CodeBlockSlot v-if="true" :code="styleString"/>

    <vue-tags-input
        v-model="tag"
        :tags="tags"
        :autocomplete-items="autocomplete"
        @tags-changed="newTags => tags = newTags"
    />

    <ul>
      <li>tag: {{tag}}</li>
      <li>tags: {{tags}}</li>

    </ul>

    <!--    <CodeBlock :lang="'css'" :code="styleString"/>-->
    <div ref="clickwrapper" id="clickwrapper" class="h-screen flex items-center justify-center">
      <div class="bg-orange-900 text-center rounded-b-lg">
        <button class="btn">click me !!</button>
        <p class="text-white text-xl font-bold pt-6">
          HI!!
        </p>
        <p class="text-white text-sm font-light pt-6">
          Art. Community. Events
        </p>
        <button class="border border-white rounded-lg px-3 text-white font-semibold mt-6 mb-6">
          Live
        </button>
      </div>
      <div class="rounded-lg">
        <a href="#">
          <img src="https://picsum.photos/400/400" class="rounded-t-lg"/>
        </a>
        <div class="bg-indigo-900 text-center children:text-white rounded-b-lg">
          <p class=" text-xl font-bold pt-6">
            Cameo Pass
          </p>
          <p class=" text-sm font-light pt-6">
            Art. Community. Events
          </p>
          <div class="border bg-purple-500  border-white rounded-lg px-3 font-semibold mt-6 mb-6">
            hrtr
            <button class="bg-orange-500 rounded-lg m-8 px-3 font-semibold mt-6 mb-6">
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style type="text/css" src="highlight.js/styles/stackoverflow-light.css"/>
<style>
/* default styles for all the tags */
.vue-tags-input .ti-tag {
  position: relative;
  background-color: inherit;
//  @apply bg-red-500;
  //background: yellow;
  color: #283944;
}
</style>
