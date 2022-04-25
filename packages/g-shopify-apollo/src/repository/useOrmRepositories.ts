import {useStore} from "vuex";
import {Repository, Query, Collection} from '@vuex-orm/core'

/* * ORM Models * */
import {Product} from './../models/Product'
import {ProductVariant} from './../models/ProductVariant'
import {ProductImage} from './../models/ProductImage'
import {ProductOption, ProductOptionValue, VariantOption} from './../models/ProductOption'
import ProductInstance from "./../models/ProductInstance";
import ProductGroup from "./../models/ProductGroup";

/* * CUstom Repository  * */
import {ProductRepository} from './ProductRepository'

export const useOrmRepositories = () => {
    const store = useStore()

    const productRepo = store.$repo(ProductRepository)
    const instanceRepo = store.$repo(ProductInstance)
    const groupRepo = store.$repo(ProductGroup)
    const variantRepo = store.$repo(ProductVariant)
    const imageRepo = store.$repo(ProductImage)
    const optionRepo = store.$repo(ProductOption)
    const optionValueRepo = store.$repo(ProductOptionValue)
    return {
        store,
       productRepo,
        instanceRepo,
        groupRepo,
        variantRepo,
        imageRepo,
        optionRepo
    }
}
export default useOrmRepositories
