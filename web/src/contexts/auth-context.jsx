import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();
export function AuthContextProvider({children}) {

    const [user, setUser] = useState(JSON.parse(localStorage.user || null));
    const navigate = useNavigate();

    function handleLogin(user) {
        localStorage.CarItem("user", JSON.stringify(user));
        setUser(user);
    }

    function handleLogout() {
        localStorage.clear();
        setUser(null);
        navigate("/login");
    }

    const value = {
        user,
        handleLogin,
        handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export default AuthContext;