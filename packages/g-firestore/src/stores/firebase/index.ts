import {defineStore} from 'pinia'
import {initializeApp, FirebaseApp} from 'firebase/app';
import {
    createUserWithEmailAndPassword, signInWithCredential,signOut,
    getAuth, User, UserProfile, UserCredential, signInWithEmailAndPassword, AuthError, AuthErrorCodes
} from "@firebase/auth";
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {FirebaseOptions} from "@firebase/app";
import {FirebaseError} from "@firebase/app";

interface IErrorCodeHelper {
    isFound: (code_value: symbol | string) => boolean;
    getValues: (code_value: symbol | string) => any;
}

const ErrorCodeHelper: IErrorCodeHelper = {
    getValues: (code_value) => {
        return Object.entries(AuthErrorCodes)
            .find(([key, value]) => (code_value === value || code_value === key))
    },
    isFound: (code_value: symbol | string): boolean => {
        return (Object.entries(AuthErrorCodes)
            .findIndex(([key, value]) => (code_value === value || code_value === key)) !== -1)
    }
}

interface IfirebaseState {
    app?: FirebaseApp | undefined
    user?: User | undefined
    error?: [string]
}

export const firebaseStore = defineStore('firebase', {
    state: (): IfirebaseState => ({
        /** @type {{ text: string, id: number, isFinished: boolean }[]} */
        app: undefined,
        user: undefined,//getAuth().currentUser
        error: undefined
    }),
    getters: {
        IsUserLoggedIn: state => (state.user),
    },
    actions: {
        initialize(payload: FirebaseOptions) {
            this.app = initializeApp(payload);
            const setUserFunc = this.setUser

            getAuth().onAuthStateChanged(function (user, store = this) {
                //store.user = ( user )? user:undefined
                setUserFunc(( user )? user:undefined)
               // console.log("onAuthStateChanged", callbackFunc())

                //userCred.user;
            });
            // console.log("tring to init",payload ,this.user)
            // console.log("tring to init",payload ,this.user)
            //   this.createUserWithEmailAndPassword("gildgggddssssjjkjjksddddiilili@mac.com","mypass")
        },
        async loginUser(email: string, password: string) {
            console.log("attemping login !!", email, password)
            const result = signInWithEmailAndPassword(getAuth(), email, password)
                .then((userCred:UserCredential): asserts userCred is UserCredential => {
                    debugger;
                    const user: User = userCred.user;
                    this.user = ( user ) ? user:undefined
                    if  (user)  this.error =undefined

                    //const signIn =  this.signInWithEmailAndPassword(userCred.user.email,userCred.user. )

                })
                .catch((err): asserts err is  AuthError => {
                    if (!(err instanceof FirebaseError)) {
                        throw new Error("not firebbase")
                    }
                    this.firebaseAuthError(err);
                })
        },
        async logoutUser( ){
         const resp=  await signOut(getAuth())
            console.log("LOGGED OUT!!!!!",resp )
            this.setUser(undefined)
        },
        //subscribe to this action i guess.
        firebaseAuthError(err: AuthError | false | undefined, resetUser = true) {
            if (err && R.has("code", err)) {
                this.error = ErrorCodeHelper.getValues(err.code)
            }
            if (resetUser) this.user = undefined
        },
        setUser(user:User|undefined){
            console.log("Setting userr", user,this.user);
            this.user =  user
        },
         createUserWithEmailAndPassword(email?: string, password?: string) {
            console.log("TRYING TO REGGG", email,password);

         //   if (RA.isUndefined(email) || RA.isUndefined(password)) throw new Error("not firebase error. "); return;
            const prom: Promise<UserCredential> = createUserWithEmailAndPassword(getAuth(), email, password)
            prom.then(async (userCred) => {
              debugger;
                const user: User = userCred.user;
                 this.user = ( user ) ? user:undefined
               if  (user)  this.error =undefined
                //  this.loginUser
                console.log(user,"SUCCESS!!!!!!!!!!!!", this.user ,this.error);
// /AuthError
//AuthErrorCodes
                //localStorage.setItem("firebaseToken", user.uid);
                // store.user = user.uid;
                // const userProfile = new Profile(user.uid, userDetails.name, userDetails.email, "", []);
                //await createUserProfile(userProfile);
                // router.push({ name: "Home" });
            })
                .catch((err): asserts err is FirebaseError => {
                    debugger;

                    if (!(err instanceof FirebaseError)) {
                        throw new Error("not firebbase")
                    }
                    this.firebaseAuthError(err);
                })
             console.log("DOOOOO");

         }
    },
})


export default firebaseStore
