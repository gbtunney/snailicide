import {defineStore} from 'pinia'
import ShopifyBuy, {Client, ProductResource} from 'shopify-buy'
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {DefaultApolloClient, useQuery} from '@vue/apollo-composable'
import productByHandle from '../graphql/productByHandle'
import {Plugin} from 'vue';
import { Product, ProductVariant,ProductImage} from "./../models";

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
interface testgraphQLModelEdge<T>  {
   // node: T
    __typename:string
    cursor:string
    node:T
}

    /*interface testgraphQLModelEdge<T> extends T{
        __typename:string
        cursor:string
        node: {__typename:string
        }
    }*/

type testGeneric<T> = T extends graphQLModelEdge ? ProductVariant : never

interface graphQLModel {
    edges: graphQLModelEdge[]
}
function edge<T>(value:graphQLModelEdge) {
    const {node: dataObj }= value
    const {__typename : type }=dataObj
   // return dataObj
    return {...dataObj,type};
}
export const parseData=(_product : any) =>{

const { images:{edges:_images}=[],variants:{edges:_variants}=[] } = _product
    const {__typename : type }=_product
    const images :ProductImage[]= _images.map( function( image:graphQLModelEdge){
        return edge(image)
    })
    const variants :ProductVariant[]= _variants.map( function( variant:  graphQLModelEdge){
        const _variant =  edge(variant) // as ProductVariant
        // @ts-expect-error ddd
        const image_id = _variant['image']['id']
        console.log("variantttt",image_id)
        // const testme = _variant as testGeneric<ProductVariant>
        return {..._variant, image_id}
    })
    return {..._product, type, images,variants}
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
