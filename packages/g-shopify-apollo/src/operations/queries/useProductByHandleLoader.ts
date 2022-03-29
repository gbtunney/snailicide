import {ref, Ref, toRefs, watch} from "vue";
import {useResult, UseQueryOptions} from "@vue/apollo-composable";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'
import {SetOptional, Mutable} from 'type-fest';
import {useProductByHandleCustomQuery} from "./../../types/generated/storefront-types";
import {ProductByHandleCustomQuery, ProductByHandleCustomQueryVariables, ProductByHandleData} from './../../types';
import Product, {ProductModel} from "../../models/Product";

export const useProductByHandleLoader = (props: { handle: string }) => {
    const product: Ref<ProductModel | undefined> = ref(undefined)
    const useProductTest = Product()
    const {handle = ref("not set")} = toRefs(props)
    const enabled = controlledRef(false, {
        onChanged(value, oldValue) {
            options.value = getQueryOptions(value)
        }
    })
    const getQueryOptions = (enabled: boolean): UseQueryOptions => {
        return {enabled}
    }
    const options: Record<string, any> = ref({enabled: false})
    const query_payload = ref({handle: handle})
    const {result, loading, error, onResult} = useProductByHandleCustomQuery(query_payload, options)
    const productQueryResult = useResult(result, undefined)

    whenever(productQueryResult, (value) => {
        const _product = useProductTest.create(value)
        product.value = _product
        console.warn("productQueryResult UPDATED!!!!!!!!!!", _product, _product?.cacheID)
    })
    watch(handle, (value) => {
        if (value !== undefined) {
            enabled.value = true;
            query_payload.value = {"handle": value}
        }
        if (value === undefined) {
            enabled.value = false;
            product.value = undefined
            query_payload.value = {"handle": "not set"}
        }
    }, {immediate: true})
    return {product}
}

export default useProductByHandleLoader
