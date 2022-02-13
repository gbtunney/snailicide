<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/signup">Signup</router-link>
      <router-link to="/login">login</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'App'
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
