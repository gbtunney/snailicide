import axios from "axios";
import VuexORM,{ Plugin, Options} from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from '@vuex-orm/plugin-change-flags';
import VuexORMSearch from "@vuex-orm/plugin-search";
import Vue, {PluginObject} from "vue";
import settings from "./../../settings.json"
import {registerGlobalVariable, importantConsoleLog} from "@snailicide/g-library";
import {Options, Plugin} from "@vuex-orm/core/dist/src/plugins/use";

const {SHOPIFY_BASE_URL} = settings

const registerPlugins = function (
        plugins: Array<PluginObject<any>> | PluginObject<any>,
    logging = false
) {
    Object.entries(RA.ensureArray(plugins)).forEach(function ([key, value]) {
        const [plugin = false, options = {}] = RA.ensureArray(value);
        if (plugin === false) return;
        const _plugin = plugin as PluginObject<any>;
        const { name = false } = _plugin;
        const log = `Plugin Registered: name:${name} options: ${JSON.stringify(options)}`;
        Vue.use(_plugin, options);
        if (logging) console.log(log);
    });
};

export const PluginOrm = {
    install(Vue, options = {}) {
       Vue.filter ("toCurrency",function (value) {
           if (typeof value !== "number") {
               return value;
           }
           const formatter = new Intl.NumberFormat('en-US', {
               style: 'currency',
               currency: 'USD',
               minimumFractionDigits: 2
           });
           return formatter.format(value);
       })
        registerGlobalVariable('axios', axios)
        console.important = importantConsoleLog;

        //************** Register ORM Plugins  *****************//
        VuexORM.use(VuexORMAxios, {
            axios,
            baseURL: SHOPIFY_BASE_URL
        })

        VuexORM.use(VuexORMSearch, {
            caseSensitive: true,
            threshold: 0
        })

        VuexORM.use(VuexORMisDirtyPlugin, {
            isNewFlagName: 'IsNew',
            isDirtyFlagName: 'IsDirty',
            exposeFlagsExternally: false
        })
    }
}
