import PropTypes from "prop-types";
import { useJourneys } from "../context/JourneyContext";
import { Link } from "react-router-dom";

function JourneyCard({ journey }) {
  const { deleteJourney } = useJourneys();

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

  return (
    <div className="bg-zinc-800 max-w-md w-full items-center rounded-md text-center my-3">
      <h2 className="font-bold">
        {journey.id_from_city} - {journey.id_to_city}
      </h2>
      <p>
        {new Date(journey.departure_date).toLocaleDateString("es-ES", options)}
      </p>
      <button className="bg-blue-800 rounded-xl px-4 py-1"><Link to={'/journeys/' + journey._id}>Editar</Link></button>
      <button
        className="bg-red-800 rounded-xl px-4 py-1"
        onClick={() => {
          deleteJourney(journey._id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

JourneyCard.propTypes = {
  journey: PropTypes.shape({
    id_from_city: PropTypes.string.isRequired,
    id_to_city: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default JourneyCard;
