<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <styled-element bg_color="green" color="red">HEADINF 1</styled-element>
    <styled-element-svg bg_color="blue" color="pink" border="true"  :border_size="4">HEADINF 1
      <g-svg path="leaves-a.svg" width="80" color="red"  :classes="'gbt'" wrapper-el="div" />
    </styled-element-svg>
    <g-kabob path="leaves-a.svg"
        classes="p-4 w-full gsvg"
        height="20" color="red" bg_color="yellow" border="red"
        :hr="false"
    ><h2 class="font-style-sm-caps">I am gillian</h2>
    </g-kabob>
    <g-svg path="leaves-a.svg" width="80" color="rebeccapurple" :classes="'gbt'" bg_color="orange" wrapper-el="div" border="true"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gSvg from '@/components/ui/gSvg.vue'
import gKabob from '@/components/ui/gKabob.vue'
import styledElement,{StyledElementSvg} from '@/components/ui/styledElement.js'
export default Vue.extend({
  name: 'App',
  components: {
    gSvg,
    gKabob,
    StyledElementSvg,
    styledElement
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
