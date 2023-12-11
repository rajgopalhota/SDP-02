import React, { useState, createContext, useContext, useEffect } from "react";
import Cookies from 'universal-cookie';

import { toast } from "react-toastify";
import axios from "axios";
import {AutobotBackend} from './Helper'
const cookies = new Cookies();
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const fetchUser = async () => {
          const token = cookies.get("User");
          console.log(token);
          try {
            const response = await axios.get(`${AutobotBackend}/auth/fetch-user`, {
              headers: {
                Authorization: token, // Add the authentication token
              },
            });
            console.log("auth", response);
            if (response.data.success) {
              response.data.user.token = token;
              setUser(response.data.user);
              console.log(user.role)
            }
          } catch (error) {
            // toast.error( error.message);
          }
        };
        fetchUser();
      }, []);
      
    const login = (user) => {
      cookies.remove("User");
        cookies.set("User", user.token, {
            path: "/",
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          });
          setUser(user);
    };
    const logout = async () => {
      await cookies.remove("User", { path: "/", domain: window.location.hostname });
      setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}