import { defaults } from "autoprefixer"
import comidaPrincipal from "../data/masVendido"
import ProductoComponente from "./gato/productoComponente"
import accesorios from "../data/perros"
function ArticleCompounent() {
    return (
        <>
        <img className="h-96 w-full pt-5 " src="./img/banner.jpg" alt="" />
        <div>
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-100 text-center">Lo más Vendido</p>
            <div className=" flex justify-between p-8 gap-10" >
            {
                comidaPrincipal.map(i => {
                    return <ProductoComponente key={i.id} id= {i.id} img = {i.img} precio = {i.precio} nombre = {i.nombre} />     
                })
            }
            </div>
        
        </div>
        </>
    )
    
}
 export default ArticleCompounent