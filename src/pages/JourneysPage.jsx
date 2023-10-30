import { useEffect } from "react";
import { useJourneys } from "../context/JourneyContext";
//import { useNavigate } from "react-router-dom";
import JourneyCard from "../components/JourneyCard";

function JourneysPage() {
  const { getJourneys, journeys } = useJourneys();

  useEffect(() => {
    getJourneys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (journeys.length === 0) return <h1>No hay salidas</h1>;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Horarios de salida</h1>
      {/* {journeys.map((journey) => (
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
      ))} */}
      {journeys.map((journey) => (
        <div className="flex justify-center" key={journey._id}>
          <JourneyCard journey={journey} />
        </div>
      ))}
    </div>
  );
}

export default JourneysPage;
