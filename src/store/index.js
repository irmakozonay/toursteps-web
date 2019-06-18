import Vue from 'vue'
import Vuex from 'vuex'
import trips from '@/components/modules/home/store'
import trip from '@/components/modules/trip/store'
import constants from './modules/constants'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    trips,
    trip,
    constants
  }
})
