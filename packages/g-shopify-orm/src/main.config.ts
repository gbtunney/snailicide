/* * Modules * */
import globalSettingsModule from "./modules/globalSettings.js";

import { PluginPatternlab } from "@snailicide/g-patternlab";
import { ModuleTree } from "vuex";
import { VueRegistrationObject } from "@snailicide/g-vue";
import vSelect from "vue-select";

const modules: ModuleTree<any> = {
  global: globalSettingsModule,
};

export const config: VueRegistrationObject = {
  options: {
    checkoutStorageKey: "overriding!!",
  },
  components: { "v-select": vSelect },
  directives: {},
  modules,
  plugins: [[PluginPatternlab, { pluginoptions: "fffgg" }]],
};
export default config;
