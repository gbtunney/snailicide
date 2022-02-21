<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input
        v-model="classes_string"
        hover="bg-red-600 text-white"
        class="shadow
        focus:(outline-none shadow-outline)
        appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        id="value" type="text" placeholder="classes">
    <WindiCSSGenerator :value="classes_string"/>
  </div>
</template>

<script lang="ts">
import { ref,computed, defineComponent,PropType,Ref ,SetupContext,Prop,defineProps ,defineEmits,withDefaults} from 'vue';

import WindiCSSGenerator from './../components/WindiCSSGenerator.vue'
export default defineComponent({
  name: 'Home',
  components: {
    WindiCSSGenerator
  },
  setup(){
   const  classes_string = ref("")
    return {classes_string}
  }
});
</script>
