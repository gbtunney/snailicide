import {ProductVariant} from "./ProductVariant";
import {Product} from "./Product";
import {ShallowReactive} from "@vue/reactivity";
import {ObjectOf,OneOf,isNull,isString,Guard,OptionalGuard,isNumber} from "@gabrielurbina/type-guard"
import {ProductNodeQuery} from "./../types/generated/storefront-types";
import {Merge,SetRequired,Get}from "type-fest"
import {shallowReactive,Ref} from "vue";
export type ModelTypes = Product | ProductVariant

export type NodeTypes = Get<SetRequired<ProductNodeQuery,"node">["__typename"],"node.__typename">


export const isValidShopifyApiNode = <T>( node:  T ) =>{
    const isApiNode = ObjectOf((self: Guard<NodeRequired<T>>  ) => ({
        __typename: OneOf<NodeTypes>([self, isString]),
        id: isString}));
    return isApiNode(node)
}

export type Model<T extends ModelTypes,T2> = {
    create: ( value : T )=>Node<T2>
}
type NodeRequired<T> = T &  {
    __typename: NodeTypes,
    id: string
}

export interface ModelProperties {
    position?: number
    cacheID: string
    gid: string
    id:string
}
export type Node<T> = NodeRequired<T> & ModelProperties

export const create = <T>( _node : T  extends NodeRequired<T>? NodeRequired<T> : never  ):Node<T>|undefined => {
    if (isValidShopifyApiNode(_node) ){
        const node : Node<T> = {
            ..._node,
            get gid() {
                return (this.id && this.id.length > 0) ? atob(this.id) : this.id
            },
            get cacheID(){
                return `${this.__typename}:${this.id}`
            }
        }
        return node
    }
    return undefined
}

export {Product,ProductVariant}
