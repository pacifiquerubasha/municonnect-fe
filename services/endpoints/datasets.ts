import api from "../api";

export const createDataset = async (data: any) => {
  return await api.post("/datasets", data, {
    headers: {
      Authorization: `Bearer ${data.owner}`,
    },
  });
};

export const getMyDatasets = async (userId: string) => {
  return await api.get(`/datasets/my-datasets`, {
    headers: {
      Authorization: `Bearer ${userId}`,
    },
  });
};

export const getDatasetSummary = async (datasetId: string) => {
  return await api.get(`/datasets/${datasetId}/summary`, {
    headers: {
      Authorization: `Bearer ${datasetId}`,
    },
  });
};

export const switchDatasetVisibility = async (
  userId: string,
  datasetId: string
) => {
  return await api.put(
    `/datasets/${datasetId}/switch-private`,
    {},
    {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    }
  );
};

export const switchDatasetStatus = async (
  userId: string,
  datasetId: string,
  raison: string
) => {
  return await api.put(
    `/datasets/${datasetId}/switch-approved`,
    { raison },
    {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    }
  );
};

export const getPublicDatasets = async () => {
  return await api.get(`/datasets/public`);
};

export const getAllDatasets = async (userId: string) => {
  return await api.get(`/datasets/`, {
    headers: {
      Authorization: `Bearer ${userId}`,
    },
  });
};

export const getDatasetsStats = async () => {
  return await api.get("/datasets/get-dataset-stats");
};

export const getDataset = async (datasetId: string) => {
  return await api.get(`/datasets/${datasetId}`);
};

export const increaseDownloads = async (datasetId: string) => {
  try {
    await api.put(`/datasets/${datasetId}/increase-downloads`);
  } catch (error) {
    console.log("Error increasing downloads", error);
  }
};

export const addRating = async (datasetId: string, rating: number) => {
  try {
    await api.put(`/datasets/${datasetId}/add-rating`, { rating });
  } catch (error) {
    console.log("Error adding rating", error);
  }
};
