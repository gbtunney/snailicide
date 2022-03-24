<template>
  <div class="newProductProvider">
    I AM A TEST COMPONENT@@@ {{$data.message}}
  </div>
</template>
<script lang="ts">
    import { ref,computed, defineComponent,PropType,Ref ,SetupContext,Prop,defineProps ,defineEmits,withDefaults} from 'vue';
    export default defineComponent({
      name:"i am a component",
      data:()=>{message:"i am gillian"}
    })
</script>
