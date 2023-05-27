<template>
  <div class="error-modal">
    <transition-group
      v-on:after-enter="(el) => el.classList.add('show')"
      v-on:before-leave="(el) => el.classList.remove('show')"
      name="error-list"
    >
      <div class="error-container" v-for="error in getErrors" :key="error.key">
        <span>{{ error.body ?? "Unknown error" }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
// Vuex
import { mapGetters } from "vuex";

// Constants
import { errorModalTimeout } from "@/assets/constants.json";

export default {
  name: "ErrorModal",
  data() {
    return {
      stateErrors: 1,
    };
  },
  computed: {
    ...mapGetters(["getErrors"]),
  },
  methods: {
    errorHandler() {
      if (this.stateErrors >= 3) {
        return;
      }

      this.stateErrors += 1;

      setTimeout(() => {
        this.$store.commit("removeError");

        if (this.stateErrors >= 3) {
          this.errorHandler();
        }

        this.stateErrors -= 1;
      }, errorModalTimeout * 1.01 * this.stateErrors);
    },
  },
  watch: {
    getErrors() {
      this.errorHandler();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/modals.scss";
</style>
