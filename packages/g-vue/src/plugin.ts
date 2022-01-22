import { registerAllVueConfigs } from "./scripts";
import _Vue, { PluginObject } from "vue";
import { VueRegistrationObject } from "./types/_types";

export const gVueRegisterAll: PluginObject<VueRegistrationObject> = {
  name: "gVueRegisterAll",
  install(Vue: typeof _Vue, options?: VueRegistrationObject) {
    gVueRegisterAll.installed = true;
    if (typeof options === "undefined")
      new Error("gVueRegisterAll error options undefined");

    registerAllVueConfigs(options);
  },
};
export default gVueRegisterAll;
