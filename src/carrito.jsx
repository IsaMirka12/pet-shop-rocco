import React from 'react'
import CarritoComponent from './componentes/carritoComponente'
import HeaderCompounent from './componentes/headerComponent'
import NavCompounent from './componentes/navCompounet'
import FooterCompounent from './componentes/footerCompounet'
function Carrito({Swal}) {
    return (
        <>
            <HeaderCompounent />
            <NavCompounent />
            <CarritoComponent Swal = {Swal}/>
            <FooterCompounent />
        </>
    )
}

export default Carrito
