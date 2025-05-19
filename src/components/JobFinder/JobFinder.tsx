// import { useEffect, useState } from "react";
// import { Bell, Bookmark, BriefcaseBusiness, ChevronDown, ChevronUp, Mail, Menu } from "lucide-react";
// import { 
//   FirstMenuAsideItem, 
//   MenuAside,
//   UserAndImageCombo, 
//   DropdownContainer, 
//   DropdownButton, 
//   DropdownList,
//   DropdownItem,
//   SecondDropdownContainer,
//   SecondDropdownButton,
//   SecondDropdownList,
//   SecondDropdownItem,
//   HelpButton,
//   ContainerWrapper,
//   Header,
//   HeaderItems,
//   SearchBar,
//   MainTitleAndSubtitle,
//   GreenCentralContainer,
//   LastParragraph,
//   LastThreeItems,
//   LastThreeGreenImages,
//   LastThreeTexts,
//   GreenPeople,
//   MainContainer,
//   JobsContainer,
//   StyledLink,
//   StyledNotification,
//   NotificationContainer,
//   NotificationButton,
// } from "./styles";
// import NewPost from "../NewPost/NewPost";

// // Definición de interfaces
// interface Job {
//   id: number;
//   title: string;
//   about_us: string;
//   salary: number | null;
//   survival_kit: string[];
// }

// interface UserData {
//   username: string;
//   profile_picture: string;
// }

// interface MatchNotification {
//   applicationId: number;
//   companyName: string;
//   companyAvatar: string;
//   jobTitle: string;
// }

// export default function JobFinder() {
//   // Estados para los dropdowns
//   const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
//   const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
//   const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
//   const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
//   const [isFifthDropdownOpen, setIsFifthDropdownOpen] = useState(false);
//   const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
//   const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);
  
//   // ID del usuario y datos
//   const userId = localStorage.getItem("userId");
//   const [userData, setUserData] = useState<UserData | null>(null);
  
//   // Estados para notificaciones
//   const [matchNotifications, setMatchNotifications] = useState<MatchNotification[]>([]);
//   const [notificationCount, setNotificationCount] = useState(0);
//   const [showNotificationModal, setShowNotificationModal] = useState(false);
  
//   // Estados para trabajos
//   const [allJobs, setAllJobs] = useState<Job[]>([]);
//   const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
//   const [toolset, setToolset] = useState<string[]>([]);

//   // Obtener datos del usuario
//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!userId) return;

//       const response = await fetch(`http://localhost:3000/api/auth/get-user?userId=${userId}`);
//       const data = await response.json();
//       console.log(data);
//       setUserData(data);
//     };

//     fetchUserData();
//   }, [userId]);
  
//   // Obtener notificaciones de matches
//   useEffect(() => {
//     const fetchMatchNotifications = async () => {
//       if (!userId) return;
      
//       try {
//         const response = await fetch(`http://localhost:3000/api/auth/user-matches?userId=${userId}`);
//         const data = await response.json();
//         console.log("🔔 Notificaciones de matches:", data);
//         setMatchNotifications(data);
//         setNotificationCount(data.length);
//       } catch (error) {
//         console.error("❌ Error al obtener notificaciones de matches:", error);
//       }
//     };

//     fetchMatchNotifications();
//   }, [userId]);

//   // Nueva función para marcar notificaciones como vistas
//   const markNotificationsAsViewed = async () => {
//     if (!userId || matchNotifications.length === 0) return;
    
//     try {
//       const notificationIds = matchNotifications.map(match => match.applicationId);
      
//       await fetch('http://localhost:3000/api/auth/mark-notifications-viewed', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userId,
//           notificationIds
//         }),
//       });
      
//       console.log("✅ Notificaciones marcadas como vistas");
//       // Actualizar el contador localmente
//       setNotificationCount(0);
//     } catch (error) {
//       console.error("❌ Error al marcar notificaciones como vistas:", error);
//     }
//   };

//   // Nueva función para manejar la apertura del modal de notificaciones
//   const handleOpenNotifications = () => {
//     console.log("Opening notifications modal");
//     setShowNotificationModal(true);
    
//     if (matchNotifications.length > 0) {
//       markNotificationsAsViewed();
//     }
//   };

//   // Obtener todos los trabajos
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/auth/jobs');
//         const data = await response.json();
//         setAllJobs(data);
//       } catch (error) {
//         console.error("❌ Error al traer los trabajos:", error);
//       }
//     };

//     fetchJobs();
//   }, []);
  
