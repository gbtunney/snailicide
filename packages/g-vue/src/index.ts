export {
  VueRegistrationObject,
  VuexOrmStoreOptions,
  VuexInitializeOptions,
} from "./types/_types";
export { gVueRegisterAll } from "./plugin";
export { getVuexOrmDatabase, registerOrmModels } from "./scripts";
export { initializeVuexOrmStore } from "./scripts";
export { installVuePlugins } from "./scripts";
export { registerAllVueConfigs } from "./scripts";
export { registerModules } from "./scripts";
export {
  registerAliases,
  registerComponents,
  registerDirectives,
} from "./scripts";

import { gVueRegisterAll as VueRegisterAll } from "./plugin";

export default VueRegisterAll;
