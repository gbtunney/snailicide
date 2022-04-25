import {Repository, Item, Collection} from '@vuex-orm/core'
import {computed, ComputedRef, ref, toRefs, watch} from "vue";
import {useOrmRepositories} from "./useOrmRepositories";
import useProductByHandleLoader from "./../operations/queries/useProductByHandleLoader";

/* * TYPES!!!! * */
import {ProductComponentProps} from "./../types";
import {TProductGQL, TProductGQLPartial} from "./../types/generated";

/* * NEW FORMAT NAMING!! * */
import ProductModel, {TProductModel} from './../models/Product'
import {ProductImageModel, TProductImageModel} from './../models/ProductImage'
import {ProductVariantModel, TProductVariantModel} from "./../models/ProductVariant";
import {
    TProductOptionValueModel,
    TVariantOptionModel,
    ProductOptionValueModel,
    TProductOptionModel
} from "./../models/ProductOption";

export class ProductRepository extends Repository<ProductModel> {
    use = ProductModel

    init(product_props: ProductComponentProps) {
        const {handle = ref(undefined), variant_id = 1} = toRefs(product_props)
        const {
            variantRepo,
            imageRepo,
            optionRepo,
            optionValueRepo,

            instanceRepo,
            groupRepo
        } = useOrmRepositories()
        // const productTest = useProduct(product_props)
        const {product, loading: isLoading, error, onResult} = useProductByHandleLoader(product_props)
        onResult((value) => {
            if (isLoading.value === false && value.data.product) {
                this.save(value.data.product)
                console.log("PRRIOIOIOIOIIO", handle.value, this.query().where("handle", handle.value).withAll().get())
            }
        })
        const isReady = computed(() => (product.value && !isLoading.value))

        const Product: ComputedRef<Item<TProductModel> | undefined> = computed(() => {
            if (!isReady.value) return undefined
            if (product?.value && this.find(product?.value.id)) {
                return (this.query().whereId(product?.value.id).withAll().first())
            }
            return undefined//product.value
        })
        const Variants: ComputedRef<Collection<TProductVariantModel> | undefined> = computed(() => {
            if (!isReady.value) return undefined
            const variants: Collection<TProductVariantModel> = variantRepo.query().where("product_id", product.value?.id).withAll().get()
            if (variants) return variants
            return undefined
        })

        const Images: ComputedRef<TProductGQL["Images"] | undefined> = computed(() => {
            if (!isReady.value) return undefined
            if (Product.value) return Product.value?.Images
            return undefined
        })

        const Options = computed(() => {
            if (!isReady.value) return undefined
            const options: Collection<TProductOptionModel> = optionRepo.query().where("product_id", product.value?.id).withAll().get()
            if (options) return options
            return undefined
        })
        const OptionValues = computed(() => {
            if (!isReady.value) return undefined
            if (product.value?.options) {
                /*  product.value.options.map((_option)=>{
                     // return _option.
                  })*/
            }
            return undefined
        })
        return {isReady, isLoading, Product, Variants, Options, OptionValues, Images}
    }

    getLatestPublished() {
        return this
            .where('public', true)
            .orderBy('publishedAt', 'desc')
            .get()
    }
}

export default ProductRepository
