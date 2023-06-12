import api from "./api";

export interface LoginData {
    email: string;
    password: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const login = async (loginData: LoginData): Promise<User> => {
    const user = await api.post('auth', loginData);

    return user.data;
}