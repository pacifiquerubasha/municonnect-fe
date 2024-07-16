import axios, { AxiosInstance } from "axios";

const API_URL = "https://api.api-ninjas.com/v1";
const API_KEY = "GDBWNLR8JDOYNjnfLvzFow==YIpoF17PryB1lCvZ";

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

export const getHolidays = async () => {
  return await api.get(
    `${API_URL}/holidays?country=CD&year=2024&type=public_holiday`,
    {
      headers: {
        "X-Api-Key": API_KEY,
      },
    }
  );
};

export const getAirQuality = async (city: string) => {
  return await api.get(`${API_URL}/airquality?city=${city}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
};

export const getCityInfo = async (city: string) => {
  return await api.get(`${API_URL}/city?name=${city}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
};

export const getCityWeather = async (lat: number, lon: number) => {
  return await api.get(`${API_URL}/weather?lat=${lat}&lon=${lon}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
};

export const getCountryStats = async () => {
  return await api.get(`${API_URL}/country?name=CD`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
};
