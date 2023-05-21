import api from "./api";

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;

}

export const getUserByEmail = async (email: string): Promise<User> => {
    const response = await api.get(`/users?email=${email}`);
    return response.data[0];
}