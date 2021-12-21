<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="bg-red-500" v-faker:internet.uppercase="'email'" ></button>

  </div>
</template>

<script >
// <button v-faker:internet.uppercase="'email'" ></button>
import Vue from 'vue';

import vFaker from './../directives/directiveFaker'
Vue.directive('faker',vFaker)

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<docs lang="md">
This button is amazing, use it responsibly.
## Examples

hello-world:

```jsx
<hello-world >=</hello-world>
```

</docs>

