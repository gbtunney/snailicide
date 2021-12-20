<template functional>
   <styled-element class="svg-wrapper"
       :as="props.wrapperEl"
       :bg_color="props.bg_color"
       :color="props.color"
       :width="props.width"
       :height="props.height"
       :border_size="props.border_size"
       :border="props.border"
       :svg_flag="true">
     <slot>
       <inline-svg :src="'leaves-a.svg'" title="My Image"/>
     </slot>
   </styled-element>
</template>
<script>
import Vue from "vue";
import InlineSvg from 'vue-inline-svg';

import styledElement from '@/components/ui/styledElement'
import {colorThemeMixin} from '@/mixins/ColorMixins'
import dimensionsMixin from "@/mixins/DimensionsMixin";

Vue.component('inline-svg', InlineSvg);
Vue.component('styled-element', styledElement);

export default {
  name: "gSvg",
  components: {},
  mixins:[colorThemeMixin,dimensionsMixin],
  data: function () {
    return {}
  },
  props: {
    wrapperEl:{
      default:"div",
      type: String
    }
  }
}
</script>
<style lang="postcss" type="text/css" scoped>
.svg-wrapper{
  display: inline-block;
}
</style>
