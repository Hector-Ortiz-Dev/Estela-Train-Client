/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function ScheduleCard({ journey }) {
  // Obtener horas
  const departureDate = dayjs(journey.departure_date);
  const departureTime = departureDate.format("hh:mm a");

  const navigate = useNavigate();

  // Seleccionar viaje y continuar a pasajeros
  const selectJourney = () => {
    //navigate("/passengers");
  };

  return (
    <div className="flex w-full items-center my-3 py-5 justify-center border-4 bg-gray-light border-gray rounded-xl shadow-md shadow-gray">
      <h2 className="flex w-full items-center justify-center font-bold text-2xl border-r border-gray">
        {"Salida: " + departureTime}
      </h2>

      <p className="flex w-full items-center text-3xl justify-center font-semibold">
        {"$" + journey.price.toFixed(2) + " MXN"}
      </p>

      {/* Asientos */}
      <p className="flex w-2/4 items-center justify-center font-semibold text-lg border-l border-gray">
        {"Asientos: " + journey.seats + "/40"}
      </p>

      <div className="flex w-1/2 text-white font-bold items-center justify-center border-l border-gray">
        <button
          className="bg-blue rounded-xl px-6 py-2 mr-2"
          onClick={selectJourney}
        >
          Seleccionar
        </button>
      </div>
    </div>
  );
}

ScheduleCard.propTypes = {
  journey: PropTypes.shape({
    departure_date: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    seats: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ScheduleCard;
