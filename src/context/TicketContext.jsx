import { createContext, useContext, useState } from "react";
import { 
    getTicketsRequest,
    getTicketRequest,
    createTicketRequest,
    updateTicketRequest,
    deleteTicketRequest
 } from "../api/tickets.js";

const TicketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTickets = () => {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error(
      "useTicket debe estar dentro del proveedor TicketProvider"
    );
  }

  return context;
};

// eslint-disable-next-line react/prop-types
export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    try {
      const res = await getTicketsRequest();
      setTickets(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getTicket = async (id) => {
    try {
      const res = await getTicketRequest(id);
      setTickets(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createTicket = async (ticket) => {
    const res = await createTicketRequest(ticket);
    console.log(res);
  };

  const updateTicket = async (id, ticket) => {
    try {
      const res = await updateTicketRequest(id, ticket);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTicket = async (id) => {
    try {
      const rest = await deleteTicketRequest(id);
      if (rest.status === 204)
        setTickets(tickets.filter((ticket) => ticket._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        createTicket,
        getTickets,
        deleteTicket,
        getTicket,
        updateTicket,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}
