<template functional>
  <styled-container-flex class="g-kabob"
      :as="props.wrapperEl"
      :direction="props.direction"
      :align="(props.align) ? props.align: 'center'"
      :class="$options.getClasses(props.classes)"
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
    <styled-background-line width="100%" class="flex justify-center" :color=" props.hr === true ? props.color: false">
      <styled-element :bg_color="props.bg_color" class="inline-flex p-px" width="auto">
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
  </styled-container-flex>
</template>
<script>
import Vue from "vue";
import StyledElement, {StyledContainerFlex, StyledBackgroundLine} from '../styled'

import {addlClassNames} from '../../../mixins/AddlClassMixins'
import {layoutFlexMixin} from "../../../mixins/LayoutContainerMixins"
import {colorThemeMixin, getColorCssUnit} from '../../../mixins/ColorMixins'
import dimensionsMixin, {getDistanceCssUnit} from "../../../mixins/DimensionsMixin";

import gSVG from './gSvg.vue'

Vue.component('g-svg', gSVG);
Vue.component('styled-element', StyledElement);
Vue.component('styled-container-flex', StyledContainerFlex);
Vue.component('styled-background-line', StyledBackgroundLine);

export default {
  name: "gKabob",
  mixins: [colorThemeMixin, dimensionsMixin, addlClassNames, layoutFlexMixin],
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
  }
}
</script>
<style lang="postcss" type="text/css">
.reflect-x {
  transform: scale(-1, 1);
}
</style>

<!--
<docs lang="md">
## Examples
Kabob Divider (using css properties):
```jsx
<g-kabob path="divider.svg"
    width="100%"
    height="20"
    color="&#45;&#45;color-primary"
    :hr="true"/>
```
Icon with Tailwind color

```jsx
<g-kabob path="leaves-a.svg"
    classes="p-2 "
    height="20"
    color="orange"
    bg_color="&#45;&#45;color-gumleaf-800"
    border="true"
    border_size="2"
    :hr="true"
><h2>Test Kabob</h2>
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
-->
