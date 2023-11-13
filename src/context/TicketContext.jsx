import { createContext, useState } from "react";

export const TicketContext = createContext();

// eslint-disable-next-line react/prop-types
export function TicketProvider({ children }) {
  const [ticket, setTicket] = useState({
    origin: "",
    destination: "",
    departure_date: "",
    departure_time: "",
    arrival_date: "",
    arrival_time: "",
    price: "",
    seats: "",
  });

  return (
    <TicketContext.Provider value={{ ticket, setTicket }}>
      {children}
    </TicketContext.Provider>
  );
}