import api from "../api";

export const createUser = async (data: any) => {
  return await api.post("/users", data);
};

export const getCurrentUser = async (authId: string) => {
  return await api.get(`/users/me`, {
    headers: {
      Authorization: `Bearer ${authId}`,
    },
  });
};

export const getAllUsers = async (authId: string) => {
  return await api.get(`/users`, {
    headers: {
      Authorization: `Bearer ${authId}`,
    },
  });
};

export const verifyUser = async (userId: string, authId: string) => {
  return await api.get(`/users/verify/${userId}`, {
    headers: {
      Authorization: `Bearer ${authId}`,
    },
  });
};
