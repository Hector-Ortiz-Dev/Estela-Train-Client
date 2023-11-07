import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(80vh-100px)] items-center justify-center mb-10">
      <div className="bg-white-20 max-w-md w-full p-10 rounded-md shadow-2xl shadow-black">
        {loginErrors.map((error, i) => (
          <div className="bg-red-500 fixed p-2 mb-5 text-white rounded-lg" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-4xl mb-5 font-main font-bold">Ingresar</h1>

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
            type="password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 rounded-md my-2"
            placeholder="Contrasena"
          />
          {errors.password && (
            <p className="text-red-500">La contrasena es requerida</p>
          )}

          <button className="w-full mt-5 bg-blue border-2 border-blue p-2 text-white font-semibold text-xl rounded-lg hover:bg-white hover:border-blue hover:text-blue transition-colors duration-700" type="submit">Ingresar</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          No tienes cuenta?{" "}
          <Link to="/register" className="text-blue underline">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
