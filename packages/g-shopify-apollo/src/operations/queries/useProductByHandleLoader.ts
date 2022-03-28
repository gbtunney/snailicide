import { ref, Ref, toRefs, watch} from "vue";
import {useResult, UseQueryOptions} from "@vue/apollo-composable";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'
import {SetOptional,Mutable} from 'type-fest';
import {useProductByHandleCustomQuery} from "./../../types/generated/storefront-types";
//types..
import {ProductByHandleCustomQuery,ProductByHandleCustomQueryVariables,ProductByHandleData} from './../../types';

export const useProductByHandleLoader = ( props: { handle?: string })=>{
    const {handle = ref(undefined)} = toRefs(props)
    const enabled = controlledRef(true, {
        onChanged(value, oldValue) {
            options.value = getQueryOptions(value)
        }
    })
    const getQueryOptions = (enabled: boolean): UseQueryOptions => {
        return {enabled}
    }
    const options: Record<string, any> = ref({enabled: false})

    const query_payload = ref({handle: "local"})
   const {result, loading, error, onResult} = useProductByHandleCustomQuery(query_payload, options)

    onResult((value)=>{
        console.warn("productQueryResult UPDATED!!!!!!!!!!", value)
    })
    whenever(handle, (value: string, callback: (value: ProductByHandleCustomQueryVariables) => void) => {
        enabled.value = true
        query_payload.value = {handle: value}
    })
    return {result}
/*
    const productQueryResult = useResult(result, undefined)
    onResult((value) => {
        //   console.warn("query updates", value)
    })
    whenever(productQueryResult, (value) => {
        console.warn("productQueryResult UPDATED!!!!!!!!!!", value)
        // ProductRepository.save({...value}) //(value)
    })
    whenever(handle, (value: string, callback: (value: ProductByHandleCustomQueryVariables) => void) => {
        enabled.value = true
        query_payload.value = {handle: value}
    })

    watch(handle, (value) => {
        if ( value !== undefined ){enabled.value = true;query_payload.value = {"handle": value }}
        //  console.log("handle history", handle.value, getquery()({handle:'balance'}))
    }, {immediate: true})*/

}

export default useProductByHandleLoader
