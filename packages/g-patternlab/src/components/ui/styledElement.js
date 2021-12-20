import * as RA from "ramda-adjunct"
import styled from 'vue-styled-components'
import colorThemeMixin, {getColorCssUnit} from "../../mixins/ColorMixins";
import dimensionsMixin, {getDistanceCssUnit} from "../../mixins/DimensionsMixin";
import {cleanBooleanType} from "@snailicide/g-library";

const PROPS = {
    svg_flag: {
        default: true,
        type: Boolean
    },
    ...colorThemeMixin.props, ...dimensionsMixin.props
}

const getCSSString = function (value = false, property = false) {
    value = cleanBooleanType(value);
    if (RA.isBoolean(value)) return ""
    return (value === false || property === false) ? "" : `${property}:${value};`
}

const getSvgString = function (props = false) {
    const {svg_flag = true, border_flag = false} = props
    console.log("SVG FLAG ", svg_flag)
    return (svg_flag) ? `svg {
    display: block;
    width: 100%;
    height: 100%;
    & path, & g, & rect, & circle {
       ${getCSSString(props.color, "fill")}
       ${getCSSString(props.bg_color, "background-color")}
    }
  }` : ``
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
                  && (cleanBooleanType(props.border_size) === false))
                  ? 'solid'
                  : false, "border-style")};

  //border color
  ${props => (cleanBooleanType(props.border) === true) 
          ? getCSSString(getColorCssUnit(props.color), "border-color")
          : getCSSString(getColorCssUnit(props.border), "border-color")};

  ${props => getSvgString(props)},
`
export default {
    name: "styledElement",
    extends: _StyledElement,
    mixins: [],
    mounted() {
        console.log("border wicth ", this.$props)
    }
}
