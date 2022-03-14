import {defineStore} from 'pinia'
import ShopifyBuy, {Client, ProductResource} from 'shopify-buy'
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {DefaultApolloClient, useQuery} from '@vue/apollo-composable'
import productByHandle from '../graphql/productByHandle'
import {Plugin} from 'vue';
import { Product, ProductVariant,ProductImage,ProductOption,ProductOptionValue} from "./../models";
import {slugify} from '@snailicide/g-library'

export interface IShopifyBuyState {
    client: ApolloClient<any> | undefined,
    config: ShopifyBuy.Config | undefined
}

export const gOrmNextPlugin: Plugin = {
    install(app, options: ShopifyBuy.Config) {
        app.provide(DefaultApolloClient, createApolloClient(options))
    }
}
interface graphQLModelEdge {
    __typename:string
    cursor:string
    node: {__typename:string
    }
}

function edge<T>(value:graphQLModelEdge) {
    const {node: dataObj }= value
    const {__typename : type }=dataObj
    return {...dataObj,type};
}

export const parseData = (_product: any) => {
    const {
        images: {edges: _images} = [],
        variants: {edges: _variants} = [],
        options: _options = [],
        id: productID
    } = _product
    const {__typename: type} = _product
    const images: ProductImage[] = _images.map( (image: graphQLModelEdge, index: number)=> {
        return {...edge(image), position: index + 1}
    })
    const variants: ProductVariant[] = _variants.map(function (variant: graphQLModelEdge, index: number) {
        const _variant = edge(variant) // as ProductVariant
        // @ts-expect-error ddd
        const image_id = _variant['image']['id']
        return {..._variant, image_id, position: index + 1}
    })
    const options: ProductOption[] = _options.map(function (option: graphQLModelEdge, index: number) {
        // @ts-expect-error ddd
        const {__typename: type, values: _values = [], name: title} = option
        const handle = slugify(title)
        const values = _values.map((_value: string, index: number) => {
            return {
                type: 'ProductOptionValue',
                product_id: productID,
                title: _value,
                parent_handle: handle,
                handle: slugify(_value),
                position: index + 1
            }
        })
        return {...option, title, handle, type, values, position: index + 1}
    })
    return {..._product, type, options, images, variants}
}
export const createApolloClient = (payload: ShopifyBuy.Config) => {
    return new ApolloClient({
        uri: `https://${payload.domain}/api/graphql`,
        headers: {
            'X-Shopify-Storefront-Access-Token': payload.storefrontAccessToken
        },
        cache: new InMemoryCache()
    });
}

export const useShopifyBuy = defineStore('shopify-buy', {
    actions: {
        getProductByHandle(handle: string) {
            const {result} = useQuery(productByHandle, {handle})
            return result
        },
        buildClient(payload: ShopifyBuy.Config) {
            this.config = payload
        },
    },
    state: (): IShopifyBuyState => ({
        client: undefined,
        config: undefined
    }),
})
