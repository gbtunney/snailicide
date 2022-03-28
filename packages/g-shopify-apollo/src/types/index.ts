import {ProductByHandleCustomQuery, ProductByHandleCustomQueryVariables} from "./generated/storefront-types";

export type {
    ProductFragment,
    PriceRangeFragment,
    ProductOptionValueFragment,
    ProductOptionFragment,
    ProductVariantFragment,
    PriceFragment,
    ImageFragment
} from './generated/storefront-types'

///from query.
export type {ProductByHandleCustomQuery,
    ProductByHandleCustomQueryVariables
}from './generated/storefront-types'
export type ProductByHandleData = ProductByHandleCustomQuery["productByHandle"]

export interface iStorefrontApiConfig {
    domain: string;
    storefrontAccessToken: string;
    language?: string | undefined;
    version?: string
    persist?:boolean
    logging?: boolean
}
