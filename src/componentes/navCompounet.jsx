

function NavCompounent() {
  return (
    <>
      <div className="">
        <ul className=" bg-gray-400 p-4 pr-10 pl-10  flex items-center  justify-between  text-white font-semibold">
          <li className="hover:text-red-900"><a href="./">INICIO</a></li>
          <li className="hover:text-red-900"><a href="/gatos">GATOS</a></li>
          <li className="hover:text-red-900"><a href="/perros">PERROS</a></li>
          
        </ul>
        
      </div>
     
    </>
  )
}

export default NavCompounent
