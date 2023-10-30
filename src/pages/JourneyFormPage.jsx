import { useForm } from "react-hook-form";
import { useJourneys } from "../context/JourneyContext";
import { useNavigate } from "react-router-dom";

function JourneyFormPage() {
  const { register, handleSubmit } = useForm();
  const { createJourney } = useJourneys();
  const navigate = useNavigate();
  //console.log(createJourney());

  const onSubmit = handleSubmit((data) => {
    data.departure_date = data.departure_date.toISOString();
    data.arrival_date = data.arrival_date.toISOString();
    console.log(data);
    createJourney(data);
    navigate("/journeys");
  });

  return (
    //Formulario de viaje en tren
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        Fecha de salida
        <input
          type="datetime-local"
          {...register("departure_date", { valueAsDate: true})}
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
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default JourneyFormPage;
