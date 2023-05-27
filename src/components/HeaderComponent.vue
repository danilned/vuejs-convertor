<template>
  <div class="header-container">
    <router-link to="/currency">Currency</router-link>
    <router-link to="/currency/calculator">Calculator</router-link>
    <router-link to="/">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@import "@/styles/header.scss";
</style>
