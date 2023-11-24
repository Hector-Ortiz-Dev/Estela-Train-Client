/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useJourneys } from "../context/JourneyContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/es-mx";
import { useEffect } from "react";

function MyJourneysCard({ payment }) {
  const { getJourney, journeys } = useJourneys();
  dayjs.locale("es-mx");

  useEffect(() =>{
    getJourney(payment.id_journey);
  },[])

  return (
    <div className="flex w-full items-center my-3 py-5 justify-center border-4 bg-gray-light border-gray rounded-xl shadow-md shadow-gray">
      <h2 className="flex w-full items-center justify-center font-bold text-lg border-r border-gray">
        {dayjs(payment.date).format("DD/MM/YYYY hh:mma")}
      </h2>

      <p className="flex w-full items-center justify-center font-semibold text-lg">
      {journeys.origin} - {journeys.destination}
      </p>

      <p className="flex w-2/4 items-center justify-center font-semibold text-lg border-l border-gray">
        {"$" + payment.total.toFixed(2) + "MX"}
      </p>

      <div className="flex w-1/2 text-white font-bold items-center justify-center border-l px-10 border-gray">
        <button className="bg-blue rounded-xl px-6 py-2 mr-2">
          <Link to={"/tickets/" + payment._id}>Ver detalles</Link>
        </button>
      </div>
    </div>
  );
}

MyJourneysCard.propTypes = {
  payment: PropTypes.shape({
    id_journey: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default MyJourneysCard;
