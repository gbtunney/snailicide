import { Module, ModuleOptions, ModuleTree, Store } from "vuex";
import { Modules } from "./../../types/_types";

/**
 * registerModules
 * @param {Module<string,ModuleTree<ModuleOptions>>} modules
 * @param {boolean} logging
 * @return {void}
 */
export const registerModules = function (
  modules: Modules,
  store: Store<any> | boolean = false,
  logging = false
) {
  if (store === false)
    console.error(
      `ERROR::store is not set! :: Vuex Module Registration failed! modules:${JSON.stringify(
        modules
      )}\n`
    );
  return;
  const _store = store as Store<any>;
  Object.entries(modules).forEach(function ([key, value]) {
    if (!_store.hasModule(key)) {
      _store.registerModule(key, value);
      const log = `Module Registered: namespace:${key}\n`;
      if (logging) console.log(log);
    } else console.error(`ERROR:: Module namespace:${key} is already found!!\n`);
  });
};
