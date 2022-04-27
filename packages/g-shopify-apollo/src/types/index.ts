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
import {TProductInstanceGQL} from "@/types/generated";

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
    return (_collection === true) ? _baseQuery.get : _baseQuery.first
}

////TYPE GUATD NAMES THAT MIMICK RA's TYPE FUNCTIONS
export type EmptyObject = {
    [K in any]: never
}
export type Falsy = false | 0 | '' | null | undefined | 'Nan'
export const tg_isFalsy = <T>(value: T | Falsy): value is Falsy =>
    RA.isFalsy(value)
export const tg_isTruthy = <T>(value: T | Falsy): value is T =>
    RA.isTruthy(value)

export type NilOrEmpty = EmptyObject | [] | '' | null | undefined
export const tg_isNilOrEmpty = <T>(value: T | NilOrEmpty): value is NilOrEmpty =>
    RA.isNilOrEmpty(value)
export const tg_isNotNilOrEmpty = <T>(value: T | NilOrEmpty): value is T =>
    RA.isNotNilOrEmpty(value)

/* * EMPTY STRING!!!!! * */
export type EmptyString = '';
export const tg_isEmptyString = <T = unknown>(value: T | EmptyString): value is EmptyString =>
    RA.isEmptyString(value)

import type {Primitive} from 'type-fest';

export const tg_isPrimitive = <T = any>(value: T | Primitive): value is Primitive =>
    RA.isPrimitive(value)
export const tg_isNotPrimitive = <T = any>(value: T | Primitive): value is T =>
    RA.isNotPrimitive(value)

export type NilLike = '' | null | undefined;  //nullish but with empty string
export const tg_isNilLike = <T>(value: T | NilLike): value is NilLike =>
    RA.isEmptyString(value) || R.isNil(value)
export const tg_isNotNilLike = <T>(value: T | NilLike): value is T =>
    !(RA.isEmptyString(value) || R.isNil(value))

export type Nullish = null | undefined

//'' | null | undefined
export const tg_isNullish = <T>(value: T | NilLike): value is undefined => RA.isEmptyString(value) || R.isNil(value)
export const tg_isNotNullish = <T>(value: T | NilLike): value is T => !(RA.isEmptyString(value) || R.isNil(value))

// is null | undefined
export const isUndefined = <T>(value: T | Nullish): value is undefined => isNil(value)
export const isNotUndefined = <T>(value: T | Nullish): value is T => isNotNil(value)

/* * DeepPartial UTILITY TYPE * */
export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
/*
RA.isNotNull(1); //=> true
RA.isNotNull(undefined); //=> true
RA.isNotNull(null); //=> false

RA.isNotEmpty([1, 2, 3]); //=> true
RA.isNotEmpty([]); //=> false
RA.isNotEmpty(''); //=> false
RA.isNotEmpty(null); //=> true
RA.isNotEmpty(undefined) //=> true
RA.isNotEmpty({}); //=> false
RA.isNotEmpty({length: 0}); //=> true

RA.isEmptyString(''); // => true
RA.isEmptyString('42'); // => false
RA.isEmptyString(new String('42')); // => false
*/
