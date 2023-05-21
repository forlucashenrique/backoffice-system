import React, { createContext, useContext, useEffect, useState } from "react";

import { User } from "../services/userService";

interface AuthContextProps {
    authenticated: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    isLoading: boolean;
}


const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: {children: any}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const storagedUser = localStorage.getItem("user");
      
        if (storagedUser) {
            setAuthenticated(true);
            setUser(JSON.parse(storagedUser));
        }

        setLoading(false);
    }, [])

    const login = (loggedInUser: User) => {
        setAuthenticated(true);
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        setAuthenticated(false);
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                user,
                login,
                logout,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


