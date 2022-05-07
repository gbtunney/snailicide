import styled from 'vue-styled-components'
import * as R from "ramda"

import colorThemeMixin, {getColorCssUnit} from "../../../mixins/ColorMixins";
import {getCSSString} from "../../../mixins/FunctionMixins";

const MATCH_MODE_LOOKUP = {
    startsWith: "^",
    includes: "*"
}
export const getLookupValue = function (value = "includes", lookup = MATCH_MODE_LOOKUP) {
    if (!R.has(value)(lookup)) console.warn(`mode: String matching mode : "${value}" is not permitted\nAllowed: eq, includes, startsWith, endsWith",`)
    return R.has(value)(lookup) ? R.prop(value, lookup) : "*"
}
const getClassFinderString = function ({
                                           value = false,
                                           color = 'red',
                                           mode = "includes",
                                           indicator = "outline"
                                       }) {
    const _test = (value !== false)
        ? `[class${getLookupValue(mode)}="${value}"] {
    ${getCSSString(`5px solid ${getColorCssUnit(color)}`, `${indicator}`)}!! }`
        : ``
    console.log("getClassFinderString", value, color, getColorCssUnit(color), _test)
    return _test
}

/* * base props * */
const {props: {color}} = colorThemeMixin

//props
//getColorCssUnit(props.color), "color")
const FINDER_PROPS = {
    /**
     * the string to search for by matching
     */
    value: {
        default: false,
        type: [Boolean, String]
    },
    /**
     * Sets the indicator color
     * @values css variable, valid chroma.js color, boolean (on/off)
     */
    color: {
        default: "red",
        type: [String],
    },
    /**
     * Sets the string matching mode for child class names
     * @values startsWith (^), includes (*), endsWith, equals (=)
     */
    mode: {
        default: "includes",
        type: [String]
    },
    /**
     * Indicator Type
     * @values outline, border, eventually include some kind of opactity thing
     */
    indicator: {
        default: "outline",
        type: String
    },
    disabled: {
        default: false,
        type: Boolean
    }
}
const _StyledClassFinder = styled('div', {...FINDER_PROPS})`
  ${props => (props.disabled !== true) ? getClassFinderString(props) : ""}
`;
export const StyledClassFinder = _StyledClassFinder
export default StyledClassFinder
