import React from 'react'
import HeaderCompounent from './componentes/headerComponent'
import NavCompounent from './componentes/navCompounet'
import PerrosComponet from './componentes/perrosCompounent'
import FooterCompounent from './componentes/footerCompounet'


function Perros() {
    return (
        <div>
           < HeaderCompounent/>
           <NavCompounent />
           <PerrosComponet />
           <FooterCompounent />
        </div>
    )
}

export default Perros