import {ref, Ref, toRefs, watch} from "vue";
import {useResult, UseQueryOptions,useMutation} from "@vue/apollo-composable";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'
import {useProductByHandleCustomQuery} from "./../../types/generated/storefront-types";
import {
    ApiNodeTypes
} from './../../types';
import Product, {ProductExtended} from "../../models/Product";
import {ProductFragment} from "./../../types";
import {isString, ObjectOf, OneOf} from "@gabrielurbina/type-guard";

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
    const product: Ref<ProductExtended | undefined> = ref(undefined)
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
    const productQueryResult = useResult(result, undefined, (value) => {
        return getValidProductData<ProductFragment>(value.productByHandle as unknown) //maybeProduct????? pick function
    })
    whenever(productQueryResult, (value: ProductFragment) => {
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
    return {product, loading, error }
}

export default useProductByHandleLoader
