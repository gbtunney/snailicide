import firebase from 'firebase';

const state = {
    user: false
};

const getters = {
    User: state => {
        return state.user;
    },
};


const actions = {
    login({ commit, state }, { email, password }) {



        return new Promise((resolve, reject) => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(function() {
                    // Existing and future Auth states are now persisted in the current
                    // session only. Closing the window would clear any existing state even
                    // if a user forgets to sign out.
                    // ...
                    // New sign-in will be persisted with session persistence.
                    return  firebase.auth().signInWithEmailAndPassword(email, password)
                        .then((user) => {
                            resolve(user);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                })
                .catch(function(error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });


        });
    },
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut()
                .then(() => {
                    commit('LOGOUT');
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    checkUserStatus({ commit, state }) {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user ) {
                    commit('SET_USER',  user);
                    resolve( user);
                } else {
                    reject('User is not logged in.');
                }
            });
        });
    },
};

const mutations = {
    LOGOUT(state, user) {
        state.user = false;
    },
    SET_USER(state, user) {
        console.log(firebase.auth());
        state.user= user;

    },
};

export default {
    getters,
    state,
    actions,
    mutations,
};