<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <gKabob path="divider.svg"
        width="100%"
        height="20"
        bg_color="red"
        color="yellow"
        :hr="true"/>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {gKabob} from "@snailicide/g-patternlab"

export default Vue.extend({
  name: 'Home',
  components: {gKabob,
    HelloWorld,
  },
});
</script>
