export {
  VueRegistrationObject,
  VuexOrmStoreOptions,
  VuexInitializeOptions,
} from "./types/_types";
export { getVuexOrmDatabase, registerOrmModels } from "./scripts";
export { initializeVuexOrmStore } from "./scripts";
export { installVuePlugins } from "./scripts";
export { registerAllVueConfigs } from "./scripts";
export { registerModules } from "./scripts";
export {debugDirective} from "./directives/debugDirective"
export {
  registerAliases,
  registerComponents,
  registerDirectives,
} from "./scripts";
export { gVueRegisterAll } from "./plugin/registerAll.plugin";
import { gVueRegisterAll as VueRegisterAll } from "./plugin/registerAll.plugin";
export default VueRegisterAll;
