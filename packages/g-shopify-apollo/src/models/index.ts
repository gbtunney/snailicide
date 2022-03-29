import {ProductVariant} from "./ProductVariant";
import {Product} from "./Product";
import {ObjectOf, OneOf, isNull, isString, Guard, OptionalGuard, isNumber} from "@gabrielurbina/type-guard"
import { ApiNodeTypes, RequiredFragmentProps, IdentityRequired} from "./../types";

export type ModelTypes = Product | ProductVariant

export const isValidShopifyApiNode = <T>(node: T): node is T => {
    const isApiNode = ObjectOf((self) => ({
        __typename: OneOf<ApiNodeTypes>([self, isString]),
        id: isString
    }));
    return isApiNode(node)
}

export type Model<T extends ModelTypes, T2> = {
    create: (value: T) => ModelExtended<T2>
}

//additional extended model properties.
export interface ModelProperties {
    position?: number
    cacheID: string
    gid: string
    id: string
}

export type ModelExtended<T> = IdentityRequired<T> & ModelProperties

export const create = <T>(_node: T extends RequiredFragmentProps ? IdentityRequired<T> : never): ModelExtended<T> | undefined => {
    if (isValidShopifyApiNode<IdentityRequired<T>>(_node)) {
        return {
            ..._node,
            get gid() {
                return (this.id && this.id.length > 0) ? atob(this.id) : this.id
            },
            get cacheID() {
                return `${this.__typename}:${this.id}`
            }
        } as ModelExtended<T>
    }
    return undefined
}

export {Product, ProductVariant}
