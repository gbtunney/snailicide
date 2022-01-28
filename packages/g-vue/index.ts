export {
  initializeVuexOrmStore,
  registerAllVueConfigs,
  installVuePlugins,
} from "./src/scripts";
export { gVueRegisterAll } from "./src/plugin/registerAll.plugin";
import { gVueRegisterAll as VueRegisterAll } from "./src/plugin/registerAll.plugin";
export default VueRegisterAll;
export type {PluginRecord,Plugins,VueRegistrationObject,VuexOrmStoreOptions,EasyAccessStore }  from './src/types/_types';
