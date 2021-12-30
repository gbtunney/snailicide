<template>
  <div>
    <slot />

    <ul>
      <li
        v-for="(value, key) in shopifyData"
        :key="key"
      >
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import {replaceCharacters} from "@snailicide/g-library"
console.log("here",replaceCharacters("._.str!n_g_", ["!"]))
export default {
  props: {
    shopifyData: {
      type: Object,
      required: true
    }
  }
}
</script>
