<template>
  <div class="container">
    <header-component />
    <router-view />
  </div>
</template>

<script>
// Components
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "LayoutPage",
  components: {
    HeaderComponent,
  },
  mounted() {
    if (!this.$store.state.login.user) {
      this.$store.commit("pushError", "You are not authorized");
      //this.$router.push("/"); // Remove after development
    }
  },
};
</script>
