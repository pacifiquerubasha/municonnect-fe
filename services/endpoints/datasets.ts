import api from "../api";

export const createDataset = async (data: any) => {
  return await api.post("/datasets", data, {
    headers: {
      Authorization: `Bearer ${data.userId}`,
    }
  });
};

export const getMyDatasets = async (userId: string) => {
  return await api.get(`/datasets/my-datasets`, {
    headers: {
      Authorization: `Bearer ${userId}`,
    }
  });
};

export const getDatasetSummary = async (datasetId: string) => {
    return await api.get(`/datasets/${datasetId}/summary`, {
      headers: {
        Authorization: `Bearer ${datasetId}`,
      }
    });
}