import { createStore } from "vuex";
import currencyModule from "./modules/currencyModule";
import loginModule from "./modules/loginModule";
import appModule from "./modules/appModule";

const store = createStore({
  modules: {
    currency: currencyModule,
    login: loginModule,
    app: appModule,
  },
});

export default store;
