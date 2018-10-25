import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    works: []
  },
  mutations: {
    SET_WORKS (state, works) {
      state.works = works
    }
  },
  actions: {
    loadWorks({ commit }){
      axios.get("http://localhost:3001/works")
          .then(res => res.data)
         .then(works => {
          commit('SET_WORKS', works)
          })
      } 
  }
})
