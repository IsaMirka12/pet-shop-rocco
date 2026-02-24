import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'

import Swal from 'sweetalert2'
import Principal from './principal.jsx';
import Gatos from './gatos.jsx';
import Carrito from './carrito.jsx';
import Perros from './perros.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/gatos" element={<Gatos />} />
        <Route path="/carrito" element={<Carrito Swal={Swal} />} />
        <Route path="/perros" element={<Perros />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)