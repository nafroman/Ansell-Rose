import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from './router'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    forSale:[
      /*{id:"l2dCO" ,title:"Level 2 Diploma in Construction Operations", value:2222},
      {id:"l2dTO" ,title:"Level 2 NVQ Diploma in Trowel Occupations", value:3332},
      {id:"l2dWO", title:"Level 2 NVQ Diploma in Wood Occupations", value:1232},
      {id:"Extra", title:"Level 2 NVQ Diploma in Trowel Occupations", value:5552},*/
    ],
    inCart:[],
    user:null,
    status:null,
    error: null,
    roles: null,
    logged: null,
  },
  getters:{
    inCart: state => state.inCart,
    forSale: state => state.forSale,
    status(state){
      return state.status
    },
    user(state){
      return state.user
    },
    logged(state){
      return state.logged
    },
    error(state){
      return state.error
    },
    roles(state){
      return state.roles
    }
  },
  mutations: {
    setSale(state,val){
      if(val){
        state.forSale = val
      } else{
        state.forSale = []
      }
    },
    setRoles(state, val) {
      if (val) {
          state.list = val
      } else {
          state.list = []
      }
    },
    setLogged(state, payload){
      state.logged = payload
    },
    setUser(state, payload){
      state.user = payload
    },
    removeUser(state){
      state.user = null
    },
    setStatus(state, payload){
      state.status = payload
    },
    setError(state, payload){
      state.error = payload
    },
    setRoles(state, payload){
      state.roles = payload
    },
    ADD_TO_CART(state, itemId) { state.inCart.push(itemId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1)}
  },
  actions: {
    addToCart(context, itemId){ context.commit('ADD_TO_CART',itemId)},
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index)},
    signUpAction({commit},payload){
      commit('setStatus', 'loading')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response)=>{
        alert('success')
        commit('setUser', response.user.uid)
        commit('setStatus','success')
        commit('setError', null)
      })
      .catch((error)=>{
        commit('setStatus','failure')
        commit('setError', error.message)
      })
    },
    signInAction({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((response)=>{
        commit('setUser', response.user.uid)
        commit('setStatus', 'success')
        commit('setRoles', payload.roles)
        commit('setError', null)
        commit('setLogged', true)
        router.push('/MyCourses')
      })
      .catch((error)=>{
        commit('setStatus','failure')
        commit('setError', error.message)
      })
    },
    signOutAction({commit}){
      firebase.auth().signOut()
      .then((response) => {
        commit('setUser', null)
        commit('setLogged', false)
        commit('setStatus', 'success')
        commit('setError', null)
        router.push('/Login')
      })
      .catch((error) => {
        //alert(error)
        commit('setStatus', 'failure')
        commit('setError', error.message)
      })
    }
  }
})
