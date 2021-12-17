import styled from 'vue-styled-components'
import chroma from "chroma-js";

const PROPS ={
    /**
     * Sets the background color
     * @values css variable, valid chroma.js color, boolean (on/off)
     */
    bg_color: {
    default: false,
            type: [Boolean, String],
    },
    /**
     * Sets the background color
     * @values css variable, valid chroma.js color, boolean (on/off)
     */
    color: {
    default: false,
            type: [Boolean, String],
    },
    /** Width
     * @values String (with unit), integer(px appended to end), boolean (on/off)
     */
    width: {
    default: false,
            type: [String, Number, Boolean],
    },
    /** Height
     * @values String (with unit), integer(px appended to end), boolean (on/off)
     */
    height: {
    default: false,
            type: [String, Number, Boolean],
    },
}

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
  ${props => getCSSString(getNewColorCSSUnit(props.color), "color")};
  ${props => getCSSString(getNewColorCSSUnit(props.bg_color), "background-color")};
`


/*
/*  ${props => getCSSString(getDistanceCssUnit(props.width), "width")};
  ${props => getCSSString(getDistanceCssUnit(props.height), "height")};*/
/*export function getColorCssUnit(value) {
    if (!validateColorStringBool(value)) return false
    const cleanedColorString =  transformString( value, {trim:true, clean:css_blacklist })
    console.warn("colorClean!!!!!!!!!!!",value,"after" ,cleanedColorString )
    if ( chroma.valid(cleanedColorString) ) return chroma(cleanedColorString).hex()

    if (validateString (cleanedColorString , ['--color-'], "starts With" ,true) ) return `var(${cleanedColorString})`
    return cleanedColorString//if its a proper string???/
    ///validate if prefixed variable
      const validCssVariableWithVar = validateString (colorClean ,
            ['var('],
            " starts With" ,
            true,
            {trim:false})
        console.warn("validCssVariableWithVar!!!!!!!!!!!" ,validCssVariableWithVar )
        if (validCssVariableWithVar ) return

    ///validate if prefixed variable
}*/
export default {
    extends: _StyledElement,
    mixins: [ ],
    mounted(){
      //  console.warn("_StyledElement!!!!",this)

    }
}
