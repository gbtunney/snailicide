export {
    VueRegistrationObject,
    VuexOrmStoreOptions,
    VuexInitializeOptions,
} from "./src/types/_types";
export { initializeVuexOrmStore } from "./src/scripts";
export { gVueRegisterAll } from "./src/plugin/registerAll.plugin";
import { gVueRegisterAll as VueRegisterAll } from "./src/plugin/registerAll.plugin";
export default VueRegisterAll;
