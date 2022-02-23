<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WindiCSSGroup @change="(classes_arr) => $data.text_group =classes_arr"></WindiCSSGroup>
    text_group: {{ $data.text_group }}
  </div>
</template>
<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
/*
import WindiCSSGenerator from './../components/WindiCSSGenerator.vue'
import gWindiPageStyler from './../components/gWindiPageStyler.vue'
import WindiAttrGenerator from './../components/WindiAttrGenerator.vue';
import WindiCSSBase from './../components/page_styler/WindiCSSBase.vue';
import WindiCSSInput from './../components/page_styler/WindiCSSInput.vue';*/
import WindiCSSGroup from './../components/page_styler/WindiCSSGroup.vue';

export default defineComponent({
  name: 'Home',
  data: function () {
    return {
      text_group: [],
    }
  },
  components: {
    WindiCSSGroup
  },
});
</script>
