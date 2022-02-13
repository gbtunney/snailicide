<template>
  <div class="sign-up">

    <h3>Create a new account</h3>

    <div>
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
      <button @click="createUserWithEmailAndPassword( email, password )" >SUBMIT</button>
      <hr>

      <div v-if="firebase.error" style="border: 2px solid red">{{ firebase.error }}</div>


      <button class="button">
        <router-link to="/login">
          LOGINP
        </router-link>
      </button>
    </div>
  </div>
</template>


<script lang="ts">
//import { defineComponent, ref } from "vue";

import { mapStores,mapActions ,mapWritableState,mapState,PiniaVuePlugin} from 'pinia'
import {defineComponent, ref, Ref,computed, reactive, onMounted,toRefs } from '@vue/composition-api'

import firebaseStore from "@/stores/firebase";

export default defineComponent({
  methods:{
    ...mapActions(firebaseStore, ['createUserWithEmailAndPassword']),
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
