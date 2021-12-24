<script>
import * as RA from "ramda-adjunct"
import styled from 'vue-styled-components'
import colorThemeMixin, {getColorCssUnit} from "../../mixins/ColorMixins";
import dimensionsMixin, {getDistanceCssUnit} from "../../mixins/DimensionsMixin";
import {cleanBooleanType} from "@snailicide/g-library";
import {wrapperFlex, wrapperGrid} from "@/mixins/WrapperMixins";
import {getCSSString} from "@/mixins/FunctionMixins";

/* *  getLineString * */
const getLineString = function (props = false) {
  const {color = false, line_width = "1px"} = props
  return `background: linear-gradient(180deg, transparent calc(50% - ${getDistanceCssUnit(line_width)}),
  ${getColorCssUnit(color)} calc(50%),
  transparent calc(50% +  ${getDistanceCssUnit(line_width)}));
`
}

//************** _StyledElement Base component  *****************//

/* * base props * */
export const PROPS = {
  ...colorThemeMixin.props, ...dimensionsMixin.props
}

const _StyledElement = styled('div', {...PROPS})`
  ${props => getCSSString(getColorCssUnit(props.color), "color")};
  ${props => getCSSString(getColorCssUnit(props.bg_color), "background-color")};

  ${props => getCSSString(getDistanceCssUnit(props.width), "width")};
  ${props => getCSSString(getDistanceCssUnit(props.height), "height")};

  //border size
  ${props => getCSSString(
      (cleanBooleanType(props.border) !== false
          && (cleanBooleanType(props.border_size) === false))
          ? getDistanceCssUnit(true)
          : getDistanceCssUnit(props.border_size), "border-width")};

  //border style
  ${props => getCSSString(
      (cleanBooleanType(props.border) !== false
          || (cleanBooleanType(props.border_size) !== false))
          ? 'solid'
          : false, "border-style")};

  //border color
  ${props => (cleanBooleanType(props.border) === true)
      ? getCSSString(getColorCssUnit(props.color), "border-color")
      : getCSSString(getColorCssUnit(props.border), "border-color")};
`
export const StyledElement = _StyledElement

/**
 * Extend Styled Element for StyledElementSvg
 */
const _StyledElementSvg = styled(_StyledElement, {...PROPS})`
  ${props => getSvgString(props)}
`;
export const StyledElementSvg = _StyledElementSvg

/* * StyledBackgroundLine Component * */
const GRADIENT_LINE_PROPS = {
  line_width: {
    default: "1px",
    type: [Boolean, Number, String]
  }
}
/* * Extend Styled Element for _StyledBackgroundLine  * */
const _StyledBackgroundLine = styled(_StyledElement, {...GRADIENT_LINE_PROPS})`
  ${props => (props.color !== false) ? getLineString(props) : ""}
`;
export const StyledBackgroundLine = _StyledBackgroundLine


export default {
  name: "styledElement",
  extends: _StyledElement,
  mixins: [colorThemeMixin, dimensionsMixin],
}
</script>
<docs lang="md">
styled element:
## Examples

styled element:

```jsx
<styled-element bg_color="--color-gumleaf-500" color="pink" border="true" :border_size="4">HEADINF 1
  <g-svg path="leaves-a.svg" width="80" color="red" :classes="'gbt'" wrapper-el="div"/>
</styled-element>
```
styled element svg:

```jsx
<styled-element-svg bg_color="blue" color="pink" border="true" :border_size="4">HEADINF 1
  <g-svg path="leaves-a.svg" width="80" color="red" :classes="'gbt'" wrapper-el="div"/>
</styled-element-svg>
```
</docs>
