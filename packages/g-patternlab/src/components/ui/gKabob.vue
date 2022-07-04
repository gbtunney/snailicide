<script lang="ts" setup>
import {toRefs, defineProps, withDefaults, computed} from 'vue';
import gIconify from './gIconify.vue';
interface IProps {
  direction?: "column" | "row"
  fit?: boolean,
  grid?: boolean,
  line_width?: string,
  el?: string,
  hr?: boolean,
  path?: string,
  icon_set?: string,
  content?: string
}

const props = withDefaults(defineProps<IProps>(), {
  grid: true,
  direction: "column",
  fit: false,
  line_width: '1px',
  hr: true,
  el: 'div',
  path: 'baseline-content-copy',
  icon_set: 'ic',
})

const getBackgroundLineCSS = computed(() => {
  return (props.hr === true) ?
      {background: `linear-gradient(180deg, transparent calc(50% - ${props.line_width}), currentColor calc(50%), transparent calc(50% +  ${props.line_width}))`}
      : {}
})

const cssClasses = computed(() => {
  return [
    ...props.grid !== true ? ['pl-flex'] : ['pl-grid'],
    ...props.direction === "row"
        ? [`${props.grid !== true ? 'pl-flex' : 'pl-grid'}-row`]
        : [`${props.grid !== true ? 'pl-flex' : 'pl-grid'}-column`]
  ]
})

</script>
<template>
  <component
      v-bind:is="`${props.el}`"
      :class="cssClasses"
      class="items-center"
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
    <div
        :class="props.fit ? 'w-auto' : 'w-full'"
        class="text-center" :style="getBackgroundLineCSS">
      <span :class="(content === undefined ) ? 'hideContent': ''" class="inline-flex p-px w-auto">
        <slot>
          <div v-text="content"/>
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
<style type="text/css" lang="scss">
.w{
  &-auto{
     width:auto;
   }
  &-full{
    width:100%;
  }
}
.items-center{
  align-items: center;
}
.h{
  &-auto{
    width:auto;
  }
  &-full{
    width:100%;
  }
}

.pl-grid {
  display: grid;

  &-row {
    grid-template-rows: auto 1fr auto;
  }

  &-column {
    grid-template-columns: auto 1fr auto;
  }
}

.pl-flex {
  display: flex;

  &-row {
    flex-direction: row;
  }

  &-column {
    flex-direction: column;
  }
}

.hideContent > * {
  visibility: hidden;
}

.v-center {
  justify-content: center;
  align-items: center;
}

.reflect-x {
  transform: scale(-1, 1);
}
</style>
