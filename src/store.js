import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    staff: []
  },
  getters: {
    projects: state => state.projects,
    staff: state => state.staff
  },
  mutations: {
    updateProjects(state,updatedProjects) {
      state.projects = updatedProjects
    },
    updateStaffUtilisation(state,updatedStaff) {
      state.staff = updatedStaff
    }
  },
  actions: {

  }
})
