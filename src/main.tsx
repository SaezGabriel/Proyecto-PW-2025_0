import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../path/to/chartjs/dist/chart.umd.js"
 
import LoginPage from './pages/LoginPage'
import Confirmacion_correo from './pages/Confirmacion_correo'
import Filtrar_rol from './pages/Filtrar_rol'
import Dashboard from './pages/Dashboard'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
    <Confirmacion_correo />
    <Filtrar_rol />
    <Dashboard />
  </StrictMode>,
)
