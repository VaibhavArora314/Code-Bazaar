import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
AuthContext.displayName = "Auth Context";

export default AuthContext;

const INITIAL_STATE = {
  id: "",
  username: "",
  email: "",
  // isAdmin: "",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    setLoading(false);
  }, []);

  if (loading) return; //TODO: Return loader here

  const isAuthenticated = () => {
    return user && user.id;
  };

  // const isAdminUser = () => {
  //   return user && user.id && user.isAdmin;
  // };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const { _id, email: email2, name } = response.data.user;

      setUser({
        id: _id,
        username: name,
        email: email2,
      });
    } catch (error) {
      console.error(error);
      throw "An unexpected error occurred";
    }
  };

  const register = async (email, name, password) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      const { _id, email: email2, name: name2 } = response.data.user;

      setUser({
        id: _id,
        username: name2,
        email: email2,
      });
    } catch (error) {
      console.error(error);
      throw "An unexpected error occurred";
    }
  };

  const logout = () => {
    setUser(INITIAL_STATE);
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
