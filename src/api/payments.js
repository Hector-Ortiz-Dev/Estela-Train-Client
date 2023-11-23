import axios from "./axios";

export const getPaymentsRequest = () => axios.get("/payments");

export const getPaymentRequest = (id) => axios.get("/payment/" + id);

export const createPaymentRequest = (payment) => axios.post("/journey", payment);

export const updatePaymentRequest = (id, payment) =>
  axios.put("/payment/" + id, payment);

export const deletePaymentRequest = (id) => axios.delete("/payment/" + id);
