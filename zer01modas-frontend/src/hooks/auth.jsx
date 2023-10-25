import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ user, setUser ] = useState("");
  const [ isAdmin, setIsAdmin ] = useState(false);

  async function SignUp({ name, email, password }) {
    await api.post("/users", { name, email, password });
  }

  async function SignIn({ email, password }) {
    const response = await api.post("/sessions", { email, password });

    localStorage.setItem("@zer01modas:userData", JSON.stringify(response.data));
    setUser(response.data);

    if(response.data.user.isAdmin = 1) {
      localStorage.setItem("@zer01modas:isAdmin", JSON.stringify(true));
      setIsAdmin(true);
    } else {
      localStorage.setItem("@zer01modas:isAdmin", JSON.stringify(false));
      setIsAdmin(false);
    }
  }

  function SignOut() {
    setUser("");
    setIsAdmin(false);
    localStorage.removeItem("@zer01modas:userData");
    localStorage.removeItem("@zer01modas:isAdmin");
  }

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("@zer01modas:userData"));
    const isAdminLocalStorage = JSON.parse(localStorage.getItem("@zer01modas:isAdmin"));

    if(userLocalStorage) {
      api.defaults.headers.authorization = `Bearer ${ userLocalStorage.token }`;
      setUser(userLocalStorage);
    }

    if(isAdminLocalStorage) {
      setIsAdmin(isAdminLocalStorage);
    }
    
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin, SignUp, SignIn, SignOut }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };