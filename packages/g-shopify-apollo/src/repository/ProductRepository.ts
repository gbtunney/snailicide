import {Repository, Item, Collection} from '@vuex-orm/core'
import {computed, ComputedRef, ref, toRefs, watch} from "vue";
import {useProduct} from "@/operations/queries/useProduct";
import {ProductComponentProps, ProductImage, ProductVariant, TProduct} from "@/types";
import useProductByHandleLoader from "./../operations/queries/useProductByHandleLoader";
import Product, {Product as Testproduct} from './../models/Product'

//import ProductImage from './../models/ProductImage'

import {gql} from "@apollo/client/core";
import {useApolloClient} from "@vue/apollo-composable";
import {useOrmRepositories} from "@/repository/useOrmRepositories";
import {ProductVariantType} from "@/models/ProductVariant";
import {ProductOptionType, VariantOptionType, ProductOptionValueType} from "@/models/ProductOption";

export class ProductRepository extends Repository<Product> {
    use = Product

    init(product_props: ProductComponentProps) {
        // {Product, isReady,loading, Variants, Options, OptionValues,optionsUpdated,getVariant,getVariantByIndex}
        const {handle = ref(undefined), variant_id = 1} = toRefs(product_props)
        const {
            //ProductGroupRepository: groupRepo,
            // ProductRepository: productRepo,
            //  ProductInstanceRepository: instanceRepo
            ProductVariantRepository: variantRepo,
            ProductImageRepository: imageRepo,
            ProductOptionRepository: optionRepo,
            ProductOptionValueRepository: optionValueRepo
        } = useOrmRepositories()
        // const productTest = useProduct(product_props)
        const {product, loading: isLoading, error, onResult} = useProductByHandleLoader(product_props)
        onResult((value) => {
            //   debugger;
            if (isLoading.value === false && value.data.product) {
                this.save(value.data.product)
                console.log("PRRIOIOIOIOIIO", handle.value, this.query().where("handle", handle.value).withAll().get())
            }
        })
        const isReady = computed(() => (product.value && !isLoading.value))

        const Product: ComputedRef<Item<Product> | undefined> = computed(() => {
            if (!isReady.value) return undefined
            if (product?.value && this.find(product?.value.id)) {
                return (this.query().whereId(product?.value.id).withAll().first())
            }
            return undefined//product.value
        })
        const Variants: ComputedRef<Collection<ProductVariantType> | undefined> = computed(() => {
            if (!isReady.value) return undefined
            const variants: Collection<ProductVariantType> | undefined = variantRepo.query().where("product_id", product.value?.id).withAll().get()
            if (variants) return variants
            return undefined
        })

        const Images: ComputedRef<ProductImage[] | undefined> = computed(() => {
            if (!isReady.value) return undefined
            if (Product.value) {
                return Product.value?.Images//images.edges.map((image) => image.node)
            }
            return undefined
        })

        const Options = computed(() => {
            if (!isReady.value) return undefined
            const options: Collection<ProductOptionType> = optionRepo.query().where("product_id", product.value?.id).withAll().get()
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
