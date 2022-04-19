import {ref, computed, shallowReactive, reactive, Ref, toRefs, watch, ComputedRef} from "vue";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'
import useProductByHandleLoader from "./useProductByHandleLoader";
import useVariantByOptionLoader from "./useVariantByOptionLoader";
import {ApolloClient, from, gql} from "@apollo/client/core";
import * as R from "ramda"
import {getDigitCount, isInteger, toInteger} from "@snailicide/g-library"
import * as RA from "ramda-adjunct"
import {Product} from "./../../models/Product";
import {useApolloClient} from "@vue/apollo-composable";
import {ProductVariant} from './../../types/generated/storefront-types'
import {ProductFragment} from './../../types'
//this is a demao.
import {isLoggedInVar} from "@/apollo/cache";
import {parseGid, composeGid} from '@shopify/admin-graphql-api-utilities';
import {Model, Repository} from '@vuex-orm/core'

import {
    ProductOptionFragment,
    ProductOptionFragmentDoc,
    VariantBySelectedOptionsQueryVariables,
    useVariantBySelectedOptionsQuery,
    ProductFragmentDoc,
} from "./../../types/generated/storefront-types";
import {useStore} from "vuex";

export const useProduct = (props: { handle: string }) => {
    const {product, loading, error} = useProductByHandleLoader(props)
    const Client = () => useApolloClient().client.cache

    const isReady = computed(() => (product.value && !loading.value))

    const Product: ComputedRef<ProductFragment | undefined> = computed(() => {
        if (!isReady.value) return undefined
        return product.value
    })
    const Variants = computed(() => {
        if (!isReady.value) return undefined
        if (product.value) return product?.value.variants.edges.map((variant) => variant.node)
        return undefined
    })
    const getVariantByIndex = (index: number | string = 1): ProductVariant | undefined => {
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
    /*  const ProductImage = computed(() => {
          if (!isReady.value) return undefined
          if (product.value) {
              return product.value.images[0]
          }
          return undefined
      })*/
    const Images = computed(() => {
        if (!isReady.value) return undefined
        if (product.value) {
            return product.value.images.edges.map((image) => image.node)
        }
        return undefined
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

    return {
        Client,
        isReady,
        Product,
        product,
        loading,
        error,
        Variants,
        Images,
        Options,
        OptionValues,
        getVariantByIndex,
    }
}
