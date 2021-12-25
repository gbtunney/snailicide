import styled from "vue-styled-components";
import {getDistanceCssUnit} from "../../../mixins/DimensionsMixin";
import {layoutFlexMixin, layoutGridMixin} from "../../../mixins/LayoutContainerMixins";
import {getCSSString} from "../../../mixins/FunctionMixins";
import {StyledElement} from "./styledElementBase"

/* * Styled Grid
* @extends StyledElement _StyledGrid StyledGrid Wrapper Component  * */
const _StyledContainerGrid = styled(StyledElement, {...layoutGridMixin.props})`
  display: grid;
  ${props => getCSSString(`repeat(${props.columns}, 1fr)`, "grid-template-columns") };
  ${props => getCSSString(`repeat(${props.rows}, 1fr)`, "grid-template-rows") };
  ${props => getCSSString(getDistanceCssUnit(props.grid_gap), "gap")};

`;
export const StyledContainerGrid = _StyledContainerGrid

/* * Styled Flex
* @extends StyledElement _StyledFlex - StyledFlex Wrapper Component  * */
const _StyledContainerFlex = styled(StyledElement, {...layoutFlexMixin.props})`
  display: flex;
  ${props => (props.direction) ? getCSSString(`${props.direction}`, "flex-direction") : ""};
  ${props => (props.wrap === true) ? getCSSString('wrap', "flex-wrap") : getCSSString('nowrap', "flex-wrap")};
  ${props => (props.justify) ? getCSSString(`${props.justify}`, "justify-content") : ""};
  ${props => (props.align) ? getCSSString(`${props.align}`, "align-items") : ""};
`;
export const StyledContainerFlex = _StyledContainerFlex
export default StyledContainerFlex
