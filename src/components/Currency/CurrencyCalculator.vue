<template>
  <div class="currency-calculator">
    <div class="from">
      <input
        v-model.number="fromInput"
        placeholder="Type ammount"
        class="form-control"
        type="number"
      />
      <select-vue
        :options="Object.keys(currencies)"
        :value="fromCurrency"
        @v-select="(value) => (fromCurrency = value)"
        class="hide-close"
      />
    </div>
    <div class="to">
      <input :value="toInput" disabled class="form-control" />
      <select-vue
        :options="Object.keys(currencies)"
        :value="toCurrency"
        @v-select="(value) => (toCurrency = value)"
        class="hide-close"
      />
    </div>
  </div>
</template>

<script>
// Components
import SelectVue from "../UI/SelectVue.vue";

// Vuex
import { mapState } from "vuex";

export default {
  name: "CurrencyCalculator",
  components: {
    SelectVue,
  },
  data() {
    return {
      fromCurrency: this.$store.state.currency.selectedCurrency,
      toCurrency: null,
      fromInput: null,
    };
  },
  computed: {
    toInput() {
      if (this.fromInput) {
        if (!this.fromCurrency || !this.toCurrency) {
          this.$store.commit(
            "pushError",
            "Please set currencies in both field before typing the value!"
          );
          return null;
        }
      }

      if (!this.fromInput) {
        return null;
      }

      return parseFloat(
        (
          (this.fromInput * this.currencies[this.fromCurrency]) /
          this.currencies[this.toCurrency]
        ).toFixed(6)
      );
    },
    ...mapState({
      currencies: (state) => state.currency.currencies ?? {},
    }),
  },
  mounted() {
    if (!Object.keys(this.currencies).length) {
      this.$router.push("/currency");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/currencies.scss";
</style>
