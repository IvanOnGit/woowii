// import { useState, useEffect } from "react";
// import { 
//   ContainerWrapper, 
//   Header, 
//   HeaderItems, 
//   MenuAside, 
//   FirstMenuAsideItem, 
//   UserAndImageCombo,
//   StyledButton,
//   StyledLink,
//   WelcomeContainer,
//   DropdownContainer,
//   DropdownButton,
//   DropdownList,
//   DropdownItem,
//   SecondDropdownContainer,
//   SecondDropdownButton,
//   SecondDropdownList,
//   SecondDropdownItem,
//   HelpButton
// } from "./styles";
// import MotivationText from "../MotivationText/MotivationText";
// import StepsProfileCreation from "../StepsProfileCreation/StepsProfileCreation";
// import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu, ChevronDown, ChevronUp } from "lucide-react";

// export default function UserHome() {
//   const userId = localStorage.getItem("userId");
//   const [userData, setUserData] = useState<{ username: string; profile_picture: string } | null>(null);
//   const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
//   const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
//   const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
//   const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
//   const [isFifthDropdownOpen, setIsFifthDropdownOpen] = useState(false);
//   const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
//   const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);

//     useEffect(() => {
//       const fetchUserData = async () => {
//           if (!userId) return;

//           const response = await fetch(`http://localhost:3000/api/auth/get-user?userId=${userId}`);
//           const data = await response.json();
//           console.log(data);  // Verifica qué datos estás recibiendo
//           setUserData(data);
//       };

//       fetchUserData();
//     }, [userId]);
  

//   return (
//     <>
//       <MenuAside>
//         <FirstMenuAsideItem>
//           <img src="/images/GreenLogoDemo.svg" alt="Avatar" />
//           <UserAndImageCombo>
//           <img src={userData?.profile_picture || "/images/Avatar1.png"} alt="Avatar" />
//           <h3>@{userData?.username || "Usuario"}</h3>
//           </UserAndImageCombo>  
//         </FirstMenuAsideItem>
//         <span></span>

//         {/* Primer Dropdown */}
//         <DropdownContainer>
//           <DropdownButton onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}>
//             Área profesional {isFirstDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </DropdownButton>
//           {isFirstDropdownOpen && (
//             <DropdownList>
//               <DropdownItem>Desarrollador Fullstack</DropdownItem>
//               <DropdownItem>UX | UI Designer</DropdownItem>
//               <DropdownItem>Marketing Manager</DropdownItem>
//             </DropdownList>
//           )}
//         </DropdownContainer>

//         {/* Segundo Dropdown */}
//         <SecondDropdownContainer>
//           <SecondDropdownButton onClick={() => setIsSecondDropdownOpen(!isSecondDropdownOpen)}>
//             Años de experiencia {isSecondDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//           {isSecondDropdownOpen && (
//             <SecondDropdownList>
//               <SecondDropdownItem>0 - 1</SecondDropdownItem>
//               <SecondDropdownItem>2 - 5</SecondDropdownItem>
//               <SecondDropdownItem>6 - 10</SecondDropdownItem>
//               <SecondDropdownItem>+10</SecondDropdownItem>
//             </SecondDropdownList>
//           )}
//         </SecondDropdownContainer>
              
//         {/* Tercer Dropdown */}
//         <SecondDropdownContainer>
//           <SecondDropdownButton onClick={() => setIsThirdDropdownOpen(!isThirdDropdownOpen)}>
//             Disponibilidad horaria {isThirdDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//           {isThirdDropdownOpen && (
//             <SecondDropdownList>
//               <SecondDropdownItem>Full time</SecondDropdownItem>
//               <SecondDropdownItem>Part time</SecondDropdownItem>
//               <SecondDropdownItem>Flexible</SecondDropdownItem>
//               <SecondDropdownItem>Fines de semana</SecondDropdownItem>
//             </SecondDropdownList>
//           )}
//         </SecondDropdownContainer>
        
