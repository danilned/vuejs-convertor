<template>
  <error-modal />
  <router-view />
</template>

<script>
// Components
import ErrorModal from "./components/UI/ErrorModal.vue";

export default {
  name: "App",
  components: {
    ErrorModal,
  },
};
</script>

<style lang="scss">
@import "@/styles/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
