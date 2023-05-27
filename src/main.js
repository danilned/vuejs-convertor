import { createApp } from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Pagination
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

// Vue-select
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAwesomePaginate)
  .component("v-select", VueSelect)
  .mount("#app");
