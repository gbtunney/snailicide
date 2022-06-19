<script lang="ts">
import {useFakerJS} from '@snailicide/g-patternlab';

const faker = useFakerJS()
const default_props = () => [{
  image_url: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  content: faker.lorem.lines(4),
}, {
  image_url: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  content: faker.lorem.lines(4),
}]

export default {}
</script>
<script lang="ts" setup>
import {toRefs, defineProps, defineComponent, withDefaults, PropType, computed} from 'vue';
//import {Attribute,  BlogArticlesArgs,Maybe, Scalars} from './../types/generated/storefront-types' ;
type TTestimonial = {
  image_url: string,
  name: string,
  content: string,
  cite_url?: string
}[]

const props = defineProps({
  data: {
    type: Array as PropType<TTestimonial>,
    default: default_props()
  }
})
console.log("defaultprops",default_props())
const {data} = toRefs(props)
</script>
<template>
  <ul class="mx-auto w-2/3 grid gap-8 grid-cols-2">
    <li v-for="(testimonial,index) in data" :key="index"
        class="w-full ">
      <blockquote class="flex flex-column">
        <div class="w-1/4 mx-auto">
          <img class="object-contain radius-circle h-auto w-full " :src="testimonial.image_url" :alt="testimonial.name"/>
        </div>
        <p class="mx-8">{{ testimonial.content }}</p>
        <cite v-if="testimonial.cite_url">
          <a :href="testimonial.cite_url" v-text="testimonial.name"/>
        </cite>
        <cite v-else v-text="testimonial.name"/>
      </blockquote>
    </li>
  </ul>
</template>
