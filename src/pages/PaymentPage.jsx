/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJourneys } from "../context/JourneyContext";
import { useAuth } from "../context/AuthContext";
import { usePayments } from "../context/PaymentContext";
import { useTickets } from "../context/TicketContext";
import { usePayMethods } from "../context/PayMethodsContext";
import dayjs from "dayjs";
import "dayjs/locale/es-mx";
import { getDateNowISO } from "../lib/getDateNowISO";

function PaymentPage() {
  let navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const { createPayment } = usePayments();
  const { createTicket } = useTickets();
  const { getPayMethodIdUser, payMethods } = usePayMethods();
  const { getJourney, journeys } = useJourneys();

  const [paymentMethod, setPaymentMethod] = useState("Sin tarjeta");

  // Obtener el ticket de localStorage
  const ticket = JSON.parse(localStorage.getItem("ticket"));
  const numPassengers = parseInt(ticket.passengers);

  // Formatear horas
  const departureDate = dayjs(journeys.departure_date);
  const arrivalDate = dayjs(journeys.arrival_date);

  const departureTime = departureDate.format("hh:mm a");
  const arrivalTime = arrivalDate.format("hh:mm a");

  useEffect(() => {
    if (!ticket.passengersInfo || !ticket.id_journey) {
      navigate("/");
    }

    getJourney(ticket.id_journey);
    getPayMethodIdUser(user.id);
  }, []);

  useEffect(() => {
    if (Object.entries(journeys).length) {
      setLoading(true);
    }
  }, [journeys]);

  const handleChange = (e) => {
    e.preventDefault();
    setPaymentMethod(e.target.value);
  };

  // Calculo de pago
  // Precio viaje x pasajero
  let countAdult = 0;
  let countMinor = 0;
  let countOlder = 0;

  ticket.passengersInfo.forEach((passenger) => {
    if (passenger.tipo == "Adulto") {
      countAdult++;
    } else if (passenger.tipo == "Niño") {
      countMinor++;
    } else if (passenger.tipo == "Adulto mayor") {
      countOlder++;
    }
  });

  const subAdult = countAdult * journeys.price;

  const priceMinor = journeys.price * 0.25;
  const priceOlder = journeys.price * 0.5;
  const subMinor = countMinor * priceMinor;
  const subOlder = countOlder * priceOlder;

  // Tarifa de estacion x pasajero
  const subStation = numPassengers * 150;

  // Seguro contra accidentes
  const subSecure = numPassengers * 25;

  // Total
  const total = subAdult + subMinor + subOlder + subStation + subSecure;

  const createTickets = (passenger, id_payment) => {
    const newTicket = {
      passenger: passenger.nombre,
      type: passenger.tipo,
      genre: passenger.genero,
      origin: journeys.origin,
      destination: journeys.destination,
      train: journeys.train,
      date: journeys.departure_date,
      total: total,
      id_journey: journeys._id,
      id_payment: id_payment,
    };
    createTicket(newTicket);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Procesar compra
    const paymentData = {
      id_user: user.id,
      id_journey: journeys._id,
      paymentMethod: paymentMethod,
      date: getDateNowISO(),
      total: total,
    };
    const id_payment = await createPayment(paymentData);

    // Generar tickets
    ticket.passengersInfo.forEach((passenger) => {
      createTickets(passenger, id_payment);
    });

    navigate("/tickets/" + id_payment);
  };

  if (!isLoading)
    return (
      <div className="my-10">
        <h1 className="text-6xl font-main font-bold">Pago</h1>
        <p className="text-2xl text-gray">Obteniendo información...</p>

        <hr className="border-2 border-gray-light" />

        <div className="flex flex-col w-full md:flex-row align-center mt-12">
          <p className="text-6xl font-main text-gray-light">Cargando...</p>
        </div>
      </div>
    );

  return (
    <div className="my-10">
      <h1 className="text-6xl font-main font-bold">Pago</h1>
      <p className="text-2xl text-gray">Elija un método de pago</p>

      <hr className="border-2 border-gray-light" />

      <div className="flex flex-col w-full md:flex-row align-center mt-12">
        <div className="flex-col w-4/6">
          <h1 className="font-bold text-3xl">
            {ticket.origin}
            <svg
              viewBox="0 0 448 512"
              aria-hidden="true"
              className="pointer-events-noney h-5 mx-3 fill-black transition inline-block"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            {ticket.destination}
          </h1>

          {/* Hora */}
          <div className="items-center w-fit my-3 px-2 py-3 border-4 bg-gray-light border-gray rounded-xl shadow-md shadow-gray">
            <h2 className="font-bold text-2xl">
              {departureTime}
              <svg
                viewBox="0 0 448 512"
                aria-hidden="true"
                className="pointer-events-noney h-5 mx-3 fill-black transition inline-block"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
              {arrivalTime}
            </h2>
          </div>

          {/* Pasajeros */}
          <h1 className="font-bold mt-8 text-3xl ">Pasajeros</h1>
          {ticket.passengersInfo.map((pasajero) => (
            <div
              key={pasajero.nombre}
              className="items-center md:w-2/4 sm:w-full my-3 px-3 py-1 border-4 bg-gray-light border-gray rounded-xl shadow-md shadow-gray"
            >
              <h2 className="font-bold text-2xl truncate">{pasajero.nombre}</h2>
              <h3 className="text-md font-semibold">{pasajero.tipo}</h3>
            </div>
          ))}

          {/* Metodo de pago */}
          <h1 className="font-bold mt-8 text-3xl ">Método de pago</h1>
          <select
            className="items-center w-3/6 my-3 px-2 py-1 border-4 bg-gray-light text-center border-gray rounded-xl shadow-md shadow-gray text-2xl font-bold appearance-none truncate"
            name="paymentMethod"
            onChange={handleChange}
          >
            <option value="Sin tarjeta" className="font-semibold text-xl">
              Sin tarjeta
            </option>
            {payMethods.length !== 0 ? (
              payMethods.map((payMethod) => (
                <option
                  className="font-semibold text-xl"
                  key={payMethod._id}
                  value={payMethod._id}
                >
                  {"**** **** **** " + payMethod.card_number.slice(-4)}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>

          <hr className="mt-2 mr-10 border-2 border-gray-light" />

          {/* Finalizar compra */}
          <button
            className="flex px-20 py-4 mt-10 bg-green border-2 border-green/25 font-semibold text-white text-3xl rounded-lg shadow-lg shadow-gray"
            onClick={handleSubmit}
          >
            Finalizar compra
          </button>
        </div>

        {/* Cuadro del detalle de compra */}
        <div className="flex-col lg:w-2/6 sm:w-full p-8 bg-gray-light border-8 border-gray rounded-xl">
          <h1 className="font-bold text-4xl">Detalle de compra</h1>

          {/* Viaje */}
          <h2 className="mt-5 font-semibold text-3xl">Viaje</h2>
          <p className="mt-4 text-xl">
            {journeys.origin + " - " + journeys.destination}
          </p>

          {countAdult !== 0 ? (
            <>
              <p className="mt-1 text-xl">Adulto</p>
              <div className="flex w-full justify-between">
                <p className="mt-1 text-xl">
                  {countAdult + "x $" + journeys.price.toFixed(2) + "MX"}
                </p>
                <p className="mt-1 text-xl">
                  {"$" + subAdult.toFixed(2) + "MX"}
                </p>
              </div>
            </>
          ) : (
            <></>
          )}

          {countMinor !== 0 ? (
            <>
              <p className="mt-1 text-xl">Niño</p>
              <div className="flex w-full justify-between">
                <p className="mt-1 text-xl">
                  {countMinor + "x $" + priceMinor.toFixed(2) + "MX"}
                </p>
                <p className="mt-1 text-xl">
                  {"$" + subMinor.toFixed(2) + "MX"}
                </p>
              </div>
            </>
          ) : (
            <></>
          )}

          {countOlder !== 0 ? (
            <>
              <p className="mt-1 text-xl">Adulto mayor</p>
              <div className="flex w-full justify-between">
                <p className="mt-1 text-xl">
                  {countOlder + "x $" + priceOlder.toFixed(2) + "MX"}
                </p>
                <p className="mt-1 text-xl">
                  {"$" + subOlder.toFixed(2) + "MX"}
                </p>
              </div>
            </>
          ) : (
            <></>
          )}

          {/* Adicionales */}
          <h2 className="mt-5 font-semibold text-3xl">Adicionales</h2>
          <p className="mt-4 text-xl">Tarifa de estación</p>
          <div className="flex w-full justify-between">
            <p className="mt-1 text-xl">{ticket.passengers + "x $150.00MX"}</p>
            <p className="mt-1 text-xl">{"$" + subStation.toFixed(2) + "MX"}</p>
          </div>
          <p className="mt-4 text-xl">Seguro contra accidentes</p>
          <div className="flex w-full justify-between">
            <p className="mt-1 text-xl">{ticket.passengers + "x $25.00MX"}</p>
            <p className="mt-1 text-xl">{"$" + subSecure.toFixed(2) + "MX"}</p>
          </div>

          {/* Total */}
          <h2 className="mt-5 font-bold text-4xl">Total</h2>
          <p className="w-full text-end mt-4 font-bold text-3xl">
            {"$" + total.toFixed(2) + "MX"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
