import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    staff: [],
    invoices: [],
    clients: []
  },
  getters: {
    projects: state => state.projects,
    staff: state => state.staff,
    clientInvoices: state => state.invoices,
    clients: state => state.clients
  },
  mutations: {
    updateProjects(state,updatedProjects) {
      state.projects = updatedProjects
    },
    addProject(state, newProject) {
      state.projects.push(newProject)
    },
    updateStaffUtilisation(state,updatedStaff) {
      state.staff = updatedStaff
    },
    updateInvoices(state,updatedInvoices) {
      state.invoices = updatedInvoices
    },
    updateClients(state,updatedClients) {
      state.clients = updatedClients
    }
  }
})
