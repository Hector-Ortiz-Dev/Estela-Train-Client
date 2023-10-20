import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

// Context
export const AuthContext = createContext();

// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
  }
  return context;
};

// Provider
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  //Register
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log("Registro exitoso: ", res.data);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
        console.log("Registro correcto: ", res);
      }
    } catch (error) {
      // console.log(error.response.data);
      setErrors(error.response.data.message);
    }
  };

  //Login
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log("Login correcto: ", res);
    } catch (error) {
      //console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  //Remove errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  //Verificar su el usuario esta logueado
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      //Si no hay token, no esta autenticado
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      //Si hay token, verificar si es valido
      try {
        //Verificar si el token es valido
        const res = await verifyTokenRequest(cookies.token);
        //Si el token no es valido, no esta autenticado
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        //Si el token es valido, esta autenticado
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        loading,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
