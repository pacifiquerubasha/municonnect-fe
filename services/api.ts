import axios, { AxiosInstance } from "axios";

const API_URL = "http://localhost:8000/api";

axios.defaults.withCredentials = true;
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
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
