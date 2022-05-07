<script>
import {StyledContainerGrid,StyledSvgWrapper} from "./.."
import svgExample from "./svgExample";
import colorThemeMixin from "../../../../mixins/ColorMixins";
import dimensionsMixin from "../../../../mixins/DimensionsMixin";
import {layoutGridMixin} from "../../../../mixins/LayoutContainerMixins";
import Vue from "vue";

Vue.component("styled-svg-wrapper",StyledSvgWrapper)
Vue.component("example-svg",svgExample)

export default {
  name: "StyledContainerGrid",
  extends: StyledContainerGrid,
  mixins:[layoutGridMixin]
}
</script>
<docs lang="md">
```jsx
<styled-container-grid columns="6" :grid_gap="40" width="60%" color="orange" bg_color="red">
  <styled-svg-wrapper v-for="item in 20" width="100%">
    <example-svg/>
  </styled-svg-wrapper>
</styled-container-grid>
```
</docs>
