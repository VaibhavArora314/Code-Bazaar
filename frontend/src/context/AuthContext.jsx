import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();
AuthContext.displayName = "Auth Context";

export default AuthContext;

const INITIAL_STATE = {
  id: "",
  username: "",
  email: "",
  isAdmin: "",
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
  return (
    <AuthContext.Provider value={ {user, isAuthenticated, isAdminUser} }>
      {children}
    </AuthContext.Provider>
  );
};
