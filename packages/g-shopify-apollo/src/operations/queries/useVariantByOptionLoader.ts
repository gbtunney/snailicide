import {ref, Ref, toRefs, watch} from "vue";
import {useResult, UseQueryOptions,useMutation} from "@vue/apollo-composable";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined, toReactive} from '@vueuse/core'
import {
    SelectedOptionInput,
    useProductByHandleCustomQuery, useVariantBySelectedOptionsQuery,
    VariantBySelectedOptionsQueryVariables
} from "./../../types/generated/storefront-types";
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

export const useProductByHandleLoader = (props: { handle: string , selectedOptions:VariantBySelectedOptionsQueryVariables["selectedOptions"]} ) => {
    const variants: Ref<any | undefined> = ref(undefined)
    const useProductTest = Product()
   // const {handle = ref("not set")} = toRefs(props)

    const query_payload_object = toReactive(props)
    query_payload_object.selectedOptions =
        {
            "name": "Size",
            "value": "Skein",
        }


    const enabled = controlledRef(false, {
        onChanged(value, oldValue) {
            options.value = getQueryOptions(value)
        }
    })
    const getQueryOptions = (enabled: boolean): UseQueryOptions => {
        return {enabled}
    }

    const options: Record<string, any> = ref({enabled: false})

    //const {result, loading, error, onResult} = useProductByHandleCustomQuery(query_payload, options)
  /*  const {result:selectedResult,onResult } = useVariantBySelectedOptionsQuery(query_payload_object,options)
    onResult((value)=>{
        console.log("THE RESULT IS!!!", value)
    })*/
 /*   const productQueryResult = useResult(selectedResult, undefined /!*(value) => {
        return getValidProductData<ProductFragment>(value.productByHandle as unknown) //maybeProduct????? pick function
    }*!/)*/
   /* whenever(productQueryResult, (value) => {
        //const _product = useProductTest.create(value)
      //  product.value = _product
        console.warn("useVariantBySelectedOptionsQuery UPDATED!!!!!!!!!!",value)
    })*/
    watch(query_payload_object, (value) => {
        if (value !== undefined) {
            enabled.value = true;
           // query_payload_object = value  //{"handle": value , selectedOptions.value}
        }
        if (value === undefined) {
            enabled.value = false;
            //product.value = undefined
           // query_payload.value = {"handle": "not set",selectedOptions.value}
        }
    }, {immediate: true})
    return {variants }
}

export default useProductByHandleLoader
