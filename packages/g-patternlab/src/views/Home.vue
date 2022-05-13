<template>
  <div class="home text-xl text-yellow-500">
    <p>This chapter isn’t just about the mechanics of adding web fonts to
      your site or the CSS properties to move your text around. We’ll also
      explain how to properly leverage all these tools to make beautiful,
      professional websites. By the end of the chapter, you should not only
      know what your designer is talking about when they say something like,
      “Can we increase the leading of that paragraph?”, but also
      understand <em>why</em> they want you to increase it.</p>
    <g-kabob class="w-full text-brandGrey" path="//cdn.shopify.com/s/files/1/0084/4044/7094/t/34/assets/divider.svg?v=299449771904712161651528282">ELLO THRRE</g-kabob>


    <gIconify :inline="true" path="mdi:home" class="text-2xl text-red-600 bg-red-200 "></gIconify>
    <hr>
    <g-kabob
        class="h-[200px] w-full text-purple-100 text-6xl" bg="purple-800" path="ri:add-box-fill"></g-kabob>
    <hr>
    <gIconify :inline="true" path="leaves-a.svg" class="text-2xl text-opacity-50"></gIconify>
    <hr>
    <gIconify :inline="false" icon_set="ri" path="album-line" class="w-1/8"></gIconify>
    <hr>
    <gIconify :inline="true" :center="true" style="font-size: 64px;" path="ri:add-box-fill" class="w-1/8  text-opacity-50  bg-red-200"></gIconify>

  </div>
</template>
<script lang="ts">
import {
  defineComponent
} from 'vue';
import {Icon} from '@iconify/vue';

import {gKabob,gIconify,InlineSvg,CodeBlock} from "./../components";

export default defineComponent({
  name: 'Home',
  data: function () {
    return {
      text_group: [],
      lang: "html", InlineSvg,
    }
  },

  components: {
    CodeBlock, gIconify, Icon, gKabob
  },
});
</script>
