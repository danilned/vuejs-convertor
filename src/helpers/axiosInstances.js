import axios from "axios";
import { apikey } from "@/assets/constants.json";

export const currencyInstance = axios.create({
  baseURL: "https://api.freecurrencyapi.com/v1/latest/",
  params: {
    apikey,
  },
});
