<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <gWindiPageStyler @change="(classes) =>  $data.myclasses  =classes "/>
    <hr>
    <div :class="$data.myclasses"> I am a text thing !!!</div>
    <input
        v-model="$data.myclasses"
        hover="bg-red-600 text-white"
        class="shadow
        focus:(outline-none shadow-outline)
        appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        id="value" type="text" placeholder="classes">
    <WindiCSSGenerator :value=" $data.myclasses"/>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  defineComponent,
  PropType,
  Ref,
  SetupContext,
  Prop,
  defineProps,
  defineEmits,
  withDefaults
} from 'vue';
import WindiCSSGenerator from './../components/WindiCSSGenerator.vue'
import gWindiPageStyler from './../components/gWindiPageStyler.vue'

export default defineComponent({
  name: 'Home',
  data: function () {
    return {
      myclasses: "",
    }
  },
  components: {
    WindiCSSGenerator, gWindiPageStyler
  },
  setup() {
    const classes_string = ref("")
    return {classes_string}
  }
});
</script>
