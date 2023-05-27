<template>
  <div class="login-layout">
    <div class="form-group w-50">
      <label class="form-label">Authorization</label>
      <input
        class="form-control"
        type="text"
        placeholder="username"
        v-model.trim="usernameValue"
      />
      <input
        class="form-control mt-2"
        type="text"
        placeholder="password"
        v-model.trim="passwordValue"
      />
      <button class="btn btn-primary" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
// Vuex
import { mapState } from "vuex";

// Controllers
import { login } from "@/controllers/loginController";

export default {
  name: "LoginPage",
  data() {
    return {
      usernameValue: "",
      passwordValue: "",
    };
  },
  computed: {
    ...mapState({
      loginState: (state) => state.login.user,
    }),
  },
  methods: {
    async login() {
      const [result, error] = await login({
        username: this.usernameValue,
        password: this.passwordValue,
      });

      if (error) {
        this.$store.commit("pushError", error);
        return;
      }

      this.$store.commit("updateStateLogin", { field: "user", body: result });
      this.$router.push("/currency");
    },
  },
  mounted() {
    this.$store.commit("updateStateLogin", { field: "user", body: null });
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/login.scss";
</style>
