import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {API} from './Classes/API.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: function () {
    // console.log("mounted")

    const api = new API()
    api.getProjects().then((data) => {
      console.log("data is "+data)
      this.$store.commit('updateProjects',data)
    })
    

  }
}).$mount('#app')
