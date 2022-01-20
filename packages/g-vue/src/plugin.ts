import Vue from "vue";
import * as RA from "ramda-adjunct";
import _Vue, { PluginObject, Component, DirectiveFunction } from "vue";
import { ModuleOptions, Store } from "vuex";
import { registerGlobalVariable, transformString } from "@snailicide/g-library";

export interface ModuleConfig {
  [key: string]: ModuleOptions;
}

export interface ComponentConfig {
  [key: string]: Component;
}

export interface DirectiveConfig {
  [key: string]: DirectiveFunction;
}

export interface AliasConfig {
  [key: string]: any;
}

export interface gVueConfig {
  logging: boolean;
  components: ComponentConfig;
  modules: ModuleConfig;
  directives: DirectiveConfig;
  alias: AliasConfig;
  plugins: Array<PluginObject<any>> | PluginObject<any>;
  store: Store<any> | boolean;
}

const registerPlugins = function (
  plugins: Array<PluginObject<any>> | PluginObject<any>,
  logging = false
) {
  Object.entries(RA.ensureArray(plugins)).forEach(function ([key, value]) {
    const [plugin = false, options = {}] = RA.ensureArray(value);
    if (plugin === false) return;
    const _plugin = plugin as PluginObject<any>;
    const { name = false } = _plugin;
    const log = `Plugin Registered: name:${name} options: ${JSON.stringify(
      options
    )}`;
    Vue.use(_plugin, options);
    if (logging) console.log(log);
  });
};
const registerComponents = function (
  components: ComponentConfig,
  logging = false
) {
  Object.entries(components).forEach(function ([key, value]) {
    const _component = value as ComponentConfig;
    Vue.component(key, _component);
    const log = `Components Registered: key:${key} name: ${
      _component["name"] ? _component["name"] : "--no name--"
    }`;
    if (logging) console.log(log);
  });
};
const registerDirectives = function (
  directives: DirectiveConfig,
  logging = false
) {
  Object.entries(directives).forEach(function ([key, value]) {
    const log = `Directive Registered: key:${key}`;
    Vue.directive(key, value);
    if (logging) console.log(log);
  });
};
const registerModules = function (
  modules: ModuleConfig,
  store: Store<any> | boolean = false,
  logging = false
) {
  if (store === false) return;
  const _store = store as Store<any>;

  Object.entries(modules).forEach(function ([key, value = {}]) {
    const _module = value as ModuleConfig;
    if (!_store.hasModule(key)) {
      _store.registerModule(key, _module);
      const log = `Module Registered: namespace:${key}\n`;
      if (logging) console.log(log);
    } else console.error(`ERROR:: Module namespace:${key} is already found!!\n`);
  });
};
const registerAliases = function (aliases: AliasConfig = {}, logging = false) {
  Object.entries(aliases).forEach(function ([key, value = {}]) {
    const _key = transformString(key, [" ", "$"], ["trim", "slugify"]);
    if (logging)
      console.log(`Aliases Registered: this.$${_key} or Vue.$${_key}`);
    registerGlobalVariable(_key, value);
  });
};
export const gVueConfigPlugin: PluginObject<gVueConfig> = {
  name: "gVueConfigPlugin",
  install(Vue: typeof _Vue, options?: gVueConfig) {
    gVueConfigPlugin.installed = true;
    if (typeof options === "undefined")
      new Error("gVueConfigPlugin error options undefined");
    const {
      logging = false,
      plugins = [],
      components = {},
      store = false,
      modules = {},
      directives = {},
      alias = {},
    }: gVueConfig = options;

    //************** Components *****************//
    registerComponents(components, logging);

    //************** Alias *****************//
    registerAliases(alias, logging);

    //************** Directives *****************//
    registerDirectives(directives);

    //************** Vuex Modules *****************//
    registerModules(modules, store, logging);

    //************** Plugins  *****************//
    registerPlugins(plugins, logging);
  },
};
export default gVueConfigPlugin;
