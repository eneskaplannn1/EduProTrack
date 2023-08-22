import { createContext, useContext, useReducer } from "react";

const authContext = createContext();

const initialState = {
  user: null,
};
function reducer(state, action) {
  if (action.type === "login")
    return { ...state, user: { ...action.payload, role: "Admin" } };
  if (action.type === "logout") return { ...initialState };
}

function AuthProvider({ children }) {
  const [{ user }, dispatch] = useReducer(reducer, initialState);

  const login = function (user) {
    dispatch({ type: "login", payload: user });
  };
  const logout = function () {
    dispatch({ type: "logout" });
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
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
