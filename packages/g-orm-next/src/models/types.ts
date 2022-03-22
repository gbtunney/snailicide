import {Merge, SetOptional} from 'type-fest';

import {
    ProductFragment,
    PriceRangeFragment,
    ProductOptionValueFragment,
    ProductOptionFragment,
    ProductVariantFragment,
    PriceFragment,
    ImageFragment
} from './../graphql/types/generated-types'
import {
    Product,
    ProductImage,
    ProductVariant,
    ProductOption,
    ProductOptionValue
} from './'

interface IPosition {
    position: number
}

interface IProductProps {
    product_id?: string
    product?: Product
}

interface IImageProps {
    image_id?: string
    image?: ProductImage
}

interface IProductFragment extends IImageProps {
    priceRange?: PriceRangeFragment,
    options?: TProductOptionFragment[],
    variants?: IProductVariantFragment[],
    images?: TProductImageFragment[]
}

type TProductFragment = Merge<SetOptional<ProductFragment,
    'gid' | 'compareAtPriceRange' | 'descriptionHtml'>,
    IProductFragment>

interface IProductVariantFragment extends IPosition, IImageProps, IProductProps {
    selectedOptions?: ProductOptionValue[]
    priceV2?: PriceFragment
    compareAtPriceV2?: PriceFragment
    unitPrice?: PriceFragment
}

type TProductVariantFragment = Merge<SetOptional<ProductVariantFragment, 'gid'>, IProductVariantFragment>

interface IProductOptionFragment extends IPosition, IProductProps {
    values: TProductOptionValueFragment[]
}

type TProductOptionFragment = Merge<SetOptional<ProductOptionFragment, 'gid'>, IProductOptionFragment>

interface IProductOptionValueFragment extends IPosition {
    type: 'ProductOptionValue'
    id?: string,
    parent_handle: string
    option_id: string
    option?: TProductOptionFragment
}

type TProductOptionValueFragment = Merge<ProductOptionValueFragment, IProductOptionValueFragment>

interface IProductImageFragment extends IPosition, IProductProps {
    variants?: ProductVariant[]
}

type TProductImageFragment = Merge<ImageFragment, IProductImageFragment>

type TVariantOption = {
    variant_id: string
    option_id: string
}
export {
    TProductFragment,
    TProductVariantFragment,
    TProductOptionFragment,
    TProductOptionValueFragment,
    TProductImageFragment,
    TVariantOption
}
