<script>
import {StyledContainerFlex, StyledSvgWrapper} from "./.."
import colorThemeMixin from "../../../../mixins/ColorMixins";
import dimensionsMixin from "../../../../mixins/DimensionsMixin";
import {layoutFlexMixin} from "../../../../mixins/LayoutContainerMixins";
import Vue from "vue";
import svgExample from "./svgExample";

Vue.component("styled-svg-wrapper", StyledSvgWrapper)
Vue.component("example-svg", svgExample)

export default {
  name: "StyledContainerFlex",
  extends: StyledContainerFlex,
  components: [],
  mixins: [layoutFlexMixin],
}
</script>
<docs lang="md">
This button is amazing, use it responsibly.
## Examples

Flex Container Row
```jsx
<StyledContainerFlex color="purple" height="100px" bg_color="orange" align="flex-end" justify="space-between">
  <styled-svg-wrapper v-for="item in 5" width="60">
    <example-svg/>
  </styled-svg-wrapper>
</StyledContainerFlex>
```

</docs>

