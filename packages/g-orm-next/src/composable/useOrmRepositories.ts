import {useStore} from "vuex";
import {computed} from "vue";
import {Product, ProductVariant, ProductImage, ProductOption, ProductOptionValue} from "./../models";

export const useOrmRepositories = () => {
    const store = useStore()
    const ProductRepository = computed(() => store.$repo(Product))
    const ProductVariantRepository = computed(() => store.$repo(ProductVariant))
    const ProductImageRepository = computed(() => store.$repo(ProductImage))
    const ProductOptionRepository = computed(() => store.$repo(ProductOption))
    const ProductOptionValueRepository = computed(() => store.$repo(ProductOptionValue))
    return {
        store,
        ProductRepository,
        ProductVariantRepository,
        ProductImageRepository,
        ProductOptionRepository,
        ProductOptionValueRepository
    }
}
export default useOrmRepositories
