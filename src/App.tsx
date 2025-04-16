
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
import MatchFound from './components/MatchFound/MatchFound'
import StartingPoint from './components/StartingPoint/StartingPoint'
import TransformationWelcome from './components/TransformationWelcome/TransformationWelcom'
import ChooseTalentCompany from './components/ChooseTalentCompany/ChooseTalentCompany'
import RegisterCompanyForm from './components/RegisterCompanyForm/RegisterCompanyForm'
import CompanyFirstGift from './components/CompanyFirstGift/CompanyFirstGift'
import CompanyWelcome from './components/CompanyWelcome/CompanyWelcome'
import RegisterCompanyProfile from './components/RegisterCompanyProfile/RegisterCompanyProfile'
import CompanyHome from './components/CompanyHome/CompanyHome'
import AboutYourDNA from './components/AboutYourDNA/AboutYourDNA'
import CompanyOverview from './components/CompanyOverview/CompanyOverview'
import CompanyOffer from './components/CompanyOffer/CompanyOffer'
import CompanyMatchFound from './components/CompanyMatchFound/CompanyMatchFound'
import CompanyCandidatesView from './components/CompanyCandidatesView/CompanyCandidatesView'
import CandidateDetail from './components/CandidateDetail/CandidateDetail'
import CompanyInterviewPage from './components/CompanyInterviewPage/CompanyInterviewPage'
import VoiceTextInput from './components/VoiceTextInput/VoiceTextInput'
import UserLogin from './components/UserLogin/UserLogin'
import CompanyLogin from './components/CompanyLogin/CompanyLogin'
import JobOpportunityView from './components/JobOpportunity/JobOpportunity'




function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartingPoint />} />
        <Route path="/TransformationWelcome" element={<TransformationWelcome />} />
        <Route path="/ChooseTalentCompany" element={<ChooseTalentCompany />} />
        <Route path="/RegisterCompanyForm" element={<RegisterCompanyForm />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/CompanyFirstGift" element={<CompanyFirstGift />} />
        <Route path="/CompanyWelcome" element={<CompanyWelcome />} />
        <Route path="/RegisterCompanyProfile" element={<RegisterCompanyProfile />} />
        <Route path="/CompanyHome" element={<CompanyHome />} />
        <Route path="/AboutYourDNA" element={<AboutYourDNA />} />
        <Route path="/CompanyOverview" element={<CompanyOverview />} />
        <Route path="/CompanyOffer" element={<CompanyOffer />} />
        <Route path="/match-found" element={<CompanyMatchFound />} />
        <Route path="/CompanyCandidatesView/:jobId" element={<CompanyCandidatesView />} />
        <Route path="/candidate/:candidateId" element={<CandidateDetail />} />
        <Route path="/CompanyInterviewPage" element={<CompanyInterviewPage />} />
        <Route path="/RegisterUserForm" element={<RegistroUsuarioForm />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/FirstGift" element={<UserFirstGift />} />
        <Route path="/Welcome" element={<TerceraPagina />} />
        <Route path="/SelectAvatar" element={<SelectAvatar />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/Hardset" element={<Hardset />} />
        <Route path="/VoiceTextInput" element={<VoiceTextInput />} />
        <Route path="/SecondGift" element={<UserSecondGift />} />
        <Route path="/PersonalityTest" element={<PersonalityTest />} />
        <Route path="/PersonalityTestQuestions" element={<PersonalityTestQuestions />} />
        <Route path="/CongratulationsSteps" element={<CongratulationsSteps />} />
        <Route path="/JobFinder" element={<JobFinder />} />
        <Route path="/JobOpportunity/:jobId" element={<JobOpportunityView />} />
        <Route path="/MatchFound" element={<MatchFound />} />
      </Routes>    
    </Router>
  )
}

export default App
