import { useState, createContext, useContext, useEffect } from 'react'
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            login(loggedInUser);
        }
    }, [user]);
    const login = (user) => {
        setUser(user);
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}