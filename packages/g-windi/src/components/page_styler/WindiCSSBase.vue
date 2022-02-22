<script lang="ts">
import {toRefs, ref, Ref, defineProps, defineEmits, withDefaults, defineComponent, DefineComponent} from 'vue';

const props = withDefaults(defineProps<{ index?: number | false, inject: boolean }>(), {
  index: undefined,
  inject: false
})

export const _component = defineComponent({
  name: "WindiCSSBase",
  props: {
    index: {
      type: Number,
      default: 0
    },
    inject: {
      type: Boolean,
      default: false
    },
  },
})
export default _component
</script>
