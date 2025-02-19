
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SegundaPagina from './components/FirstGift/SegundaPagina'
import TerceraPagina from './components/Welcome/TerceraPagina'
import RegistroUsuarioForm from './components/Register/RegistroUsuarioForm'




function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/"element={<RegistroUsuarioForm />} />
        <Route path="/FirstGift" element={<SegundaPagina />} />
        <Route path="/Welcome" element={<TerceraPagina />} />
      </Routes>
      
    </Router>
  )
}

export default App
