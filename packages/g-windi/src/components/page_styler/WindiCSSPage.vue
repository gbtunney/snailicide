<script lang="ts">
export default {
  name: "WindiCSSGroup",
}
</script>
<script lang="ts" setup>
import {
  ref,
  Ref,
  defineComponent,
  onMounted
} from 'vue';
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import 'highlight.js/lib/common';

//import CodeBlock from './../generic/CodeBlockProp.vue';
import codeblocksloy from './../generic/CodeBlockSlot.vue';
defineComponent(codeblocksloy)
import {useWindiCSSStore}from './../../composable/stores/useWindiCSSStore'
const windiStore = useWindiCSSStore()
//const processor = windiStore.processor
const clickme = (e) => {
  console.warn("processor.interpret html ",e)
}
const onClickApp = (e: PointerEvent) => {
  const el = e.target as HTMLElement
  extractStylesFromHTML( el)
}

const extractStylesFromHTML = (el: HTMLElement,processor=windiStore.processor) => {
  const classString = R.join(" ", Array.from(el.classList))
  console.log("processor.interpret html ",processor)
 const compiled = processor.interpret(classString).styleSheet.build()
  styleString.value = compiled
  console.log("compiled ", compiled, classString)
}


const styleString: Ref<string> = ref('')
onMounted(() => {
  document.getElementById('clickwrapper').addEventListener('click', onClickApp)
/*:code="`<div>const onClickApp = (e: PointerEvent) => {const el = e.target as HTMLElement
  extractStylesFromHTML( el)
  function gillian(){
    return 'jkjkjkjkj'
  }
}</div>`"*/
  //code="<html><ul  > <li>I am a list!!</li>></ul > </html>"
  //window.document.addEventListener('click', onClickApp)
})

</script>
<template>
  <div class="WindiCSSPage">
    <codeblocksloy @input="clickme" code="const onClickApp = (e: PointerEvent) => {const el = e.target as HTMLElement
  function gillian(){
    return 'jkjkjkjkj'
  }
}" ></codeblocksloy>


    <hr>COMPONENT
    <codeblocksloy>
<div>
  <ul>
    <li>ITEM 1 </li >
          <li>ITEM 2 </li >
  </ul>
</div>
    </codeblocksloy>
    <hr>
 <codeblocksloy v-if="true"  :code="styleString">

    </codeblocksloy>

<!--    <CodeBlock :lang="'css'" :code="styleString"/>-->
    <div id="clickwrapper" class="h-screen flex items-center justify-center">
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
          <button class="border border-white rounded-lg px-3 font-semibold mt-6 mb-6">
            Live
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style type="text/css"  src="highlight.js/styles/stackoverflow-light.css"/>
