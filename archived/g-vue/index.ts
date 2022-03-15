export {
  initializeVuexOrmStore,
  registerAllVueConfigs,
  installVuePlugins,
} from "./src/scripts";
export {debugDirective} from './src/directives/debugDirective'
export { gVueRegisterAll } from "./src/plugin/registerAll.plugin";
import { gVueRegisterAll as VueRegisterAll } from "./src/plugin/registerAll.plugin";
export default VueRegisterAll;
export {}
export type {PluginRecord,Plugins,VueRegistrationObject,VuexOrmStoreOptions,EasyAccessStore,
  Aliases,
  Components,
  Directives,
  Modules
}  from './src/types/_types';
