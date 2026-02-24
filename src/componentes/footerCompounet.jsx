
function FooterCompounent() {
    return(
        <>
        <footer className="flex justify-between pl-10 pr-10 text-white bg-red-600 p-5">
            <div>
                <h1 className="font-bold">CONTÁCTANOS</h1>
                <p>Lima Perú</p>
                <p>Telf: (51)912208844</p>
                <p>Email: PetshopRocco@Gmail.pe</p>

            </div>
            <div>
                <h1 className="font-bold">SERVICIO AL CLIENTE</h1>
                <p><a href="">Preguntas Frecuentes</a></p>
                <p><a href="">Terminos y Condiciones</a></p>
                <p><a href="">Políticas de Privacidad</a></p>
                <p><a href="">Libro de Reclamaciones</a></p>

            </div>
            <div className="text-center">
                <h1 className="font-bold">MANTENTE INFORMADO</h1>
                <p><label htmlFor="text">Ingrese sus Nombres</label></p>
                <input placeholder="  Ingrese sus nombres..." type="text" />
                <p><label htmlFor="email">Ingrese su correo</label></p>
                <input type="email" placeholder=" Ingrese su correo..." name="email" id="correo" />
                <p><button className="border mt-2 rounded-lg border-yellow-500 pl-8 pr-8 hover:bg-red-700">SUSCRIBIRSE</button></p>
                

            </div>
        </footer>
        </>
    )
}

export default FooterCompounent