<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WindiCSSInput :index="30" @success="(classes) =>  $data.test_succ  =classes"></WindiCSSInput>
    {{ $data.test_succ }}
    <gWindiPageStyler @change="(classes) =>  $data.myclasses  =classes "/>
    <hr>
    <div :class="Classes">I am a text thing !!!</div>
    <input
        v-model="$data.input_str"
        hover="bg-red-600 text-white"
        class="shadow
        focus:(outline-none shadow-outline)
        appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        id="value" type="text" placeholder="classes">
    <WindiCSSGenerator :value="$data.input_str"/>
    <WindiAttrGenerator/>
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
import WindiAttrGenerator from './../components/WindiAttrGenerator.vue';
import WindiCSSBase from './../components/page_styler/WindiCSSBase.vue';
import WindiCSSInput from './../components/page_styler/WindiCSSInput.vue';

export default defineComponent({
  name: 'Home',
  data: function () {
    return {
      myclasses: "",
      input_str: "",
      test_succ: [],
    }
  },
  components: {
    WindiCSSGenerator, gWindiPageStyler, WindiAttrGenerator, WindiCSSInput
  },
  computed: {
    Classes() {
      return `${this.$data.myclasses} ${this.$data.input_str}`
    }
  },
  setup() {
    const classes_string = ref("")
    return {classes_string}
  }
});
</script>
