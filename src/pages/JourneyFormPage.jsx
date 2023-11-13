/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useJourneys } from "../context/JourneyContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { format } from "date-fns";
import { useCities } from "../context/CityContext";

function JourneyFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createJourney, getJourney, updateJourney } = useJourneys();
  const { getCities, cities } = useCities();
  const navigate = useNavigate();
  const params = useParams();
  //console.log(createJourney());

  useEffect(() => {
    getCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function loadJourney() {
      if (params.id) {
        const journey = await getJourney(params.id);
        console.log(journey);

        const originalDate = new Date(journey.departure_date);
        const formattedDate = format(originalDate, "yyyy-MM-dd'T'HH:mm");
        console.log(formattedDate);
        setValue("departure_date", formattedDate);

        const originalDate2 = new Date(journey.arrival_date);
        const formattedDate2 = format(originalDate2, "yyyy-MM-dd'T'HH:mm");
        console.log(formattedDate2);
        setValue("arrival_date", formattedDate2);

        setValue("origin", journey.origin);
        setValue("destination", journey.destination);
        setValue("train", journey.train);
        setValue("price", journey.price);
      }
    }
    loadJourney();
  }, [getJourney, params.id, setValue, updateJourney]);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateJourney(params.id, data);
    } else {
      data.departure_date = data.departure_date.toISOString();
      data.arrival_date = data.arrival_date.toISOString();
      console.log("Creando viaje: " + data);
      createJourney(data);
    }
    navigate("/journeys");
  });

  return (
    //Formulario de viaje en tren
    <>
      <h1 className="w-full text-center my-10 text-6xl font-bold font-main">
        Registro de viajes
      </h1>

      <div className="flex h-[calc(80vh-100px)] items-center justify-center mb-10">
        <div className="max-w-md p-10 rounded-md shadow-xl shadow-gray">
          <form onSubmit={onSubmit}>

            Origen
            <select
              {...register("origin")}
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2 appearance-none"
            >
              {cities.map((city) => (
                <option key={city._id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>

            Destino
            <select
              {...register("destination")}
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2 appearance-none"
            >
              {cities.map((city) => (
                <option key={city._id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>

            Fecha de salida
            <input
              type="datetime-local"
              {...register("departure_date", { valueAsDate: true })}
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2"
            />

            Fecha de llegada
            <input
              type="datetime-local"
              {...register("arrival_date", { valueAsDate: true })}
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2"
            />

            Tren
            <input
              type="number"
              {...register("train", { valueAsNumber: true })}
              placeholder="No. Tren"
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2"
            />

            Precio
            <input
              type="float"
              {...register("price", { valueAsNumber: true })}
              placeholder="Precio"
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2"
            />

            <button
              className="w-full bg-indigo-500 text-white font-bold px-3 py-2 rounded-md"
              type="submit"
            >
              Guardar
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default JourneyFormPage;
