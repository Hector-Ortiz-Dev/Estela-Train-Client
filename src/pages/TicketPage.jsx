/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTickets } from "../context/TicketContext";
import { usePayments } from "../context/PaymentContext";
import { useJourneys } from "../context/JourneyContext";
import { usePayMethods } from "../context/PayMethodsContext";
import dayjs from "dayjs";
import "dayjs/locale/es-mx";

function TicketPage() {
  const params = useParams();
  const { getTicketsIdPayment, tickets } = useTickets();
  const { getPayment, payments } = usePayments();
  const { getJourney, journeys } = useJourneys();
  const { getPayMethod, payMethods } = usePayMethods();
  const [isLoading, setLoading] = useState(false);

  dayjs.locale("es-mx");

  useEffect(() => {
    if (tickets.length !=0 && payments.length !=0 && journeys.length !=0){
      setLoading(true);
    }
  }, [tickets, payments, journeys, payMethods]);

  useEffect(() => {
    getPayment(params.id);
    getTicketsIdPayment(params.id);
    getJourney(payments.id_journey);
    
    if(payments.paymentMethod != "Sin tarjeta")
    {
      console.log("Buscando PaymentMethod");
      getPayMethod(payments.paymentMethod);
    }
  }, []);
  // console.log(payMethods);

  // console.log(tickets);
  console.log(payments);
  console.log(journeys);

  if (!isLoading)
    return (
      <div className="my-10">
        <h1 className="text-6xl font-main font-bold">Tickets</h1>
        <p className="text-2xl text-gray">Obteniendo información...</p>

        <hr className="border-2 border-gray-light" />

        <div className="flex flex-col w-full md:flex-row align-center mt-12">
          <p className="text-6xl font-main text-gray-light">Cargando...</p>
        </div>
      </div>
    );

  return (
    <div className="my-10">
      <h1 className="text-6xl font-main font-bold">Tickets</h1>
      <p className="text-2xl text-gray">Aquí están tus tickets de viaje</p>

      <hr className="border-2 border-gray-light" />

      {tickets.map((ticket) => (
        <div
          className="flex flex-col items-center w-full my-12"
          key={ticket._id}
        >
          <div className="lg:w-2/6 sm:w-full p-8 bg-gray-light border-8 border-gray rounded-xl font-main text-lg">
            <h1 className="text-4xl font-bold">Estela Train</h1>
            <p>{ticket._id}</p>
            <p>{ticket.passenger}</p>
            <p>{ticket.type}</p>
            <p>{ticket.genre}</p>
            <p>{ticket.origin + " - " + ticket.destination}</p>
            <p>{dayjs(ticket.date).format("DD/MM/YYYY")}</p>
            <p>{dayjs(ticket.date).format("hh:mma")}</p>
            <p>{ticket.train}</p>
            <p className="text-2xl font-bold">
              {"$" + ticket.total.toFixed(2) + "MX"}
            </p>
          </div>
        </div>
      ))}

      <h1 className="text-6xl font-main font-bold">Comprobante de pago</h1>
      <p className="text-2xl text-gray">Aquí está tu comprobante</p>

      <hr className="border-2 border-gray-light" />

      <div className="flex flex-col items-center w-full my-12">
        <div className="lg:w-3/6 sm:w-full p-8 bg-gray-light border-8 border-gray rounded-xl font-main text-lg">
          <h1 className="text-4xl font-bold">Comprobante de pago</h1>

          <hr className="border-2 border-gray" />

          <div className="flex w-full justify-between">
            <p className="font-bold text-gray">{payments._id}</p>
            <p>{dayjs(payments.date).format("DD/MM/YY hh:mm:ssa")}</p>
          </div>

          <h2 className="mt-5 font-semibold text-3xl">Viaje</h2>
          <p className="mt-4 text-xl">{journeys.origin + " - " + journeys.destination}</p>
          <p className="text-xl">{dayjs(journeys.departure_date).format("dddd DD MMMM YYYY - hh:mma")}</p>

          <h2 className="mt-5 font-semibold text-3xl">Método de pago</h2>
          { payMethods.length != 0 ?
          <p className="mt-4 text-xl">{"**** **** **** " + payMethods.card_number.slice(-4)}</p>
          :
          <p className="mt-4 text-xl">{payments.paymentMethod}</p>
          }

          <hr className="border-2 mt-5 border-gray" />

          {/* Total */}
          <h2 className="mt-5 font-bold text-4xl">Total</h2>
          <p className="w-full text-end mt-4 font-bold text-3xl">
            {"$" + payments.total + "MX"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
