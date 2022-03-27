import {Merge, SetOptional, SetRequired} from 'type-fest';
import { ProductVariantFragment} from "./../types"
import {toRefs, reactive, ref, Ref, shallowReactive} from "vue";
import {ShallowReactive} from "@vue/reactivity";
import {useVariantByProductQuery, VariantByProductQueryVariables} from "./../types/generated/storefront-types";
import {useResult,UseQueryOptions} from "@vue/apollo-composable";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'

export type TVariant =  Partial<ProductVariantFragment> //thhis is temporary.
export type ProductVariant  = SetRequired<TVariant,"id">

export const ProductVariant = () => {

    const query_payload : VariantByProductQueryVariables = {
        handle:'local',
        index: 4,
    }
    const testOption = { context: { gillian:"jkjkjkjkj",test: "hhello!!!!!"}}
    const {result, loading, error, onResult} = useVariantByProductQuery(query_payload,testOption)

    console.log("trying useVariantByProductQuery",result)

    const myResult = useResult(result,undefined)

    whenever(myResult,(value)=>{
        console.warn("thhe query is available!!!!!!!!!!",value )
    })

    const create = ( variant : ProductVariant ):ShallowReactive<ProductVariant> => {
        return shallowReactive({...variant})
    }
    return create
}
