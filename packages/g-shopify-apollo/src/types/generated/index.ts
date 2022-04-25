import {Product, ProductFragment} from "./storefront-types";
import {ProductVariant, ProductVariantFragment} from "./storefront-types";
import {Image, ImageFragment} from "./storefront-types";
import {ProductOption, ProductOptionFragment} from "./storefront-types";

/* * Client Side only Types do not have a FRAGMENT * */
import {ProductOptionValue} from "./storefront-types";
import {VariantOption} from "./storefront-types";
//instance
import {ProductInstance} from "./storefront-types";
import {ProductGroup} from "./storefront-types";


/* * PRODUCT TYPES & FRAGMENT * */
export type  TProductGQL = Product
export type TProductFragment = ProductFragment

/* * PARTIAL PRODUCT TYPES & FRAGMENT * */
export type  TProductGQLPartial = Partial<TProductGQL>
export type TProductFragmentPartial = Partial<TProductFragment>

/* * PRODUCT VARIANT TYPES & FRAGMENT * */
export type  TProductVariantGQL = ProductVariant
export type TProductVariantFragment = ProductVariantFragment

/* * PARTIAL VARIANT TYPES & FRAGMENT * */
export type  TProductVariantGQLPartial = Partial<TProductVariantGQL>
export type TProductVariantFragmentPartial = Partial<TProductVariantFragment>

/* * PRODUCT PRODUCT Image TYPES & FRAGMENT * */
export type  TProductImageGQL = Image
export type TProductImageFragment = ImageFragment

/* * PARTIAL PRODUCT IMAGE TYPES & FRAGMENT * */
export type  TProductImageGQLPartial = Partial<TProductImageGQL>
export type TProductImageFragmentPartial = Partial<TProductImageFragment>

/* * PRODUCT ProductOption TYPES & FRAGMENT * */
export type  TProductOptionGQL = ProductOption
export type TProductOptionFragment = ProductOptionFragment

/* * PRODUCT ProductOption TYPES & FRAGMENT * */
export type  TProductOptionGQLPartial = Partial<ProductOption>
export type TProductOptionFragmentPartial = Partial<ProductOptionFragment>

/* * PRODUCT ProductOptionValue TYPES & FRAGMENT * */
export type  TProductOptionValueGQL = ProductOptionValue
/* * partial  * */
export type  TProductOptionValueGQLPartial = Partial<TProductOptionValueGQL>

/* * PRODUCT ProductOptionValue TYPES & FRAGMENT * */
export type  TVariantOptionGQL = VariantOption
/* * partial  * */
export type  TVariantOptionGQLPartial = Partial<VariantOption>

/*  ProductInstance TYPES  * */
export type  TProductInstanceGQL = ProductInstance
/* * partial  * */
export type  TProductInstanceGQLPartial = Partial<TProductInstanceGQL>

/*  ProductGroup TYPES  * */
export type  TProductGroupGQL = ProductGroup
/* * partial  * */
export type  TProductGroupGQLPartial = Partial<TProductGroupGQL>
