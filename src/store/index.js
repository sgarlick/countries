import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'
import router from '../router/index';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    status: null,
    error: null
  },
  getters: {

    status (state) {
      return state.status
    },

    user (state) {
      return state.user
    },

    error (state) {
      return state.error
    }
  },
  mutations: {

    setUser (state, payload) {
      state.user = payload
    },

    removeUser (state) {
      state.user = null
    },

    setStatus (state, payload) {
      state.status = payload
    },

    setError (state, payload) {
      state.error = payload
    }

  },
  actions: {
    signUpAction ({ commit }, payload) {
        commit('setStatus', 'loading')
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then((response) => {
            console.log(response)
            commit('setUser', response.user.uid)
            commit('setStatus', 'success')
            commit('setError', null)
          })
          .catch((error) => {
            commit('setStatus', 'failure')
            commit('setError', error.message)
            alert(error.message)
            router.push('/register')
          })
      },
  
      signInAction ({ commit }, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then((response) => {
            commit('setUser', response.user.uid)
            commit('setStatus', 'success')
            commit('setError', null)
            router.push('/results')
          })
          .catch((error) => {
            commit('setStatus', 'failure')
            commit('setError', error.message)
            alert(error.message)
            console.log(error.message)
          })
      },
    signOutAction ({ commit }) {
        firebase.auth().signOut()
          .then(() => {
            commit('setUser', null)
            commit('setStatus', 'success')
            commit('setError', null)
          })
          .catch((error) => {
            commit('setStatus', 'failure')
            commit('setError', error.message)
            router.push('/')
          })
      }
    },
    }
    );