import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit( async (values) => {
    signup(values);
  });

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
        registerErrors.map((error, i)  => (
          <div className='bg-red-500 p-2 text-white' key={i}>
            {error}
          </div>
        ))
      }  
        <form
          onSubmit={onSubmit}
        >
          <input
            type='text'
            { ...register("username", { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Nombre de usuario'
          />
            {errors.username && (
              <p className='text-red-500'>El nombre de usuario es requerido</p>
            )}
          
          <input
            type='text'
            { ...register("name", { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Nombre completo'
          />
            {errors.name && (
              <p className='text-red-500'>El nombre completo es requerido</p>
            )}
          
          <input
            type='password'
            { ...register("password",{ required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Contrasena'
          />
            {errors.password && (
              <p className='text-red-500'>La contrasena es requerida</p>
            )}
          
          <button type='submit'>Registrar</button>
        </form>
    </div>
  )
}

export default RegisterPage