//         {/* Cuarto Dropdown */}
//         <SecondDropdownContainer>
//           <SecondDropdownButton onClick={() => setIsFourthDropdownOpen(!isFourthDropdownOpen)}>
//             Ubicación {isFourthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//           {isFourthDropdownOpen && (
//             <SecondDropdownList>
//               <SecondDropdownItem><input type="text" /></SecondDropdownItem>
//               <SecondDropdownItem>Madrid, España</SecondDropdownItem>
//             </SecondDropdownList>
//           )}
//         </SecondDropdownContainer>
        
//         {/* Quinto Dropdown */}
//         <SecondDropdownContainer>
//           <SecondDropdownButton onClick={() => setIsFifthDropdownOpen(!isFifthDropdownOpen)}>
//             Posibilidad de mudanza {isFifthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//           {isFifthDropdownOpen && (
//             <SecondDropdownList>
//               <SecondDropdownItem>Si</SecondDropdownItem>
//               <SecondDropdownItem>No</SecondDropdownItem>
//             </SecondDropdownList>
//           )}
//         </SecondDropdownContainer>
        
//         {/* Sexto Dropdown */}
//         <SecondDropdownContainer>
//           <SecondDropdownButton onClick={() => setIsSixthDropdownOpen(!isSixthDropdownOpen)}>
//             Idiomas y nivel {isSixthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//           {isSixthDropdownOpen && (
//             <SecondDropdownList>
//               <SecondDropdownItem><input type="text" placeholder="Busca tu idioma aquí"/></SecondDropdownItem>
//               <SecondDropdownItem>ingles</SecondDropdownItem>
//             </SecondDropdownList>
//           )}
//         </SecondDropdownContainer>
//         <span></span>
        
//         {/* Séptimo Dropdown */}
//         <SecondDropdownContainer>
//           <SecondDropdownButton onClick={() => setIsSeventhDropdownOpen(!isSeventhDropdownOpen)}>
//             Interes de rol {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//           {isSeventhDropdownOpen && (
//             <SecondDropdownList>
//               <SecondDropdownItem>Rango salarial | <strong>€</strong> $</SecondDropdownItem>
//               <SecondDropdownItem>Minimo</SecondDropdownItem>
//               <SecondDropdownItem>Máximo</SecondDropdownItem>
//             </SecondDropdownList>
//           )}
//         </SecondDropdownContainer>
        
//          <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Contrato {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Modalidad {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Incorporación {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Expectativa salarial {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
//         <HelpButton> Chat de ayuda</HelpButton>
//       </MenuAside>
//       <ContainerWrapper>
//         <Header>
//           <HeaderItems>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
//             <Bell />
//             <Mail />
//             <BriefcaseBusiness />
//             <Bookmark />
//             <Menu />
//           </HeaderItems>
//         </Header>
//       </ContainerWrapper>
//       <WelcomeContainer>
//         <h1>¡BIENVENIDO! <br />TU PRÓXIMO EMPLEO ESTÁ A SOLO TRES PASOS</h1>
//       </WelcomeContainer>
//       <MotivationText />
//       <StepsProfileCreation />
//       <StyledLink to="/Hardset">
//         <StyledButton>Continuar</StyledButton>
//       </StyledLink>
//     </>
//   );
// }
// import { useState, useEffect } from "react";
// import { 
//   ContainerWrapper, 
//   Header, 
//   HeaderItems, 
//   MenuAside, 
//   FirstMenuAsideItem, 
//   ThirdMenuAsideItem, 
//   MenuItem, 
//   UserAndImageCombo,
//   StyledButton,
//   StyledLink,
//   WelcomeContainer
// } from "./styles";
// import MotivationText from "../MotivationText/MotivationText";
// import StepsProfileCreation from "../StepsProfileCreation/StepsProfileCreation";
// import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu, ChevronDown } from "lucide-react";

// export default function UserHome() {
//   const userId = localStorage.getItem("userId");
//   const [userData, setUserData] = useState<{ username: string; profile_picture: string } | null>(null);

