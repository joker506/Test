const user = {
  namespaced: true,

  state: {
    userParam: {}
  },
  mutations: {
    SET_PARAM_USER(state, payload) {
      state.userParam = payload;
      console.log(payload);
    }
  },

  actions: {},

  getters: {}
};
export default user;
