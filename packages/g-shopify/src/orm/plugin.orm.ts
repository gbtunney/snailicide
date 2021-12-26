import axios from "axios";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from '@vuex-orm/plugin-change-flags';
import VuexORMSearch from "@vuex-orm/plugin-search";

import settings from "./../settings.json"
import {registerModels} from "./database";
import {registerGlobalVariable,importantConsoleLog} from "@snailicide/g-library";

const {SHOPIFY_BASE_URL}= settings

export const PluginOrm = {
    install (Vue, options = {}) {

        registerGlobalVariable('axios',axios)
        console.important = importantConsoleLog;

        //************** Register ORM Plugins  *****************//
        VuexORM.use( VuexORMAxios, {
            axios,
            baseURL: SHOPIFY_BASE_URL
        })

        VuexORM.use(VuexORMSearch, {
            caseSensitive: true,
            threshold: 0
        })

        VuexORM.use(VuexORMisDirtyPlugin,{
            isNewFlagName: 'IsNew',
            isDirtyFlagName: 'IsDirty',
            exposeFlagsExternally: false
        })

    }
}
