function ContactPage() {
  return (
    <>
      {/* Información de contacto de la empresa */}
      <div className="flex flex-col items-center justify-center my-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold font-main">Contacto</div>
          <div className="text-xl">Teléfono: 81-82XX-XXXX</div>
          <div className="text-xl">
            {"Correo: "}
            <a href="mailto:estela_rail_miib@gmail.com">
              estela_train_miib@gmail.com
            </a>
          </div>
          <div className="text-xl">Facebook: Estela Rail Official</div>
          <div className="text-xl">X: @EstelaRailOfficial</div>
          <div className="text-xl">Instagram: @EstelaRailOfficial</div>
        </div>
      </div>

      {/* Información de ubicación de la empresa */}
      <div className="flex flex-col items-center justify-center my-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold font-main">Ubicación</div>
          <div className="text-xl">
            Dirección: Pedro de Alba, Niños Héroes, Ciudad Universitaria, San
            Nicolás de los Garza
          </div>
          <div className="text-xl">Código postal: 66451</div>
          <div className="text-xl">Estado: Nuevo León</div>
        </div>
      </div>

      {/* Mapa de ubicación de la empresa */}
      <div className="flex flex-col items-center justify-center my-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold font-main">Mapa</div>
          <div className="text-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.667447123765!2d-100.30971868503174!3d25.72599098363445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bd6f2f6c4a7b%3A0x5f9e4c8e2d5b4b0e!2sPedro%20de%20Alba%2C%20Ni%C3%B1os%20H%C3%A9roes%2C%20Ciudad%20Universitaria%2C%2066451%20San%20Nicol%C3%A1s%20de%20los%20Garza%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1622919940310!5m2!1ses-419!2smx"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
