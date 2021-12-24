import styled from "vue-styled-components";
import {StyledElement} from "./styledElementBase"
import colorThemeMixin from "../../mixins/ColorMixins";
import dimensionsMixin from "../../mixins/DimensionsMixin";
import {getCSSString} from "../../mixins/FunctionMixins";

export const PROPS = {...colorThemeMixin.props, ...dimensionsMixin.props}

/* * getSvgString * */
const getSvgString = function (props = false) {
  return `svg {
    display: block;
    width: 100%;
    height: 100%;
    & path, & g, & rect, & circle {
       ${getCSSString(props.color, "fill")}
    }
  }`
}
//     does this need to be thhere??  ${getCSSString(props.bg_color, "background-color")}

/**
 * Extend Styled Element for StyledElementSvg
 */
const _StyledElementSvg = styled(StyledElement,{...PROPS})`
  ${props => getSvgString(props)}
`;
export const StyledElementSvg = _StyledElementSvg
export default StyledElementSvg
