import {Get, SetRequired, SetOptional} from "type-fest";
import {
    ProductByHandleCustomQuery,
    ProductByHandleCustomQueryVariables
} from "./generated/storefront-types";

import type {
    ProductFragment as ProductFragmentRaw,
    ProductVariantFragment as ProductVariantFragmentRaw
} from './generated/storefront-types'
import {InMemoryCache} from "@apollo/client/core";
import {FieldPolicy, FieldReadFunction} from "@apollo/client/cache";

export type {
    ProductPriceRange,
    MoneyV2,
} from './generated/storefront-types'

export {
    ProductByIdQuery,
    ProductByIdQueryVariables
} from "./generated/storefront-types";

///from query.
export type {
    ProductByHandleCustomQuery,
    ProductByHandleCustomQueryVariables
} from './generated/storefront-types'

import {PossibleNodesQuery, Product} from './generated/storefront-types'

export type ProductByHandleData = ProductByHandleCustomQuery["product"]
export type ApiNodeTypes = Get<SetRequired<PossibleNodesQuery, "node">["__typename"], "node.__typename">

/// attr required for a valid node, but are likely OPTIONAL
export type RequiredFragmentProps = {
    __typename?: ApiNodeTypes,
    id?: string
}
export type IdentityRequired<T extends RequiredFragmentProps> = SetRequired<T, "id" | "__typename">

export type ProductFragment = IdentityRequired<Product>

export type {
    Scalars,
    ProductOption,
    ProductOptionValue,
    VariantOption,
    Image as ProductImage,
    ProductVariant,
    ProductInstance
} from "./generated/storefront-types"

export interface iStorefrontApiConfig {
    domain: string;
    storefrontAccessToken: string;
    language?: string | undefined;
    version?: string
    persist?: boolean
    logging?: boolean
    cache: InMemoryCache
}
