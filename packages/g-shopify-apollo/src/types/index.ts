import {Get, SetRequired} from "type-fest";
import {
    ProductByHandleCustomQuery,
    ProductByHandleCustomQueryVariables,
    ProductNodeQuery
} from "./generated/storefront-types";

import type {
    ProductFragment as ProductFragmentRaw,
    ProductVariantFragment as ProductVariantFragmentRaw
} from './generated/storefront-types'
import {InMemoryCache} from "@apollo/client/core";

export type {
    PriceRangeFragment,
    ProductOptionValueFragment,
    ProductOptionFragment,
    PriceFragment,
    ImageFragment
} from './generated/storefront-types'

///from query.
export type {
    ProductByHandleCustomQuery,
    ProductByHandleCustomQueryVariables
} from './generated/storefront-types'
export type ProductByHandleData = ProductByHandleCustomQuery["product"]

export type ApiNodeTypes = Get<SetRequired<ProductNodeQuery, "node">["__typename"], "node.__typename">

/// attr required for a valid node, but are likely OPTIONAL
export type RequiredFragmentProps = {
    __typename?: ApiNodeTypes,
    id?: string
}
export type IdentityRequired<T extends RequiredFragmentProps> = SetRequired<T, "id" | "__typename">

export type ProductFragment = IdentityRequired<ProductFragmentRaw>
export type ProductVariantFragment = IdentityRequired<ProductVariantFragmentRaw>

export interface iStorefrontApiConfig {
    domain: string;
    storefrontAccessToken: string;
    language?: string | undefined;
    version?: string
    persist?: boolean
    logging?: boolean
    cache:InMemoryCache
}
