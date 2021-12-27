export const tailwindMixin = {

  props: {
    config:{
      default:false,
      type: [Boolean,Object]
    }
  },
  methods:{
    getProperty( nameKey:string|boolean){

    }
  },
  computed:{
    KeyLookup(){
      return {keys} = this.$props.config
    }
  }
}
export default tailwindMixin
