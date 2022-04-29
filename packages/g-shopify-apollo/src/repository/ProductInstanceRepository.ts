import {Repository, Item, Collection} from '@vuex-orm/core'
import {computed, ComputedRef, Ref, ref, toRefs, watch} from "vue";

import {useOrmRepositories} from "./useOrmRepositories";
import useProductByHandleLoader from "./../operations/queries/useProductByHandleLoader";

/* * TYPES!!!! * */
import {ProductComponentProps, ProductInstanceComponentProps} from "./../types";
import {TProductGQL, TProductGQLPartial} from "./../types/generated";

/* * NEW FORMAT NAMING!! * */
import ProductModel, {TProductModel} from './../models/Product'
import {ProductImageModel, TProductImageModel} from './../models/ProductImage'
import {ProductVariantModel, TProductVariantModel} from "./../models/ProductVariant";
import {
    TProductOptionValueModel,
    TVariantOptionModel,
    ProductOptionValueModel,
    TProductOptionModel
} from "./../models/ProductOption";

import ProductInstanceModel, {TProductInstanceModel} from './../models/ProductInstance'

import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {randomInt} from "@snailicide/g-library";

/* * CUSTOM REPOSITORY FOR PRODUCT INSTANCE * */
export class ProductInstanceRepository extends Repository<ProductInstanceModel> {
    use = ProductInstanceModel

    init(props: ProductComponentProps) {
        const {
            groupRepo,
            productRepo,
            variantRepo,
        } = useOrmRepositories()
        const {
            //quantity= 0,
            variant_id,
            //handle,
            //customAttributes,
        } = toRefs(props)
        const instance_id: Ref<string> = ref((randomInt(10, 999999)).toString())
        const repoHandle: Ref<string> = ref('')
        const quantity = ref(0)

        /* * WATCH PROPS!!!!! * */
        watch(props, (value) => {

            // Incoming Product Handle
            if (value.handle !== undefined || value.handle !== '') {
                if (value.handle !== repoHandle.value) {
                    ////TODO:
                    console.warn("PLEASE UPDATE THIS WHEN QUANTIT IS ENABLE!!!")
                }
                repoHandle.value = value.handle
            }
            if (value.instance_id !== undefined) {
                console.error("id_comp replacing local!!!!", instance_id.value)
                instance_id.value = value.instance_id
                ///need to use the generated Id, because thhe component does not have one.
                debugger;
            }
            if (repoHandle.value !== '' || repoHandle.value !== undefined) {
                const save_props = {...props, id: instance_id.value, product_handle: repoHandle.value}

               // const product_check = productRepo.query().where("handle",repoHandle.value).first()
           //     console.log("Saveing to Instance ORMMMM",  product_check ,product_check?.getVariantByUnique(props.variant_id) )

                //instance is saved here!!
                this.save(save_props)
            }
        }, {immediate: true})

        ///  Bool to see if its saved todo: check for ID, handle, and variant_id
        const isInstanceReady = computed(() => {
            if ( !instance_id?.value  )return
            if ( !instance_id?.value  )return
            const instanceResult = this.query().whereId(instance_id?.value).with('product').first();
            return (instanceResult && instanceResult.product )
        })

        //query instance by instance ID
        const Instance: ComputedRef<Item<TProductInstanceModel> | undefined> = computed(() => {
            if (!isInstanceReady.value) return undefined
            if (instance_id?.value) {
                return (this.query().whereId(instance_id?.value).withAll().first())
            }
            return undefined
        })

        const Quantity: ComputedRef<TProductInstanceModel["quantity"]> = computed(() => {
            if (!isInstanceReady.value) return 0
            if (Instance.value) {
                console.log("QUANTITY CALLING!!!!!!", "props quantity", quantity?.value, "instance : ", Instance.value?.quantity)
                return Instance.value?.quantity
            }
            return 0
        })

        const SelectedVariant = computed(() => {
            if (!isInstanceReady.value) return undefined
            if (repoHandle.value && variant_id?.value) {
                const product_check =   Instance.value?.product //productRepo.query().where("handle",repoHandle.value).withAll().first()

               console.warn("THE PRODUCT IS LOADE", Instance.value,product_check ,
                   product_check//.ge.getVariantByUnique(Instance.value?.variant_id ,variantRepo),
                   )
            }
            return Instance.value?.variant_id
        })
        //// TODO:???WHHERE SHOHULD I PUT THIHS?/???? MOVE TO PRODUCT MODEL OR REPO
        /*const Variants = computed(() => {
            if (!isInstanceReady.value) return undefined
            if (repoHandle.value && variant_id?.value) {
                const _product = productRepo.query().where('handle', repoHandle.value).with('Variants').first()
                console.log("_product_product_product", _product)
                if (_product?.id) {
                    const _product_id = _product.id
                    const _variants = variantRepo.query().where('product_id', _product_id).withAll().get();
                    return _variants
                }
            }
            return undefined
        })*/
        /* const Variant: ComputedRef<Collection<TProductVariantModel> | undefined> = computed(() => {
             if (!isReady.value) return undefined
             const variants: Collection<TProductVariantModel> = variantRepo.query().where("product_id", product.value?.id).withAll().get()
             if (variants) return variants
             return undefined
         })*/
        return {isInstanceReady, Instance, SelectedVariant,Quantity}
    }

    ///TODO: make some kind of setting for withAll
    getLatestPublished() {
        return this
            .where('public', true)
            .orderBy('publishedAt', 'desc')
            .get()
    }
}

export default ProductInstanceRepository
