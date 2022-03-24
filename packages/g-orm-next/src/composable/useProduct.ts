/* * use a single product ( by id & variantid * */
import {Item,Model, Attr, Str, Bool, HasMany} from '@vuex-orm/core'
import {Product}from './../models'
import {computed, ComputedRef, defineProps, ref, Ref, toRefs, watch} from "vue";
import {ProductByHandleQueryVariables, useProductByHandleQuery} from "./../graphql/types/generated-types";
import useOrmRepositories from "./../composable/useOrmRepositories";
import {useProductParsing} from "./../composable/useProductParsing";
import {useResult} from "@vue/apollo-composable";
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {TProductRepository} from "@/repository/ProductRepository";
import {paramToReactive} from "@vue/apollo-composable/dist/util/paramToReactive";
export interface ProductProps {
    handle: string,
    variant_id:string|number
}
export const useProduct = ( props : ProductProps) => {
    const {ProductRepository} = useOrmRepositories()
    const {parseDataProductFragment} = useProductParsing()
    const {handle, variant_id } = toRefs(props)
    const Handle :ComputedRef<string>= computed(()=>{
        console.log("HANDLE CHANNNNGEDDD computed")
        return handle.value
    })
    watch(handle,(value)=>{
        console.log("HANDLE CHANNNNGEDDD",value)

    })
    const product_vars: Ref<ProductByHandleQueryVariables> =
        ref( {handle})

    const SetNewProduct = (variables: ProductByHandleQueryVariables ) => {
        if ( variables.handle !== product_vars.value.handle ){
            product_vars.value = variables
        }
    }

  const {result, loading, error, onResult} = useProductByHandleQuery(product_vars)
    const productQueryResult = useResult(result, undefined)

    watch(productQueryResult, (value) => {
        if ( value===undefined || value ===null ) return
        if  ("id" in value ){
           const result :Item<Product>|undefined= ProductRepository.find(value.id)
           ///if its not already in the ORM
            if ( result === undefined && value ){
                if (value) {
                    try {
                        const parsedProduct =  parseDataProductFragment(value)
                        if ( parsedProduct === undefined) return
                        const resp = ProductRepository.save(parsedProduct)
                        console.log("saving --------",parsedProduct,"resp", resp)

                    } catch (e) {
                        console.log("errortestyyyyyyyyyy", typeof e, e.type)
                    }
                }
            }
        }

   })
/*

    const _returnValue = ref()
    const resultValue = computed({
        get: () => _returnValue.value,
        set: (value) => {
            console.log("resulttttt",  parseDataProductFragment(value))
            _returnValue.value = parseDataProductFragment(value)
        }
    })
*/

    return {
        SetNewProduct,
        Product: ProductRepository.productHandleToID(Handle.value)
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
