import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PassengersPage() {
  let navigate = useNavigate();

  // Obtener el ticket de localStorage
  const ticket = JSON.parse(localStorage.getItem("ticket"));
  console.log(ticket);

  // Obtener numero de pasajeros
  const passengersNum = parseInt(ticket?.passengers);

  const [passengers, setPassengers] = useState([]);

  // Regresar a Home si no hay ticket
  useEffect(() => {
    if (!ticket) {
      navigate("/");
    }
  });

  const handlePassengerInfoChange = (index, field, value) => {
    setPassengers((prevPasajeros) => {
      const updatedPasajeros = [...prevPasajeros];
      if (!updatedPasajeros[index]) {
        updatedPasajeros[index] = {}; // Si es un pasajero nuevo, inicializarlo como un objeto vacío
        updatedPasajeros[index]["genero"] = "Masculino";
        updatedPasajeros[index]["tipo"] = "Adulto";
      }
      updatedPasajeros[index][field] = value; // Actualizar el campo especifico del pasajero
      return updatedPasajeros;
    });
  };

  const generatePassengerForms = () => {
    const forms = [];
    for (let i = 0; i < passengersNum; i++) {
      forms.push(
        <div
          className="bg-white/20 max-w-md w-full p-10 mt-5 rounded-md shadow-lg shadow-black"
          key={i}
        >
          <h1 className="text-2xl mb-5 font-bold">Pasajero {i + 1}</h1>
          <input
            type="text"
            className="w-full border border-blue-light px-4 py-2 rounded-md my-2"
            placeholder="Nombre completo"
            onChange={(e) =>
              handlePassengerInfoChange(i, "nombre", e.target.value)
            }
            required
          />
          <select
            className="w-full border border-blue-light px-4 py-2 rounded-md my-2 appearance-none"
            onChange={(e) =>
              handlePassengerInfoChange(i, "genero", e.target.value)
            }
          >
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </select>
          <select
            className="w-full border border-blue-light px-4 py-2 rounded-md my-2 appearance-none"
            onChange={(e) =>
              handlePassengerInfoChange(i, "tipo", e.target.value)
            }
          >
            <option>Adulto</option>
            <option>Niño</option>
            <option>Adulto mayor</option>
          </select>
        </div>
      );
    }
    return forms;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passengers.length < passengersNum) {
      console.log("ERROR INGRESA TODOS LOS DATOS");
      return;
    }
    const ticketData = {
      origin: ticket.origin,
      destination: ticket.destination,
      date: ticket.date,
      passengers: ticket.passengers,
      id_journey: ticket.id_journey,
      passengersInfo: passengers
    };
    localStorage.setItem("ticket", JSON.stringify(ticketData));
    navigate("/payment");
  };

  return (
    <div className="my-10">
      <h1 className="text-6xl font-main font-bold">Pasajeros</h1>
      <p className="text-2xl text-gray">
        Completa la información solicitada de los pasajeros
      </p>

      <hr className="border-2 border-gray-light" />

      {/* Formularios de pasajeros */}
      <form
        className="flex flex-col my-10 items-center justify-center"
        onSubmit={handleSubmit}
      >
        {generatePassengerForms()} {/* Generar formularios */}
        <button
          type="submit"
          className="w-auto my-5 bg-blue border-2 border-blue px-12 py-2 text-white font-semibold text-xl rounded-lg shadow-lg shadow-black hover:bg-white hover:border-blue hover:text-blue transition-colors duration-700"
          // onClick={handleSubmit}
        >
          Siguiente
        </button>
      </form>
    </div>
  );
}

export default PassengersPage;
