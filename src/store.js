import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    staff: [],
    invoices: [],
    happiness: []
  },
  getters: {
    projects: state => state.projects,
    staff: state => state.staff,
    clientInvoices: state => state.invoices,
    happiness: state => state.happiness
  },
  mutations: {
    updateProjects(state,updatedProjects) {
      state.projects = updatedProjects
    },
    updateStaffUtilisation(state,updatedStaff) {
      state.staff = updatedStaff
    },
    updateInvoices(state,updatedInvoices) {
      state.invoices = updatedInvoices
    },
    updateHappiness(state, updatedHappiness) {
      state.happiness = updatedHappiness
    }
  },
  actions: {

  }
})
