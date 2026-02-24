import ProductoComponente from "./gato/productoComponente"
import listadoComidaGato from "../data/comida_gatos";
function GatosComponet() {
    return (
      <>
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-500 text-center">Lo mejor para tus felinos</h1>
      <h2 className="text-4xl font-extrabold text-yellow-500 animate-pulse text-center  pt-4">Seccion Snacks para el engreido</h2>
        <div className=" flex justify-between p-8 gap-10" >
            <div>
                <figure className="shadow-2xl rounded-lg" >
                    <img  src="./img/gato1.png" alt="" />
                    <figcaption className=" text-center">
                        <p className="font-semibold">Barker salmon y jurel</p>
                        <button className="bg-gray-400 p-1 pl-2 pr-2 rounded-md hover:bg-gray-600">Agregar al carrito</button>
                        <p className="font-bold">20 s/ </p>
                    </figcaption>
                </figure>
            </div>
            <div>
                <figure className="shadow-2xl rounded-lg" >
                    <img src="./img/gatoEs2.jpeg" alt="" />
                    <figcaption className=" text-center">
                        <p className="font-semibold">Bones</p>
                        <button className="bg-gray-400 p-1 pl-2 pr-2 rounded-md hover:bg-gray-600">Agregar al carrito</button>
                        <p className="font-bold">18.90 s/ </p>
                    </figcaption>
                </figure>
            </div>
            <div>
                <figure className="shadow-2xl rounded-lg" >
                  <img src="./img/gatosn3.png" alt="" />
                    <figcaption className=" text-center">
                        <p className="font-semibold">Catnip</p>
                        <button className="bg-gray-400 p-1 pl-2 pr-2 rounded-md hover:bg-gray-600">Agregar al carrito</button>
                        <p className="font-bold">34.90 s/ </p>
                    </figcaption>
                </figure>
            </div>
        </div>

        <h1 className="text-4xl font-extrabold text-yellow-400 animate-bounce text-center">Galletas premiun</h1>
        <div className=" grid grid-cols-3 justify-between p-8 gap-10" >
            {
                listadoComidaGato.map(i => {
                    return <ProductoComponente key={i.id} id= {i.id} img = {i.img} precio = {i.precio} nombre = {i.nombre} />     
                })
            }
            
        </div>
        
      </>
    )
  }
  
  export default GatosComponet