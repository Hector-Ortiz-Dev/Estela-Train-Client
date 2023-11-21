/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import ScheduleCard from "../components/ScheduleCard";
import dayjs from "dayjs";
import "dayjs/locale/es-mx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJourneys } from "../context/JourneyContext";

function SchedulePage() {
  let navigate = useNavigate();

  // Obtener los viajes de JourneyContext
  const { getJourneysOriginDestinationDate, journeys } = useJourneys();

  // Obtener el ticket de localStorage
  const ticket = JSON.parse(localStorage.getItem("ticket"));

  // Obtener los viajes de la fecha seleccionada
  useEffect(() => {
    if (!ticket) {
      navigate("/");
    }

    getJourneysOriginDestinationDate(
      ticket.origin,
      ticket.destination,
      ticket.date
    );
  }, []);

  // Formatear la fecha
  dayjs.locale("es-mx");
  const date = dayjs(ticket.date);
  const formattedDate = date.format("dddd DD [de] MMMM [del] YYYY");
  //console.log(formattedDate);

  return (
    <div className="my-10">
      <h1 className="text-6xl font-main font-bold">
        Horarios de salida
      </h1>
      <p className="text-2xl text-gray">Selecciona un viaje</p>

      <hr className="border-2 border-gray-light" />

      {/* Si hay un ticket en localStorage, mostrar los horarios de salida */}
      {ticket ? (
        <>
          <div className="text-center font-main mt-6">
            <div className="text-6xl font-bold mb-2">
              {ticket.origin}{" "}
              <svg
                viewBox="0 0 448 512"
                aria-hidden="true"
                className="pointer-events-noney h-5  fill-black transition inline-block"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>{" "}
              {ticket.destination}
            </div>
            <div className="text-xl">{formattedDate}</div>

            <div className="my-10 px-32 justify-center">
              {/* Si hay viajes, mostrarlos */}
              {journeys.map((journey) => (
                <ScheduleCard journey={journey} ticket={ticket} key={journey._id} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2 className="font-main font-bold text-gray text-lg md:text-3l lg:text-4xl">
          No hay horarios disponibles
        </h2>
      )}
    </div>
  );
}

export default SchedulePage;
