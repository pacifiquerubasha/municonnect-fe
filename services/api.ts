import axios, { AxiosInstance } from "axios";
import https from "https";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

axios.defaults.withCredentials = true;
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error?.response?.status === 401 ||
      error?.response?.data?.message?.includes("authentication")
    ) {
      // window.location.href = "/sign-in";
    }

    return Promise.reject(error);
  }
);

export default api;
