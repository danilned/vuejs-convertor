// Router
import { createRouter, createWebHistory } from "vue-router";

// Components
import LayoutPage from "@/pages/LayoutPage";
import LoginPage from "@/pages/LoginPage";
import AllCurrencies from "@/components/Currency/AllCurrencies";
import CurrencyCalculator from "@/components/Currency/CurrencyCalculator";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/currency",
    component: LayoutPage,
    children: [
      {
        path: "",
        component: AllCurrencies,
      },
      {
        path: "calculator",
        component: CurrencyCalculator,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
