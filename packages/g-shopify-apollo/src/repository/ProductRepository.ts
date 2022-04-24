import {Repository} from '@vuex-orm/core'
import {computed, ComputedRef, ref, toRefs, watch} from "vue";
import {useProduct} from "@/operations/queries/useProduct";
import {ProductComponentProps, ProductFragment} from "@/types";
import useProductByHandleLoader from "./../operations/queries/useProductByHandleLoader";
import Product, {Product as Testproduct} from './../models/Product'

export class ProductRepository extends Repository<Product> {
    use = Product

    init(product_props: ProductComponentProps) {
        // {Product, isReady,loading, Variants, Options, OptionValues,optionsUpdated,getVariant,getVariantByIndex}
        const {handle = ref(undefined), variant_id = 1} = toRefs(product_props)
        // const productTest = useProduct(product_props)
        const {product, loading: isLoading, error, onResult} = useProductByHandleLoader(product_props)
        onResult((value) => {
            //   debugger;
            if (isLoading.value === false && value.data.product) {
                this.save(value.data.product)
                console.log("PRRIOIOIOIOIIO", this.all())
            }
        })
        const isReady = computed(() => (product.value && !isLoading.value))

        const Product: ComputedRef<ProductFragment | undefined> = computed(() => {
            if (!isReady.value) return undefined
            return product.value
        })
        const Variants = computed(() => {
            if (!isReady.value) return undefined
            if (product.value) return product?.value.variants.edges.map((variant) => variant.node)
            return undefined
        })
        return {isReady, isLoading, Product, Variants}
    }

    getLatestPublished() {
        return this
            .where('public', true)
            .orderBy('publishedAt', 'desc')
            .get()
    }
}

export default ProductRepository
