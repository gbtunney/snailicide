<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-faker:internet.uppercase="'email'" ></button>
    <hello-world msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import store from "@/store";
import {gVueConfigPlugin} from "@/plugin";

import Post from '@/models/Posts'
import User from '@/models/Users'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },async mounted(){
    const resp = await  User.create({
      data: { id: 1, name: 'John' }
    })
    console.log("response DATABASE@!!!!!!!!!!!!!", resp);
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