//     useEffect(() => {
//       const fetchUserData = async () => {
//           if (!userId) return;

//           const response = await fetch(`http://localhost:3000/api/auth/get-user?userId=${userId}`);
//           const data = await response.json();
//           console.log(data);  // Verifica qué datos estás recibiendo
//           setUserData(data);
//       };

//       fetchUserData();
//     }, [userId]);
  

//   return (
//     <>
//       <MenuAside>
//         <FirstMenuAsideItem>
//           <img src="/images/GreenLogoDemo.svg" alt="Logo" />
//           <UserAndImageCombo>
//               <img src={userData?.profile_picture || "/images/Avatar1.png"} alt="Avatar" />
//               <h3>@{userData?.username || "Usuario"}</h3>
//           </UserAndImageCombo>
//         </FirstMenuAsideItem>
//         <ThirdMenuAsideItem>
//           <MenuItem><p>Consejos</p> <ChevronDown size={16} /></MenuItem>
//           <MenuItem><p>Contactos</p> <ChevronDown size={16} /></MenuItem>
//           <MenuItem><p>Proyectos</p> <ChevronDown size={16} /></MenuItem>
//           <MenuItem><p>Talent Data</p> <ChevronDown size={16} /></MenuItem>
//           <MenuItem><p>Tutoriales</p> <ChevronDown size={16} /></MenuItem>
//           <MenuItem><p>Alerts</p> <ChevronDown size={16} /></MenuItem>
//         </ThirdMenuAsideItem>
//         <span></span>
//         <ThirdMenuAsideItem>
//           <MenuItem><p>Preguntas</p> <ChevronDown size={16} /></MenuItem>
//           <MenuItem><p>Settings</p> <ChevronDown size={16} /></MenuItem>
//           <MenuItem><p>Terms and Agreements</p> <ChevronDown size={16} /></MenuItem>
//           <MenuItem><p>Testimonials</p> <ChevronDown size={16} /></MenuItem>
//           <button>Chat de ayuda</button>
//         </ThirdMenuAsideItem>
//       </MenuAside>
//       <ContainerWrapper>
//         <Header>
//           <HeaderItems>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
//             <Bell />
//             <Mail />
//             <BriefcaseBusiness />
//             <Bookmark />
//             <Menu />
//           </HeaderItems>
//         </Header>
//       </ContainerWrapper>
//       <WelcomeContainer>
//         <h1>¡BIENVENIDO! <br />TU PRÓXIMO EMPLEO ESTÁ A SOLO TRES PASOS</h1>
//       </WelcomeContainer>
//       <MotivationText />
//       <StepsProfileCreation />
//       <StyledLink to="/Hardset">
//         <StyledButton>Continuar</StyledButton>
//       </StyledLink>
//     </>
//   );
// }

// import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
// import { ContainerWrapper, Header, SearchContainer, HeaderItems, ContainerDivisionColumns, ContainerColumnSelects, ContainerColumnBody } from "./styles";
// import CompanyMotivationText from "../CompanyMotivationText/CompanyMotivationText";
// import StepsProfileCompany from "../StepsProfileCompany/StepsProfileCompany";

