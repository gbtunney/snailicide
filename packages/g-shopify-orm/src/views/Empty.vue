<template>
  <div class="Empty">
    <h1>Emoty</h1>
  </div>
</template>

<script>

export default {
  name: "Empty",
  components: {},
  data: function () {
    return {}
  },
 async  mounted(){
   // const result = await this.$store.set("global/asset_url","i am gilllilililililil")


    console.log("---------------thhe store is!!!", this.$store)

  },
  props: {}
}
</script>
