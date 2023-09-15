import React from 'react'
import { useForm } from 'react-hook-form'

function LoginPage() {

  const {register, handleSubmit} = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
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

export default LoginPage