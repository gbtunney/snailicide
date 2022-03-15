import { Store } from "vuex";
import { PlainObject } from "@snailicide/g-library";
import {
  Aliases,
  Components,
  Directives,
  Modules,
  Plugins,
} from "./../types/_types";

/* *
 * Components
 * */
const components: Components = {};

/* *
 * Directives
 * */
const directives: Directives = {};

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
const store: Partial<Store<any>> = {};

/* *
 * Additional options.
 * */
const options: PlainObject = {};

export default {
  components,
  directives,
  alias,
  plugins,
  modules,
  store,
  options,
};
