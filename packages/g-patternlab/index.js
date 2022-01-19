import Vue from "vue";
//todo:update index
import {
  gKabob,
  gSvg,
  StyledElement,
  StyledContainerFlex,
  StyledContainerGrid,
  StyledSvgWrapper,
  StyledBackgroundLine,
} from "./src/components/ui";
import { vTW, vFaker } from "./src/directives";

export const PluginPatternlab = {
  install(Vue, options = {}) {
    Vue.component("gKabob", gKabob);
    Vue.component("gSvg", gSvg);
    Vue.component("StyledContainerGrid", StyledContainerGrid);
    Vue.component("StyledContainerFlex", StyledContainerFlex);
    Vue.component("StyledSvgWrapper", StyledSvgWrapper);
    Vue.component("StyledBackgroundLine", StyledBackgroundLine);
    Vue.component("StyledElement", StyledElement);
  },
};

export {
  gKabob,
  gSvg,
  StyledElement,
  StyledContainerFlex,
  StyledContainerGrid,
  StyledSvgWrapper,
  StyledBackgroundLine,
  vTW,
  vFaker,
};
export default PluginPatternlab;