//   // Obtener habilidades del usuario
//   useEffect(() => {
//     const fetchUserSkills = async () => {
//       if (!userId) return;
//       try {
//         const response = await fetch(`http://localhost:3000/api/auth/get-user-skills?userId=${userId}`);
//         const data = await response.json();
//         console.log("Toolset del usuario:", data.toolset);
//         setToolset(data.toolset || []);
//       } catch (error) {
//         console.error("❌ Error al obtener el toolset del usuario:", error);
//       }
//     };

//     fetchUserSkills();
//   }, [userId]);
  
//   // Filtrar trabajos según habilidades
//   useEffect(() => {
//     if (toolset.length === 0 || allJobs.length === 0) return;
  
//     const filtered = allJobs.filter((job: Job) => {
//       const kit = Array.isArray(job.survival_kit) ? job.survival_kit : [];
//       const match = kit.some((item: string) => toolset.includes(item));
//       if (match) {
//         console.log("✅ Coincidencia encontrada:", { job, kit, toolset });
//       } else {
//         console.log("❌ Sin coincidencia:", { job, kit, toolset });
//       }
//       return match;
//     });
  
//     setFilteredJobs(filtered);
//   }, [toolset, allJobs]);
  
//   return (
//     <>
//       <MenuAside>
//               <FirstMenuAsideItem>
//                 <img src="/images/GreenLogoDemo.svg" alt="Avatar" />
//                 <UserAndImageCombo>
//                 <img src={userData?.profile_picture || "/images/Avatar1.png"} alt="Avatar" />
//                 <h3>@{userData?.username || "Usuario"}</h3>
//                 </UserAndImageCombo>  
//               </FirstMenuAsideItem>
//               <span></span>
      
//               {/* Primer Dropdown */}
//               <DropdownContainer>
//                 <DropdownButton onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}>
//                   Área profesional {isFirstDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </DropdownButton>
//                 {isFirstDropdownOpen && (
//                   <DropdownList>
//                     <DropdownItem>Desarrollador Fullstack</DropdownItem>
//                     <DropdownItem>UX | UI Designer</DropdownItem>
//                     <DropdownItem>Marketing Manager</DropdownItem>
//                   </DropdownList>
//                 )}
//               </DropdownContainer>
      
//               {/* Segundo Dropdown */}
//               <SecondDropdownContainer>
//                 <SecondDropdownButton onClick={() => setIsSecondDropdownOpen(!isSecondDropdownOpen)}>
//                   Años de experiencia {isSecondDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//                 {isSecondDropdownOpen && (
//                   <SecondDropdownList>
//                     <SecondDropdownItem>0 - 1</SecondDropdownItem>
//                     <SecondDropdownItem>2 - 5</SecondDropdownItem>
//                     <SecondDropdownItem>6 - 10</SecondDropdownItem>
//                     <SecondDropdownItem>+10</SecondDropdownItem>
//                   </SecondDropdownList>
//                 )}
//               </SecondDropdownContainer>
                    
//               {/* Tercer Dropdown */}
//               <SecondDropdownContainer>
//                 <SecondDropdownButton onClick={() => setIsThirdDropdownOpen(!isThirdDropdownOpen)}>
//                   Disponibilidad horaria {isThirdDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//                 {isThirdDropdownOpen && (
//                   <SecondDropdownList>
//                     <SecondDropdownItem>Full time</SecondDropdownItem>
//                     <SecondDropdownItem>Part time</SecondDropdownItem>
//                     <SecondDropdownItem>Flexible</SecondDropdownItem>
//                     <SecondDropdownItem>Fines de semana</SecondDropdownItem>
//                   </SecondDropdownList>
//                 )}
//               </SecondDropdownContainer>
              
//               {/* Cuarto Dropdown */}
//               <SecondDropdownContainer>
//                 <SecondDropdownButton onClick={() => setIsFourthDropdownOpen(!isFourthDropdownOpen)}>
//                   Ubicación {isFourthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//                 {isFourthDropdownOpen && (
//                   <SecondDropdownList>
//                     <SecondDropdownItem><input type="text" /></SecondDropdownItem>
//                     <SecondDropdownItem>Madrid, España</SecondDropdownItem>
//                   </SecondDropdownList>
//                 )}
//               </SecondDropdownContainer>
              
