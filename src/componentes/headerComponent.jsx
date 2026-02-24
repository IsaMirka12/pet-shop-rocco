
function HeaderCompounent() {
    return (
      <>
      <h1 className="bg-red-600 text-center text-xl text-white p-2 font-semibold " >Todo lo que necesitas para tu engreido de 4 patas</h1>
      <header className="bg-white flex items-center  justify-between m-auto p-4 ">
        <img className="h-20 w-auto"  src="./img/logo.png" alt="" />
        <input className=" border-yellow-500  w-80 h-10 p-2 border rounded-full text-lg  "  type="text" placeholder="   Buscar..."/>
        <a href="/carrito"  ><img  className="h-8" src="./img/agregar-carrito.png" alt="" /></a>
      </header>
       
      </>
    )
  }
  
  export default HeaderCompounent