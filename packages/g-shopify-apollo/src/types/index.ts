import {Get, SetRequired, LiteralToPrimitive} from "type-fest";
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {Model, Query} from "@vuex-orm/core";
import {InMemoryCache} from "@apollo/client/core";
import {isNil} from "ramda";
import {isNotNil} from "ramda-adjunct";
import {
    PossibleNodesQuery,
    Product,
    ProductByHandleCustomQuery,
    ProductByHandleCustomQueryVariables
} from "./generated/storefront-types";
import {TProductInstanceGQL} from "./generated";

export { tg_isUndefined as isUndefined ,tg_isNotUndefined as isNotUndefined } from "./utilities";

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
    Product as TProduct,
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

//TODO: update for reference??
export const getIdentity = (value: string) => {
    const [__typename, id] = value.split(":");
    return {__typename: __typename as `ProductVariant`, id}
}

export type ProductComponentProps = {
    handle: string
    variant_id?: string | number
    instance_id: string
}

/* * COMPONENT PROPS PICKED FROM GQL TYPE * */
type ProductInstanceGQLProps = Pick<TProductInstanceGQL,
    'id' | 'group_id' | 'variant_id' | 'product_handle' | 'quantity' | 'customAttributes'>

type TProductInstanceComponentProps = ProductInstanceGQLProps & Pick<ProductComponentProps, 'handle'>

export type ProductInstanceComponentProps
    = TProductInstanceComponentProps & ProductInstanceGQLProps

/* * VUEX ORM QUERY BUILDER * */
export const buildQuery = <T = Model>(_query: Query<T extends Model ? T : never>,
                                      _collection = false,
                                      _levels = 0) => {
    const _baseQuery: Query<T extends Model ? T : never> =
        (_levels > 0)
            ? _query.withAllRecursive(_levels)
            : _query.withAll()
    return (_collection === true) ? _baseQuery.get() : _baseQuery.first()
}

