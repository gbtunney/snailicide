export type GUID = string | number

export interface IPrice {
    amount: number
    currencyCode: string
}

export interface IShopifyGraphQLItem {
    id: GUID
    type: string
}

export interface IShopifyGraphQLProduct extends IShopifyGraphQLItem {
    handle?: string
    title: string
    available: boolean
}

export interface OptionValue extends IShopifyGraphQLItem {
    handle: string
    title: string
    parent_handle: string;
    //product id??
}

export interface IImage {
    position: number
    alt?: string
    width: number
    height: number
    src: string
}
