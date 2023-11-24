import { createContext, useContext, useState } from "react";
import {
  getPayMethodRequest,
  getPayMethodUserRequest,
  createPayMethodRequest,
  updatePayMethodRequest,
  deletePayMethodRequest,
} from "../api/payMethods.js";

const PayMethodContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePayMethods = () => {
  const context = useContext(PayMethodContext);

  if (!context) {
    throw new Error(
      "usePayMethods debe estar dentro del proveedor PayMethodProvider"
    );
  }

  return context;
};

// eslint-disable-next-line react/prop-types
export function PayMethodProvider({ children }) {
  const [payMethods, setPayMethods] = useState([]);

  const createPayMethod = async (payMethod) => {
    try {
      const res = await createPayMethodRequest(payMethod);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPayMethod = async (id) => {
    try {
      const res = await getPayMethodRequest(id);
      setPayMethods(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getPayMethodIdUser = async (id_user) => {
    try {
      const res = await getPayMethodUserRequest(id_user);
      setPayMethods(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePayMethod = async (id, payMethod) => {
    try {
      const res = await updatePayMethodRequest(id, payMethod);
      console.log("Update journey: " + res);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePayMethod = async (id) => {
    try {
      const rest = await deletePayMethodRequest(id);
      if (rest.status === 204)
        setPayMethods(payMethods.filter((payMethod) => payMethod._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PayMethodContext.Provider
      value={{
        payMethods,
        getPayMethod,
        createPayMethod,
        getPayMethodIdUser,
        updatePayMethod,
        deletePayMethod,
      }}
    >
      {children}
    </PayMethodContext.Provider>
  );
}
