import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {API} from './classes/API.js'

import Default from "./layouts/Default.vue";
import Admin from "./layouts/Admin.vue";
import { async } from 'q';

Vue.component('default-layout',Default);
Vue.component('admin-layout',Admin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: async function () {

    const api = new API()

    const projects = await api.getProjects();
    this.$store.commit('updateProjects',projects);

    api.getClients().then((data) => {
      this.$store.commit('updateClients',data)
    })

    api.getStaffUtilisation().then((data) => {
      this.$store.commit('updateStaffUtilisation',data)
    })
    
    api.getInvoices().then((data) => {
      this.$store.commit('updateInvoices',data)
    })

    // api.getClients().then((data) => {
    //   this.$store.commit('updateClients',data)
    // })

  }
}).$mount('#app')
