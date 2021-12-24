<template>
  <div class="container">
    <input v-model="$data.strSearch" class="bg-gray-300 border-bg-primary p-2 m-2"/>
    <button class="border-2 bg-primary text-white p-2 border-accent-secondary" @click="$data.disabled =! $data.disabled">Toggle Disabled : {{ ($data.disabled) ? "Off" : "On" }}</button>
    <hr>
    <styled-class-finder :disabled="disabled" :value="$data.strSearch">
      <slot>
        <!-- @slot Use this slot for content -->
        <h2>No child html set</h2>
      </slot>
    </styled-class-finder>
  </div>
</template>
<script>
import StyledClassFinder from './styled-class-finder.vue';
import Vue from "vue";

Vue.component('styled-class-finder', StyledClassFinder);

export default {
  name: "gClassFinder",
  components: {},
  data: function () {
    return {
      strSearch: "",
      disabled: false
    }
  },
  props: {}
}
</script>
