<template>
  <div class="home">
    <WindiCSSPage></WindiCSSPage>
    <hr>
    <CodeBlock>
      <div class="SimpleSelect">
        <span>slot from homeeeee</span>
        <span>code!!</span>
      </div>
    </CodeBlock>
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
import useWindiCSSStore from "./../composable/stores/useWindiCSSStore";
import windiConfig from "@/windi.config.obj";

import CodeBlock from '../components/generic/CodeBlockProp.vue';
import WindiCSSPage from "./../components/page_styler/WindiCSSPage.vue";

export default defineComponent({
  name: 'Home',
  data: function () {
    return {
      text_group: [],
      lang: "html",
    }
  },
  setup() {
    const windiStore = useWindiCSSStore()
    windiStore.initialize(windiConfig)
    return {}
  },
  components: {
    WindiCSSGroup, WindiCSSPage, CodeBlock
  },
});
</script>
