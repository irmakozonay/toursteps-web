// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
axios.defaults.baseURL = 'http://localhost:8181'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')

Vue.filter('formatDate', function (value, format) {
  if (value) {
    return moment(String(value)).format(format)
  }
})
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.use(VueAnalytics, {
  id: 'UA-60757376-4',
  router
})
// bu hepsinden once olmak zorunda degil routerda methodlara da konabilirdi ama ben simdilik buraya koydum
router.beforeEach((to, from, next) => {
  store.dispatch('auth/autoLogin')
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
