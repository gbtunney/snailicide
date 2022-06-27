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
import {toRefs,ref, defineProps, defineComponent, withDefaults, PropType, computed} from 'vue';
//import {Attribute,  BlogArticlesArgs,Maybe, Scalars} from './../types/generated/storefront-types' ;
type TTestimonial = {
  image_url: string,
  name: string,
  content: string,
  cite_url?: string
}[]

const props = defineProps({
  data: {
    type: String as PropType<string>,//Array as PropType<TTestimonial>,
    default:JSON.stringify( default_props())
  }
})
//const {data} = toRefs(props)
const myData = ref(JSON.parse(props.data as string) )
console.log("defaultprops",JSON.parse(props.data as string))

</script>
<template>
  <ul class="mx-auto w-2/3 grid gap-8 grid-cols-2">
    <li v-for="(testimonial,index) in myData" :key="index"
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
