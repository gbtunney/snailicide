import { Aliases, Components, Directives } from "@/types/_types";
import Vue from "vue";
import { registerGlobalVariable, transformString } from "@snailicide/g-library";

/**
 * registerComponents
 * @param {Record<string,  ComponentOptions<Vue>>} components - Components object {"id": component}
 * @param {boolean} logging
 * @return {void}
 */
export const registerComponents = function (
  components: Components,
  logging = false
) {
  Object.entries(components).forEach(function ([key, value]) {
    Vue.component(key, value);
    const log = `Components Registered: key:${key} name: ${
      value["name"] ? value["name"] : "--no name--"
    }`;
    if (logging) console.log(log);
  });
};

/**
 * registerDirectives
 * @param {Record<string,DirectiveFunction>} value - directives object
 * @param {boolean} logging
 * @return {void}
 */
export const registerDirectives = function (
  directives: Directives,
  logging = false
) {
  Object.entries(directives).forEach(function ([key, value]) {
    const log = `Directive Registered: key:${key}`;
    Vue.directive(key, value);
    if (logging) console.log(log);
  });
};

/**
 * registerAliases
 * @param {Record<string,any>} aliases - Aliases
 * @param {boolean} logging
 * @return {void}
 */
export const registerAliases = function (
  aliases: Aliases = {},
  logging = false
): void {
  Object.entries(aliases).forEach(function ([key, value = {}]) {
    const _key = transformString(key, [" ", "$"], ["trim", "slugify"]);
    if (logging)
      console.log(`Aliases Registered: this.$${_key} or Vue.$${_key}`);
    registerGlobalVariable(_key, value);
  });
};
