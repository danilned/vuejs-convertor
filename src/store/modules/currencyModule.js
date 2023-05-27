export default {
  state: {
    currencies: null,
    selectedCurrency: "USD",
  },
  mutations: {
    updateStateCurrency(state, { field, body }) {
      state[field] = body;
    },
    changeCurrencyValues(state, field) {
      const multiplier = state.currencies[field];

      Object.keys(state.currencies).forEach((cur) => {
        state.currencies[cur] = parseFloat(
          (state.currencies[cur] / multiplier).toFixed(6)
        );
      });
    },
  },
};
