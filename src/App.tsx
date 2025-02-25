
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
import PersonalityTestQuestions from './components/PersonalityTestQuestions/PersonalityTestQuestions'
import CongratulationsSteps from './components/CongratulationsSteps/CongratulationsSteps'
import JobFinder from './components/JobFinder/JobFinder'
import JobOpportunity from './components/JobOpportunity/JobOpportunity'




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
        <Route path="/PersonalityTestQuestions" element={<PersonalityTestQuestions />} />
        <Route path="/CongratulationsSteps" element={<CongratulationsSteps />} />
        <Route path="/JobFinder" element={<JobFinder />} />
        <Route path="/JobOpportunity" element={<JobOpportunity />} />
      </Routes>    
    </Router>
  )
}

export default App
