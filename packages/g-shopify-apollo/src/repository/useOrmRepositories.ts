import {useStore} from "vuex";
import {Repository, Query, Collection} from '@vuex-orm/core'
import {computed} from "vue";
//import {ProductRepository}from './../repository/ProductRepository'
import {Product} from './../models/Product'
import {ProductRepository} from './ProductRepository'
import ProductInstance from "./../models/ProductInstance";
import ProductGroup from "./../models/ProductGroup";
export const useOrmRepositories = () => {
    const store = useStore()
    const product = store.$repo(ProductRepository)
    const product_instance =  store.$repo(ProductInstance)
    const product_group = store.$repo(ProductGroup)
    // const ProductRepository = computed(() => store.$repo<Product>(Product))
    //  const ProductVariantRepository = computed(() => store.$repo(ProductVariant))
    //  const ProductImageRepository = computed(() => store.$repo(ProductImage))
    //  const ProductOptionRepository = computed(() => store.$repo(ProductOption))
    //  const ProductOptionValueRepository = computed(() => store.$repo(ProductOptionValue))
    return {
        store,
        ProductRepository: product,
        ProductInstanceRepository:product_instance,
        ProductGroupRepository:product_group,
        // ProductVariantRepository,
        // ProductImageRepository,
        // ProductOptionRepository,
        // ProductOptionValueRepository
    }
}
export default useOrmRepositories
