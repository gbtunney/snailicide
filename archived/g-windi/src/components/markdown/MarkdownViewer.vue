<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const text = ref('```html<template> <v-md-editor v-model="text" height="400px"></v-md-editor> </template>```');

    return {
      text,
    };
  },
};
</script>
