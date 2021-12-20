<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<example-functional-component width="20  ;" bg_color="yellow"></example-functional-component>
<styled-element width="30" color="blue" bg_color="orange">
  gillililili
</styled-element>    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import styledElement from '@/components/ui/styledElement'
import exampleFunctionalComponent from '@/components/exampleFunctionalComponent.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,styledElement,exampleFunctionalComponent
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
