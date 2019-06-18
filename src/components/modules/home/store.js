import axios from 'axios'

export default {
  namespaced: true,
  state: {
    trips: []
  },
  getters: {
    trips: state => state.trips
  },
  actions: {
    async getHome ({commit}) {
      const result = await axios.get('/trip/mainpage?page=0')
      commit('SET_TRIPS', result.data)
    }
  },
  mutations: {
    SET_TRIPS (state, trips) {
      state.trips = trips
    }
  }
}
