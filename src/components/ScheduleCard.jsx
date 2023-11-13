/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useJourneys } from "../context/JourneyContext";
import { Link } from "react-router-dom";

function ScheduleCard() {
  //const { deleteJourney } = useJourneys();

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
        {"8:00am"} - {"10:40am"}
      </h2>

      <p className="flex w-full items-center text-4xl justify-center font-semibold">
        {"MX $1,000.00"}
      </p>

      <div className="flex w-1/2 text-white font-bold items-center justify-center border-l border-gray">
        <button className="bg-blue rounded-xl px-6 py-2 mr-2">
          Seleccionar
        </button>
      </div>
    </div>
  );
}

ScheduleCard.propTypes = {
  journey: PropTypes.shape({
    id_from_city: PropTypes.string.isRequired,
    id_to_city: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ScheduleCard;
