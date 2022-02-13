<template>
<div>
  ihhihi
  <hr>
  <p v-if="firebase.app">Firebase Inited!<code>{{firebase.app}}</code></p>
  <button @click="firebase.loginUser('giiiiiii@mac.com','mypasss')">LOGIN</button>
 ERRROOOOO {{firebase.error}}
  <div style="background-color: red" v-if="firebase.error">ERROR{{firebase.error}}</div>
  <p>Counter{{counter.count}}</p><button @click="testing2();counter.increment">Increment</button>
  <input placeholder="Add TODO" class="input" v-model="input" />

</div>
</template>

<script lang="ts">
//import { defineComponent, ref } from "vue";
import {defineComponent, ref, computed, reactive, onMounted,toRefs } from '@vue/composition-api'
import useCounterStore from './../stores/counter';

import firebaseStore from "@/stores/firebase";

export default defineComponent({
  methods:{
testing2(){
  alert()
}
  },
  setup() {
    const input = ref("");

    const counter = useCounterStore()

    const firebase = firebaseStore()

console.log("HHrllo!!", counter.count)
   // counter.count++
    // with autocompletion ✨
   // counter.$patch({ count: counter.count + 1 })
    // or using an action instead
  counter.increment()
    return {
      getInc(){
        counter.increment()
        console.log("clicker",counter)
      //  alert()
      },
      firebase,
      counter,
      input,
    };
  },
});
</script>
