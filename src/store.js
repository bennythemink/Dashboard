import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        code: 1,
        client: "Suez STORE",
        name: "GetSorted App",
        hoursAllocated: 200,
        hoursUsed: 18
      },
      {
        code: 2,
        client: "IPS STORE",
        name: "Website",
        hoursAllocated: 100,
        hoursUsed: 90
      }
    ]
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