//               {/* Quinto Dropdown */}
//               <SecondDropdownContainer>
//                 <SecondDropdownButton onClick={() => setIsFifthDropdownOpen(!isFifthDropdownOpen)}>
//                   Posibilidad de mudanza {isFifthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//                 {isFifthDropdownOpen && (
//                   <SecondDropdownList>
//                     <SecondDropdownItem>Si</SecondDropdownItem>
//                     <SecondDropdownItem>No</SecondDropdownItem>
//                   </SecondDropdownList>
//                 )}
//               </SecondDropdownContainer>
              
//               {/* Sexto Dropdown */}
//               <SecondDropdownContainer>
//                 <SecondDropdownButton onClick={() => setIsSixthDropdownOpen(!isSixthDropdownOpen)}>
//                   Idiomas y nivel {isSixthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//                 {isSixthDropdownOpen && (
//                   <SecondDropdownList>
//                     <SecondDropdownItem><input type="text" placeholder="Busca tu idioma aquí"/></SecondDropdownItem>
//                     <SecondDropdownItem>ingles</SecondDropdownItem>
//                   </SecondDropdownList>
//                 )}
//               </SecondDropdownContainer>
//               <span></span>
              
//               {/* Séptimo Dropdown */}
//               <SecondDropdownContainer>
//                 <SecondDropdownButton onClick={() => setIsSeventhDropdownOpen(!isSeventhDropdownOpen)}>
//                   Interes de rol {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//                 {isSeventhDropdownOpen && (
//                   <SecondDropdownList>
//                     <SecondDropdownItem>Rango salarial | <strong>€</strong> $</SecondDropdownItem>
//                     <SecondDropdownItem>Minimo</SecondDropdownItem>
//                     <SecondDropdownItem>Máximo</SecondDropdownItem>
//                   </SecondDropdownList>
//                 )}
//               </SecondDropdownContainer>
              
//                <SecondDropdownContainer>
//                 <SecondDropdownButton>
//                   Contrato {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//               </SecondDropdownContainer>
              
//               <SecondDropdownContainer>
//                 <SecondDropdownButton>
//                   Modalidad {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//               </SecondDropdownContainer>
              
//               <SecondDropdownContainer>
//                 <SecondDropdownButton>
//                   Incorporación {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//               </SecondDropdownContainer>
              
//               <SecondDropdownContainer>
//                 <SecondDropdownButton>
//                   Expectativa salarial {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//                 </SecondDropdownButton>
//               </SecondDropdownContainer>
//               <HelpButton> Chat de ayuda</HelpButton>
//             </MenuAside>
//     <MainContainer>
//         <ContainerWrapper>
//             <Header>
//             <HeaderItems>
//                 <p><img src="/images/wiibucks.png" alt="wiibucks" />400</p>
//                 <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
//                 {/* Campana de notificación con contador - ACTUALIZADO */}
//                 <div style={{ position: 'relative' }}>
//                   <Bell 
//                     onClick={handleOpenNotifications} 
//                     style={{ cursor: "pointer" }} 
//                   />
//                   {notificationCount > 0 && (
//                     <StyledNotification>
//                       {notificationCount}
//                     </StyledNotification>
//                   )}
//                 </div>
//                 <Mail />
//                 <BriefcaseBusiness />
//                 <Bookmark />
//                 <Menu />
//             </HeaderItems>
//             </Header>
//             <SearchBar>
//               <input type="text" name="" id="" placeholder="Búsqueda"/>
//             </SearchBar>
//         </ContainerWrapper>

//         {/* Modal de notificaciones */}
//         {showNotificationModal && (
//         <NotificationContainer>
//           {matchNotifications.length === 0 ? (
//             <>
//               <h3>Notificaciones</h3>
//               <p>No hay nuevos matches en este momento.</p>
//             </>
//           ) : (
//             <>
//               <h3>🎉 ¡Tienes nuevos matches!</h3>
//               <ul>
//                 {matchNotifications.map((match, index) => (
//                   <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                     <img 
//                       src={match.companyAvatar || "/images/defaultCompanyAvatar.svg"} 
//                       alt={match.companyName}
//                       style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
//                     />
//                     <div>
//                       <strong>{match.companyName}</strong> te ha dado match para:
//                       <br/>
//                       <span style={{ color: '#4caf50' }}>{match.jobTitle}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//           <NotificationButton onClick={() => setShowNotificationModal(false)}>
//             Cerrar
//           </NotificationButton>
//         </NotificationContainer>
//         )}

