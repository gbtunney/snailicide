<template>
  <div id="app">
    <h2 v-tw='[{"variant":false,"type":"root","selector":"*","classes":[".bg-accent-primary-dk text-2xl text-accent-secondary-dk"],"limit":false,"operation":"add"},{"variant":"hover","type":"root","selector":"*","classes":[".bg-accent-secondary-lt"],"limit":false,"operation":"add"}]'>Test element ello!!!!!</h2>
    <styled-element-grid v-tw='[{"variant":false,"type":"root","selector":"*","classes":[".bg-accent-primary-dk text-2xl text-accent-secondary-dk"],"limit":false,"operation":"add"},{"variant":"hover","type":"root","selector":"*","classes":[".bg-accent-secondary-lt"],"limit":false,"operation":"add"}]' column_count="8">
      <styled-background-line >giklllllll</styled-background-line>
    </styled-element-grid>
    <g-kabob color="yellow" align="center" bg_color="red" width="300" border="true" height="90">i am a kabob</g-kabob>
    <g-svg
        path="leaves-a.svg" width="80"
        color="rebeccapurple"
        :classes="'p-4   w-full '" bg_color="orange"
        wrapper-el="div" border="true"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gSvg from './components/ui/gSvg.vue'
import {StyledBackgroundLine} from './components/ui/styledElement.vue'
import gKabob from './components/ui/gKabob.vue'
import {StyledGrid} from './components/ui/styledElement.vue'
import {vTW} from './directives'

Vue.component('styled-element-grid', StyledGrid);
import chroma from "chroma-js";
Vue.directive("tw",vTW)
////v-tw='[{"variant":false,"type":"root","selector":"*","classes":[".bg-accent-primary-dk"],"limit":false,"operation":"add"},{"variant":"hover","type":"root","selector":"*","classes":[".bg-accent-secondary-lt"],"limit":false,"operation":"add"}]'

//const f=chroma.scale('Spectral');
//const f=chroma.scale(['yellow', 'red', 'green']);
//classes(5)
const f = chroma.scale(['yellow', 'red', 'green']).classes(8)
//console.warn("color",chroma.scale('OrRd').classes(2)(1))
export default Vue.extend({
  name: 'App',
  components: {
    gSvg,
    StyledBackgroundLine,
    gKabob
  }, methods: {
    getColor(value) {
      return f(value).hex()
    }
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

/* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
