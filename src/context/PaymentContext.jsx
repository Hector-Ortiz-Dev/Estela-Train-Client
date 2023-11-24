import { createContext, useContext, useState } from "react";
import {
  getPaymentsRequest,
  getPaymentRequest,
  getPaymentsbyUserRequest,
  createPaymentRequest,
  updatePaymentRequest,
  deletePaymentRequest,
} from "../api/payments.js";

const PaymentContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePayments = () => {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error(
      "usePayment debe estar dentro del proveedor PaymentProvider"
    );
  }

  return context;
};

// eslint-disable-next-line react/prop-types
export function PaymentProvider({ children }) {
  const [payments, setPayments] = useState([]);

  const getPayments = async () => {
    try {
      const res = await getPaymentsRequest();
      setPayments(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getPayment = async (id) => {
    try {
      const res = await getPaymentRequest(id);
      setPayments(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPaymentsbyUser = async(id) => {
    try {
      const res = await getPaymentsbyUserRequest(id);
      setPayments(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  const createPayment = async (payment) => {
    const res = await createPaymentRequest(payment);
    console.log(res.data);
    return res.data._id;
  };

  const updatePayment = async (id, payment) => {
    try {
      const res = await updatePaymentRequest(id, payment);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePayment = async (id) => {
    try {
      const rest = await deletePaymentRequest(id);
      if (rest.status === 204)
        setPayments(payments.filter((payment) => payment._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        payments,
        createPayment,
        getPayments,
        getPaymentsbyUser,
        deletePayment,
        getPayment,
        updatePayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
