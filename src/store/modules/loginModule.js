export default {
  state: {
    user: null,
  },
  mutations: {
    updateStateLogin(state, { field, body }) {
      state[field] = body;
    },
  },
};
