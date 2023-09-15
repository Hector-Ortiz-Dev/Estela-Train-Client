import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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
  }, [isAuthenticated]);

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        {
          loginErrors.map((error, i) => (
            <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
              {error}
            </div>
          ))
        }
        <h1 className='text-2xl font-bold'>Ingresar</h1>

        <form onSubmit={onSubmit}>
          <input
            type='text'
            {...register("username", { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Nombre de usuario'
          />
          {errors.username && (
            <p className='text-red-500'>El nombre de usuario es requerido</p>
          )}

          <input
            type='password'
            {...register("password", { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Contrasena'
          />
          {errors.password && (
            <p className='text-red-500'>La contrasena es requerida</p>
          )}

          <button type='submit'>Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage