import {Chromable, Color} from "chroma.ts";
import {Product,ProductVariant,ProductOption,ProductOptionValue} from './'
export type GUID = string | number

export interface IPrice {
    amount: number
    currencyCode: string
}

export interface IShopifyGraphQLItem {
    id: GUID
    type: string
}

export interface IShopifyGraphQLProduct extends IShopifyGraphQLItem {
    handle?: string
    title: string
    available: boolean
}
export interface IProductOptionBase extends IShopifyGraphQLItem {
    handle: string
    title: string
    position:number

    product_id: GUID
    product:Product
}
export interface IProductOption extends IProductOptionBase {
  values:ProductOptionValue[]
}

export interface IProductOptionValue extends IProductOptionBase {
    handle: string
    title: string
    parent_handle: string
    option_id:GUID
    option:ProductOption
    variants? : ProductVariant[]

    meta?:string
    hex_color?: Chromable
}
export interface IVariantOption {
    variant_id:GUID
    option_value_id:GUID
}

export interface IImage {
    position: number
    alt?: string
    width: number
    height: number
    src: string
}
