import { ref, Ref, toRefs, watch} from "vue";
import {useResult, UseResultReturn, useQuery, UseQueryOptions} from "@vue/apollo-composable";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'
import {SetOptional,Mutable} from 'type-fest';
import {
    ProductByHandleQueryVariables,
    ProductByHandleQuery, ProductByHandleDocument,
    useProductByHandleQuery, ProductFragment
} from "./../../graphql/types/generated-types";
import {useOrmRepositories} from './../useOrmRepositories'
import {isRefDefined, isUndefined, isNotUndefined, matchProp,narrowDefined} from "./../../scripts/generic";

export const useProductLoader = (props: { handle?: string }) => {
    const {ProductRepository} = useOrmRepositories()
    const {handle = ref(undefined)} = toRefs(props)
    const enabled = controlledRef(false, {
        onChanged(value, oldValue) {
            options.value = getQueryOptions(value)
        }
    })
    const getQueryOptions = (enabled: boolean): UseQueryOptions => {
        return {enabled}
    }
    const options: Record<string, any> = ref({enabled: false})

    ///DUMMY PAYLOAD TO TRICK APPOLLO
    const query_payload = ref({handle: "paused"})
    const {result, loading, error, onResult} = useProductByHandleQuery(query_payload, options)

    const productQueryResult = useResult(result, undefined, (value) => {
            if (isNotUndefined<ProductByHandleQuery>(result.value) ) {
                const rawProductDataData  = result.value.productByHandle
                if (isNotUndefined<ProductByHandleQuery["productByHandle"]>(rawProductDataData)) {
                        if (matchProp(rawProductDataData as any, "__typename", "Product")) {
                            console.warn("INNER TRYNING TO PICK DATA!!", value.productByHandle.__typename);
                            return ( rawProductDataData )
                        }
                    }
            }})

    onResult((value) => {
     //   console.warn("query updates", value)
    })
    whenever(productQueryResult, (value: Mutable<ProductByHandleQuery["productByHandle"]>) => {
        console.warn("productQueryResult UPDATED!!!!!!!!!!", value)
       // ProductRepository.save({...value}) //(value)
    })
    whenever(handle, (value: string, callback: (value: ProductByHandleQueryVariables) => void) => {
        enabled.value = true
        query_payload.value = {handle: value}
    })

    watch(handle, (value) => {
        if ( value !== undefined ){enabled.value = true;query_payload.value = {"handle": value }}
        //  console.log("handle history", handle.value, getquery()({handle:'balance'}))
    }, {immediate: true})
    return {useProductByHandleQuery}
}
export default useProductLoader
