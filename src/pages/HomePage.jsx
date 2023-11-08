import { useEffect } from "react";
import { useCities } from "../context/CityContext";
import { Link } from "react-router-dom";
import landingImage from "../assets/train-space.jpg";

function HomePage() {
  const { getCities, cities } = useCities();

  useEffect(() => {
    getCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-16">
      {/* Lema */}
      <h1 className="font-main font-bold text-3xl md:text-8xl mb-8 text-gray">
        Estela <p className="inline-block text-blue">Train</p>
      </h1>
      <h2 className="font-main font-bold text-xl md:text-3xl lg:text-5xl uppercase">
        Tu viaje en las vías del futuro
      </h2>

      {/* Reservar */}
      <div className="flex w-full mt-12 justify-center rounded-lg bg-gray-light p-5">
        <form className="flex w-full items-center justify-center rounded-lg bg-white p-0 ">
          <div className="flex items-center justify-center border-r border-gray p-5">
            <svg
              viewBox="0 0 448 512"
              aria-hidden="true"
              className="pointer-events-none absolute w-5 fill-black transition"
            >
              <path d="M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM224 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </div>
          <select
            autoComplete="Origen"
            className="w-full bg-white pl-2 text-base font-semibold outline-0 border-r border-gray appearance-none"
          >
            {cities.map((city) => (
              <option key={city._id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <div className="flex items-center justify-center p-5">
            <svg
              viewBox="0 0 448 512"
              aria-hidden="true"
              className="pointer-events-none absolute w-5 fill-black transition"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
          <select
            autoComplete="Destino"
            className="w-full bg-white pl-2 text-base font-semibold outline-0 border-l border-r border-gray appearance-none"
          >
            {cities.map((city) => (
              <option key={city._id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <input
            type="date"
            placeholder="Fecha"
            className="w-3/6 text-center bg-white pl-2 text-base font-semibold border-r border-gray"
          />
          <label
            htmlFor="quantity"
            className="bg-white pl-2 text-base font-bold outline-0"
          >
            Pasajeros:
          </label>
          <input
            type="number"
            placeholder="1"
            min={1}
            max={5}
            className="bg-white pl-2 text-base text-center font-semibold outline-0"
          />
          <Link
            to="/journeys"
            className="bg-blue p-2 border-2 border-blue rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-green hover:border-green transition-colors duration-700"
          >
            Buscar
          </Link>
        </form>
      </div>

      {/* ¿Qué es Estela Train? */}
      <div className="flex flex-col md:flex-row justify-between mt-16 rounded-xl shadow-lg shadow-gray p-5 bg-slate-100">
        <img
          src={landingImage}
          alt="train"
          className="w-full md:w-1/2 rounded-lg shadow-lg shadow-black m-10"
        />
        <div className="flex flex-col justify-center items-center md:w-1/2">
          <h3 className="font-main font-bold text-2xl md:text-5xl text-black">
            ¿Qué es Estela Train?
          </h3>
          <p className="font-semibold text-xl md:text-3xl text-gray mt-5">
            Estela Train es un proyecto de tren de alta velocidad que conectará
            las principales ciudades de México.
          </p>

          <p className="font-semibold text-xl md:text-3xl text-gray mt-5">
            El proyecto está en fase de desarrollo y se espera que esté
            terminado para el año 2023.
          </p>

          <p className="font-semibold text-xl md:text-3xl text-gray mt-5">
            ¡Reserva tu lugar desde ahora!
          </p>

          <Link
            to="/journeys"
            className="bg-blue p-2 px-10 border-2 border-blue rounded-lg text-white font-semibold hover:bg-green hover:border-green transition-colors duration-700 mt-5"
          >
            Reservar
          </Link>

          <p className="font-semibold text-xl md:text-3xl text-gray mt-5">
            ¿Quieres saber más?
          </p>
          <Link
            to="/"
            className="bg-blue p-2 px-10 border-2 border-blue rounded-lg text-white font-semibold hover:bg-green hover:border-green transition-colors duration-700 mt-5"
          >
            Conoce más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
