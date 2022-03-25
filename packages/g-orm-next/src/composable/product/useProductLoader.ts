import {computed, ComputedRef, defineProps, ref, Ref, toRefs, watch, WritableComputedRef} from "vue";
import {useResult, UseResultReturn} from "@vue/apollo-composable";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'
import {SetOptional} from 'type-fest';
import {
    ProductByHandleQueryVariables,
    ProductByHandleQuery,
    useProductByHandleQuery
} from "./../../graphql/types/generated-types";
import {useOrmRepositories} from './../useOrmRepositories'
import {isRefDefined, isUndefined, isNotUndefined} from "./../../scripts/generic";

export const test = (value: SetOptional<ProductByHandleQueryVariables, "handle">) => {
    //if (isRefDefined<SetOptional<ProductByHandleQueryVariables, "handle">>(value)) {
        //if (isNotUndefined<string>(value.handle)) {
        //}
    //}
}
export const useProductLoader = (props: SetOptional<ProductByHandleQueryVariables, "handle">  /*props: ProductByHandleQueryVariables*/) => {
    const {ProductRepository} = useOrmRepositories()
    const {handle = ref(undefined)} = toRefs(props) ///ref withh control

    ////  const {result, loading, error, onResult} = useProductByHandleQuery({handle:handle.value})
    // const testme= useResult(result, undefined)
    ///CONROLLED REF.
    /* const num = refWithControl(0, {
  onBeforeChange(value, oldValue) {
    // disallow changes larger then ±5 in one operation
    if (Math.abs(value - oldValue) > 5)
      return false // returning `false` to dismiss the change
  },
})
*/
    whenever(handle, (value) => {
        console.error("hhandle real.", value)
    })
    const test = (value: SetOptional<ProductByHandleQueryVariables, "handle"> = {handle: undefined}) => {
        const productQueryResult: Ref<ProductByHandleQuery["productByHandle"] | undefined> = controlledRef(undefined)
        const {result, loading, error, onResult} = useProductByHandleQuery({handle: 'local'})
        whenever(result, (value) => {
            console.error("DATA LOADEDDD", value)
        })
    }
    const bool = true
    if (bool) {
        test()
    }

    const isLoaded = computedWithControl(
        () => handle.value, // watch source, same as `watch`
        (): boolean => {
            if (isRefDefined(handle.value)) {
                //const _productValue = ProductRepository.getProductByHandle(handle.value)
                //return isNotUndefined<Product>(_productValue)
            }
            return false
        },
    )

    watch(isLoaded, (value: boolean) => {
        console.warn("isLoaded", value, handle.value)
    }, {immediate: true})

    watch(handle, (value) => {
        console.log("handle history", handle.value)
    }, {immediate: true})

    return {}
}
export default useProductLoader
