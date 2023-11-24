/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { usePayMethods } from "../context/PayMethodsContext";
import { useNavigate } from "react-router-dom";

function PaymentMethodCard({ paymentMethod }) {
  const { updatePayMethod } = usePayMethods();
  const navigate = useNavigate();

  const onSubmit = () =>{
    const data = {
      active: false
    };

     updatePayMethod(paymentMethod._id, data);
     navigate("/profile");
  }

  return (
    <div className="flex w-full items-center my-3 py-5 justify-center border-4 bg-gray-light border-gray rounded-xl shadow-md shadow-gray">
      <h2 className="flex w-full items-center justify-center font-bold text-2xl border-r border-gray">
        {"**** **** **** " + paymentMethod.card_number.slice(-4)}
      </h2>

      <p className="flex w-full items-center justify-center font-semibold text-xl">
      {"Fecha de vencimiento: " + paymentMethod.month + "/" + paymentMethod.year.slice(-2)}
      </p>

      <div className="flex w-1/2 text-white font-bold items-center justify-center border-l px-10 border-gray">
        <button className="bg-red-700 rounded-xl px-6 py-2 mr-2"
        onClick={onSubmit}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

PaymentMethodCard.propTypes = {
  paymentMethod: PropTypes.shape({
    card_number: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PaymentMethodCard;
