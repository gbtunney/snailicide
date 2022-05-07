<script lang="ts" setup>
import {toRefs, defineProps, withDefaults, computed} from 'vue';
import gIconify from './gIconify.vue';

interface IProps {
  direction?: "column" | "row"
  line_width?: string,
  inline?: boolean,
  el?: string,
  hr?: boolean,
  path?: string,
  icon_set?: string,
}

const props = withDefaults(defineProps<IProps>(), {
  direction: "row",
  line_width: '1px',
  hr: true,
  el: 'div',
  inline: true,
  path: 'baseline-content-copy',
  icon_set: 'ic'
})

const getBackgroundLineCSS = computed(() => {
  return (props.hr === true) ?
      {background: `linear-gradient(180deg, transparent calc(50% - ${props.line_width}), currentColor calc(50%), transparent calc(50% +  ${props.line_width}))`}
      : {}
})

const cssClasses = computed(() => {
  return [
    'flex',
    ...props.direction === "row" ? ['flex-row'] : ['flex-column']
  ]
})

</script>
<template>
  <component
      v-bind:is="`${props.el}`"
      :class="cssClasses"
      class="justify-center items-center"
  >
    <!-- LEFT COLUMN -->
    <slot name="left">
      <gIconify
          class="reflect-x"
          :path="props.path"
          :icon_set="props.icon_set"
      />
    </slot>

    <!-- CENTER -->
    <div class="flex justify-center w-full" :style="getBackgroundLineCSS">
      <span class="inline-flex p-px w-auto">
        <slot>
          <div v-text="'i am empty text'"/>
        </slot>
      </span>
    </div>

    <!-- RIGHT -->
    <slot name="right">
      <gIconify
          :path="props.path"
          :icon_set="props.icon_set"
      />
    </slot>
  </component>
</template>
<style type="text/css">

.v-center {
  justify-content: center;
  align-items: center;
}

.reflect-x {
  transform: scale(-1, 1);
}
</style>
