import axios from "./axios";

export const getPayMethodRequest = (id) => axios.get("/payMethod/" + id);

export const getPayMethodUserRequest = (id) => axios.get("/payMethods/" + id);

export const createPayMethodRequest = (payMethod) => axios.post("/payMethod", payMethod);

export const updatePayMethodRequest = (id, payMethod) => axios.put("/payMethod/" + id, payMethod)

export const deletePayMethodRequest = (id) => axios.delete("/payMethod/" + id);
