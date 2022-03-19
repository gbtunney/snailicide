import {Chromable, Color} from "chroma.ts";
import {Product,ProductVariant,ProductOption,ProductOptionValue} from './'
import {ProductOptionValueFragment,ProductOptionFragment} from "./../graphql/types/generated-types";
export type GUID = string | number

export interface IPrice {
    amount: number
    currencyCode: string
}

export interface IShopifyGraphQLItem {
    id: string
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

    product_id: string
    product:Product
}
export interface IProductOption extends IProductOptionBase {
  values:ProductOptionValue[]
}

interface IProductOptionValueFragment extends ProductOptionValueFragment{
    //parentHandle:number
    option_id:string
}

export interface IProductOptionValue extends IProductOptionBase {
    handle: string
    title: string
    parent_handle: string
    option_id:string
    option:ProductOption
    variants? : ProductVariant[]

    meta?:string
    hex_color?: Chromable
}
export interface IVariantOption {
    variant_id:string
    option_value_id:string
}

export interface IImage {
    position: number
    alt?: string
    width: number
    height: number
    src: string
}
