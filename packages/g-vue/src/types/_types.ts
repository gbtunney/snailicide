import Vue, { ComponentOptions, DirectiveFunction, PluginObject } from "vue";
import { Module, ModuleOptions, ModuleTree, Store, StoreOptions } from "vuex";
import Record, { Model } from "@vuex-orm/core";
import { PlainObject } from "@snailicide/g-library";

//RegistrationObjects!!!!!
export type Modules = Module<string, ModuleTree<ModuleOptions>>;
export type Components = Record<string, ComponentOptions<Vue>>;
export type Directives = Record<string, DirectiveFunction>;
export type Plugins = Array<PluginRecord> | Array<Array<PluginRecord>>;
export type Aliases = Record<string, any>;

export declare interface PluginRecord {
  [0]: PluginObject<any>;
  [1]: PlainObject;
}

export declare interface VueRegistrationObject {
  components: Components;
  directives: Directives;
  alias: Aliases;
  plugins: Plugins; //Array<PluginObject<any>> | PluginObject<any>;
  modules: Modules; //module object w key/value pairs.
  store: Store<any> | boolean;
  options: PlainObject;
}

/* * OptionsType: InstallPluginOptions - additional options for install plugins function
 * @extends {StoreOptions}
 * */
///todo: remove?
export declare interface VueRegistrationOptions extends PlainObject {
  logging?: boolean;
}

export type Models = [] | Array<Model> | Model;

/* * OptionsType: Vuex Store
 * @extends {StoreOptions}
 * */
export declare interface VuexOrmStoreOptions extends StoreOptions<any> {
  options?: PlainObject;
  orm_plugins?: Plugins;
  models?: Models;
}

/* * OptionsType: VuexOrmStore initialize function- additional options
 * @extends {StoreOptions}
 * */
export declare interface VuexInitializeOptions extends PlainObject {
  logging?: boolean;
  persist?: boolean;
  persist_storage_key?: string;
}
