import {Repository, Item, Collection, Model} from '@vuex-orm/core'
import {computed, ComputedRef, ref, toRefs, watch} from "vue";
import {useOrmRepositories} from "./useOrmRepositories";
import useProductByHandleLoader from "./../operations/queries/useProductByHandleLoader";

/* * TYPES!!!! * */
import {buildQuery, isNotUndefined, isUndefined, ProductComponentProps} from "./../types";
import {TProductGQL, TProductGQLPartial, TProductVariantGQLPartial} from "./../types/generated";

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
import {EagerLoadConstraint} from "@vuex-orm/core/dist/src/query/Options";
import {Query} from "@vuex-orm/core/dist/src/query/Query";

type TRelationFunc = 'with' | 'withAll' | 'withAllRecursive'

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
                /* * Save to ORM!! * */
                this.save(value.data.product)
                const prod = this.getProductByHandle('local', 3)
                if (prod !== undefined) {
                    const testmeIndex = prod.getVariantByIndex(0)
                    const test2:TProductVariantGQLPartial|undefined = prod.getVariantByUnique('ash--skein')
                    //sid 22620513632374
                    //gid://shopify/ProductVariant/22620513632374
                    // "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMjU4OTI4MzA0MTM5OA=="
                 //   console.log("get handnnnmnmmnm", test2?.selected_options, this.withAll().where("id", prod.id))
                }
                //    console.log("PRRIOIOIOIOIIO", handle.value, this.query().where("handle", handle.value).withAll().get())
            }
        })
        const isReady = computed(() => (product.value && !isLoading.value))

        const Product: ComputedRef<Item<TProductModel> | undefined> = computed(() => {
            if (!isReady.value) return undefined
            if (product?.value?.handle) {
                return this.getProductByHandle(product.value?.handle, 3)
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

    ///TODO -- GET BY GENERIC ???
    //************** REPOSITORY METHODS  *****************//
    getProductByHandle = (_handle: string | undefined, levels = 0): ProductModel | undefined => {
        if (_handle === '' || _handle === undefined) return undefined
        else {
            const query_result = (buildQuery<ProductModel>(this.query().where('handle', _handle), false, levels) as unknown) as ProductModel
            return isNotUndefined<ProductModel>(query_result) ? query_result : undefined
        }
    }

    getLatestPublished() {
        return this
            .where('public', true)
            .orderBy('publishedAt', 'desc')
            .get()
    }
}

export default ProductRepository
