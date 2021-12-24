import styled from "vue-styled-components";
import {getCSSString} from "../../mixins/FunctionMixins";
import colorThemeMixin, {getColorCssUnit} from "../../mixins/ColorMixins";
import dimensionsMixin, {getDistanceCssUnit} from "../../mixins/DimensionsMixin";
import {cleanBooleanType} from "@snailicide/g-library";

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
export default StyledElement
