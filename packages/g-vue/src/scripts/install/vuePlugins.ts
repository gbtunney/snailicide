import Vue, {PluginObject, VueConstructor} from "vue";
import * as RA from "ramda-adjunct";
import { mergeOptions, PlainObject } from "@snailicide/g-library";
import { VuexORM as VuexORMType } from "@vuex-orm/core";
import {VuexInitializeOptions} from "./../../types/_types";
import {Module, ModuleOptions, ModuleTree} from "vuex";

/**
 * options to be merged with individual plugin options,
 * this is useful for per-app or node_env differences to override, only pulls options present in PLUGIN OBJECT
 * if overriding options contain prop but the defaulta dont - it will not be merged unless default prop is set to false
 * @param {Array<any>} plugins - array of plugin items ( array pairs )
 * @param {object} options - options to be merged with individual plugin options,
 * @param { VueConstructor | VuexORMType } target - Constructor with a use function to install
 *  * @example
 *  this is a USE function - like::
 *  Vue.use(MyPlugin, {}) < second arg is options
 *  VuexOrm.use(MyOrmPlugin, {})
 */
//todo : change this back to 'plugin item'
export const installVuePlugins = function (
  plugins: Array<any> = [],
  options: VuexInitializeOptions = {},
  target: VueConstructor | VuexORMType = Vue
) {
  const { logging = false }: VuexInitializeOptions = options;
  return plugins.forEach(function (_plugin) {
    const [_pluginItem = false, _plugin_options = {}] = RA.ensureArray(_plugin);
    const merged_options = mergeOptions(
      _plugin_options,
      options as PlainObject
    );
    if (_pluginItem === false) return false;
    const log = `Plugin installed: target: ${typeof target}options before: ${JSON.stringify(_plugin_options)} before: ${merged_options}`;
    target.use(_pluginItem, merged_options);
    //if (logging) console.log(log,merged_options,_plugin_options,_pluginItem);
    if (logging) console.log("installVuePlugins","_plugin_options", _plugin_options,"merged_options",merged_options);
  });
};
