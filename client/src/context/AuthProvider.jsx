import { createContext, useContext, useEffect, useReducer } from "react";
import { LogUserIn } from "../services/apiAuth";

const authContext = createContext();

const initialState = {
  user: null,
};

function reducer(state, action) {
  if (action.type === "login")
    return { ...state, user: { ...action.payload, role: "Teacher" } };
  if (action.type === "logout") return { ...initialState };
  if (action.type === "update-user") return { user: action.payload };
  if (action.type === "logUserIn") return { user: action.payload };
}

function AuthProvider({ children }) {
  const [{ user }, dispatch] = useReducer(reducer, initialState);

  const login = function (user, token) {
    dispatch({ type: "login", payload: user });
    if (!token) return;
    localStorage.setItem("accessToken", token);
  };
  const logout = function () {
    dispatch({ type: "logout" });
    localStorage.removeItem("accessToken");
  };
  const updateUser = function () {
    dispatch({ type: "update-user" });
  };

  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!token) return;

    LogUserIn()
      .then((data) => {
        dispatch({ type: "logUserIn", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <authContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </authContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(authContext);
  if (!context)
    throw new Error("You used authContext outside of authContextProvider ");
  return context;
};

export { useAuth, AuthProvider };
