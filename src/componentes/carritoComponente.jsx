import React, { useState, useEffect } from 'react';

const CarritoComponent = ({Swal}) => {
    const [carrito, setCarrito] = useState([]);
    const [productosAgrupados, setProductosAgrupados] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agruparProductosXId = (listadoProductos) => {
        let productosAgrupados = [];
        for (let index = 0; index < listadoProductos.length; index++) {
            const producto = listadoProductos[index];
            const idEncontrado = productosAgrupados.find(p => p.id == producto.id)
            if(!idEncontrado) {
                productosAgrupados.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    img: producto.img,
                    precio: producto.precio,
                    cantidad: producto.cantidad ? producto.cantidad : 1
                })
            } else {
                idEncontrado.cantidad += 1; 
            }
        }
        setProductosAgrupados(productosAgrupados)
        return productosAgrupados;
    }

    const calcularPrecioYCantidadTotal = (productosAgrupados) => {
        let montoTotal = 0, cantidadTotal = 0;
        productosAgrupados.forEach(producto => {
            montoTotal += (producto.cantidad * producto.precio);
            cantidadTotal += producto.cantidad; 
        });

        setCantidadTotal(cantidadTotal);
        setMontoTotal(montoTotal);
    }

    const eliminarProducto = (idProducto) => {
        Swal.fire({
            title: "Realmente deseas eliminar el producto del carrito?",
            text: null,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, deseo eliminarlo",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
                productosAgrupados.forEach(p => {
                    if(p.id === idProducto) {
                        p.cantidad -= 1;
                    }
                })
        
                let productosRestantes = []
                productosAgrupados.forEach(p => {
                    if(p.cantidad > 0) {
                        productosRestantes.push(p);
                    } 
                })
                localStorage.setItem("carrito", JSON.stringify(productosRestantes))
                setCarrito(productosRestantes)
                Swal.fire({
                    title: "El producto fue eliminado del carrito!",
                    text: null,
                    icon: "success"
                });
            }
          });
        
    }

    useEffect(() => {
        // Recuperar el carrito del localStorage cuando el componente se monta
        const carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
        const productosAgrupados = agruparProductosXId(carritoLocal)
        setCarrito(productosAgrupados);
    }, []);

    useEffect(() => {
        calcularPrecioYCantidadTotal(productosAgrupados);
    })

  
   

    return (
        <div>
            <h2 className="text-4xl pt-4 text-center text-yellow-500  font-bold mb-4">Carrito de Compras</h2>
            {carrito.length > 0 ? (
                <>
                    <ul className='text-center'>
                        {carrito.map((item) => (
                            <li key={item.id} className="border-b py-2">
                                <img src={item.img} alt={item.nombre} className="w-16 h-16 inline mr-4" />
                                <span className="font-semibold">{item.nombre}</span> - 
                                <span className="font-bold">{item.precio} s/</span>
                                <span className="font-bold">Cantidad x{item.cantidad}</span>
                                <button className=' border pl-4 pr-4 bg-red-600 m-4 rounded-full text-white' onClick={()=> eliminarProducto(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>

                    <div className='text-center font-semibold pb-5 text-gray-600'>
                        <span> Cantidad de productos : {cantidadTotal}</span>
                        <br></br>
                        <span>Monto total : S/. {montoTotal}</span>
                    </div>
                </>
                
            ) : (
                <p className='text-center text-4xl pb-5 mb-12 '>El carrito está vacío.</p>
            )}
        </div>
    );
};

export default CarritoComponent;