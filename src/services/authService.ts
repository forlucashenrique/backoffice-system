import {User, getUserByEmail} from "./userService";

export interface LoginData {
    email: string;
    password: string;
}

export const login = async (loginData: LoginData): Promise<User> => {
    const user = await getUserByEmail(loginData.email);
    if (user.password !== loginData.password) {
        throw new Error("Invalid password");
    }
    return user;
}