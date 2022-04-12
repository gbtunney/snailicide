import {ref, computed, Ref, toRefs, watch, ComputedRef} from "vue";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'
import useProductByHandleLoader from "./useProductByHandleLoader";
import useVariantByOptionLoader from "./useVariantByOptionLoader";
import {ApolloClient, from, gql} from "@apollo/client/core";
import * as R from "ramda"
import {getDigitCount, isInteger, toInteger} from "@snailicide/g-library"
import * as RA from "ramda-adjunct"
import {ProductExtended} from "./../../models/Product";
import {useApolloClient} from "@vue/apollo-composable";
import {ProductVariantFragment}from './../../types/generated/storefront-types'
//this is a demao.
import {isLoggedInVar} from "@/apollo/cache";
import {parseGid,composeGid} from '@shopify/admin-graphql-api-utilities';

import {
    ProductOptionFragment,
    ProductOptionFragmentDoc,
    VariantBySelectedOptionsQueryVariables,
    useVariantBySelectedOptionsQuery,
    ProductFragmentDoc,
} from "./../../types/generated/storefront-types";

export const useProduct = (props: { handle: string }) => {
    const {product, loading, error} = useProductByHandleLoader(props)

    const {variants} = useVariantByOptionLoader({
        handle: 'local', selectedOptions: [
            /*    {
                    "name": "Color",
                    "value": "Wood Dove",
                },*/
            {
                "name": "Size",
                "value": "Skein",
            }
        ]
    })

    const isReady = computed(() => {
        const test = useApolloClient().client.cache
        return (product.value && !loading.value)
    })

    const Product: ComputedRef<ProductExtended | undefined> = computed(() => {
        if (!isReady.value) return undefined
        return product.value
    })
    const Variants = computed(() => {
        if (!isReady.value) return undefined
        if (product.value) {
            return product?.value.variants.edges.map((variant) => {
                return variant.node
            })
        }
        return undefined
    })
    const getVariantByIndex = (index: number | string = 1): ProductVariantFragment | undefined => {
        if (!isReady.value || Variants.value === undefined) return undefined
        if (RA.isString(index)) {
            if (isInteger(index)) index = toInteger(index) as number
            const found = Variants.value.find((variant) => {
                if (index === variant.id) return true
            })
            if (found) return found
        }
        if (RA.isInteger(index)) {
            if (getDigitCount(index) >= 9) {
                const gid = btoa(composeGid("ProductVariant", index))
                const found_gid = Variants.value.find((variant) => {
                    if (gid === variant.id) return true
                })
                if (found_gid) return found_gid
            } else if (index <= Variants.value?.length) {
                return Variants.value[index - 1]
            }
        }
        return Variants.value[0]
    }
    const ProductImage = computed(() => {
        if (!isReady.value) return undefined
        if (product.value) {
            return product.value.image
        }
        return undefined
    })
    const Images = computed(() => {
        if (!isReady.value) return undefined
        if (product.value) {
            return product.value.images.edges.map((image) => image.node)
        }
        return undefined
    })
    const getVariant = computed(() => {
        return "tess"
    })

    const Options = computed(() => {
        if (!isReady.value) return undefined
        if (product.value) {
            const test_query = gql`
                fragment ProductOptionFragmentNew on ProductOption {
                    type: __typename
                    id
                    handle
                    title:name
                }`

            const options = product.value.options.map((_option) => {
                if (_option.id === undefined || _option.id === null) return undefined
                const id = `ProductOption:${_option.id}`
                const fragment = ProductOptionFragmentDoc
                if (_option.id !== undefined || _option.id !== null) {

                    const query2 = useApolloClient()
                        .client.cache.readFragment({
                            id, fragment: test_query, variables: {
                                product_id: product.value?.id
                            }
                        })
                    console.log("------QUERY !!", id, query2)

                    // <ProductOptionFragment>
                    const query = useApolloClient()
                        .client.cache.readFragment({id, fragment})
                    return query
                }
                return undefined
                /* if (__option) {
                     //  __option.isLoggedIn=  makeVar(true)// makeVar<boolean>(true);
                     console.log("__option is", __option.isLoggedIn)
                     localStorage.setItem('token', "jkjkjkjkkjjk")
                     isLoggedInVar(true);
                 }*/
            })
            return options
        }
        return undefined
    })
    const OptionValues = computed(() => {
        if (!isReady.value) return undefined
        if (product.value) {
            return product.value.options
        }
        return undefined
    })

    const optionsUpdated = (_option_values: VariantBySelectedOptionsQueryVariables["selectedOptions"]) => {
        if (!isReady.value) return undefined
        if (product.value) {
            const obj: VariantBySelectedOptionsQueryVariables = {
                handle: product.value.handle,
                selectedOptions: [
                    {
                        "name": "Color",
                        "value": "Wood Dove",
                    },
                    {
                        "name": "Size",
                        "value": "Skein",
                    }
                ]
            }
        }
    }
    return {
        Product,
        product,
        loading,
        error,
        Variants,
        Images,
        ProductImage,
        Options,
        OptionValues,
        getVariant,
        getVariantByIndex,
        optionsUpdated
    }
}
