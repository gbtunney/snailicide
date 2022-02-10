import { Store } from "vuex";
import { PlainObject } from "@snailicide/g-library";
import {vFaker}from "@snailicide/g-patternlab"
import {
  Aliases,
  Components,
  Directives,
  Modules,
  Plugins,
} from "@snailicide/g-vue";

/* *
 * Components
 * */
const components: Components = {};

/* *
 * Directives
 * */
const directives: Directives = {
"vv-faker":vFaker
};

/* *
 * alias
 * */
const alias: Aliases = {};

/* *
 * Plugins
 * */
const plugins: Plugins = [];

/* *
 * Modules
 * */
const modules: Modules = {};

/* *
 * Store - required for modules to be registered, also some plugins.
 * */
//const store: Partial<Store<any>> = {};

/* *
 * Additional options.
 * */
const options: PlainObject = {logging:true};

export default {
  components,
  directives,
  alias,
  plugins,
  modules,
  options,
};