//         <NewPost />
//         <MainTitleAndSubtitle>
//             <h1>¡Encontramos tu siguiente<br /> experiencia profesional!</h1>
//             <p>Tu futuro profesional comienza aquí. Descubre ofertas de empleo <br /> personalizadas y herramientas para impulsar tu carrera.</p>
//         </MainTitleAndSubtitle>
//         <GreenCentralContainer>
//             <div>
//             <h2>Un mundo laboral <br />personalizado: <br /> Coincidencias <br />perfectas.</h2>
//             <p>Recomendaciones de empleo basadas <br /> en tu perfil, preferencias y actividad. <br />¡Encuentra el trabajo ideal para ti!</p>
//             </div>
//             <div>
//                 <div>
//                     <h3>Análisis de perfil.</h3>
//                     <p>Algoritmos avanzados que <br /> identifican tus puntos fuertes.</p>
//                 </div>
//                 <div>
//                     <h3>Preferencias definidas.</h3>
//                     <p>Consideramos tus intereses<br /> y expectativas</p>
//                 </div>
//             </div>
//         </GreenCentralContainer>
//         <LastParragraph>
//             <p>Utiliza filtros avanzados para refinar tus búsquedas por ubicación, <br /> salario, industria y más. ¡Ahorra tiempo y encuentra lo que buscas!</p>
//         </LastParragraph>
//         <LastThreeItems>
//             <LastThreeGreenImages>
//                 <img src="/images/GreenRectangle.png" alt="" />
//                 <img src="/images/GreenRectangle.png" alt="" />
//                 <img src="/images/GreenRectangle.png" alt="" />
//             </LastThreeGreenImages>
//             <LastThreeTexts>
//                 <h2>Palabras clave</h2>
//                 <p>Encuentra exactamente lo que buscas.</p>
//                 <h2>Ubicación</h2>
//                 <p>Define dónde quieres trabajar.</p>
//                 <h2>Salario</h2>
//                 <p>Establece tus expectativas económicas.</p>
//             </LastThreeTexts>
//             <GreenPeople>
//                 <img src="/images/GreenPeople.png" alt="" />
//             </GreenPeople>
//         </LastThreeItems>
//     </MainContainer>
//     <JobsContainer>
//       <h2>Empleos destacados para ti</h2>
//       <p>
//         En función de tu perfil, preferencias <br /> y actividad como solicitudes,
//         <br /> búsquedas y contenido guardado.
//       </p>
//       <hr />
//       {filteredJobs.map((job: Job) => (
//         <StyledLink to={`/JobOpportunity/${job.id}`} key={job.id}>
//           <h2>{job.title}</h2>
//           <h3>Madrid, España | Modalidad mixta</h3>
//           <p>{job.about_us}</p>
//           <p><strong>Salario: </strong>{job.salary ? `${job.salary} €` : "No especificado"}</p>
//           <hr />
//           <span></span>
//           <hr />
//         </StyledLink>
//       ))}
//     </JobsContainer>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { Bell, BriefcaseBusiness, Calendar, ChevronDown, ChevronUp, Clock, House, Image, Mail, Menu, Plus, Smile, Star } from "lucide-react";
import { 
  FirstMenuAsideItem, 
  MenuAside,
  UserAndImageCombo, 
  DropdownContainer, 
  DropdownButton, 
  DropdownList,
  DropdownItem,
  SecondDropdownContainer,
  SecondDropdownButton,
  SecondDropdownList,
  SecondDropdownItem,
  Published,
  MainContainer,
  ContainerAllMobile,
  HeaderMobile,
  HeaderItemsMobile,
  AvatarToMobile,
  SearchUpToMobile,
  InputContainerToMobile,
  ActionsToMobile,
  PublishButton,
  ContainerTitleGreenUpSlider,
  TitleGreenUpSlider,
  ContainerTextBelowUpSlider,
  TextBelowUpSlider,
  ContainerTextBelowSlider,
  TextBelowSlider,
  ContainerImageGreenSquareWithText,
  ImageGrenSquareWithText,
  ContainerTextBelowGreenSquare,
  TextBelowGreenSquare,
  ContainerThreeLittleGreenSquare,
  ContainerSquareAndText,
  ContainerLittleGreenSquare,
  LittleGreenSquare,
  ContainerTextBesideSquare,
  TextUpBesideSquare,
  TextDownBesideSquare,
  ContainerButtonNext,
  ButtonNext,
  ContainerFooterToMobile,
  ContainerBucksAndItems,
  HeaderWiibucksImages,
  HeaderItemsHome,
  InputContainerUpToMobile,
  ActionsUpToMobile,
  PublishButtonUpToMobile,
  ContainerBelowMain,
  ContainerBelowMainLeft,
  ContainerBelowMainRight,
  ContainerUserImageAndInput,
  ContainerImage,
  ContainerFirstTextGreen,
  FirstTextGreen,
  ContainerSubtitleFirstText,
  SubtitleFirstText,
  ContainerGreenBannerLittle,
  GreenBannerLittle,
  ContainerSubtitleBelowBanner,
  SubtitleBelowBanner,
  ContainerBelowBanner,
  ContainerThreeLittleGreenSquareUpMobile,
  ContainerSquareAndTextUpMobile,
  ContainerLittleGreenSquareUpMobile,
  LittleGreenSquareUpMobile,
  ContainerTextBesideSquareUpMobile,
  TextUpBesideSquareUpMobile,
  TextDownBesideSquareUpMobile,
  ContainerImageMonigotes,
  ImageMonigotes,
  ContainerChatButton,
  ContainerButtonNextUpMobile,
  ButtonNextUpMobile,
} from "./styles";
// import NewPost from "../NewPost/NewPost";
import { EmpleoSlider } from "../EmpleoSlider/EmpleoSlider";
import empleosData from "../../data/empleos.json"
import { Link } from "react-router-dom";
import { JobSlider } from "../JobSlider/JobSlider";
import ChatBox from "../ChatBox/ChatBox";

