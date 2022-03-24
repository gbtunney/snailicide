import {useStore} from "vuex";
import {computed} from "vue";
import { ProductVariant, ProductImage, ProductOption, ProductOptionValue} from "./../models";
import {ProductRepository}from './../repository/ProductRepository'
import { Repository,Query,Collection } from '@vuex-orm/core'

export const useOrmRepositories = () => {
    const store = useStore()
    const product :ProductRepository=  store.$repo(ProductRepository)
   // const ProductRepository = computed(() => store.$repo<Product>(Product))
    const ProductVariantRepository = computed(() => store.$repo(ProductVariant))
    const ProductImageRepository = computed(() => store.$repo(ProductImage))
    const ProductOptionRepository = computed(() => store.$repo(ProductOption))
    const ProductOptionValueRepository = computed(() => store.$repo(ProductOptionValue))
    return {
        store,
        ProductRepository:product,
        ProductVariantRepository,
        ProductImageRepository,
        ProductOptionRepository,
        ProductOptionValueRepository
    }
}
export default useOrmRepositories
