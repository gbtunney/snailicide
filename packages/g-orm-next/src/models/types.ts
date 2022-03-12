import {ProductImage, Product} from "./";

export type GUID = string | number

export interface IPrice {
    amount: number
    currencyCode: string
}

export interface ShopifyGraphQLItem {
    id: GUID
    type: string
}

export interface ShopifyGraphQLProduct extends ShopifyGraphQLItem {
    handle?: string
    title: string
    available: boolean
}

export interface IProduct extends ShopifyGraphQLProduct {
    productType: string
    vendor: string
    tags: string[]
    onlineStoreUrl: string //url

    createdAt: Date
    updatedAt: Date
    publishedAt: Date

    description: string
    descriptionHtml?: HTMLElement

    images: ProductImage[]
    //   variants: ProductVariant[]
}

export interface OptionValue extends ShopifyGraphQLItem {
    handle: string
    title: string
    parent_handle: string;
    //product id??
}

export interface IProductVariant extends ShopifyGraphQLProduct {
    position: number
    sku: string
    inventoryQuantity: number
    weight: number

    //Price stuff
    price: number
    priceV2: IPrice
    compareAtPrice: number
    compareAtPriceV2: IPrice
    unitPrice: IPrice

    product_id: GUID
    //  option_ids
    // options
    // selectedOptions: Option[]
    Product: Product
    image: ProductImage
}

//plain image.
export interface IImage {
    position: number
    alt?: string

    width: number
    height: number
    src: number
}

export interface IProductImage extends IImage {
    type: string
    product_id: GUID
    variant_ids: GUID[] ///IDK IF NEEDED??
    ///or variant option field?
    Product: Product
    // Product
    // Variants
}
//export interface IProductImage extends ShopifyGraphQLItem{}