// export default function CompanyHome() {
//   return (
//     <>
//     <ContainerDivisionColumns>
//       <ContainerColumnSelects />
//       <ContainerColumnBody>
//       <ContainerWrapper>
//         <Header>
//           <SearchContainer>
//             Búsqueda
//           </SearchContainer>
//           <HeaderItems>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
//             <Bell />
//             <Mail />
//             <BriefcaseBusiness />
//             <Bookmark />
//             <Menu />
//           </HeaderItems>
//         </Header>
//       </ContainerWrapper>
//       <CompanyMotivationText />
//       <StepsProfileCompany />
//       </ContainerColumnBody>
//     </ContainerDivisionColumns>
//     </>
//   );
// }
// import useMediaQuery from "./Hooks/CustomHook";
import { useState } from "react";
import { Bell, BriefcaseBusiness,House, Mail, Menu} from "lucide-react";
import { AvatarToMobile, 
    BtnChatColumnSelects, 
    ButtonStartToMobile, 
    ContainerAllMobile, 
    ContainerAllUpToMobile, 
    ContainerAvatarAndPublishHome, 
    ContainerBucksAndItems, 
    ContainerButtonStartToMobile, 
    ContainerColumnBody, 
    ContainerColumnSelects,  
    ContainerFirstThreeSelects, 
    ContainerFooterToMobile, 
    ContainerGhostDiv, 
    ContainerImageAndTextDown, 
    ContainerImageAndTextOne, 
    ContainerImageAndTextThree, 
    ContainerImageAndTextTwo, 
    ContainerImageAndTextUp, 
    ContainerLeftColumnBody, 
    ContainerLogo,  
    ContainerMotivationAll, 
    ContainerMotivationImages, 
    ContainerMotivationImagesNumberOne,
    ContainerMotivationImagesUpGreenText, 
    ContainerMotivationText, 
    ContainerNextButton, 
    ContainerNumberOneDown, 
    ContainerNumberOneUp, 
    ContainerNumberThreeDown, 
    ContainerNumberThreeUp, 
    ContainerNumberTwoDown, 
    ContainerNumberTwoUp, 
    ContainerRightColumnBody,  
    ContainerSecondThreeSelects, 
    ContainerText, 
    ContainerTextBelowDegradedBars, 
    ContainerTextBelowPrincipalTitle,  
    ContainerThreeMinuts, 
    ContainerUpSearchAndItems, 
    ContainerUpSearhAndItemsMobile, 
    HeaderItemsHome, 
    HeaderItemsToMobile, 
    HeaderWiibucksImages, 
    ImageContainerNumberOne, 
    ImageContainerNumberThree, 
    ImageContainerNumberTwo, 
    ImageLogoBlue, 
    PrincipalTitleToMobile,  
    SearchUpToMobile,
    StyledMotivationText} from "./styles";
import { Link } from "react-router-dom";
import ChatBox from "../ChatBox/ChatBox";

