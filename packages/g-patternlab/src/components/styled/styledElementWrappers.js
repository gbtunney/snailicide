import styled from "vue-styled-components";
import {wrapperFlex, wrapperGrid} from "../../mixins/WrapperMixins";
import {getCSSString} from "../../mixins/FunctionMixins";
import {StyledElement} from "./styledElementBase"

/* * Styled Grid
* @extends StyledElement _StyledGrid StyledGrid Wrapper Component  * */
const _StyledGrid = styled(StyledElement, {...wrapperGrid.props})`
  display: grid;
  ${props => (props.columns) ? getCSSString(`repeat(${props.columns}, 1fr)`, "grid-template-columns") : ""};
  ${props => (props.rows) ? getCSSString(`repeat(${props.rows}, 1fr)`, "grid-template-rows") : ""};
`;
export const StyledGrid = _StyledGrid

/* * Styled Flex
* @extends StyledElement _StyledFlex - StyledFlex Wrapper Component  * */
const _StyledFlex = styled(StyledElement, {...wrapperFlex.props})`
  display: flex;
  ${props => (props.direction) ? getCSSString(`${props.direction}`, "flex-direction") : ""};
  ${props => (props.wrap !== true) ? getCSSString('wrap', "flex-wrap") : getCSSString('nowrap', "flex-wrap")};
  ${props => (props.justify) ? getCSSString(`${props.justify}`, "justify-content") : ""};
  ${props => (props.align) ? getCSSString(`${props.align}`, "align-items") : ""};
`;
export const StyledFlex = _StyledFlex
