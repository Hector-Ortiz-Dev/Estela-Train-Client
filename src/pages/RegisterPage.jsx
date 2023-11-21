/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      {/* Formulario */}
      <div className="flex h-[calc(80vh-100px)] items-center justify-center mb-10">
        <div className="bg-white/20 max-w-md w-full p-10 rounded-md shadow-2xl shadow-black">
          {registerErrors.map((error, i) => (
            <div className="bg-red-500 fixed p-2 mb-5 text-white rounded-lg" key={i}>
              {error}
            </div>
          ))}
          <h1 className="text-4xl mb-5 font-main font-bold">Registrar</h1>
          
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full px-4 py-2 rounded-md my-2"
              placeholder="Nombre de usuario"
            />
            {errors.username && (
              <p className="text-red-500">El nombre de usuario es requerido</p>
            )}

            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 rounded-md my-2"
              placeholder="Nombre completo"
            />
            {errors.name && (
              <p className="text-red-500">El nombre completo es requerido</p>
            )}

            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 rounded-md my-2"
              placeholder="Contrasena"
            />
            {errors.password && (
              <p className="text-red-500">La contraseña es requerida</p>
            )}

            <button className="w-full mt-5 bg-blue border-2 border-blue p-2 text-white font-semibold text-xl rounded-lg hover:bg-white hover:border-blue hover:text-blue transition-colors duration-700" type="submit">Registrar</button>
          </form>
          <p className="flex gap-x-2 justify-between">
            Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-blue underline">
              Ingresar
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
