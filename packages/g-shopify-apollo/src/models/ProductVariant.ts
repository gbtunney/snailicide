import {Merge, SetOptional, SetRequired} from 'type-fest';
import {ProductVariantFragment} from "./../types"
import {toRefs, reactive, ref, Ref, shallowReactive} from "vue";
import {ShallowReactive} from "@vue/reactivity";

export type TVariant = Partial<ProductVariantFragment> //thhis is temporary.
export type ProductVariant = SetRequired<TVariant, "id">

export const ProductVariant = () => {
    const create = (variant: ProductVariant): ShallowReactive<ProductVariant> => {
        return shallowReactive({...variant})
    }
    return {create}
}
