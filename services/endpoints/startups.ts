import api from "../api";

export const addStartup = async (authId: string, data: any) => {
  return await api.post("/startups", data, {
    headers: {
      Authorization: `Bearer ${authId}`,
    },
  });
};


export const getStartups = async () => {
  return await api.get("/startups");
};


export const getStartup = async (id: string) => {
  return await api.get(`/startups/${id}`);
};