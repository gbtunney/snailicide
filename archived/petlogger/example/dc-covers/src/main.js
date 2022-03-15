// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAXt7jXQdKFnnAHSpPGuB4ps4G6LU0QDbc",
  authDomain: "gbt-petlogger.firebaseapp.com",
  databaseURL: "https://gbt-petlogger.firebaseio.com",
  projectId: "gbt-petlogger",
  storageBucket: "gbt-petlogger.appspot.com",
  messagingSenderId: "1072319100961",
  appId: "1:1072319100961:web:568af813e56f3293bd0b60",
  measurementId: "G-54ZR5QWJ7F"
};


firebase.initializeApp({
  apiKey: 'AIzaSyD3dxdxD3Wux-XUj_aaFF5tmVeyQtnelM4',
  authDomain: 'vue-app-7f475.firebaseapp.com',
  databaseURL: 'https://vue-app-7f475.firebaseio.com',
  projectId: 'vue-app-7f475',
  storageBucket: 'vue-app-7f475.appspot.com',
  messagingSenderId: '326758384574'
})

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
