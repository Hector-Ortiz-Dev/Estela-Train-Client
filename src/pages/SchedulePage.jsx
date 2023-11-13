/* eslint-disable no-unused-vars */
import ScheduleCard from "../components/ScheduleCard";

function SchedulePage() {
  console.log("SchedulePage");
  const ticket = JSON.parse(localStorage.getItem("ticket"));
  console.log(ticket);

  const options = {
    weekday: "long", // Nombre del día de la semana
    year: "numeric", // Año
    month: "long", // Nombre del mes
    day: "numeric", // Día del mes
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-6xl font-main font-bold">
        Horarios de salida
      </h1>

      {/* Si hay un ticket en localStorage, mostrar los horarios de salida */}
      {ticket ? (
        <>
          <div className="text-center font-main ">
            <div className="text-3xl">
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
            <div className="text-lg">
              {new Date(ticket.date).toLocaleDateString("es-ES", options)}
            </div>

            <div className="my-10 px-32 justify-center">
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
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
