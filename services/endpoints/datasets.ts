import api from "../api";

export const createDataset = async (data: any) => {
  return await api.post("/datasets", data);
};

export const getMyDatasets = async (userId: string) => {
  return await api.get(`/datasets/owner/${userId}`);
};

export const getDatasetSummary = async (datasetId: string) => {
    return await api.get(`/datasets/${datasetId}/summary`);
}