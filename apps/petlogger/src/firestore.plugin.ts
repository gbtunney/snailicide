
//import VueFire from 'vuefire'
//import firebase from 'firebase/app'
//import 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Get a Firestore instance

import _Vue, {PluginObject} from "vue";
import {registerGlobalVariable} from "@snailicide/g-library";
//Vue.use(VueFire)

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


/*firebase.initializeApp(FIREBASE_CONFIG/*{
    apiKey: 'AIzaSyD3dxdxD3Wux-XUj_aaFF5tmVeyQtnelM4',
    authDomain: 'vue-app-7f475.firebaseapp.com',
    databaseURL: 'https://vue-app-7f475.firebaseio.com',
    projectId: 'vue-app-7f475',
    storageBucket: 'vue-app-7f475.appspot.com',
    messagingSenderId: '326758384574'
})*/


export const FirestorePlugin: PluginObject<any> = {
    install(Vue: typeof _Vue, options?: any) {
        /*if (typeof options === "undefined") {

        }*/
        const db = firebase
            .initializeApp(FIREBASE_CONFIG)

        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
            this.$router.replace('/comics')
        }).catch((err) => {
            alert(err.message)
        })


        /// const db = firebase.firestore()
       registerGlobalVariable('firebase', firebase)
        console.log("firebase is----- ", firebase)
        registerGlobalVariable('firedb', db)
        console.log("firebase is----- ", Vue.prototype.firebase)

    },
};
export default FirestorePlugin
