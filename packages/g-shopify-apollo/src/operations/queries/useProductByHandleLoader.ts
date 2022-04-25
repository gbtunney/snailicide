import {ref, Ref, toRefs, watch} from "vue";
import {UseQueryOptions, useResult} from "@vue/apollo-composable";
import {controlledRef, whenever} from '@vueuse/core'
import {isString, ObjectOf, OneOf} from "@gabrielurbina/type-guard";

//todo: move this??
import {useProductByHandleCustomQuery} from "./../../types/generated/storefront-types";

import {ApiNodeTypes} from './../../types';
import {TProductFragment} from './../../types/generated';

const getValidProductData = <T = unknown>(maybeProduct: unknown): T | undefined => {
    const isProductQueryData = <T>(value: unknown): value is T => {
        const isApiNode = ObjectOf((self) => ({
            __typename: OneOf<ApiNodeTypes>([self, isString]),
            id: isString
        }));
        return isApiNode(value)
    }
    if (isProductQueryData<T>(maybeProduct)) {
        return maybeProduct
    }
}

export const useProductByHandleLoader = (props: { handle: string }) => {
    const product: Ref<TProductFragment | undefined> = ref(undefined)
    const {handle = ref("")} = toRefs(props)

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

    const productQueryResult = useResult(result, undefined, (value) => {
        return getValidProductData<TProductFragment>(value.product as unknown) //maybeProduct????? pick function
    })
    whenever(productQueryResult, (value: TProductFragment) => {
        product.value = value
        console.warn("productQueryResult UPDATED!!!!!!!!!!", value)
    })
    watch(handle, (value) => {
        if (value === undefined || value === "") {
            enabled.value = false;
            product.value = undefined
            query_payload.value = {"handle": ""}
        } else if (value !== undefined) {
            enabled.value = true;
            query_payload.value = {"handle": value}
        }
    }, {immediate: true})
    return {product, loading, error, onResult}
}
export default useProductByHandleLoader
