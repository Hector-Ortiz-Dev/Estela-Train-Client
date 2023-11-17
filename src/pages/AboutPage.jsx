import { Link } from "react-router-dom";
import TrainMonterrey from "../assets/train-monterrey.jpg";
import TrainYucatan from "../assets/train-yucatan.jpg";
import TrainJarilo from "../assets/train-jarilo.jpg";

function AboutPage() {
  return (
    <div className="my-12">
      <h1 className="text-6xl font-main font-semibold text-gray-800">
        Acerca de
      </h1>

      <hr className="border-2 border-gray-light" />
      
      {/* Acerca de Estela Train */}
      <div className="flex flex-col items-center justify-center my-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold font-main">
            Estela Train
          </div>
          <div className="text-xl">
            Estela Train es un proyecto de tren de alta velocidad que conectará
            las principales ciudades de México.
          </div>
          <div className="text-xl">
            El proyecto está en fase de desarrollo y se espera que esté
            terminado para el año 2023.
          </div>
          <div className="text-xl">¡Reserva tu lugar desde ahora!</div>
          <Link
            to="/journeys"
            className="bg-blue p-2 px-10 border-2 border-blue rounded-lg text-white text-xl font-semibold hover:bg-green hover:border-green transition-colors duration-700 my-5"
          >
            Reservar
          </Link>
        </div>

      <hr className="border-2 w-full border-gray-light" />

        {/* Nuestro equipo */}
        <div className="flex flex-col items-center justify-center my-10">
          <div className="text-3xl font-bold font-main">Nuestro equipo</div>
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl font-bold font-main">
                Héctor Javier Ortiz Muñiz
              </div>
              <div className="text-xl">Desarrollador Full Stack</div>
              <div className="text-xl">
                <a href="mb.hector.ortiz@gmail.com">
                  mb.hector.ortiz@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

      <hr className="border-2 w-full border-gray-light" />

        {/* Imagenes */}
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold font-main">Imágenes</div>
            <div className="text-xl">
              Todas las imágenes utilizadas en este proyecto fueron obtenidas de
              <a href="https://unsplash.com/"> Unsplash</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-5">
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl font-bold font-main">Monterrey</div>
              <div className="flex justify-center text-xl">
                <img
                  src={TrainMonterrey}
                  alt="train"
                  className="w-full md:w-1/2 rounded-lg shadow-lg shadow-black mb-10"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl font-bold font-main">Yucatán</div>
                <div className="flex justify-center text-xl">
                  <img
                    src={TrainYucatan}
                    alt="train"
                    className="w-full md:w-1/2 rounded-lg shadow-lg shadow-black mb-10"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl font-bold font-main">Jarilo-IV</div>
                <div className="flex justify-center text-xl">
                  <img
                    src={TrainJarilo}
                    alt="train"
                    className="w-full md:w-1/2 rounded-lg shadow-lg shadow-black mb-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
