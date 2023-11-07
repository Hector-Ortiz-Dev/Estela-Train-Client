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
    <div className="flex w-full items-center my-3 py-5 justify-center border-4 bg-gray-light border-gray rounded-xl shadow-md shadow-gray">

      <h2 className="flex w-full items-center justify-center font-bold text-3xl border-r border-gray">
        {journey.id_from_city} - {journey.id_to_city}
      </h2>

      <p className="flex w-full items-center justify-center font-semibold text-lg">
        {new Date(journey.departure_date).toLocaleDateString("es-ES", options)}
      </p>

      <div className="flex w-1/2 text-white font-bold items-center justify-center border-l border-gray">
        <button className="bg-blue rounded-xl px-6 py-2 mr-2">
          <Link to={"/journeys/" + journey._id}>Editar</Link>
        </button>

        <button
          className="bg-red-800 rounded-xl px-6 py-2"
          onClick={() => {
            deleteJourney(journey._id);
          }}
        >
          Eliminar
        </button>
      </div>
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
