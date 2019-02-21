import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  getters: {
    projects: state => state.projects
  },
  mutations: {
    updateProjects(state,updatedProjects) {
      state.projects = updatedProjects
    }
  },
  actions: {

  }
})
