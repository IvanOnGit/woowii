
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SegundaPagina from './components/UserFirstGift/SegundaPagina'
import TerceraPagina from './components/UserWelcome/TerceraPagina'
import RegistroUsuarioForm from './components/UserRegister/RegistroUsuarioForm'
import SelectAvatar from './components/UserSelectAvatar/SelectAvatar'
import UserHome from './components/UserHome/UserHome';
import RegisterCompanyForm from './components/CompanyRegister/RegisterCompanyForm'
import SecondPage from './components/CompanyFirstGift/SecondPage'
import ThirdPage from './components/CompanyWelcome/ThirdPage'
import InitFirst from './components/WoowiiInitFirst/InitFirst'
import InitSecond from './components/WoowiiInitSecond/InitSecond'




function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/"element={<RegistroUsuarioForm />} />
        <Route path="/FirstGift" element={<SegundaPagina />} />
        <Route path="/Welcome" element={<TerceraPagina />} />
        <Route path="/SelectAvatar" element={<SelectAvatar />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/RegisterCompanyForm" element={<RegisterCompanyForm />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/ThirdPage" element={<ThirdPage />} />
        <Route path="/InitFirst" element={<InitFirst />} />
        <Route path="/InitSecond" element={<InitSecond />} />
      </Routes>
      
    </Router>
  )
}

export default App
