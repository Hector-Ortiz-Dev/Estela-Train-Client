function Footer() {
    return (
        <footer className="bg-black py-10 px-10">
        <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col space-y-3">
            <h3 className="text-2xl font-bold text-white font-main">Estela Train</h3>
            <p className="text-gray-light">
                Tu viaje en las vías del futuro
            </p>
            </div>
    
            <div className="flex flex-col space-y-3">
            <h3 className="text-2xl font-bold text-white font-main">Contacto</h3>
            <p className="text-gray-light">Teléfono: 81-82XX-XXXX</p>
            <p className="text-gray-light">{"Correo: "}
                <a href="mailto:mb.hector.ortiz@gmail.com" className="text-green underline">
                    mb.hector.ortiz@gmail.com
                </a>
            </p>
            </div>

            <div className="flex flex-col space-y-3">
            <h3 className="text-2xl font-bold text-white font-main">Acerca de</h3>
            <p className="text-gray-light">Hecho con ❤️ por Héctor Ortiz</p>
            <p className="text-gray-light">2023</p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;