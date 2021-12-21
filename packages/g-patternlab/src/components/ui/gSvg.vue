<template functional>
  <styled-element-svg class="svg-wrapper"
      :class="props.classes"
      :as="props.wrapperEl"
      :bg_color="props.bg_color"
      :color="props.color"
      :width="props.width"
      :height="props.height"
      :border_size="props.border_size"
      :border="props.border"
      :svg_flag="true">
    <slot>
      <inline-svg v-if="props.path" :src="props.path" title="My Image"/>
      <svg v-else aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"></path>
      </svg>
    </slot>
  </styled-element-svg>
</template>
<script>
import Vue from "vue";
import InlineSvg from 'vue-inline-svg';

import {StyledElementSvg} from '@/components/ui/styledElement'
import {colorThemeMixin} from '@/mixins/ColorMixins'
import dimensionsMixin from "@/mixins/DimensionsMixin";

Vue.component('inline-svg', InlineSvg);
Vue.component('styled-element-svg', StyledElementSvg);

export default {
  name: "gSvg",
  components: {},
  mixins: [colorThemeMixin, dimensionsMixin],
  data: function () {
    return {}
  },
  props: {
    /**
     * Sets the svg wrapper element ( div, span, etc )
     */
    wrapperEl: {
      default: "div",
      type: String
    },
    /**
     * Sets the svg path
     */
    path: {
      default: false,
      type: [Boolean, String]
    },
    /**
     * Additional CSS classes
     */
    //todo: thhe whole cleaning thing
    classes: {
      default: false,
      type: [String, Array, Boolean]
    },
  }
}
</script>
<style lang="postcss" type="text/css" scoped>
.svg-wrapper {
  display: inline-block;
}
</style>

<docs lang="md">
G SVG

## Examples

default ( no path ):

```jsx
<g-svg width="80" color="indigo" bg_color="redorange" border="orange" border_size="2px"/>
```

with path:

```jsx
<g-svg path="leaves-a.svg" width="80" color="rebeccapurple" bg_color="orange" border="true"/>
```

with slot:

```jsx
<g-svg path="leaves-a.svg" width="80" color="rebeccapurple" bg_color="blue">
  <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Simple rectangle -->
    <rect width="100" height="100"/>
    <!-- Rounded corner rectangle -->
    <rect x="120" width="100" height="100" rx="15"/>
  </svg>
</g-svg>
```

</docs>
