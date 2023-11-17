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
    //timeZoneName: "short", // Nombre de la zona horaria
  };

  //console.log(journey.departure_date);
  //const dateTemp = new Date(journey.departure_date).toLocaleDateString("es-MX", options);
  //console.log(dateTemp);

  return (
    <div className="flex w-full items-center my-3 py-5 justify-center border-4 bg-gray-light border-gray rounded-xl shadow-md shadow-gray">

      <h2 className="flex w-full items-center justify-center font-bold text-3xl border-r border-gray">
        {journey.origin} - {journey.destination}
      </h2>

      <p className="flex w-full items-center justify-center font-semibold text-lg">
        {new Date(journey.departure_date).toLocaleDateString("es-MX", options)}
      </p>

      <p className="flex w-2/4 items-center justify-center font-semibold text-lg border-l border-gray">
        {"MX $" + journey.price.toFixed(2)}
      </p>

      <p className="flex w-2/4 items-center justify-center font-semibold text-lg border-l border-gray">
        {"Seats: " + journey.seats + "/40"}
      </p>

      <div className="flex w-1/2 text-white font-bold items-center justify-center border-l px-10 border-gray">
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
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    train: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    seats: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default JourneyCard;
