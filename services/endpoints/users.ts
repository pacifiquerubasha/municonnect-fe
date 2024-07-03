import api from "../api";

export const createUser = async (data: any) => {
    return await api.post("/users", data);
}