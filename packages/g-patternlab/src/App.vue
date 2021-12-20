<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <g-svg width="80" color="rebeccapurple" bg_color="orange" wrapper-el="div" border="true">
      <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Simple rectangle -->
        <rect width="100" height="100"/>

        <!-- Rounded corner rectangle -->
        <rect x="120" width="100" height="100" rx="15"/>
      </svg>
    </g-svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gSvg from '@/components/ui/gSvg.vue'

export default Vue.extend({
  name: 'App',
  components: {
    gSvg
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
