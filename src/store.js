import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        client: "Suez",
        name: "GetSorted App",
        hoursAllocated: 200,
        hoursUsed: 18
      },
      {
        client: "IPS",
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

  },
  actions: {

  }
})
