<template>
  <div class="Home">
    <h1>Home</h1>
    <Login></Login>
      <img alt="Vue logo" src="@/assets/logo.png">

  </div>
</template>
<script>
import Login from "./../components/Login.vue"

export default {
  name: "Home",
  components: {Login},
  data: function () {
    return {}
  },
  props: {}
}
</script>
