<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--
    <g-svg classes="p-2" path="llama.svg" width="80" color="rebeccapurple" bg_color="orange" border="true"/>
-->

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <slot>
      DEFAULT SLOT CONTENT :(
    </slot>
  </div>
</template>

<script >

import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
export default Vue.extend({
  name: 'App',
  props:{
    hi:{
      default:"not set",
      type:String
    }
  },
  components: {
    HelloWorld
  }
});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
