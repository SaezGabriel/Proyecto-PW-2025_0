import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './pages/LoginPage'
import Confirmacion_correo from './pages/Confirmacion_correo'
import Filtrar_rol from './pages/Filtrar_rol'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
    <Confirmacion_correo />
    <Filtrar_rol />
  </StrictMode>,
)
