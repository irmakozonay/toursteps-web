import Vue from 'vue'
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    trip: null
  },
  getters: {
    trip: state => state.trip
  },
  actions: {
    async getTrip ({commit}, tripId) {
      const result = await axios.get('/trip/info?tripid=' + tripId)
      commit('SET_TRIP', result.data)
    },
    async getAdditionalInfo ({commit}, tripId) {
      const result = await axios.get('trip/additionalinfo?tripid=' + tripId)
      commit('SET_ADDITIONAL_INFO', result.data)
    },
    async getBudget ({commit}, tripId) {
      const result = await axios.get('trip/budget?tripid=' + tripId)
      commit('SET_BUDGET', result.data)
    },
    async getAccommodations ({commit}, tripId) {
      const result = await axios.get('trip/accommodations?tripid=' + tripId)
      commit('SET_ACCOMMODATIONS', result.data)
    },
    async getTripDay ({commit}, {tripId, day}) {
      const result = await axios.get('trip/day?tripid=' + tripId + '&day=' + day)
      commit('SET_TRIP_DAY', result.data)
    }
  },
  mutations: {
    SET_TRIP (state, trip) {
      state.trip = trip
    },
    SET_ADDITIONAL_INFO (state, additionalInfo) {
      state.trip.additionalInfo = additionalInfo
    },
    SET_BUDGET (state, budget) {
      state.trip.budget = budget
    },
    SET_ACCOMMODATIONS (state, accommodations) {
      state.trip.accommodations = accommodations
    },
    SET_TRIP_DAY (state, tripDay) {
      if (state.trip.itinerary == null) {
        state.trip.itinerary = {}
      }
      console.log('day received: ' + tripDay.day)
      Vue.set(state.trip.itinerary, tripDay.day, tripDay)
    }
  }
}
