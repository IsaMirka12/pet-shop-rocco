import ProductoComponente from "./gato/productoComponente"
import listadocomidaPerros from "../data/perros"
function PerrosComponet() {
    return (
      <>
        <h1 className="text-4xl font-extrabold text-yellow-400 animate-bounce text-center">Todo lo mejor para tu engreido perruno</h1>
        <div className=" grid grid-cols-3 justify-between p-8 gap-10" >
            {
                listadocomidaPerros.map(i => {
                    return <ProductoComponente id= {i.id} img = {i.img} precio = {i.precio} nombre = {i.nombre} />     
                })
            }
            
        </div>
        
      </>
    )
  }
  
  export default PerrosComponet