export default function CompanyHome() {

  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
    <ContainerAllMobile>
        <ContainerUpSearhAndItemsMobile>
                <AvatarToMobile>
                    <img src="/images/Avatar1.png" alt="User Avatar" />
                </AvatarToMobile>
                <SearchUpToMobile>
                    <input type="text" placeholder="Búsqueda" />
                </SearchUpToMobile>
                <HeaderItemsToMobile>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
                    <p><img src="/images/TrophyWiibucks.svg" alt="wiibucks" />00</p>
                    <Menu id="menu" fill="#000"width={20} height={20}/>
                </HeaderItemsToMobile> 
        </ContainerUpSearhAndItemsMobile>
        <PrincipalTitleToMobile>
            <h2>¡BIENVENIDO!
            TU PRÓXIMO EMPLEO ESTÁ A SOLO TRES PASOS.</h2>
        </PrincipalTitleToMobile>
        <ContainerThreeMinuts>
          <p>¡El trabajo de tus sueños no se consigue en 3 minutos!</p>
        </ContainerThreeMinuts>
        <ContainerTextBelowPrincipalTitle>
                <ContainerGhostDiv />
                <ContainerText>
                    <p>Roma no se hizo en dos días, y tu perfil tampoco. Ponle cariño ahora, que después hacemos la magia.
                    Lo completarás solo una vez y siempre podrás actualizarlo. </p>
                    <p>Quien te diga lo contrario, te miente. Construir tu perfil con tus historias y el test de personalidad es clave para que nuestro algoritmo trabaje por ti y te traiga las mejores oportunidades. </p>
                </ContainerText>
        </ContainerTextBelowPrincipalTitle>
        <ContainerTextBelowDegradedBars>
            <h2>PASO A PASO PARA LA CREACIÓN DE TU PERFIL</h2>
        </ContainerTextBelowDegradedBars>
        <ContainerImageAndTextOne>
            <ContainerImageAndTextUp>
                <img src="/images/OneUser.svg" alt="One Company Image" />
                <p>¡Tu historia vale más que un CV!</p>
            </ContainerImageAndTextUp>
            <ContainerImageAndTextDown>
                <p>Comparte quién eres y deja que nuestro algoritmo te conecte con tu empresa ideal. ¡Destácate ya!</p>
            </ContainerImageAndTextDown>
        </ContainerImageAndTextOne>
        <ContainerImageAndTextTwo>
            <ContainerImageAndTextUp>
                <img src="/images/TwoUser.svg" alt="Two Company Image" />
                <p>¡Tu pasaporte a la entrevista!</p>
            </ContainerImageAndTextUp>
            <ContainerImageAndTextDown>
                <p>Completa el Assessment de Woowii y deja que tus competencias trasnversales hablen por ti.</p>
            </ContainerImageAndTextDown>
        </ContainerImageAndTextTwo>
        <ContainerImageAndTextThree>
            <ContainerImageAndTextUp>
                <img src="/images/ThreeUser.svg" alt="Three Company Image" />
                <p>¡Bienvenido al futuro del talento!</p>
            </ContainerImageAndTextUp>
            <ContainerImageAndTextDown>
                <p>Gana Wiibucks interactuando y canjéalos por features premium. ¡Conéctate de forma humana, inclusiva y real!</p>
            </ContainerImageAndTextDown>
        </ContainerImageAndTextThree>
        <ContainerButtonStartToMobile>
            <Link to={'/Hardset'}>
              <ButtonStartToMobile>COMENZAR</ButtonStartToMobile>
            </Link>
        </ContainerButtonStartToMobile>
        <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            <img src="/images/greenRocket.svg" alt="Rocket Footer Image" />
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
    </ContainerAllMobile>
    {/* --------------------------------------ALL TO DESKTOP----------------------------------------- */}
    <ContainerAllUpToMobile>
        <ContainerColumnBody>
            <ContainerRightColumnBody>
            </ContainerRightColumnBody>
            <ContainerLeftColumnBody>
            </ContainerLeftColumnBody>
        </ContainerColumnBody>
        <ContainerUpSearchAndItems>
            <ContainerBucksAndItems>
                <HeaderWiibucksImages>
                    <p><img src="/images/TrophyWiibucks.svg" alt="wiibucks" />00</p>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
                </HeaderWiibucksImages>
                <HeaderItemsHome>
                    <img src="/images/Avatar1.png" alt="Avatar One Image" />
                    <Bell className="items" stroke="#FFF" fill="#000" width={30} height={30}/>
                    <Mail className="items" stroke="#FFF" fill="#000" width={30} height={30}/>
                    <BriefcaseBusiness className="items" stroke="#FFF" fill="#000" width={30} height={30} />
                    <Menu id="items" fill="#000"width={20} height={20}/>
                </HeaderItemsHome>
            </ContainerBucksAndItems>
            <ContainerAvatarAndPublishHome>
                <img src="/images/bannerWelcomeUser.svg" alt="Banner Welcome User" />
            </ContainerAvatarAndPublishHome>
        </ContainerUpSearchAndItems>
        <ContainerColumnSelects>
            <ContainerLogo>
                <ImageLogoBlue src="/images/WhiteLogo.svg" alt="White Woowii's Logo" />
            </ContainerLogo>
            <ContainerFirstThreeSelects> 
                        <select name="consejos">
                            <option value="" selected>Consejos</option>
                            <hr></hr>
                            <option value="value1">Colaborativa</option>
                            <option value="value2">Competitiva</option>
                            <option value="value3">Estructurada</option>
                            <option value="value4">Relajada</option>
                            <option value="value5">Ritmo Acelerado</option>
                        </select>
                        <select name="contactos">
                            <option value="" selected>Contactos</option>
                            <hr></hr>
                            <option value="value1">Jerárquica</option>
                            <option value="value2">Funcional</option>
                            <option value="value3">Matricial</option>
                            <option value="value4">Plana (Horizontal)</option>
                            <option value="value5">en Red</option>
                            <option value="value6">por Proyectos</option>
                            <option value="value7">Divisional</option>
                            <option value="value8">Circular</option>
                            <option value="value9">Hipocrática</option>
                            <option value="value10">Híbrida</option>
                        </select>
                        <select name="proyectos">
                            <option value="" selected>Proyectos</option>
                            <hr></hr>
                            <option value="value1">Tradicional</option>
                            <option value="value2">Abierto(OpenOffice)</option>
                            <option value="value3">Híbrido</option>
                            <option value="value4">Remoto</option>
                            <option value="value5">Creativo</option>
                            <option value="value6">Colaborativo</option>
                            <option value="value7">Alta Presión</option>
                            <option value="value8">StartUp</option>
                            <option value="value9">Industrial</option>
                            <option value="value10">Servicio al Cliente</option>
                        </select>
                        <select name="talent">
                            <option value="" selected>Talent Data</option>
                            <hr></hr>
                            <option value="value1">Toma de decisiones centralizada</option>
                            <option value="value2">Cadena de mando clara</option>
                            <option value="value3">Supervisión directa</option>
                            <option value="value4">Procedimientos estandarizados</option>
                            <option value="value5">Control estricto</option>
                            <option value="value6">Comunicación formal</option>
                            <option value="value7">Roles definidos</option>
                            <option value="value8">Estructura piramidal</option>
                            <option value="value9">Autoridad vertical</option>
                            <option value="value10">Protocolos establecidos</option>
                            <option value="value11">Decisiones participativas</option>
                            <option value="value12">Consulta al equipo</option>
                            <option value="value13">Feedback bidireccional</option>
                            <option value="value14">Colaboración activa</option>
                            <option value="value15">Empoderamiento</option>
                            <option value="value16">Discusión abierta</option>
                            <option value="value17">Consenso grupal</option>
                            <option value="value18">Responsabilidad compartida</option>
                            <option value="value19">Iniciativas bottom-up</option>
                            <option value="value20">Votación en decisiones clave</option>
                        </select>
                        <select name="tutoriales">
                            <option value="" selected>Tutoriales</option>
                            <hr></hr>
                            <option value="value1">Colaborativa</option>
                            <option value="value2">Competitiva</option>
                            <option value="value3">Estructurada</option>
                            <option value="value4">Relajada</option>
                            <option value="value5">Ritmo Acelerado</option>
                        </select>
                        <select  name="alertas">
                            <option value="" selected>Alertas</option>
                            <hr></hr>
                            <option value="value1">Jerárquica</option>
                            <option value="value2">Funcional</option>
                            <option value="value3">Matricial</option>
                            <option value="value4">Plana (Horizontal)</option>
                            <option value="value5">en Red</option>
                            <option value="value6">por Proyectos</option>
                            <option value="value7">Divisional</option>
                            <option value="value8">Circular</option>
                            <option value="value9">Hipocrática</option>
                            <option value="value10">Híbrida</option>
                        </select>
                        </ContainerFirstThreeSelects>
                        <ContainerSecondThreeSelects>
                        <select name="datos">
                            <option value="" selected>Mis Datos</option>
                            <hr></hr>
                            <option value="value1">Colaborativa</option>
                            <option value="value2">Competitiva</option>
                            <option value="value3">Estructurada</option>
                            <option value="value4">Relajada</option>
                            <option value="value5">Ritmo Acelerado</option>
                        </select>
                        <select  name="configuracion">
                            <option value="" selected>Configuración</option>
                            <hr></hr>
                            <option value="value1">Jerárquica</option>
                            <option value="value2">Funcional</option>
                            <option value="value3">Matricial</option>
                            <option value="value4">Plana (Horizontal)</option>
                            <option value="value5">en Red</option>
                            <option value="value6">por Proyectos</option>
                            <option value="value7">Divisional</option>
                            <option value="value8">Circular</option>
                            <option value="value9">Hipocrática</option>
                            <option value="value10">Híbrida</option>
                        </select>
                        <select name="help">
                            <option value="" selected>Help</option>
                            <hr></hr>
                            <option value="value1">Tradicional</option>
                            <option value="value2">Abierto(OpenOffice)</option>
                            <option value="value3">Híbrido</option>
                            <option value="value4">Remoto</option>
                            <option value="value5">Creativo</option>
                            <option value="value6">Colaborativo</option>
                            <option value="value7">Alta Presión</option>
                            <option value="value8">StartUp</option>
                            <option value="value9">Industrial</option>
                            <option value="value10">Servicio al Cliente</option>
                        </select>
                        </ContainerSecondThreeSelects>
                    
                        <BtnChatColumnSelects>
                          <img src="/images/woodyChat.svg" alt="Woody Chat Image" onClick={() => setIsChatOpen(!isChatOpen)}/>
                        </BtnChatColumnSelects>
                        {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}
        </ContainerColumnSelects>
        <ContainerMotivationAll>
                <ContainerMotivationText>
                    <StyledMotivationText>
                        <div className="firstLine">
                            <h2>¡El trabajo de tus sueños no se consigue en 3 minutos!</h2>
                        </div>
                        <p>
                            Roma no se hizo en dos días, y tu perfil tampoco. Ponle cariño ahora, que después hacemos la magia.
                            ✨ Lo completarás solo una vez y siempre podrás actualizarlo. 🚀
                        </p>
                        <p>
                            Quien te diga lo contrario, te miente. Construir tu perfil con tus historias y el test de personalidad es clave     para que nuestro algoritmo trabaje por ti y te traiga las mejores oportunidades.
                        </p>
                    </StyledMotivationText>
                            
                </ContainerMotivationText>
                <ContainerMotivationImages>
                    <ContainerMotivationImagesUpGreenText>
                        <p >PASO A PASO PARA LA CREACIÓN DE TU PERFIL</p>
                    </ContainerMotivationImagesUpGreenText>
                    <ContainerMotivationImagesNumberOne>
                        <ContainerNumberOneUp>
                            <ImageContainerNumberOne src="/images/oneBigUser.svg" />
                            <div className="textOne">
                                <p>Tu historia vale</p>
                                <p>más que un CV</p>
                            </div>
                            <ContainerNumberOneDown>
                                <h6>Comparte quién eres y deja que nuestro algoritmo te conecte con tu empresa ideal. ¡Destácate ya! 🚀</h6>
                            </ContainerNumberOneDown>
                        </ContainerNumberOneUp>
                        <ContainerNumberTwoUp>
                            <ImageContainerNumberTwo src="/images/twoBigUser.svg" />
                            <div className="textTwo">
                                <p>¡Tu pasaporte a</p>
                                <p>la entrevista!</p>
                            </div>
                            <ContainerNumberTwoDown>
                                <h6> Completa el Assessment de Woowii y deja que tus competencias trasnversales hablen por ti.</h6>
                            </ContainerNumberTwoDown>
                        </ContainerNumberTwoUp>
                        <ContainerNumberThreeUp>
                            <ImageContainerNumberThree src="/images/threeBigUser.svg" />
                            <div className="textTwo">
                                <p>¡Bienvenido al </p>
                                <p>futuro del talento!</p>
                            </div>
                            <ContainerNumberThreeDown>
                                <h6>Gana Wiibucks mientras interactúas y canjéalos por features premium. 
                                    Conéctate con talento de forma auténtica, inclusiva y sin filtros.</h6>
                            </ContainerNumberThreeDown>
                        </ContainerNumberThreeUp>
                    </ContainerMotivationImagesNumberOne>
                </ContainerMotivationImages>
                <Link to={"/Hardset"}>
                    <ContainerNextButton>Siguiente</ContainerNextButton>
                </Link>
            </ContainerMotivationAll>
    </ContainerAllUpToMobile>
    </>
  )
}
