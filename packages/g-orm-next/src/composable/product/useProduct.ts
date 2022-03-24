/* * use a single product ( by id & variantid * */
import {Item, Model, Attr, Str, Bool, HasMany} from '@vuex-orm/core'
import {Product} from './../../models'
import {computed, ComputedRef, defineProps, ref, Ref, toRefs, watch, WritableComputedRef} from "vue";
import {ProductByHandleQueryVariables, useProductByHandleQuery} from "./../../graphql/types/generated-types";
import useOrmRepositories from "./../useOrmRepositories";
import {useResult} from "@vue/apollo-composable";

export const useProduct = (props: ProductProps) => {
    const {ProductRepository, ProductOptionValueRepository} = useOrmRepositories()
    // const {parseDataProductFragment} = useProductParsing()
    const {handle, variant_id} = toRefs(props)
    const _product: Ref<Item<Product> | undefined | null> = ref(undefined)
    const testy: Ref<string> = ref('rsere')
    watch(handle, (value) => {
        console.log("HANDLE CHANNNNGEDDD", value)
    })
    const product_vars: Ref<ProductByHandleQueryVariables | undefined> =
        ref()
    const SetNewProduct = (variables: ProductByHandleQueryVariables) => {
        // if ( product_vars.value === undefined)return
        if (variables.handle && product_vars.value === undefined) {
            product_vars.value = variables

            const {result, loading, error, onResult} = useProductByHandleQuery(product_vars.value)
            const productQueryResult = useResult(result, undefined)
            console.log("SetNewProduct changed", variables, product_vars.value, productQueryResult)
            watch(productQueryResult, (value) => {
                console.log("productQueryResult changed", value)
                if (value === undefined || value === null) return
                if ("id" in value) {
                    const result: Item<Product> | undefined = ProductRepository.find(value.id)
                    ///if its not already in the ORM
                    if ((result === undefined || result === null) && value) {
                        console.warn("FOUND!!!!!", value, result)
                        // const parsedProduct =  parseDataProductFragment(value)
                      //  if (parsedProduct === undefined) return
                       /* try {
                            const resp = ProductRepository.save(parsedProduct)
                        } catch (e) {
                            const tempProduct: Product | undefined | null = ProductRepository.getProductByHandle(handle.value)
                            if (tempProduct !== undefined) {
                                _product.value = tempProduct
                                console.warn("tempProduct FOUND!!!!!", _product, value)
                            }
                        }*/
                    }
                }
            })
        }
        if (variables.handle !== product_vars.value?.handle) {
            product_vars.value = variables
        }
    }
    SetNewProduct({handle: handle.value})

    //console.log("_producttt" ,( _product.value === undefined ))
    const test = ref("undefined")
    return {
        // SetNewProduct,
        /*Product: function () {
            if (!this.Handle) return;
            return Product.getProductByHandle(this.Handle)
        },
        ProductImage: function () {
            //todo: fix
            if (!this.Product || !this.Ready) return;
            return ProductImage.query().where("product_id", this.Product.id).where("position", 1).orderBy('position').withAll().first()
        },
        Variants: function () {
            if (!this.Product) return;
            return this.Product.Variants;
        },
        Options: function () {
            if (!this.Ready ) return;
            //if (!this.$props.enableoptions || !this.Ready) return false
            return this.Product.Options;
        },
        Images: function () {
            if (!this.Product || !this.Variants) return; //todo: use  ready?
            return this.Product.Images;
        },  */
    }
}
export default useProduct

export interface ProductProps {
    handle: string,
    variant_id: string | number
}

//export type TProductProps =ProductProps
