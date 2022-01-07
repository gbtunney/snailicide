<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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

<script >
import Vue from 'vue';
import PluginPatternlab from "@snailicide/g-patternlab"
Vue.use(PluginPatternlab)
import ProductProvider from './../components/dataProvider/ProductProvider.vue';
export default Vue.extend({
  name: 'Home',
  components: {
  },
});
</script>
