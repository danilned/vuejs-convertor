import axios from "axios";
import { expiresInMins } from "@/assets/constants.json";

export const login = async (data) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      { ...data, expiresInMins },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return [response.data, null];
  } catch (error) {
    return [null, error.response?.data?.message ?? error];
  }
};
