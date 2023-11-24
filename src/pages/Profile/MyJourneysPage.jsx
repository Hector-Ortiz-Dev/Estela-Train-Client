/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { usePayments } from "../../context/PaymentContext";
import MyJourneysCard from "../../components/MyJourneysCard";

function MyJourneysPage() {
  const { user } = useAuth();
  const { getPaymentsbyUser, payments } = usePayments();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.entries(payments).length) {
      setLoading(true);
    }
  }, [payments]);

  console.log(payments);

  useEffect(() => {
    getPaymentsbyUser(user.id);
  }, []);

  if (!isLoading)
    return (
      <div className="my-10">
        <h1 className="text-6xl font-main font-bold">Mis viajes</h1>
        <p className="text-2xl text-gray">Obteniendo información...</p>

        <hr className="border-2 border-gray-light" />

        <div className="flex flex-col w-full md:flex-row align-center mt-12">
          <p className="text-6xl font-main text-gray-light">Cargando...</p>
        </div>
      </div>
    );

  return (
    <div className="my-10">
      <h1 className="text-6xl font-main font-bold">Mis viajes</h1>
      <p className="text-2xl text-gray">Aqui se muestran todos sus viajes</p>

      <hr className="border-2 border-gray-light mb-5" />

      {payments.map((payment) => (
        <div className="flex justify-center" key={payment._id}>
          <MyJourneysCard payment={payment} />
        </div>
      ))}
    </div>
  );
}

export default MyJourneysPage;
