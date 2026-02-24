import { useState, useRef, useEffect } from "react";
import listadocomidaPerros from "../data/perros";
import listadocomidagatos from "../data/comida_gatos";
import listadoMasVendido from "../data/masVendido";
import ProductoComponente from "./gato/productoComponente";

function HeaderCompounent() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const inputRef = useRef(null);

  function buscarDatos(valor) {
    const todosLosProductos = [
      ...listadocomidaPerros,
      ...listadocomidagatos,
      ...listadoMasVendido,
    ];

    const filtrados = todosLosProductos.filter((item) =>
      item.nombre.toLowerCase().includes(valor.toLowerCase())
    );
    setResultados(filtrados.slice(0, 3));
    setMostrarDropdown(true);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setMostrarDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <h1 className="bg-red-600 text-center text-xl text-white p-2 font-semibold">
        Todo lo que necesitas para tu engreido de 4 patas
      </h1>

      <header className="bg-white flex items-center justify-between m-auto p-4 relative">
        <img className="h-20 w-auto" src="./img/logo.png" alt="" />
        <div className="relative w-80" ref={inputRef}>
          <input
            className="border-yellow-500 w-full h-10 p-2 border rounded-full text-lg"
            type="text"
            placeholder="   Buscar..."
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              buscarDatos(e.target.value);
            }}
            onFocus={() => {
              if (resultados.length > 0) setMostrarDropdown(true);
            }}
          />

          {/* Dropdown */}
          {mostrarDropdown && (
            <div className="absolute top-12 left-0 w-full bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-auto">
              {resultados.length > 0 ? (
                resultados.map((item) => (
                  <div key={item.id} className="p-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0">
                    <ProductoComponente
                      id={item.id}
                      img={item.img}
                      precio={item.precio}
                      nombre={item.nombre}
                    />
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-700 font-semibold p-4">
                  No se encontró producto
                </p>
              )}
            </div>
          )}
        </div>

        <a href="/carrito">
          <img className="h-8" src="./img/agregar-carrito.png" alt="" />
        </a>
      </header>
    </>
  );
}

export default HeaderCompounent;