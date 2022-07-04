import styled,{css} from 'vue3-styled-components';
import useWindiCSS from "./../../composable/useWindiCSS";
import windiConfig from "@/windi.config.obj";
import useWindiCSSStore from "@/composable/stores/useWindiCSSStore";

//const windiStore = useWindiCSSStore()
//windiStore.initialize(windiConfig)


//const windi = useWindiCSS(windiConfig)
//windi.processor.value.compile('py-2 px-4 font-semibold rounded-lg','',true,true,undefined,'gilililiu').styleSheet.build()

const getCSS = ()=>{
  const  style = useWindiCSS(windiConfig).processor.value.compile('py-2 px-4 font-semibold rounded-lg','',true,true,undefined,'gilililiu').styleSheet
  console.log("style!!!",useWindiCSS(windiConfig).getStyleSheet(style.children[0]) )
  return  style// useWindiCSS(windiConfig).processor.value.compile('py-2 px-4 font-semibold rounded-lg','',true,true,undefined,'removeme').styleSheet.build()
}
const btnProps = { primary: Boolean
};

const StyledButton = styled('button', btnProps)`${props => getCSS()}
  ${props => JSON.stringify(props)}
`;
/* font-size: 1em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 2px solid palevioletred;
 border-radius: 3px;
 content: ${props => props.className}
 background: ${props => props.primary ? 'palevioletred' : 'white'};
 color: ${props => props.primary ? 'white' : 'palevioletred'};*/

export default StyledButton;
/*

const _StyledElement = styled('div', {...props})`
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
*/
