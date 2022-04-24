<script lang="ts" setup>
import {
  Component,
  toRefs,
  defineComponent,
  withDefaults,
  computed,
  defineProps,
  watch,
  defineEmits,
  Ref,
  ref,
  ComputedRef,
} from "vue";
import {useProduct} from './../../operations/queries/useProduct';
import {useProductInstance} from "./../../operations/queries/useProductInstance";
import {useApolloClient, provideApolloClient} from "@vue/apollo-composable";
import SimpleSelect from './../ui/SimpleSelect.vue';

const props = withDefaults(
    defineProps<{
      /**
       * Product Handle
       */
      handle: string,

      /**
       * Variant ID or index
       */
      variant_id?: string | number

    }>(), {
      handle: "",
      variant_id: '5'//99//'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMjU4OTI4MzEwNjkzNA=='// '22620513665142'

    })
//defineComponent(SimpleSelect)

//import {useStore} from 'vuex'
import {useOrmRepositories} from "@/repository/useOrmRepositories";
import ProductInstance, {ProductInstanceType} from "@/models/ProductInstance";
import ProductGroup from "@/models/ProductGroup";
import {
  ProductInstance as TProductInstance,
  ProductGroup as TProductGroup
} from "@/types/generated/storefront-types";

const CLIENT = useApolloClient().client
const {
  ProductGroupRepository: groupRepo,
  ProductRepository: productRepo,
  ProductInstanceRepository: instanceRepo
} = useOrmRepositories()
const {handle, variant_id} = toRefs(props)
const {Product, isLoading, Variants/*, Options, OptionValues  ,getVariantByIndex*/} = productRepo.init(props)

const clickTest = (e: Event): void => {
  const demoProduct: TProductInstance = {
    __typename: 'ProductInstance',
    id: '4444',
    product_handle: 'local',
    quantity: 3,
    variant_id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMjYyMDUxMzQzNTc2Ng=="
  }
  const _group: TProductGroup = {
    __typename: 'ProductGroup',
    id: '324234324',
    max_children: 2,
    items: [demoProduct]
  }
  groupRepo.save(_group)
  /*instanceRepo.insert({
    id:4444,
    quantity:9,
  })*/
  console.error("instanceRepo.all() _product", groupRepo.withAllRecursive().get())
}
/* // Assuming this data is the response from the API backend.
 //const store = useStore()
//const userRepo = store.$repo(User)
//const postRepo = store.$repo(Post)
 const posts = [
   {
     id: 1,
     title: 'Hello, world!',
     body: 'Some awesome body...',
     author: {
       id: 1,
       name: 'John Doe',
       email: 'john@example.com'
     }
   }
 ]
*/
// Save posts.
//postRepo.save(posts)
//const {result,onResult,error,query,onError} = useVariantByIndexQuery({handle:'local',index:7})
//console.warn("useTestproductopQuery :value", result,error)
//onResult((value)=>{
// console.warn("onResult :value", value)
//})
//{Product, loading, Variants, Options, OptionValues,optionsUpdated,getVariant,getVariantByIndex}
</script>
<template>
  <div class="product container">
    HIHIHHIz LOADING :<h2>{{ isLoading }}</h2>
    <button @click="clickTest">Test me</button>

    <div v-if="isReady">
      {{ Product }}
      <div v-for="(option,index) in Options" :key="index">
        <h2>{{ option }}</h2>
        <!--        <SimpleSelect @change="test()" :options="option.values"></SimpleSelect>-->
      </div>
    </div>
  </div>
</template>
