/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePayMethods } from "../../context/PayMethodsContext";
import PaymentMethodCard from "../../components/PaymentMethodCard";

function MyPaymentMethods() {
  const { user } = useAuth();
  const { getPayMethodIdUser, payMethods } = usePayMethods();

  const [methodsData, setMethodsData] = useState([]);

  useEffect(() => {
    getPayMethodIdUser(user.id);
  }, []);

  useEffect(() => {
    setMethodsData(payMethods);
  }, [payMethods]);

  return (
    <div className="my-10">
      <h1 className="text-6xl font-main font-bold">Métodos de Pago</h1>
      <p className="text-2xl text-gray">Gestiona tus métodos de pago</p>

      <hr className="border-2 border-gray-light mb-5" />

      <Link
        to="/add-paymentmethods"
        className=" flex w-auto justify-center items-center icon-hover-green bg-green mb-5 py-2 px-6 border-4 border-green text-xl rounded-lg text-white font-semibold hover:bg-white hover:text-green hover:fill-green transition-colors duration-700"
      >
        Agregar nuevo método de pago
      </Link>

      {payMethods.map((payMethod) => (
        <div className="flex justify-center" key={payMethod._id}>
          <PaymentMethodCard paymentMethod={payMethod} />
        </div>
      ))}
    </div>
  );
}

export default MyPaymentMethods;
