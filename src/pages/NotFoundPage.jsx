import { Link } from "react-router-dom";
import Error404 from "../assets/404.png";

function NotFoundPage() {
  return (
    <div className="my-16">
      <p
        className="
          text-center
          text-6xl
          font-bold
          font-main
          text-gray
          mb-10
        "
      >
        404 Page not found
      </p>

      {/* Imagen 404 */}
      <div className="flex justify-center">
        <img
          src={Error404}
          alt="404"
          className="h-full md:w-1/2 border-8 border-gray rounded-lg"
        />
      </div>

      {/* Boton para regresar a la pagina principal */}
      <div className="flex justify-center">
        <Link
          to="/"
          className="bg-gray p-4 px-16 border-8 border-gray rounded-lg text-white text-6xl font-semibold hover:bg-white hover:border-gray transition-colors hover:text-gray duration-700 mt-5"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
