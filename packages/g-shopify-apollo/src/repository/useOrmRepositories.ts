import {useStore} from "vuex";
import {Repository, Query, Collection} from '@vuex-orm/core'
import {computed} from "vue";
//import {ProductRepository}from './../repository/ProductRepository'
import {Product} from './../models/Product'

export const useOrmRepositories = () => {
    const store = useStore()
    const product = store.$repo(Product)
    // const ProductRepository = computed(() => store.$repo<Product>(Product))
    //  const ProductVariantRepository = computed(() => store.$repo(ProductVariant))
    //  const ProductImageRepository = computed(() => store.$repo(ProductImage))
    //  const ProductOptionRepository = computed(() => store.$repo(ProductOption))
    //  const ProductOptionValueRepository = computed(() => store.$repo(ProductOptionValue))
    return {
        store,
        ProductRepository: product,
        // ProductVariantRepository,
        // ProductImageRepository,
        // ProductOptionRepository,
        // ProductOptionValueRepository
    }
}
export default useOrmRepositories
