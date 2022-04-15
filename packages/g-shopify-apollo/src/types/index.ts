import {Get, Primitive, SetRequired, SetOptional} from "type-fest";
import {InMemoryCache} from "@apollo/client/core";
import {isNil} from "ramda";
import {isNotNil} from "ramda-adjunct";
import {
    ProductByHandleCustomQuery,
    ProductByHandleCustomQueryVariables
} from "./generated/storefront-types";
import {PossibleNodesQuery, Product} from './generated/storefront-types'

export type {CustomTypePolicy, CustomFieldPolicy} from "./apolloTypedPolicies"
export {readField} from './apolloTypedPolicies'
export type {
    ProductPriceRange,
    MoneyV2,
} from './generated/storefront-types'

export {} from "./generated/storefront-types";

///from query.
export type {
    ProductByHandleCustomQuery,
    ProductByHandleCustomQueryVariables
} from './generated/storefront-types'

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

export const isUndefined = <T = unknown, Rtn = undefined>(data: NonNullable<any> | Nullish): data is undefined => isNil(data)
export const isNotUndefined = <T = unknown>(data: T | Nullish): data is T => isNotNil<T>(data)

export type Nullish = null | undefined
