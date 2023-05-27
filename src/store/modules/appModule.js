export default {
  state: {
    errors: [],
  },
  getters: {
    getErrors(state) {
      return state.errors.slice(0, 3);
    },
  },
  mutations: {
    updateStateApp(state, { field, body }) {
      state[field] = body;
    },
    removeError(state) {
      state.errors.shift();
    },
    pushError(state, error) {
      state.errors.push({ body: error, key: Date.now() });
    },
  },
};
