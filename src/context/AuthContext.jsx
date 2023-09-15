import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest } from '../api/auth';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be within an AuthProvider");
    }
    return context; 
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try{
            const res = await registerRequest(user);
            console.log(res.data);
            if (res.status === 200){
                setUser(res.data);
                setIsAuthenticated(true);
            }
        } catch (error) {
            // console.log(error.response.data);
            setErrors(error.response.data.message);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
            if (Array.isArray(error.response.data)){
                return setErrors(error,response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    return (
        <AuthContext.Provider 
        value={{
            user,
            signup,
            signin,
            isAuthenticated,
            errors,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;