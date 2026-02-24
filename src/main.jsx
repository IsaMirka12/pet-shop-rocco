import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Swal from 'sweetalert2'
import Principal from './principal.jsx';
import Gatos from './gatos.jsx';
import Carrito from './carrito.jsx';
import Perros from './perros.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
  },
  {
    path: "/gatos",
    element: <Gatos />,
  },
  {
    path: "/carrito",
    element: <Carrito Swal={Swal} />,
  },
  {
    path: "/perros",
    element: <Perros />
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    
  </StrictMode>,
)
