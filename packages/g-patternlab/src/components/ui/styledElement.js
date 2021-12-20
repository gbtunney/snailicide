import styled from 'vue-styled-components'
import chroma from "chroma-js";
import colorThemeMixin, {getColorCssUnit} from "../../mixins/ColorMixins";
import dimensionsMixin,{getDistanceCssUnit} from "../../mixins/DimensionsMixin";

const PROPS ={ ...colorThemeMixin.props ,...dimensionsMixin.props}

const getCSSString = function (value = false, property = false) {
    if (!value || !property) return ""
    return `${property}:${value};`
}
export function  getNewColorCSSUnit(value){
    if (value===false) return false
    if ( value ) return chroma(value).hex()
    return
}

export function testMe(){
   return "i"

}
const _StyledElement = styled('div', {...PROPS})`
  ${props => getCSSString(getColorCssUnit(props.color), "color")};
  ${props => getCSSString(getColorCssUnit(props.bg_color), "background-color")};
  ${props => getCSSString(getDistanceCssUnit(props.width), "width")};
  ${props => getCSSString(getDistanceCssUnit(props.height), "height")};
`
export default {
    extends: _StyledElement,
    mixins: [ ],
}
