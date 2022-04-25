import {useStore} from "vuex";
import {Repository, Query, Collection} from '@vuex-orm/core'

/* * ORM Models * */
import {ProductVariantModel} from './../models/ProductVariant'
import {ProductImageModel} from './../models/ProductImage'
import {ProductOptionModel, ProductOptionValueModel, VariantOptionModel} from './../models/ProductOption'
import ProductInstance from "./../models/ProductInstance";
import ProductGroup from "./../models/ProductGroup";

/* * CUstom Repository  * */
import {ProductRepository} from './ProductRepository'

export const useOrmRepositories = () => {
    const store = useStore()

    const instanceRepo = store.$repo(ProductInstance)
    const groupRepo = store.$repo(ProductGroup)

    const productRepo = store.$repo(ProductRepository)
    const variantRepo = store.$repo(ProductVariantModel)
    const imageRepo = store.$repo(ProductImageModel)

    const optionRepo = store.$repo(ProductOptionModel)
    const optionValueRepo = store.$repo(ProductOptionValueModel)
    return {
        store,
        instanceRepo,
        groupRepo,

        productRepo,
        variantRepo,
        imageRepo,

        optionRepo,
        optionValueRepo
    }
}
export default useOrmRepositories
