<script lang="ts">
import {Icon} from '@iconify/vue';
import InlineSvg from 'vue-inline-svg';
//import 'windi.css'
export default {
  name: "gIconify",
  components: {iconifyIcon: Icon, 'inline-svg': InlineSvg}
}
</script>
<script lang="ts" setup>
import {toRefs, defineProps, withDefaults, computed} from 'vue';
import {validateString, endsWith, contains} from '@snailicide/g-library';

interface IProps {
  inline?: boolean,
  center?: boolean,
  el?: string,

  path?: string,
  icon_set?: string,
  preserve_color?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  center: true,
  el: 'span',
  inline: true,
  path: 'baseline-content-copy',
  icon_set: 'ic',
  preserve_color: false
})

const cssClasses = computed(() => {
  return [
    ...!props.preserve_color ? ['g-svg-fill'] : [],
    ...props.center ? ['centerContent'] : [],
    ...props.inline ? ['inlineDimensions', 'inline-flex'] : ['blockDimensions', 'flex']
  ]
})

const useIconify = computed(() => {
  return !(validateString(props.path, ".svg", contains))
})
const iconPath = computed(() => {
  return (useIconify.value)
      ? validateString(props.path, ":", contains)
          ? props.path
          : `${props.icon_set}:${props.path}`
      : props.path
})

</script>
<template>
  <component
      v-bind:is="`${props.el}`"
      :class="cssClasses"
      class="g-svg">
    <!-- Iconify Icon -->
    <Icon
        v-if="useIconify"
        :icon="iconPath"
        class="iconify"/>

    <!-- Load Inline SVG -->
    <inline-svg
        v-else
        :src="iconPath"
        class="iconify"/>
  </component>
</template>
<style type="text/scss">

.g-svg-fill svg path, .g-svg-fill svg g, .g-svg-fill svg rect, .g-svg-fill svg circle {
  fill: currentColor;
}

.g-svg svg {
  display: block;
  width: 100%;
  height: 100%;
}

.inline-flex {
  display: inline-flex;
}

.flex {
  display: flex;
}

.centerContent {
  justify-content: center;
  align-items: center;
}

.blockDimensions {
  height: 100%;
  width: 100%;
}

.inlineDimensions {
  height: 1em;
  width: 1em; /*safari needs this */
}
</style>
