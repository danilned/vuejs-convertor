<template>
  <div class="currency-container">
    <transition name="slide-fade" mode="out-in">
      <loader-vue v-if="currencies === null" />
      <div v-else class="d-flex flex-column flex-grow-1">
        <label class="form-label">Select currency</label>
        <div class="currency-select">
          <select-vue
            :options="currenciesArray"
            :value="$store.state.currency.selectedCurrency"
            :input="setCurrency"
            @v-select="setCurrency"
            class="hide-close"
          />
        </div>
        <ul class="list-group">
          <currency-item
            v-for="(value, currency) of currencies"
            :key="currency"
            :currency="currency"
            :value="value"
          />
        </ul>
        <vue-awesome-paginate
          :total-items="currenciesArray.length"
          :items-per-page="10"
          :max-pages-shown="5"
          v-model="currentPage"
        />
      </div>
    </transition>
  </div>
</template>

<script>
// Components
import LoaderVue from "../UI/Loader.vue";
import CurrencyItem from "./CurrencyItem.vue";
import SelectVue from "../UI/SelectVue.vue";

// Vuex
import { mapState } from "vuex";

// Axios instances
import { currencyInstance } from "@/helpers/axiosInstances";

// Constants
import { displayCurrencies } from "@/assets/constants.json";

export default {
  name: "AllCurrencies",
  components: {
    LoaderVue,
    CurrencyItem,
    SelectVue,
  },
  data() {
    return {
      currentPage: 1,
      currenciesArray: [],
    };
  },
  computed: {
    ...mapState({
      selectedCurrency: (state) => state.currency.selectedCurrency,
      currencies(state) {
        if (state.currency.currencies === null) {
          return null;
        }

        this.currenciesArray = Object.keys(state.currency.currencies);

        return this.currenciesArray
          .slice(
            (this.currentPage - 1) * displayCurrencies,
            this.currentPage * displayCurrencies
          )
          .reduce(
            (prev, cur) => ({ ...prev, [cur]: state.currency.currencies[cur] }),
            {}
          );
      },
    }),
  },
  methods: {
    setCurrency(value) {
      this.$store.commit("changeCurrencyValues", value);

      this.$store.commit("updateStateCurrency", {
        field: "selectedCurrency",
        body: value,
      });
    },
  },
  async mounted() {
    try {
      const { data } = await currencyInstance.get();

      this.$store.commit("updateStateCurrency", {
        field: "currencies",
        body: data.data,
      });
    } catch (error) {
      this.$store.commit("pushError", error.response?.data);
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/currencies.scss";
</style>
