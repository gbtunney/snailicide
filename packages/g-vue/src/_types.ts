import {PluginObject} from "vue";
import {StoreOptions} from "vuex";
import {Model} from "@vuex-orm/core";

export type PlainObject = {
    [x: string]: any
    [y: number]: never
}

export interface PluginItem {
    [0]: PluginObject<any>;
    [1]: PlainObject;
}

export interface VuexOrmStoreOptions extends StoreOptions<any> {
    options?: PlainObject;
    orm_plugins?: Array<PluginItem> | Array<Array<PluginItem>> ;
    models? :Array<Model>;
}
