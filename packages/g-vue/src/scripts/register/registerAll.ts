import Vue from "vue";

/* * import types * */
import { PlainObject } from "@snailicide/g-library";
import { VueRegistrationObject } from "./../../types/_types";

import { registerComponents, registerAliases, registerDirectives } from "./vue";
import { registerModules } from "./vuex";
import { installVuePlugins } from "./..";

export const registerAllVueConfigs = function (
  config: VueRegistrationObject,
  addl_options: PlainObject = {}
) {
  const {
    plugins = [],
    components = {},
    modules = {},
    directives = {},
    alias = {},
    store = false,
    options: base_options = {},
  } = config;

  const options = { ...base_options, ...addl_options }; //!!!!!!!!!!! merge options
  const { logging = false, skipPlugins = false } = options;

  //************** Components *****************//
  registerComponents(components, logging);

  //************** Alias *****************//
  registerAliases(alias, logging);

  //************** Directives *****************//
  registerDirectives(directives);

  //************** Vuex Modules *****************//
  registerModules(modules, store, logging);

  //************** Plugins  *****************//
  if (skipPlugins) installVuePlugins(plugins, { ...options, store }, Vue);
}
