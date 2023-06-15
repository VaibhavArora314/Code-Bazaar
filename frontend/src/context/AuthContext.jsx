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
    //TODO: get user details here

    setLoading(false);
  }, []);

  if (loading) return; //TODO: Return loader here

  const isAuthenticated = () => {
    return user && user.id;
  };

  const isAdminUser = () => {
    return user && user.id && user.isAdmin;
  };

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

  return (
    // <AuthContext.Provider value={ {user, isAuthenticated, isAdminUser} }>
    <AuthContext.Provider value={{ user, isAuthenticated, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
