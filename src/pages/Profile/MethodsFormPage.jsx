/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePayMethods } from "../../context/PayMethodsContext";

function MethodsFormPage() {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createPayMethod } = usePayMethods();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((dataCard) => {
    console.log(dataCard);
    createPayMethod(dataCard);
    navigate("/paymentmethods");
  });

  return (
    <div className="my-10">
      <h1 className="text-6xl font-main font-bold">Métodos de Pago</h1>
      <p className="text-2xl text-gray">Agrega el nuevo método de pago</p>

      <hr className="border-2 border-gray-light mb-5" />

      <div className="flex h-[calc(80vh-100px)] items-center justify-center mb-10">
        <div className="max-w-md p-10 rounded-md shadow-xl shadow-gray">
          <form onSubmit={onSubmit}>

            <p className="font-bold">Número de tarjeta</p>
            <input
              type="number"
              {...register("card_number", {
                required: "Número de tarjeta es requerido",
                pattern: {
                  value: /^\d{16}$/, // Validar que el número tenga 16 dígitos
                  message: "El número de tarjeta debe contener 16 dígitos",
                },
              })}
              placeholder="Número de tarjeta"
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2"
            />
            {errors.card_number && <p className="w-full text-red-600">{errors.card_number.message}</p>}

            <p className="font-bold">Mes</p>
            <input
              type="number"
              {...register("month", {
                required: "Mes es requerido",
                min: {
                  value: 1,
                  message: "Mes debe ser mayor o igual a 1",
                },
                max: {
                  value: 12,
                  message: "Mes debe ser menor o igual a 12",
                },
              })}
              placeholder="Mes"
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2"
            />
            {errors.month && <p className="w-full text-red-600">{errors.month.message}</p>}

            <p className="font-bold">Año</p>
            <input
              type="number"
              {...register("year", {
                required: "Año es requerido",
                min: {
                  value: new Date().getFullYear(),
                  message: "Año debe ser igual o mayor al actual",
                },
              })}
              placeholder="Año"
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2"
            />
            {errors.year && <p className="w-full text-red-600">{errors.year.message}</p>}

            <p className="font-bold">CVV</p>
            <input
              type="number"
              {...register("cvv", {
                required: "CVV es requerido",
                minLength: {
                  value: 3,
                  message: "CVV debe tener al menos 3 dígitos",
                },
                maxLength: {
                  value: 4,
                  message: "CVV debe tener máximo 4 dígitos",
                },
              })}
              placeholder="CVV"
              className="w-full border-gray border-2 px-4 py-2 rounded-md my-2"
            />
            {errors.cvv && <p className="w-full text-red-600">{errors.cvv.message}</p>}

            <button
              className="w-full bg-indigo-500 text-white font-bold px-3 py-2 rounded-md"
              type="submit"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MethodsFormPage;
