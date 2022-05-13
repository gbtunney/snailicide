<script lang="ts">
import {Icon} from '@iconify/vue';
import InlineSvg from 'vue-inline-svg';

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
}

const props = withDefaults(defineProps<IProps>(), {
  center: true,
  el: 'span',
  inline: true,
  path: 'baseline-content-copy',
  icon_set: 'ic'
})

const cssClasses = computed(() => {
  return [
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
      class="g-svg g-svg-fill">
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
<style type="text/css">

.centerContent {
  justify-content: center;
  align-items: center;
}

.blockDimensions {
  height: 100%;
}

.inlineDimensions {
  height: 1em;
}
</style>
