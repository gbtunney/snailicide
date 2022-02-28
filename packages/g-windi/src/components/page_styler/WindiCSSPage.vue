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
  onMounted, computed
} from 'vue';
import 'highlight.js/lib/common';

import CodeBlockSlot from './../generic/CodeBlockSlot.vue';
defineComponent(CodeBlockSlot)

import {useWindiCSS} from './../../composable/useWindiCSS'
const {extractStylesFromHTML} = useWindiCSS()
onMounted(() => {
  // console.log("sta----te being set up!!!!!!",windistore.isInitialized)
})
const clickme = (e) => {
  console.warn("processor.interpret html ", e)
}
const onClickApp = (e: PointerEvent) => {
  const el = e.target as HTMLElement
  styleString.value = extractStylesFromHTML(el).compiled
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
      <CodeBlockSlot @input="clickme" code="const onClickApp = (e: PointerEvent) => {const el = e.target as HTMLElement
  function gillian(){
    return 'jkjkjkjkj'
  }
}"/>
      <CodeBlockSlot>
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
