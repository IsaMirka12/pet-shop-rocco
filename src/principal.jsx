import React from 'react'
import HeaderCompounent from './componentes/headerComponent.jsx'
import NavCompounent from './componentes/navCompounet.jsx'
import ArticleCompounent from './componentes/articleCompounent.jsx'
import FooterCompounent from './componentes/footerCompounet.jsx'
import GatosCompounet from './componentes/gatosComponente.jsx'



function Principal() {
    return (
        <>
            < HeaderCompounent/>
            <NavCompounent />
            <ArticleCompounent />
            <GatosCompounet/>
            <FooterCompounent/>
           
        </>
    )
}

export default Principal
