import {Merge, SetOptional, SetRequired} from 'type-fest';
import {ProductFragment}from "./../types"
import {toRefs, reactive, ref, Ref, shallowReactive} from "vue";
import {ShallowReactive} from "@vue/reactivity";
import {create as cModel, isValidShopifyApiNode, Model, Node} from "."

export type TProduct =  SetRequired<Partial<ProductFragment>,"id"|"__typename">//thhis is temporary.

export type ProductModel = Node<SetRequired<TProduct, "id"|"__typename">>
export const Product = () => {
    const create = ( __product : ProductFragment ) :ProductModel|undefined   =>{
            const product= __product as TProduct
            const newCreate  = ( _product:TProduct)=> cModel<TProduct>(_product)
           return newCreate(product) as ProductModel
    }
    return {create}
}
export type Product  = TProduct
export default Product
