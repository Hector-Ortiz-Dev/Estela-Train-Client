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
    <div className="my-10">
      <h1 className="text-center text-6xl font-main font-bold">
        Viajes registrados
      </h1>
      {journeys.map((journey) => (
        <div className="flex justify-center" key={journey._id}>
          <JourneyCard journey={journey} />
        </div>
      ))}
    </div>
  );
}

export default JourneysPage;
