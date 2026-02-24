import React from 'react'
import Swal from 'sweetalert2'

const agregarCarrito = (id, nombre, precio, img) => {
    const objeto = { id, nombre, precio, img };
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `El producto ${nombre} fue agregado al carrito!`,
        showConfirmButton: false,
        timer: 1500
    });
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(objeto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('agregado carrito', carrito);
}

export const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem('carrito')) || [];
};

function ProductoComponente({img, nombre, precio,id}) {
    return (
        <div key={id}>
            <figure className="shadow-2xl rounded-lg" >
                <img  src={img} alt="" />
                <figcaption className=" text-center">
                    <p className="font-semibold">{nombre}</p>
                    <button className="bg-green-400  p-1 pl-2 pr-2 rounded-md hover:bg-green-600" onClick={() => agregarCarrito(id, nombre, precio, img)}>Agregar al carrito</button>
                    <p className="font-bold">{precio} s/ </p>
                </figcaption>
            </figure>
        </div>
        
    )
}

export default ProductoComponente
