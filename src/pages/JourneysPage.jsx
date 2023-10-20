import { useEffect } from "react";
import { useJourneys } from "../context/JourneyContext";

function JourneysPage() {
  const { getJourneys, journeys } = useJourneys();

  useEffect(() => {
    getJourneys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    weekday: "long", // Nombre del día de la semana
    year: "numeric", // Año
    month: "long", // Nombre del mes
    day: "numeric", // Día del mes
    hour: "numeric", // Hora
    minute: "numeric", // Minutos
    second: "numeric", // Segundos
    timeZoneName: "short", // Nombre de la zona horaria
  };

  if (journeys.length === 0) return <h1>No hay salidas</h1>;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Horarios de salida</h1>
      {journeys.map((journey) => (
        <div className="flex justify-center" 
        key={journey._id}>
          <div
            className="bg-zinc-800 max-w-md w-full items-center rounded-md text-center my-3"
          >
            <h2 className="font-bold">
              {journey.id_from_city} - {journey.id_to_city}
            </h2>
            <p>
              {new Date(journey.departure_date).toLocaleDateString(
                "es-ES",
                options
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JourneysPage;
