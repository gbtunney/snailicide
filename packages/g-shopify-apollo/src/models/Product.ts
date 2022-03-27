import {Merge, SetOptional, SetRequired} from 'type-fest';
import {ProductFragment}from "./../types"
import {toRefs, reactive, ref, Ref, shallowReactive} from "vue";
import {ShallowReactive} from "@vue/reactivity";
import {Model}from "."

export type TProduct =  Partial<ProductFragment> //thhis is temporary.

export const Product = () :Model<Product>=> {
    const productTest:Product={
        type:"Product",
        handle: "test",
        id: "jkjjk",
        get gid() {
            return atob(this.id);
        }
    }
    ////to do make an interface for all Models.
    const create = ( product : Product ):ShallowReactive<Product> => {
        return shallowReactive({...product})
    }
    const Product = create(productTest)
    return {create}
}
export type Product  = SetRequired<TProduct,"id">
export default Product
