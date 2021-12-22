<template functional>
  <styled-element-flex class="g-kabob"
      :direction="props.direction"
      :align="props.align"
      :class="$options.getClasses(props.classes)"
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
    <styled-background-line width="100%" :color=" props.hr === true ? props.color: false" >
      <styled-element :bg_color="props.bg_color" class="inline-block p-px" width="auto" >
        <slot>
          <div v-text="empty"/>
        </slot>
      </styled-element>
    </styled-background-line>

    <slot name="right">
      <g-svg
          :path="props.path"
          :color="props.color"
          :bg_color="props.bg_color"
          :height="props.height"
      />
    </slot>
  </styled-element-flex>
</template>
<script>
import Vue from "vue";
import styledElement  from './styledElement'
import {StyledFlex,StyledBackgroundLine}  from './styledElement'

import{addlClassNames} from './../../mixins/AddlClassMixins'
import {wrapperFlex} from "./../../mixins/WrapperMixins"
import {colorThemeMixin, getColorCssUnit} from './../../mixins/ColorMixins'
import dimensionsMixin, {getDistanceCssUnit} from "./../../mixins/DimensionsMixin";

import gSVG from './gSvg.vue'

Vue.component('g-svg', gSVG);
Vue.component('styled-element', styledElement);
Vue.component('styled-element-flex', StyledFlex);
Vue.component('styled-background-line', StyledBackgroundLine);

 //
export default {
  name: "gKabob",
  components: {},
  mixins: [colorThemeMixin, dimensionsMixin,addlClassNames,wrapperFlex],
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
    classes="p-2 "
    height="20"
    color="orange"
    bg_color="blue"
    border="true"
    border_size="2"
    :hr="false"
><h2>I am gillian</h2>
</g-kabob>

```
Icon with Hex color & Percent Width

```jsx
<g-kabob path="leaves-a.svg"
    classes="p-4 w-full gsvg"
    height="20" color="red" bg_color="yellow" border="red"
    :hr="false"
><h2 class="font-style-sm-caps">I am gillian</h2>
</g-kabob>
```
</docs>
