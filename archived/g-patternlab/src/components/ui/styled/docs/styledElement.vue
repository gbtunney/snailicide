<script>
import {StyledElement} from "./.."
import colorThemeMixin from "../../../../mixins/ColorMixins";
import dimensionsMixin from "../../../../mixins/DimensionsMixin";

export default {
  name: "StyledElement",
  extends: StyledElement,
  mixins: [colorThemeMixin, dimensionsMixin]
}
</script>

<docs lang="md">
Styled Element:
## Examples
bg_color is a tailwind variable
```jsx
<styled-element class="p-2" bg_color="--color-gumleaf-500" color="pink" border="true" :border_size="4">
  Button
</styled-element>
```
</docs>
