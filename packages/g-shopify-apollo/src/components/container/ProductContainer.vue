<script lang="ts" setup>
import {defineProps, toRefs, withDefaults} from "vue";

import {useApolloClient} from "@vue/apollo-composable";
import {randomInt}from '@snailicide/g-library'
const CLIENT = useApolloClient().client

/* * COMPONENTS!!!!!! * */
import SimpleSelect from './../ui/SimpleSelect.vue';
import LoadingSpinner from './../ui/LoadingSpinner.vue';

/* * TYPES!!!!!!!! * */
import {PlainObject} from "@snailicide/g-library";

export type ProductComponentProps = {
  handle: string
  variant_id: string | number
}
type OptionValue = PlainObject | string | number

/* * REPOSITORIES! * */
import {useOrmRepositories} from "./../../repository/useOrmRepositories";

const {
  groupRepo,
  productRepo,
  instanceRepo
} = useOrmRepositories()

/* * PROPS * */
const props = withDefaults(
    defineProps<{
      /**
       * Product Handle
       */
      handle: string,
      /**
       * Variant ID or index
       */
      variant_id?: string | number,

      instance_id?: string
    }>(), {
      handle: "", //undefined is a pain in the bum
      variant_id: '5',//99//'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMjU4OTI4MzEwNjkzNA=='// '22620513665142'
      instance_id:undefined
    })
const {handle, variant_id} = toRefs(props)

/* * INIT PRODUCT LOADER * */
const {Product, isLoading, isReady, Variants, Options, OptionValues, Images} = productRepo.init(props)

const {Instance,isInstanceReady} = instanceRepo.init(props)
const changedOptionSelector = (option: OptionValue): void => {
  console.warn("cchangeTestchangeTest", option)
}

</script>
<template>
  <div class="product container">
    {{ isInstanceReady}}
    <div v-if="isInstanceReady"  class="bg-red-800 m-8">  instance :{{Instance}}</div>
  <hr>

    <loading-spinner v-if="isLoading"/>
    <div v-if="isReady">
      <h2 class="bg-red-800">Product :: {{ Product.title }}</h2>
      <div v-for="(option,index) in Options" :key="index">
        <h2 v-text="option.title"/>
        <simple-select
            @change="changedOptionSelector"
            :options="option.option_values"
            label="handle"
        ></simple-select>
      </div>
    </div>
  </div>
</template>
