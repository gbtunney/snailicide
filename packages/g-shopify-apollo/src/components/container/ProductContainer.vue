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
import {useApolloClient,provideApolloClient} from "@vue/apollo-composable";

import SimpleSelect from './../ui/SimpleSelect.vue';
import {useVariantByIndexQuery,useTestproductopQuery,VariantByIndexDocument} from "@/types/generated/storefront-types";
import User,{Post} from "@/models/User";
import {Product as Testproduct} from "@/models/Product";

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

import {useStore} from 'vuex'

const CLIENT = useApolloClient().client
const store = useStore()

const userRepo = store.$repo(User)
const postRepo = store.$repo(Post)
const productRepo = store.$repo(Testproduct)



  // Assuming this data is the response from the API backend.
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
const product=[{
  id: "Gillinnnnndsjdlksdjdjwklhddleh",
  __typename:"Product",
  handle:"gillian",
  title:"hihihiih",
  productType:"Yarn"
}]
  // Save posts.
postRepo.save(posts)
productRepo.save(product)
//const {result,onResult,error,query,onError} = useVariantByIndexQuery({handle:'local',index:7})
//console.warn("useTestproductopQuery :value", result,error)

//onResult((value)=>{
 // console.warn("onResult :value", value)

//})

const {handle,variant_id} = toRefs(props)
const {Product , loading, Variants, Options, OptionValues  ,getVariantByIndex} = useProductInstance(props)

const  clickTest=(e :Event):void => {
  // @ts-expect-error nkj
  const _product: ComputedRef<Testproduct> = (Product) as  ComputedRef<Testproduct>
  productRepo.save(  _product.value)
  console.error ("clickkk", e,Product,productRepo.all())
  console.error ("clickkk",productRepo.withAllRecursive().get())

}


//{Product, loading, Variants, Options, OptionValues,optionsUpdated,getVariant,getVariantByIndex}
</script>
<template>
  <div class="product container">
   HIHIHHIz LOADING :<h2>{{ loading }}</h2>
    <button @click="clickTest">Test me</button>

    <div v-if="Product">
      {{Product }}
      <div v-for="(option,index) in Options" :key="index">
        <h2>{{option}}</h2>
<!--        <SimpleSelect @change="test()" :options="option.values"></SimpleSelect>-->
      </div>
    </div>
  </div>
</template>
