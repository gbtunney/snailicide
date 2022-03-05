import {defineStore} from 'pinia'
import ShopifyBuy, {Client, ProductResource} from 'shopify-buy'

export interface IShopifyBuyState {
    client: Client | undefined,
    config: ShopifyBuy.Config | undefined
}

export const useShopifyBuy = defineStore('shopify-buy', {
    actions: {
        buildClient(payload: ShopifyBuy.Config) {
            this.config = payload
            this.client = ShopifyBuy.buildClient(payload)
        },
    },
    state: (): IShopifyBuyState => ({
        client: undefined,
        config: undefined
    }),
})
