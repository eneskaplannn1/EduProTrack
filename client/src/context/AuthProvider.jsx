import { createContext, useContext, useEffect, useReducer } from "react";
import { LoginWithJWT } from "../services/apiAuth";
import { toast } from "react-hot-toast";

const authContext = createContext();

const initialState = {
  user: null,
};

function reducer(state, action) {
  if (action.type === "login")
    return { user: { ...action.payload, role: "Admin" } };
  if (action.type === "logout") return { ...initialState };
  if (action.type === "update-user") return { user: action.payload };
  if (action.type === "login-with-jwt")
    return { user: { ...action.payload, role: "Admin" } };
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
  const updateUser = function (user) {
    dispatch({ type: "update-user", payload: user });
  };

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) return;
    // if (user) return;
    LoginWithJWT()
      .then((data) => {
        if (!data) {
          localStorage.removeItem("accessToken");
          return toast.error(
            "Your session has been expired please log in again"
          );
        }
        dispatch({ type: "login-with-jwt", payload: data });
      })
      .catch((err) => {
        toast.error(err.message);
        logout();
      });
  }, [token]); // tokenin yanında user vardı , belirli bir problemi çözmek için koymuştum galiba neden koyduğumu unuttum sonrasında useri kaldırmam gerekti şifre değiştiğinde loginWithJWT fonksiyonunun çalışması için;

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
