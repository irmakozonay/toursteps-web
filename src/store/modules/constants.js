import axios from 'axios'

export default {
  namespaced: true,
  state: {
    constantData: {}
  },
  getters: {
    constantData: state => state.constantData
  },
  actions: {
    async getConstantData ({commit}) {
      const result = await axios.get('/constantdata/all?lang=en')
      commit('SET_CONSTANT_DATA', result.data)
    }
  },
  mutations: {
    SET_CONSTANT_DATA (state, constantData) {
      state.constantData = constantData
    }
  }
}
