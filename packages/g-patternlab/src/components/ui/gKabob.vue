<template functional>
  <styled-element class="g-kabob"
      :style="$options.local_styles(props.direction,props.align_content)"
      :class="props.classes"
      :as="props.wrapperEl"
      :bg_color="props.bg_color"
      :color="props.color"
      :width="props.width"

      :border_size="props.border_size"
      :border="props.border"
      :svg_flag="true">
    <!--    :height="props.height"-->
    <slot name="left">
      <g-svg
          classes="reflect-x"
          :path="props.path"
          :color="props.color"
          :bg_color="props.bg_color"
          :height="props.height"
      />
    </slot>
    <styled-element class="g-kabob-hairline"
        style="width: 100%"
        :style="( props.hr ) ? `background:linear-gradient(180deg,transparent calc(50% - 1px), ${$options.getColorCssUnit( props.color )} calc(50%),transparent calc(50% + 1px));`:``"
    >
      <div style="width: auto;display: inline-block;"
          :style="( props.hr ) ? `background-color:${$options.getColorCssUnit( props.bg_color )};`:``">
        <slot>
          <div v-text="empty"/>
        </slot>
      </div>
    </styled-element>
    <slot name="right">
      <g-svg
          :path="props.path"
          :color="props.color"
          :bg_color="props.bg_color"
          :height="props.height"
      />
    </slot>
  </styled-element>
</template>
<script>
import Vue from "vue";
import styledElement from '@/components/ui/styledElement'

import {colorThemeMixin, getColorCssUnit} from '@/mixins/ColorMixins'
import dimensionsMixin, {getDistanceCssUnit} from "@/mixins/DimensionsMixin";

import gSVG from '@/components/ui/gSvg.vue'

Vue.component('g-svg', gSVG);
Vue.component('styled-element', styledElement);

export default {
  name: "gKabob",
  components: {},
  mixins: [colorThemeMixin, dimensionsMixin],
  data: function () {
    return {}
  },
  getColorCssUnit(value) {
    return getColorCssUnit(value)
  },
  getDistanceCssUnit(value) {
    return getDistanceCssUnit(value)
  },
  local_styles(_direction, _align_content = false) {
    return {
      "display": "flex",
      "flex-direction": _direction,
      ...(_align_content !== false)
          ? (_direction == "column")
              ? {"justify-content": _align_content}
              : {"align-items": _align_content}
          : {}
    }
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
    hr: {
      default: true,
      type: [Boolean]
    },
    /** center_width
     * @values String (with unit), integer(px appended to end), boolean (on/off)
     */
    center_width: {
      default: '100%',
      type: [String, Number, Boolean],
    },
    /** direction
     * @values row, column
     */
    direction: {
      default: "row",
      type: [String], /// enum : "row", "column"
    },
    /** align_content
     * @values "flex-start","center" adjusts for axis
     */
    align_content: {
      default: false,
      type: [Boolean, String], /// enum : "row", "column"
    }
  }

}
//todo: SCOPED is wierd on style
</script>
<style lang="postcss" type="text/css">
.reflect-x {
  transform: scale(-1, 1);
}
</style>

<docs lang="md">
## Examples

Kabob Divider (using css properties):

```jsx
<g-kabob  classes="w-1/12 fg-fill-accent-secondary-dk bg-accent-primary"></g-kabob>

```
Icon with Tailwind color

```jsx
<g-kabob path="leaves-a.svg"
    classes="p-2 w-full gsvg"
    height="20"
    color="--color-red-700"
    bg_color="--color-red-700"
    border="true"
    border_size="2"
    :hr="false"
><h2>I am gillian</h2>
</g-kabob>

```
Icon with Hex color & Percent Width

```jsx
```
</docs>
