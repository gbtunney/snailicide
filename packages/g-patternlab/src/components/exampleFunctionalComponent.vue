<script>
import {colorThemeMixin, getColorCssUnit} from '@/mixins/ColorMixins'
import dimensionsMixin, {getDistanceCssUnit} from "@/mixins/DimensionsMixin";
import InlineSvg from 'vue-inline-svg';

export default {
  name: "exampleFunctionalComponent",
  functional: true,
  mixins: [colorThemeMixin, dimensionsMixin],
  props: ['level'],
  render(createElement, {props, children}) {
    return createElement('button', getDistanceCssUnit(props.width));
  }
}
</script>
