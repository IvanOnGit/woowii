
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UserFirstGift from './components/UserFirstGift/UserFirstGift'
import TerceraPagina from './components/UserWelcome/TerceraPagina'
import RegistroUsuarioForm from './components/UserRegister/RegistroUsuarioForm'
import SelectAvatar from './components/UserSelectAvatar/SelectAvatar'
import UserHome from './components/UserHome/UserHome';
import Hardset from './components/Hardset/Hardset'
import UserSecondGift from './components/UserSecondGift/UserSecondGift'
import PersonalityTest from './components/PersonalityTest/PersonalityTest'




function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/"element={<RegistroUsuarioForm />} />
        <Route path="/FirstGift" element={<UserFirstGift />} />
        <Route path="/Welcome" element={<TerceraPagina />} />
        <Route path="/SelectAvatar" element={<SelectAvatar />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/Hardset" element={<Hardset />} />
        <Route path="/SecondGift" element={<UserSecondGift />} />
        <Route path="/PersonalityTest" element={<PersonalityTest />} />
      </Routes>    
    </Router>
  )
}

export default App
