import { useForm } from "react-hook-form";
import { useJourneys } from "../context/JourneyContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { format } from "date-fns";

function JourneyFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createJourney, getJourney, updateJourney } = useJourneys();
  const navigate = useNavigate();
  const params = useParams();
  //console.log(createJourney());

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
        setValue("train", journey.train);
        setValue("status", journey.status);
        setValue("id_to_city", journey.id_to_city);
        setValue("id_from_city", journey.id_from_city);
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
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        Fecha de salida
        <input
          type="datetime-local"
          {...register("departure_date", { valueAsDate: true })} ///...Register devuelve tres propiedades onChange, value y name
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        Fecha de llegada
        <input
          type="datetime-local"
          {...register("arrival_date", { valueAsDate: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        Numero de tren
        <input
          type="number"
          {...register("train", { valueAsNumber: true })}
          placeholder="No. Tren"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        Status
        <input
          type="text"
          {...register("status")}
          placeholder="Status"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        Destino
        <input
          type="text"
          {...register("id_to_city")}
          placeholder="Ciudad de destino"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        Origen
        <input
          type="text"
          {...register("id_from_city")}
          placeholder="Ciudad de origen"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <button className="w-full bg-indigo-500 px-3 py-2 rounded-md" type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default JourneyFormPage;
