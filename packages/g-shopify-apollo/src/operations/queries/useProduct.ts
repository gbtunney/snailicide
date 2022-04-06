import {ref, computed, Ref, toRefs, watch, ComputedRef} from "vue";
import {controlledRef, computedWithControl, useRefHistory, whenever, isDefined} from '@vueuse/core'
import useProductByHandleLoader from "./useProductByHandleLoader";
import {ProductExtended} from "./../../models/Product";
import {useApolloClient} from "@vue/apollo-composable";

//this is a demao.
import {isLoggedInVar} from "@/apollo/cache";
import {ProductOptionFragment, ProductOptionFragmentDoc} from "./../../types/generated/storefront-types";

export const useProduct = (props: { handle: string }) => {
    const {product, loading, error} = useProductByHandleLoader(props)
    const isReady = computed(() => {
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
    const Options = computed(() => {
        if (!isReady.value) return undefined
        if (product.value) {
            const options = product.value.options.map((_option) => {
                if (_option.id === undefined || _option.id === null) return undefined
                const id = `ProductOption:${_option.id}`
                const fragment = ProductOptionFragmentDoc
                if (_option.id !== undefined || _option.id !== null) {
                    const query = useApolloClient()
                        .client.cache.readFragment<ProductOptionFragment>({id, fragment})
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

    return {Product, product, loading, error, Variants, Images, ProductImage, Options, OptionValues}
}
