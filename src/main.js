import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {API} from './classes/API.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: function () {

    const api = new API()

    api.getProjects().then((data) => {
      this.$store.commit('updateProjects',data)
    })

    api.getStaffUtilisation().then((data) => {
      this.$store.commit('updateStaffUtilisation',data)
    })
    
    api.getInvoices().then((data) => {
      this.$store.commit('updateInvoices',data)
    })

    api.getHappiness().then((data) => {
      this.$store.commit('updateHappiness',data)
    })

  }
}).$mount('#app')
