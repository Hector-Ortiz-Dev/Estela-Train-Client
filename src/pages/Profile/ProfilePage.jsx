import { useAuth } from "../../context/AuthContext";
import UserPicture from "../../assets/user.jpg";
import { Link } from "react-router-dom";

function ProfilePage() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="my-12">
      {/* Imagen y datos del usuario */}
      <h1 className="text-6xl font-main font-semibold text-gray-800">
        Perfil
      </h1>

      <hr className="border-2 border-gray-light" />

      <div className="flex flex-col md:flex-row justify-center align-center m-10 space-x-20">
        <img
          className="w-64 h-full border-8 border-gray-light rounded-xl object-cover align-self-center"
          src={UserPicture}
          alt={user.username}
        />

        <div className="flex flex-col">
          <h2 className="text-4xl font-main font-bold text-gray">Username</h2>
          <h2 className="text-2xl font-medium  first-letter:text-blue first-letter:font-black">
            {user.username}
          </h2>
          <h2 className="mt-4 text-4xl font-main font-bold text-gray">
            Nombre
          </h2>
          <h2 className="text-2xl font-medium first-letter:text-blue first-letter:font-black">
            {user.name}
          </h2>
          <h2 className="mt-4 text-4xl font-main font-bold text-gray">
            Género
          </h2>
          <h2 className="text-2xl font-medium">Femenino</h2>
        </div>
      </div>

      <hr className="border-2 border-gray-light" />

      {/* Tabla de opciones 2x2 */}
      <div className="flex flex-col md:flex-row text-4xl justify-center align-center mt-12 space-x-20">
        <div className="flex flex-col justify-center items-center">
          <Link
            to="/profile"
            className="flex bg-green h-24 w-96 p-2 px-10 border-4 border-green rounded-lg text-white font-semibold hover:bg-white hover:text-green hover:fill-green transition-colors duration-700"
          >
            <svg
              viewBox="0 0 576 512"
              aria-hidden="true"
              className="w-16 mr-10 fill-white hover:fill-green transition"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
            </svg>
            Métodos de pago
          </Link>

          <Link
            to="/profile"
            className="flex bg-[#b29a45] h-24 w-96 p-2 px-10 border-4 border-[#b29a45] rounded-lg text-white font-semibold hover:bg-white hover:text-[#b29a45] transition-colors duration-700 mt-5"
          >
            <svg
              viewBox="0 0 512 512"
              aria-hidden="true"
              className="pointer-events-none h-20 mr-10 fill-white transition"
            >
              <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
            </svg>  
            Cambiar contraseña
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Link
            to="/profile"
            className="flex bg-[#366abd] h-24 w-96 p-2 px-10 border-4 border-[#366abd] rounded-lg text-white font-semibold hover:bg-white hover:text-[#366abd] transition-colors duration-700"
          >
            <svg
              viewBox="0 0 448 512"
              aria-hidden="true"
              className="pointer-events-none w-10 mr-10 fill-white transition"
            >
              <path d="M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM224 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            Mis viajes
          </Link>

          <Link
            to="/profile"
            className="flex bg-[#ff0f00] h-24 w-96 p-2 px-10 border-4 border-[#ff0f00] rounded-lg text-white font-semibold hover:bg-white hover:text-[#ff0f00] transition-colors duration-700 mt-5"
          >
            <svg
              viewBox="0 0 512 512"
              aria-hidden="true"
              className="pointer-events-none w-16 mr-10 fill-white transition"
            >
              <path d="M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-75.1 60.9-136 136-136h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8z" />
            </svg>
            Eliminar cuenta
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
