import _Vue, { PluginObject,Component,DirectiveFunction } from 'vue'
import {Getter, Module, ModuleOptions, Store, StoreOptions} from 'vuex'
import Vue from "vue";
import {registerGlobalVariable} from "@snailicide/g-library";

export interface ModuleConfig {
    [key: string]: ModuleOptions;
}
export interface ComponentConfig {
    [key: string]: Component;
}
export interface DirectiveConfig {
    [key: string]: DirectiveFunction;
}
export interface AliasConfig {
    [key: string]: any;
}

export interface gVueConfig {
    components: ComponentConfig
    modules: ModuleConfig
    directives: DirectiveConfig
    alias:AliasConfig
    plugins:Plugin
    store:Store<any> | boolean
   domain: string;
    //storefrontAccessToken: string;
}

/*export interface gVueConfig {
    components: object

    modules: Array<Module>
    domain: string;
    storefrontAccessToken: string;
}*/

const registerComponents = function(components:ComponentConfig){
    Object.entries(components).forEach(function ( [key,value]) {
        console.log(" FOREACH::components", key, value)
       // Vue.component(key,value)
    })
}
const registerDirectives = function(directives:DirectiveConfig){
    Object.entries(directives).forEach(function ( [key,value]) {
        console.log(" FOREACH::directives", key, value)
        Vue.directive(key,value)
    })
}
const registerModules= function(modules:ModuleConfig, store:Store<any>|boolean=false  ){
   if ( store === false )return
   const  _store = store as Store<any>
    Object.entries(modules).forEach(function ( [key,value={}]) {
       // console.log(" FOREACH::modules", key, value)
        // @ts-expect-error "overload?? idk???
        _store.registerModule(key,  value );
    })
}
const registerAliases= function(aliases:AliasConfig  ={}){
    Object.entries(aliases).forEach(function ( [key,value={}]) {
        console.log(" FOREACH::aliases", key, value)
        registerGlobalVariable(key,value)
    })
}
export const gVueConfigPlugin: PluginObject<gVueConfig> = {
    install(Vue: typeof _Vue, options?: gVueConfig) {

        if (typeof options === 'undefined') {
            throw Error('Shopify Buy Plugin: Please provide the domain and storefront access token')
        }
        const {
            plugins={},
            components ={},
            store=false,
            modules={},
            directives  ={},
            alias={}
        } = options;



       /*

        const shopify = Shopify.init({
            domain: options.domain,
            storefrontAccessToken: options.storefrontAccessToken
        });

        (Vue as any).shopify = shopify.getClient()
        Vue.prototype.$shopify = shopify.getClient()

        Vue.component('shopify-cart', CartProvider)
        Vue.component('shopify-product', ProductProvider)
        Vue.component('shopify-product-list', ProductListProvider)
        Vue.component('shopify-collection-list', CollectionListProvider)*/
    }
}

export default gVueConfigPlugin
