import axios from "./axios";

export const getTicketsRequest = () => axios.get("/tickets");

export const getTicketRequest = (id) => axios.get("/ticket/" + id);

export const createTicketRequest = (ticket) => axios.post("/ticket", ticket);

export const updateTicketRequest = (id, ticket) =>
  axios.put("/ticket/" + id, ticket);

export const deleteTicketRequest = (id) => axios.delete("/ticket/" + id);
