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
import useWindiCSSStore from "./../../composable/stores/useWindiCSSStore";
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import CodeBlock from './../generic/CodeBlockProp.vue';

defineComponent(CodeBlock)

const windiStore = useWindiCSSStore()
const {processor} = windiStore

const onClickApp = (e: PointerEvent) => {
  const el = e.target as HTMLElement
  const classString = R.join(" ", Array.from(el.classList))
  console.log("processor.interpret html ", el, processor.interpret(el.innerHTML))
  const compiled = processor.interpret(classString).styleSheet.build()
  styleString.value = compiled
  console.log("compiled ", compiled, classString)
}
const styleString: Ref<string> = ref('')
onMounted(() => {
  window.document.addEventListener('click', onClickApp)
})

</script>
<template>
  <div class="WindiCSSPage">
    <CodeBlock :lang="'css'" :code="styleString"/>
    <div class="h-screen flex items-center justify-center">

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
      <card class="rounded-lg">
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
      </card>
    </div>
  </div>
</template>
