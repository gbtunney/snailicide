<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
  name: "gIconify",
  components:{iconifyIcon : Icon}
}
</script>
<script lang="ts" setup>
import {toRefs, ref, Ref, defineProps, defineComponent,defineEmits, withDefaults,computed} from 'vue';

interface IProps{
  path?: string,
  el?:string,
  icon_set?:string,
  iconify?: boolean,
  color?:string,
  inline?:boolean,
}
const props = withDefaults(defineProps<IProps>(), {
  iconify:true,
  el:'span',
  inline:false,
  path: 'baseline-content-copy',
  icon_set:'ic'
})
const {el,path,color} = toRefs(props)

const display = computed(()=>{
  if ( props.inline ) return 'inline-flex'
  return 'flex'
})
const icon = computed(()=>{
  if ( props.iconify ) return `${props.icon_set}:${props.path}`
  return props.path
})

</script>
<template>
    <component
        v-bind:is="`h${el}`"
        :style="{display}"
        :class="(color)? color : ''">
      <slot>
        <Icon :icon="icon"  class="iconify"/>
      </slot>
    </component>
</template>
<style scoped>
svg {
  display: block;
  width: 100%;
  height: 100%;
 /* & path, & g, & rect, & circle {
    ${getCSSString(color, "fill")}
  }*/
}
</style>
