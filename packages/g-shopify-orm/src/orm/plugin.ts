//import {Use,Options, Plugin} from "@vuex-orm/core/dist/src/plugins/use";
import _Vue, {PluginObject} from "vue";
import ShopifyBuy from "shopify-buy";
import Vue from "vue";
import VuexORM from "@vuex-orm/core";
import axios from "axios";
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMSearch from "@vuex-orm/plugin-search";
import VuexORMisDirtyPlugin from '@vuex-orm/plugin-change-flags';

/*plugins:
   [[  PluginPatternlab,{pluginoptions:"fffgg"}]]
   ,
 */

//************** Register ORM Plugins  *****************//
const PLUGINS = [
    [VuexORMAxios,{
        axios,
        baseURL: base_url}
    ],
    [VuexORMSearch,{
        caseSensitive: true,
        threshold: 0
    }],
    [VuexORMisDirtyPlugin,{
        isNewFlagName: 'IsNew',
        isDirtyFlagName: 'IsDirty',
        exposeFlagsExternally: false
    }]
]

interface OrmPluginOptions {
    base_url: string | null; //the url.
    plugins: Array<PluginObject<any>> | PluginObject<any>;
}
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
        VuexORM.use(_plugin, options);
        if (logging) console.log(log);
    });
};
//const {SHOPIFY_BASE_URL} = settings

export const gOrmPlugin: PluginObject<OrmPluginOptions> = {
    install(Vue: typeof _Vue, options?: OrmPluginOptions) {
        if (typeof options === "undefined") {
            throw Error(
                "gOrmPlugin: Please provide the domain and storefront access token"
            );
        }
    }
}
