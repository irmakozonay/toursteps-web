import Vue from 'vue'
import Vuex from 'vuex'
import trips from '@/components/modules/home/store'
import trip from '@/components/modules/trip/store'
import constants from './modules/constants'
import auth from '@/components/modules/auth/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    trips,
    trip,
    constants,
    auth
  }
})
