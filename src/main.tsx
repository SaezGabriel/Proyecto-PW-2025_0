import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './pages/LoginPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
