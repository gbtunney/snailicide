import styled from "vue-styled-components";
import StyledElement from './styledElementBase'
import {getDistanceCssUnit} from "../../../mixins/DimensionsMixin";
import {getColorCssUnit} from "../../../mixins/ColorMixins";

/* * StyledBackgroundLine Component * */
const backgroundLineProps = {
    //todo:make this work?
    line_width: {
        default: "1px",
        type: [Boolean, Number, String]
    }
}
/* *  getLineString * */
const getLineString = function (props = false) {
    const {color = false, line_width = "1px"} = props
    return `background: linear-gradient(180deg, transparent calc(50% - ${getDistanceCssUnit(line_width)}),
  ${getColorCssUnit(color)} calc(50%),
  transparent calc(50% +  ${getDistanceCssUnit(line_width)}));
`
}

/* * Extend StyledElement for _StyledBackgroundLine  * */
const _StyledBackgroundLine = styled(StyledElement, {...backgroundLineProps})`
  ${props => (props.color !== false) ? getLineString(props) : ""}
`;
export const StyledBackgroundLine = _StyledBackgroundLine
export default StyledBackgroundLine
