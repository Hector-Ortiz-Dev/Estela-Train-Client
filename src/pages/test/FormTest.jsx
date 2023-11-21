function FormTest() {
  return (
    <div className="my-10">
      <h1 className="text-6xl font-main font-bold">Formulario</h1>
      <p className="text-2xl text-gray">Testeo de formulario</p>

      <hr className="border-2 border-gray-light" />

      <form className="flex flex-col items-center justify-center">
        <div className="bg-white/20 max-w-md w-full p-10 mt-16 rounded-md shadow-lg shadow-black border-blue border-8">
          <label>Texto 1</label>
          <input
            type="text"
            name="text1"
            className="w-full border border-blue-light px-4 py-2 rounded-md my-2"
            required
          />
          <label>Texto 2</label>
          <input
            type="text"
            name="text2"
            className="w-full border border-blue-light px-4 py-2 rounded-md my-2"
            required
          />
          <label>Texto 3</label>
          <input
            type="text"
            name="text3"
            className="w-full border border-blue-light px-4 py-2 rounded-md my-2"
            required
          />
        </div>
        <button
          className="w-auto mt-5 bg-blue border-2 border-blue px-12 py-2 text-white font-semibold text-xl rounded-lg shadow-lg shadow-black hover:bg-white hover:border-blue hover:text-blue transition-colors duration-700"
          type="submit"
        >
          Aceptar
        </button>
      </form>
    </div>
  );
}

export default FormTest;
