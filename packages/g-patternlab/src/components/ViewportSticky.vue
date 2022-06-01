<script lang="ts" setup>
import {toRefs, ref, defineProps, withDefaults, computed} from 'vue';
import {templateRef, useIntersectionObserver} from '@vueuse/core'
interface IProps {
  target_a?: string,
  target_b?: string,
  target_sticky?:string
}

const props = withDefaults(defineProps<IProps>(), {
  target_a: undefined,
  target_b: undefined,
  target_sticky: undefined
})

const targetA = computed( ()=>{
  return ( props.target_a ) ? document.getElementById(props.target_a) : undefined
} )//templateRef(props.target_a)

const targetB = computed( ()=>{
  return ( props.target_b ) ? document.getElementById(props.target_b):undefined
} )//templateRef('target_a')

const toggleSticky =()=>{
  const stickEl = ( props.target_sticky ) ? document.getElementById(props.target_sticky) : undefined
  if ( stickEl ){
    if (  ( targetAVisible.value ===false && targetBVisible.value ===true) ||  ( targetAVisible.value ===true && targetBVisible.value ===false)   ){
    stickEl.classList.add( 'stick-top' )
  }else{
      stickEl.classList.remove( 'stick-top' )
    }
  }
 // console.log("stick ek  ", stickEl)
  //stickEl.classList.remove( 'stick-top' )

  // div.classList.remove("foo");
//  div.classList.add("anotherclass");
}
const target = templateRef('target')

const targetAVisible = ref(false)
const targetBVisible = ref(false)

const {stop} = useIntersectionObserver(
    targetA.value,
    ([entries], observerElement) => {
      targetAVisible.value = !( entries.isIntersecting === false && entries.boundingClientRect.top < 0 )
      console.log("intersectinggg", entries.isIntersecting,entries.boundingClientRect.top)
      toggleSticky();
    },
)
const {stop:stop_b} = useIntersectionObserver(
    targetB.value,
    ([entries], observerElement) => {
      targetBVisible.value = !( entries.isIntersecting === true && entries.boundingClientRect.top > 0 )
      console.log("intersectinggg BBBB",  entries.isIntersecting,entries.boundingClientRect.top)

      toggleSticky();
    },
)
</script>
<template>
  <div class="ViewportSticky">
    <div>Target A Visible: {{ targetAVisible }}</div>
    <div>Target B Visible: {{ targetBVisible }}</div>
  </div>
</template>

<style lang="scss" >

.stick-top{
  //position:fixed;
  //top:0;

 // border:5px solid red;
//'fixed bottom-0 right-0 border-4 border-solid border-red-500'
}
.root {
  border: 2px dashed #ccc;
  height: 200px;
  margin: 0 2rem 1rem;
  overflow-y: scroll;
}
.notice {
  text-align: center;
  padding: 2em 0;
  margin-bottom: 300px;
  font-style: italic;
  font-size: 1.2rem;
  opacity: 0.8;
}
.target {
  border: 2px dashed var(--c-brand);
  padding: 10px;
  max-height: 150px;
  margin: 0 2rem 1rem;
  margin-bottom: 400px;
}
</style>
