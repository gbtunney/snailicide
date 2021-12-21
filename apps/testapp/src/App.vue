<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <g-kabob color="red">fffdsfdfddfd</g-kabob>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import {cleanIntegerType} from "@snailicide/g-library"
import patternlab from "@snailicide/g-patternlab"

const {gKabob}  = patternlab
//console.log("jkjkjk",patternlab)



export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,gKabob
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
