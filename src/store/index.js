import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users : [],
    user : []
  },
  getters: {
    usuarios : state => state.users,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    addUser(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    createUser({ commit },user) {
      return new Promise((resolve, reject) => {
          axios.post('http://homestead.test/api/usuario',
          {
            name: user.name,
            email: user.email,
            password: user.password,
          }, { method: 'POST' })
          .then(resp => {
            console.log(resp.data)
            commit('addUser', resp.data)
            resolve(resp)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getUsers({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://homestead.test/api/usuario', method: 'GET' })
          .then(resp => {
            console.log(resp.data)
            commit('setUsers', resp.data)
            resolve(resp)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteUser({ commit },id) {
      /*console.log(item)
      return*/
      return new Promise((resolve, reject) => {
        axios({ url: 'http://homestead.test/api/usuario/'+id, method: 'DELETE' })
          .then(resp => {
            resolve(resp.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  },
  modules: {
  }
})
