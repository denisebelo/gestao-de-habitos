import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useToken } from "../token";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const initialState =
    JSON.parse(localStorage.getItem("@gestaohabitosg5:token")) || false;
  const [authenticated, setAuthenticated] = useState(initialState);
  const { token } = useToken();

  useEffect(() => {
    if (token !== "") {
      return setAuthenticated(true);
    }
  }, []);

  return (
    <AuthenticationContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
