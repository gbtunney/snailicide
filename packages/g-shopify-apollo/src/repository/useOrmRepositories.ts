import {useStore} from "vuex";

/* * ORM Models * */
import {ProductVariantModel} from './../models/ProductVariant'
import {ProductImageModel} from './../models/ProductImage'
import {ProductOptionModel, ProductOptionValueModel, VariantOptionModel} from './../models/ProductOption'
import ProductGroup from "./../models/ProductGroup";

/* * CUstom Repository  * */
import {ProductRepository} from './ProductRepository'
import ProductInstanceRepository from "./ProductInstanceRepository";

export const useOrmRepositories = () => {
    const store = useStore()

    const instanceRepo = store.$repo(ProductInstanceRepository)
    const groupRepo = store.$repo(ProductGroup)

    const productRepo = store.$repo(ProductRepository)
    const variantRepo = store.$repo(ProductVariantModel)
    const imageRepo = store.$repo(ProductImageModel)

    const optionRepo = store.$repo(ProductOptionModel)
    const optionValueRepo = store.$repo(ProductOptionValueModel)

    const pivotOptionValueRepo = store.$repo(VariantOptionModel)

    const getAllModelInstanceStats = () => {
        return {
            product: productRepo.all().length,
            variant: variantRepo.all().length,
            option: optionRepo.all().length,
            optionValue: optionValueRepo.all().length,
            pivotOptionValu: pivotOptionValueRepo.all().length
        }
    }
    return {
        store,
        instanceRepo,
        groupRepo,

        productRepo,
        variantRepo,
        imageRepo,

        optionRepo,
        optionValueRepo,
        pivotOptionValueRepo,

        getAllModelInstanceStats
    }
}
export default useOrmRepositories