export default function JobFinder() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
  const [isFifthDropdownOpen, setIsFifthDropdownOpen] = useState(false);
  const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
  const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);
  const userId = localStorage.getItem("userId");
    const [userData, setUserData] = useState<{ username: string; profile_picture: string } | null>(null);
        useEffect(() => {
          const fetchUserData = async () => {
              if (!userId) return;
    
              const response = await fetch(`http://localhost:3000/api/auth/get-user?userId=${userId}`);
              const data = await response.json();
              console.log(data);  // Verifica qué datos estás recibiendo
              setUserData(data);
          };
    
          fetchUserData();
        }, [userId]);
  return (
    <>
    <ContainerAllMobile>
      <HeaderMobile>
          <AvatarToMobile>
            <img src="/images/Avatar1.png" alt="User Avatar" />
          </AvatarToMobile>
          <SearchUpToMobile>
            <input type="text" placeholder="Búsqueda" />
          </SearchUpToMobile>
        <HeaderItemsMobile>
          <p><img src="/images/wiibucks.png" alt="wiibucks" />400</p>
          <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
          <Menu id="menu" fill="#000"width={15} height={15}/>
        </HeaderItemsMobile>
      </HeaderMobile>
      <InputContainerToMobile>
        <input type="text" placeholder="Escribe una nueva publicación...." />
        <ActionsToMobile>
            <Smile className="item" size={10} />
            <Image className="item" size={10} />
            <Calendar className="item" size={10} />
            <Plus className="item" size={10} />
            <Clock className="item" size={10} />
            <PublishButton>Publicar</PublishButton>
        </ActionsToMobile>
      </InputContainerToMobile>
      <ContainerTitleGreenUpSlider>
        <TitleGreenUpSlider>
          ¡Encontramos  tu  siguiente  experiencia !
        </TitleGreenUpSlider>
      </ContainerTitleGreenUpSlider> 
      <ContainerTextBelowUpSlider>
          <TextBelowUpSlider>
            Analizamos tu perfil, preferencias y actividad como contenido y búsquedas.
          </TextBelowUpSlider>
        </ContainerTextBelowUpSlider>
      <EmpleoSlider empleos={empleosData} />
      <ContainerTextBelowSlider>
        <TextBelowSlider>
          Tu futuro profesional comienza aquí. Descubre ofertas de empleo personalizadas y herramientas para impulsar tu carrera.
        </TextBelowSlider>
      </ContainerTextBelowSlider>
      <ContainerImageGreenSquareWithText>
        <ImageGrenSquareWithText src="/images/greenSquareWithText.svg" alt="Green Square Image"/>
      </ContainerImageGreenSquareWithText>
      <ContainerTextBelowGreenSquare>
        <TextBelowGreenSquare id="below">
          Utiliza filtros avanzados para refinar tus búsquedas por ubicación, salario, industria y más. ¡Ahorra tiempo y encuentra lo que buscas!
        </TextBelowGreenSquare>
      </ContainerTextBelowGreenSquare>
      <ContainerThreeLittleGreenSquare>
        <ContainerSquareAndText >
            <ContainerLittleGreenSquare>
              <LittleGreenSquare src="/images/littleGreenSquare.svg" alt="Little Green Square Image"/>
            </ContainerLittleGreenSquare>
            <ContainerTextBesideSquare>
              <TextUpBesideSquare id="five">
                Palabras clave
              </TextUpBesideSquare>
              <TextDownBesideSquare id="six">
                Encuentra exactamente lo que buscas.
              </TextDownBesideSquare>
            </ContainerTextBesideSquare>
        </ContainerSquareAndText>
        <ContainerSquareAndText >
            <ContainerLittleGreenSquare>
              <LittleGreenSquare src="/images/littleGreenSquare.svg" alt="Little Green Square Image"/>
            </ContainerLittleGreenSquare>
            <ContainerTextBesideSquare >
              <TextUpBesideSquare id="one">
                Ubicación
              </TextUpBesideSquare>
              <TextDownBesideSquare id="two">
                Define dónde quieres trabajar.
              </TextDownBesideSquare>
            </ContainerTextBesideSquare>
        </ContainerSquareAndText>
        <ContainerSquareAndText >
            <ContainerLittleGreenSquare>
              <LittleGreenSquare src="/images/littleGreenSquare.svg" alt="Little Green Square Image"/>
            </ContainerLittleGreenSquare>
            <ContainerTextBesideSquare>
              <TextUpBesideSquare id="three">
                Salario
              </TextUpBesideSquare>
              <TextDownBesideSquare id="four">
                Establece tus expectativas económicas.
              </TextDownBesideSquare>
            </ContainerTextBesideSquare>
        </ContainerSquareAndText>
      </ContainerThreeLittleGreenSquare>
      <Link to={"/JobOpportunity/:jobId"}>
        <ContainerButtonNext>
          <ButtonNext>COMENZAR</ButtonNext>
        </ContainerButtonNext>
      </Link>
      <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            <Link to={"/JobOpportunity/:jobId"}>
              <img src="/images/greenRocket.svg" alt="Green Rocket Footer Image" />
            </Link>
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
    </ContainerAllMobile>
    {/* -----------------------------Up to mobile----------------------------------------- */}
      <MenuAside>
        <FirstMenuAsideItem>
          <img src="/images/WhiteLogo.svg" alt="Woowii White Logo" />
          <UserAndImageCombo>
            <img src={userData?.profile_picture || "/images/Avatar1.png"} alt="Avatar" />
            <h3>@{userData?.username || "Usuario"}</h3>
          </UserAndImageCombo>
          <UserAndImageCombo>
            <Star />
            <p>Perfil destacado</p>
          </UserAndImageCombo>
        </FirstMenuAsideItem>
        <span></span>

        {/* Primer Dropdown */}
        <DropdownContainer>
          <DropdownButton onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}>
            Área profesional {isFirstDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </DropdownButton>
          {isFirstDropdownOpen && (
            <DropdownList>
              <DropdownItem>Desarrollador Fullstack</DropdownItem>
              <DropdownItem>UX | UI Designer</DropdownItem>
              <DropdownItem>Marketing Manager</DropdownItem>
            </DropdownList>
          )}
        </DropdownContainer>

        {/* Segundo Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsSecondDropdownOpen(!isSecondDropdownOpen)}>
            Experiencia {isSecondDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSecondDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem>0 - 1</SecondDropdownItem>
              <SecondDropdownItem>2 - 5</SecondDropdownItem>
              <SecondDropdownItem>6 - 10</SecondDropdownItem>
              <SecondDropdownItem>+10</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
              
        {/* Tercer Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsThirdDropdownOpen(!isThirdDropdownOpen)}>
            Horarios {isThirdDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isThirdDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem>Full time</SecondDropdownItem>
              <SecondDropdownItem>Part time</SecondDropdownItem>
              <SecondDropdownItem>Flexible</SecondDropdownItem>
              <SecondDropdownItem>Fines de semana</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
        {/* Quinto Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsFifthDropdownOpen(!isFifthDropdownOpen)}>
            Modalidad {isFifthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isFifthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem>Si</SecondDropdownItem>
              <SecondDropdownItem>No</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
        {/* Sexto Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsSixthDropdownOpen(!isSixthDropdownOpen)}>
            Preferencias {isSixthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSixthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" placeholder="Busca tu idioma aquí"/></SecondDropdownItem>
              <SecondDropdownItem>ingles</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
        {/* Séptimo Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsSeventhDropdownOpen(!isSeventhDropdownOpen)}>
          Rango salarial <strong>€</strong> | <strong>$</strong> {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSeventhDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" placeholder="Minimo"/></SecondDropdownItem>
              <SecondDropdownItem><input type="text" placeholder="Máximo"/></SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
         {/* Cuarto Dropdown */}
         <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsFourthDropdownOpen(!isFourthDropdownOpen)}>
            Ubicación {isFourthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isFourthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" /></SecondDropdownItem>
              <SecondDropdownItem>Madrid, España</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        <Published>
        <h3>Publicado</h3>
        <p>Hoy <strong>(59)</strong></p>
        <p>Ayer <strong>(18)</strong></p>
        <p>Última semana <strong>(138)</strong></p>
        <p>Todos <strong>(323)</strong></p>
        </Published>
        {/* <HelpButton> Chat de ayuda</HelpButton> */}
        <ContainerChatButton>
          <img src="/images/woodyChat.svg" alt="Woody Chat Image" onClick={() => setIsChatOpen(!isChatOpen)}/>
        </ContainerChatButton>
        {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}
      </MenuAside>
    <MainContainer>
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
        <ContainerBelowMain>
          <ContainerBelowMainLeft>
            <ContainerUserImageAndInput>
              <ContainerImage>
                <img src="/images/Avatar1.png" alt="Avatar One Image" />
              </ContainerImage>
              <InputContainerUpToMobile>
                <input type="text" placeholder="Escribe una nueva publicación...." />
                <ActionsUpToMobile>
                  <Smile className="item" size={10} />
                  <Image className="item" size={10} />
                  <Calendar className="item" size={10} />
                  <Plus className="item" size={10} />
                  <Clock className="item" size={10} />
                  <PublishButtonUpToMobile>Publicar</PublishButtonUpToMobile>
                </ActionsUpToMobile>
              </InputContainerUpToMobile>
            </ContainerUserImageAndInput>
            <ContainerFirstTextGreen>
                <FirstTextGreen>
                  ¡Encontramos tu siguiente experiencia profesional!
                </FirstTextGreen>
            </ContainerFirstTextGreen>
            <ContainerSubtitleFirstText>
              <SubtitleFirstText>
                Tu futuro profesional comienza aquí. Descubre ofertas de empleo personalizadas y herramientas para impulsar tu carrera.
              </SubtitleFirstText>
            </ContainerSubtitleFirstText>
            <ContainerGreenBannerLittle>
              <GreenBannerLittle src="/images/greenBannerLittle.svg" alt="Green Banner Little" />
            </ContainerGreenBannerLittle>
            <ContainerSubtitleBelowBanner>
              <SubtitleBelowBanner>
                Utiliza filtros avanzados para refinar tus búsquedas por ubicación, salario, industria y más. ¡Ahorra tiempo y encuentra lo que buscas!
              </SubtitleBelowBanner>
            </ContainerSubtitleBelowBanner>
        <ContainerBelowBanner>
          <ContainerThreeLittleGreenSquareUpMobile>
              <ContainerSquareAndTextUpMobile >
                  <ContainerLittleGreenSquareUpMobile>
                    <LittleGreenSquareUpMobile src="/images/littleGreenSquare.svg" alt="Little Green Square Image"/>
                  </ContainerLittleGreenSquareUpMobile>
                  <ContainerTextBesideSquareUpMobile>
                    <TextUpBesideSquareUpMobile id="five">
                      Palabras clave
                    </TextUpBesideSquareUpMobile>
                    <TextDownBesideSquareUpMobile id="six">
                      Encuentra exactamente lo que buscas.
                    </TextDownBesideSquareUpMobile>
                  </ContainerTextBesideSquareUpMobile>
              </ContainerSquareAndTextUpMobile>
            <ContainerSquareAndTextUpMobile >
              <ContainerLittleGreenSquareUpMobile>
                <LittleGreenSquareUpMobile src="/images/littleGreenSquare.svg" alt="Little Green Square Image"/>
              </ContainerLittleGreenSquareUpMobile>
              <ContainerTextBesideSquareUpMobile >
                <TextUpBesideSquareUpMobile id="one">
                  Ubicación
                </TextUpBesideSquareUpMobile>
                <TextDownBesideSquareUpMobile id="two">
                  Define dónde quieres trabajar.
                </TextDownBesideSquareUpMobile>
              </ContainerTextBesideSquareUpMobile>
            </ContainerSquareAndTextUpMobile>
            <ContainerSquareAndTextUpMobile >
              <ContainerLittleGreenSquareUpMobile>
                <LittleGreenSquareUpMobile src="/images/littleGreenSquare.svg" alt="Little Green Square Image"/>
              </ContainerLittleGreenSquareUpMobile>
              <ContainerTextBesideSquareUpMobile>
                <TextUpBesideSquareUpMobile id="three">
                  Salario
                </TextUpBesideSquareUpMobile>
                <TextDownBesideSquareUpMobile id="four">
                  Establece tus expectativas económicas.
                </TextDownBesideSquareUpMobile>
              </ContainerTextBesideSquareUpMobile>
            </ContainerSquareAndTextUpMobile>
          </ContainerThreeLittleGreenSquareUpMobile>
          <ContainerImageMonigotes>
            <ImageMonigotes src="/images/monigotes.svg" alt="Monigotes Inage" />
          </ContainerImageMonigotes>
        </ContainerBelowBanner>
        <Link to={"/JobOpportunity/:jobId"}>
          <ContainerButtonNextUpMobile>
            <ButtonNextUpMobile>CONTINUAR</ButtonNextUpMobile>
          </ContainerButtonNextUpMobile>
        </Link>
          </ContainerBelowMainLeft>
          <ContainerBelowMainRight>
            <JobSlider jobs={empleosData} />
          </ContainerBelowMainRight>
        </ContainerBelowMain>
        {/* <NewPost /> */}
        {/* <MainTitleAndSubtitle>
            <h1>¡Encontramos tu siguiente<br /> experiencia profesional!</h1>
            <p>Tu futuro profesional comienza aquí. Descubre ofertas de empleo <br /> personalizadas y herramientas para impulsar tu carrera.</p>
        </MainTitleAndSubtitle> */}
        {/* <GreenCentralContainer>
            <div>
            <h2>Un mundo laboral <br />personalizado: <br /> Coincidencias <br />perfectas.</h2>
            <p>Recomendaciones de empleo basadas <br /> en tu perfil, preferencias y actividad. <br />¡Encuentra el trabajo ideal para ti!</p>
            </div>
            <div>
                <div>
                    <h3>Análisis de perfil.</h3>
                    <p>Algoritmos avanzados que <br /> identifican tus puntos fuertes.</p>
                </div>
                <div>
                    <h3>Preferencias definidas.</h3>
                    <p>Consideramos tus intereses<br /> y expectativas</p>
                </div>
            </div>
        </GreenCentralContainer> */}
        {/* <LastParragraph>
            <p>Utiliza filtros avanzados para refinar tus búsquedas por ubicación, <br /> salario, industria y más. ¡Ahorra tiempo y encuentra lo que buscas!</p>
        </LastParragraph> */}
        {/* <LastThreeItems>
            <LastThreeGreenImages>
                <img src="/images/GreenRectangle.png" alt="" />
                <img src="/images/GreenRectangle.png" alt="" />
                <img src="/images/GreenRectangle.png" alt="" />
            </LastThreeGreenImages>
            <LastThreeTexts>
                <h2>Palabras clave</h2>
                <p>Encuentra exactamente lo que buscas.</p>
                <h2>Ubicación</h2>
                <p>Define dónde quieres trabajar.</p>
                <h2>Salario</h2>
                <p>Establece tus expectativas económicas.</p>
            </LastThreeTexts>
            <GreenPeople>
                <img src="/images/GreenPeople.png" alt="" />
            </GreenPeople>
        </LastThreeItems> */}
    </MainContainer>
    {/* <JobsContainer>
            <h2>Empleos destacados para tí</h2>
            <p>En función de tu perfil, preferencias <br /> y actividad como solicitudes, <br /> búsquedas y contenido guardado.</p>
            <hr />
            <span></span>
            <hr />
            <StyledLink to="/JobOpportunity">
                <h2>Desarrollador Web</h2>
                <h3>Madrid, España | HomeOffice</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
                    eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
                </p>
            </StyledLink>
            <hr />
            <span></span>
            <hr />
            <h2>Tester en Software</h2>
            <h3>Barcelona, España | Presencial</h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
            <hr />
            <span></span>
            <hr />
            <h2>.Net Senior</h2>
            <h3>Barcelona, España | HomeOffice</h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
            <hr />
            <span></span>
            <hr />
            <h2>UX Designer</h2>
            <h3>Madrid, España | HomeOffice</h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
            <span></span>
    </JobsContainer> */}
    </>
  );
}