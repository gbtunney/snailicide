<template>
  <div class="LOGIN">
    <h3>LOGIN</h3>
    <div v-if="firebase.IsUserLoggedIn"><span>Welcome back {{firebase.user.email}}</span>}} |<button @click="firebase.logoutUser" >logout</button></div>
    <div   class="loginForm"  v-if="!firebase.IsUserLoggedIn">
      <input type="text"
          label="Email"
          v-model="email"
          placeholder="Email address"
          required />
      <input
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          v-model="password"
          @click:append="showPassword = !showPassword"
      />
      <button @click="showPassword = !showPassword">show</button>
      <hr>
      <button @click="loginUser( email, password )" >LOGIN  @@@@@@@@@</button>
      <div v-if="firebase.error" style="border: 2px solid red">{{ firebase.error }}</div>
    </div>
    <router-link to="/signup">Register</router-link>
    <button class="button">
      <router-link to="/login">
        Back
      </router-link>
    </button>
  </div>
</template>
<script lang="ts">
import { mapStores,mapActions ,mapWritableState,mapState,PiniaVuePlugin} from 'pinia'
import {defineComponent, ref, Ref,computed, reactive, onMounted,toRefs } from '@vue/composition-api'

import firebaseStore from "@/stores/firebase";

export default defineComponent({
  methods:{
    ...mapActions(firebaseStore, ['loginUser']),
    testing2(){
      alert()
    }
  },
  data () {
    return {
      /*   email: '',
         password: ''*/
    }
  },
  setup() {
    const email =  ref("");
    const password =  ref("");

    const firebase = firebaseStore()
    const showPassword :Ref<boolean> = ref(false)
    return {
      email,
      firebase,
      password,
      showPassword
    };
  },
});
/*signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        this.$router.replace('/login')
      }).catch((err) => {
        alert(err.message)
      });
    }*/
</script>
