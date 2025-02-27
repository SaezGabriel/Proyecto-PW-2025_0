/*import { useState } from 'react'*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LoginPage";
import NuevaContraseña from "./pages/Nueva_contraseña";
import './App.css'

function App() {
 /* const [count, setCount] = useState(0) */

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/nueva-contraseña" element={<NuevaContraseña />} />
      </Routes>
    </Router>
  )
}

export default App

