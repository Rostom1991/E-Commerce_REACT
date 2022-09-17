import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./Reducers";

export const AuthContext = createContext();

const inititalState = {
  user: null,
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, inititalState);

  //remain logged in after refresh
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  const value = { ...state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
