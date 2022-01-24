export {
  initializeVuexOrmStore,
  registerAllVueConfigs,
  installVuePlugins,
} from "./src/scripts";
export { gVueRegisterAll } from "./src/plugin/registerAll.plugin";
import { gVueRegisterAll as VueRegisterAll } from "./src/plugin/registerAll.plugin";
export default VueRegisterAll;
