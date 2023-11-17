import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logoText from "../assets/logotext.png";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  //console.log(user);

  return (
    <nav className="flex w-full justify-around py-5 top-0 left-0 right-0 z-10 bg-white/80 shadow-lg backdrop:blur-md">
      {/* Links Section */}
      <div className="items-center hidden space-x-8 lg:flex">
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            {/* <h1 className="text-2xl font-bold">Estela Train</h1> */}
            <img src={logoText} alt="logo" className="h-8" />
          </Link>
        </div>
        
        <Link
          to="/"
          className="flex text-black hover:text-blue-light text-xl
                    cursor-pointer font-bold transition-colors duration-300 hover:underline"
        >
          Inicio
        </Link>

        <Link
          to="/contact"
          className="flex text-black hover:text-blue-light text-xl
                    cursor-pointer font-bold transition-colors duration-300 hover:underline"
        >
          Contacto
        </Link>

        <Link
          to="/about"
          className="flex text-black hover:text-blue-light text-xl
                    cursor-pointer font-bold transition-colors duration-300 hover:underline"
        >
          Acerca de
        </Link>
      </div>

      {/* Logo */}

      {/* Auth Section */}
      <div className="flex items-center space-x-5">
        {isAuthenticated ? ( // Si el usuario está logeado
          <>
            <p className="text-3xl font-semibold first-letter:text-blue first-letter:font-black">
              {user.name}
            </p>
            <Link
              to="/profile"
              className="bg-blue border-blue border-2 shadow text-white font-semibold px-4 py-1 rounded-full hover:bg-white hover:text-blue transition-colors duration-700"
            >
              <svg
                className="inline-block h-5 w-5 mr-1 align-text-top"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
              Perfil
            </Link>
            <Link
              to="/"
              onClick={() => {
                logout();
              }}
              className="bg-gray border-gray border-2 shadow text-white font-semibold px-4 py-1 rounded-full hover:bg-white hover:text-gray transition-colors duration-700"
            >
              Cerrar sesión
            </Link>
          </>
        ) : (
          // Si el usuario no está logeado
          <>
            <Link
              to="/Login"
              className="bg-gray border-gray border-2 shadow text-white font-semibold px-6 py-1 rounded-full hover:bg-white hover:text-gray transition-colors duration-700"
            >
              Ingresar
            </Link>
            <Link
              to="/Register"
              className="bg-blue border-blue border-2 shadow text-white font-semibold px-4 py-1 rounded-full hover:bg-white hover:text-blue transition-colors duration-700"
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
