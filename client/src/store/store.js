import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    works: [],
    exercises: [],
    program: []
  },
  mutations: {
    SET_WORKS (state, works) {
      state.works = works
    },
    SET_EXERCISES (state, exercises){
      state.exercises = exercises
    },
    SET_PROGRAM(state, program){
      state.program = program
    }
  },
  actions: {
    loadWorks({ commit }){
      axios.get("/works")
          .then(res => res.data)
         .then(works => { commit('SET_WORKS', works) })
      },
    loadExercises({ commit }){
      axios.get("/exercise")
            .then(res => res.data)
            .then(exercises => { commit('SET_EXERCISES', exercises) })
    },
    createProgram({ commit }){
      axios.post('/programs')
            .then(res => res.data)
            .then(program => { commit('SET_PROGRAM', program) })
    }
  }
})
