const country = {
  namespaced: true,

  state: {
    Country: {}
  },
  mutations: {
    SET_PARAM_COUNTRY(state, payload) {
      state.Country = payload;
      console.log(payload);
    }
  },

  actions: {},

  getters: {}
};

export default country;
