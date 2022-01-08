<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <!--    <DocProductProvider></DocProductProvider>-->
    <ProductInstanceProvider :handle="'balance'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="8">
      <div slot-scope="{Instance,ID}">
        {{ ID }}
      </div>
    </ProductInstanceProvider>
    <ProductInstanceProvider :handle="'balance'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="8">
      <div slot-scope="{Instance,ID}">

        {{ ID }}
      </div>
    </ProductInstanceProvider>
    <ProductInstanceProvider :handle="'balance'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="8">
      <div slot-scope="{Instance,ID}">

        {{ ID }}
      </div>
    </ProductInstanceProvider>
    <!--
        <gKabob path="divider.svg"
            width="100%"
            height="20"
            bg_color="red"
            color="yellow"
            :hr="true"/>
    -->

  </div>
</template>
<script>
import Vue from 'vue';
import PluginPatternlab from "@snailicide/g-patternlab"

Vue.use(PluginPatternlab)
import ProductProvider from './../components/dataProvider/ProductProvider.vue';
import ProductInstanceProvider from './../components/dataProvider/ProductInstanceProvider.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    ProductInstanceProvider,
  },
});
</script>
