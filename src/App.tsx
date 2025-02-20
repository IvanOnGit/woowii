
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SegundaPagina from './components/UserFirstGift/SegundaPagina'
import TerceraPagina from './components/UserWelcome/TerceraPagina'
import RegistroUsuarioForm from './components/UserRegister/RegistroUsuarioForm'
import SelectAvatar from './components/UserSelectAvatar/SelectAvatar'




function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/"element={<RegistroUsuarioForm />} />
        <Route path="/FirstGift" element={<SegundaPagina />} />
        <Route path="/Welcome" element={<TerceraPagina />} />
        <Route path="/SelectAvatar" element={<SelectAvatar />} />
      </Routes>
      
    </Router>
  )
}

export default App
