import api from "../api";

export const sendMessage = async (userId: string, data: any) => {
  return await api.post("/messages", data, {
    headers: {
      Authorization: `Bearer ${userId}`,
    },
  });
};

export const getMessages = async (userId: string, datasetId: string) => {
  return await api.get(`/messages/${datasetId}`, {
    headers: {
      Authorization: `Bearer ${userId}`,
    },
  });
};


export const getSampleQuestions = async (userId: string, data: any) => {
  return await api.post(`/messages/sample-questions/`, data, {
    headers: {
      Authorization: `Bearer ${userId}`,
    },
  });
}