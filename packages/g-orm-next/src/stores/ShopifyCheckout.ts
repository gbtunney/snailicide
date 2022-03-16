import {defineStore} from 'pinia'
import ShopifyBuy, {CheckoutResource,Cart, Client, ProductResource} from 'shopify-buy'
import {IShopifyBuyState} from "@/stores/ShopifyBuy";
import {useShopifyBuy} from "./ShopifyBuy";
import {useStorage, useLocalStorage} from '@vueuse/core'

export interface ICheckoutState {
    checkoutId: string|number|undefined, //window.localStorage.getItem("default") || "",
    cart: Cart | undefined,
    cartLoading: boolean,
    // CHECKOUT_ID_STORAGE_KEY : 'default'
}

export const useShopifyCheckout = defineStore('shopify-checkout', {
    getters: {
   //     getCart: async(state) => state.counter * 2,
    },
    actions: {
        async getCart(){
            const shopify = useShopifyBuy()
          /*  if (!shopify.client) return undefined
            const client = shopify.client as Client
         ///   console.log("the cart client!!", client)

            if (this.checkoutId === undefined) {
                this.cartLoading=true
          const mycart  = await client.checkout.create()
             //   debugger;
                this.cart = mycart
                this.checkoutId = mycart.id
                window.localStorage.setItem('CHECKOUT_ID_STORAGE_KEY',(this.checkoutId).toString())
                console.log("the cart ID client!!", mycart.id,this.checkoutId)
            }
            const checkoutId = this.checkoutId as string | number

            if (this.cart === undefined) {
                this.cartLoading=true
               // debugger;
                this.cart = await shopify.client.checkout.fetch((checkoutId).toString())
            }
           this.cartLoading=false*/
           // return this.cart
        },
     /*   async addToCart(){

        },
        async updateItemQuantity(){

        }*/
    },
    state: (): ICheckoutState => ({
        checkoutId: window.localStorage.getItem('CHECKOUT_ID_STORAGE_KEY') || undefined,
        cart: undefined,
        cartLoading: false,
        // CHECKOUT_ID_STORAGE_KEY : 'default'
    }),
})
