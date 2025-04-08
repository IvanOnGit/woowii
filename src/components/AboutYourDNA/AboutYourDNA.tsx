
// import { useEffect, useState } from "react";
// import { Bell, Bookmark, BriefcaseBusiness, ChevronDown, ChevronUp,  Mail, Menu } from "lucide-react";
// import { 
//   ContainerWrapper, 
//   FirstMenuAsideItem, 
//   Header, 
//   HeaderItems, 
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
//   StoryExplanation,
//   StoryForm,
//   Checkbox,
//   Container,
//   OptionLabel,
//   MainContainer,
//   AboutHardset,
//   TalkWithWoody,
//   ContinueButton,
//   AboutYou,
//   SelectContainer,
//   SelectOption
// } from "./styles";
// import { Link } from "react-router-dom";
// import VoiceTextInput from "../VoiceTextInput/VoiceTextInput";



// export default function Hardset() {
//   const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
//   const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
//   const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
//   const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
//   const [isFifthDropdownOpen, setIsFifthDropdownOpen] = useState(false);
//   const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
//   const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);
//   const userId = localStorage.getItem("userId");
//   const [userData, setUserData] = useState<{ username: string; profile_picture: string } | null>(null);
//       useEffect(() => {
//         const fetchUserData = async () => {
//             if (!userId) return;
  
//             const response = await fetch(`http://localhost:3000/api/auth/get-user?userId=${userId}`);
//             const data = await response.json();
//             console.log(data);  // Verifica qué datos estás recibiendo
//             setUserData(data);
//         };
  
//         fetchUserData();
//       }, [userId]);
  
//       const [selectedSection, setSelectedSection] = useState<keyof SectionContent>("Cultura");

//       interface SectionContent {
//         [key: string]: { title: string } & { about: string };
//       }
      
//       const sectionContent: SectionContent = {
//         Cultura: { title: "Historia sobre tu Cultura", about: "Sobre tu Cultura" },
//         Liderazgo: { title: "Historia sobre tu Liderazgo", about: "Sobre tu Liderazgo" },
//         Propósito: { title: "Historia sobre tu Propósito", about: "Sobre tu Propósito" },
//         Innovación: { title: "Historia sobre tu Innovación", about: "Sobre tu Innovación" },
//         Ambiente: { title: "Historia sobre tu Ambiente", about: "Sobre tu Ambiente" },
//         Crecimiento: { title: "Historia sobre tu Crecimiento", about: "Sobre tu Crecimiento" },
//         Errores: { title: "Historia sobre tus Errores", about: "Sobre tus Errores" },
//         Talento: { title: "Historia sobre tu Talento", about: "Sobre tu Talento" },
//       };
      
//       const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({});
      
//       const sectionOptions: { [key: string]: string[] } = {
//         Cultura: [
//           "Diversidad e inclusión",
//           "Trabajo en equipo",
//           "Respeto y valores",
//           "Ética profesional",
//           "Flexibilidad laboral",
//           "Transparencia",
//           "Comunicación abierta",
//           "Colaboración",
//         ],
//         Liderazgo: [
//           "Inspirador",
//           "Transformacional",
//           "Autocrático",
//           "Democrático",
//           "Coaching",
//           "Liderazgo servicial",
//           "Visionario",
//           "Delegativo",
//         ],
//         Propósito: [
//           "Impacto social",
//           "Cambio positivo",
//           "Sostenibilidad",
//           "Innovación con sentido",
//           "Crecimiento personal",
//           "Educación y desarrollo",
//           "Empoderamiento",
//           "Justicia e igualdad",
//         ],
//         Innovación: [
//           "Tecnología emergente",
//           "Disrupción",
//           "Creatividad aplicada",
//           "Transformación digital",
//           "Experimentación",
//           "Agilidad",
//           "Mentalidad abierta",
//           "Investigación y desarrollo",
//         ],
//         Ambiente: [
//           "Trabajo remoto",
//           "Espacios colaborativos",
//           "Cultura de confianza",
//           "Bienestar laboral",
//           "Ambiente relajado",
//           "Sinergia entre equipos",
//           "Política de puertas abiertas",
//           "Diversidad generacional",
//         ],
//         Crecimiento: [
//           "Plan de carrera",
//           "Capacitación constante",
//           "Mentoría",
//           "Nuevas oportunidades",
//           "Ascensos internos",
//           "Feedback constructivo",
//           "Desarrollo personal",
//           "Habilidades en evolución",
//         ],
//         Errores: [
//           "Aprendizaje del error",
//           "Cultura de experimentación",
//           "Flexibilidad ante fallos",
//           "Tolerancia al riesgo",
//           "Iteración constante",
//           "Mentalidad de mejora",
//           "Errores como oportunidades",
//           "Resiliencia organizacional",
//         ],
//         Talento: [
//           "Atracción de talento",
//           "Gestión del talento",
//           "Fidelización de empleados",
//           "Desarrollo de habilidades",
//           "Equipos de alto rendimiento",
//           "Evaluaciones de desempeño",
//           "Reconocimiento y motivación",
//           "Diversidad de talentos",
//         ],
//       };
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
//         <span>COMPLETA TUS DATOS BÁSICOS</span>

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
//         <span>ASPIRACIONES Y PREFERENCIAS</span>
        
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
//             Tamaño de empresa {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Incorporación {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
//         <span>HABILIDADES Y EXPERIENCIA</span>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Metodologías {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Cursos | Certificados {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             IA | Big Data {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
//         <span>DATOS CLAVE PARA EL MATCHING</span>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Posibilidad de ascenso{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Impacto social{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Tu autonomía{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Tu liderazgo{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
        
//         <SecondDropdownContainer>
//           <SecondDropdownButton>
//             Tu principal motivación{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
//           </SecondDropdownButton>
//         </SecondDropdownContainer>
//         <HelpButton> Chat de ayuda</HelpButton>
//       </MenuAside>
//     <MainContainer>
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
//       <StoryExplanation>
//             <h2>{sectionContent[selectedSection].title}</h2>
//             <p>Aquí explicarás como tu formación o experiencia, definen tus habilidades <br /> duras mediante ejemplos que tu CV no puede contar sólo en bullet points.</p>
//       </StoryExplanation>
//         <StoryForm>
//         <h3>Escojamos un título llamativo para tu historia:</h3>
//         <input type="text" placeholder="Cuando la web habla, habla JavaScript, y yo soy su traductor."/>
//         <p>✍️ Cuenta tu historia de forma clara dentro de los caracteres permitidos.</p>
//         <p>✍️ Puedes compartir varias experiencias sobre tu trabajo y formación, así <br /> que analiza tu recorrido y usa la imaginación.</p>
//         <p>🚀 ¿Necesitas ayuda? Nuestra IA está lista para potenciar tu texto.</p>
//         <VoiceTextInput />
//         </StoryForm>
//         <AboutYou>
//           {Object.keys(sectionContent).map((section) => (
//             <button key={section} onClick={() => setSelectedSection(section)}>
//               {section}
//             </button>
//           ))}
//         </AboutYou>
//         <Container>
//             <OptionLabel>
//                 <Checkbox
//                 type="checkbox"
//                 name="rol"
//                 value="permanente"
//                 />
//                 Trabajaría en este rol para toda la vida
//             </OptionLabel>
//             <OptionLabel>
//                 <Checkbox
//                 type="checkbox"
//                 name="rol"
//                 value="cambio"
//                 />
//                 No me siento cómodo y busco un cambio de rol
//             </OptionLabel>
//             <OptionLabel>
//                 <Checkbox
//                 type="checkbox"
//                 name="rol"
//                 value="responsabilidades"
//                 />
//                 Quiero tener cada vez más responsabilidades
//             </OptionLabel>
//             <OptionLabel>
//                 <Checkbox
//                 type="checkbox"
//                 name="rol"
//                 value="sin-cargo"
//                 />
//                 No quiero roles donde tener gente a cargo.
//             </OptionLabel>
//         </Container>
//         <AboutHardset>
//         <h2>{sectionContent[selectedSection].about}</h2>
//         <select 
//         onChange={(e) => {
//           const option = e.target.value;
//           setSelectedOptions((prev) => {
//             const currentOptions = prev[selectedSection] || [];
//             return {
//               ...prev,
//               [selectedSection]: currentOptions.includes(option) 
//                 ? currentOptions.filter(item => item !== option) 
//                 : [...currentOptions, option]
//             };
//           });
//         }} 
//         value=""
//       >
//           <option value="" disabled>Selecciona una opción</option>
//           {sectionOptions[selectedSection]?.map((option) => (
//             <option key={option} value={option}>{option}</option>
//           ))}
//         </select>
//         <SelectContainer>
//           {selectedOptions[selectedSection]?.map((option) => (
//             <SelectOption key={option}>
//               {option}
//             </SelectOption>
//           ))}
//         </SelectContainer>
//       </AboutHardset>
//               <TalkWithWoody>¡Chatea con Woody! </TalkWithWoody>
//               <Link to="/CompanyOverview">
//               <ContinueButton>Continue</ContinueButton>
//               </Link>
//     </MainContainer>
//     </>
//   );
// }
import { useState } from "react";
import { Bell, BriefcaseBusiness, House, Mail, Menu, Mic, Star } from "lucide-react";
import { ADNHistoryTitle, 
  AvatarToMobile, 
  ButtonNext, 
  CheckAndText, 
  ContainerADNHistoryTitle, 
  ContainerAllMobile, 
  ContainerAllUpToMobile, 
  ContainerBenefits, 
  ContainerBlueLabels, 
  ContainerBlueLabelsThree, 
  ContainerBlueLabelsTwo, 
  ContainerBodyLeft, 
  ContainerBodyRight, 
  ContainerButtonNext, 
  ContainerChecks, 
  ContainerColumnBody, 
  ContainerColumnLogoAndSelects, 
  ContainerEyelashesRight, 
  ContainerFirstsSelects, 
  ContainerFooterToMobile, 
  ContainerInputBelowSubtitle, 
  ContainerLogo, 
  ContainerMicro, 
  ContainerMonetaryIncentives, 
  ContainerParagrafBelowTitle, 
  ContainerPrincipalText, 
  ContainerRecognitionText, 
  ContainerSecondSelects, 
  ContainerSingleRowLabels, 
  ContainerSubtitleBelowParagraf, 
  ContainerTellYourStoryParagraphGroup, 
  ContainerTextAndMicro, 
  ContainerTextBelowPrincipal, 
  ContainerTextsWithStar, 
  ContainerThreeLargeSelect, 
  ContainerUpItems, 
  ContainerUpSearhAndItemsMobile, 
  ContainerVoiceToText, 
  EyelashesSingle, 
  HeaderItemsLeft, 
  HeaderItemsRight, 
  HeaderItemsToMobile, 
  LargeSelect, 
  ParagrafBelowTitle, 
  SearchUpToMobile,  
  SingleLabelBlue, 
  SingleLabelGray, 
  SubtitleBelowParagraf,
  TextAndMicro,
  TextWithStar,
  VoiceToTextArea,
  WoodyChat} from "./styles";
import ChatBox from "../ChatBox/ChatBox";
import { Link } from "react-router-dom";

export default function AboutYourDNA() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
    <ContainerAllMobile>
        <ContainerUpSearhAndItemsMobile>
                <AvatarToMobile>
                    <img src="/images/avatarCompany1.svg" alt="Company Avatar" />
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
        <ContainerADNHistoryTitle>
          <ADNHistoryTitle>Historias sobre tu ADN</ADNHistoryTitle>
        </ContainerADNHistoryTitle>
        <ContainerParagrafBelowTitle>
          <ParagrafBelowTitle>
            Aquí explicarás cómo los valores, la misión y la visión de tu empresa, junto con sus proyectos destacados y logros,   reflejan la esencia y fortalezas que no se pueden captar solo con cifras o estadísticas.
          </ParagrafBelowTitle>
        </ContainerParagrafBelowTitle>
        <ContainerSubtitleBelowParagraf>
          <SubtitleBelowParagraf>Escojamos un título llamativo para tu historia:</SubtitleBelowParagraf>
        </ContainerSubtitleBelowParagraf>
        <ContainerInputBelowSubtitle>
          <input type="text" id="choose" name="çhoose" placeholder="Aquí la palabra 'lunes' no es un insulto."/>
        </ContainerInputBelowSubtitle>
        <ContainerTextsWithStar>
          <TextWithStar>
            <Star className="star" width={12} height={12}/>
            <p>Cuenta tu historia de forma clara dentro de los caracteres permitidos.</p>
          </TextWithStar>
          <TextWithStar>
            <Star className="star" width={12} height={12}/>
            <p>Puedes compartir varias experiencias sobre tu empresa, así que analiza todo lo que habéis logrado, que os diferencia y usa tu imaginación.</p>
          </TextWithStar>
          <TextWithStar >
            <Star className="last star " width={12} height={12}/>
            <p className="last">¿Necesitas ayuda? Nuestra IA está lista para potenciar tu texto.</p>
          </TextWithStar>
        </ContainerTextsWithStar>
        <ContainerVoiceToText>
          <VoiceToTextArea
            placeholder="Empezamos la semana con café e ideas, no con reuniones eternas. Creemos en la autonomía, la flexibilidad y en disfrutar lo que hacemos. Si buscas un lugar donde trabajar bien no signifique contar horas, esta es tu tribu."
          >
          </VoiceToTextArea>
        </ContainerVoiceToText>
        <ContainerTextAndMicro>
          <TextAndMicro>Cuéntalo con voz y edita lo que quieras</TextAndMicro>
          <ContainerMicro><Mic width={10} height={10} stroke="#460BFF"/></ContainerMicro>
        </ContainerTextAndMicro>
        <ContainerChecks >
          <CheckAndText >
              <p ><input type="checkbox" name="one" id="one" />  Priorizamos el fit cultural.</p>
          </CheckAndText>
          <CheckAndText id="first">
            <p><input type="checkbox" name="two" id="two" />  Buscamos un cambio de estructuras en los sectores.</p>
          </CheckAndText>
          <CheckAndText>
            <p><input type="checkbox" name="three" id="three" />  Valoramos más las habilidades blandas que las técnicas.</p>
          </CheckAndText>
          <CheckAndText>
            <p><input type="checkbox" name="four" id="four" />  Queremos abrir nuevos departamentos.</p>
          </CheckAndText>
        </ContainerChecks>
        <ContainerThreeLargeSelect>
          <LargeSelect>
            <option value="" selected>RECONOCIMIENTO</option>
            <hr></hr>
          </LargeSelect>
          <LargeSelect>
            <option value="" selected>INCENTIVOS</option>
            <hr></hr>
          </LargeSelect>
          <LargeSelect>
           <option value="" selected>BENEFICIOS</option>
           <hr></hr>
          </LargeSelect>
        </ContainerThreeLargeSelect>
        <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            <Link to="/CompanyOverview">
              <img src="/images/rocketFooter.svg" alt="Rocket Footer Image" />
            </Link>
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
    </ContainerAllMobile>
    {/* ---------------------------UP TO MOBILE AND TABLET -------------------------------------------- */}
    <ContainerAllUpToMobile>
        <ContainerColumnLogoAndSelects>
          <ContainerLogo>
            <img src="/images/WhiteLogo.svg" alt="Woowii White Logo" />
          </ContainerLogo>
          <ContainerFirstsSelects>
          <select id="lenguaje" name="lenguaje">
              <option  value="" selected>Lenguaje de Empresa</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="cultura" name="cultura">
              <option value="" selected>Cultura Empresarial</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="estructura" name="estructura">
              <option value="" selected>Estructura Orgaizacional</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="ambiente" name="ambiente">
              <option value="" selected>Ambiente laboral</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="rasgos" name="rasgos">
              <option value="" selected>Rasgos de personalidad</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="bienestar" name="bienestar">
              <option value="" selected>Bienestar</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="reconocimiento" name="reconocimiento">
              <option value="" selected>Reconocimiento y recompensas</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="incentivos" name="incentivos">
              <option value="" selected>Incentivos</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="beneficios" name="beneficios">
              <option value="" selected>Beneficios</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="experiencias" name="experiencias">
              <option value="" selected>Experiencias</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="estilo" name="estilo">
              <option value="" selected>Estilo de gestión</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="diversidad" name="diversidad">
              <option value="" selected>Diversidad e inclusión</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="comunicación " name="comunicación ">
              <option value="" selected>Comunicación</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="colaboraciones" name="colaboraciones">
              <option value="" selected>Colaboraciones</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="innovación" name="innovación">
              <option value="" selected>Innovación y adaptabilidad</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          </ContainerFirstsSelects>
          <ContainerSecondSelects>
          <select id="settings" name="settings">
              <option value="" selected>Settings</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="sign" name="sign">
              <option value="" selected>Sign Out</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          <select id="help" name="help">
              <option value="" selected>Help</option>
              <hr></hr>
              <option value="value1">Colaborativa</option>
              <option value="value2">Competitiva</option>
              <option value="value3">Estructurada</option>
              <option value="value4">Relajada</option>
              <option value="value5">Ritmo Acelerado</option>
          </select>
          </ContainerSecondSelects>
          <WoodyChat src="/images/woodyChat.svg" alt="Woody Chat Image" onClick={() => setIsChatOpen(!isChatOpen)} >
            </WoodyChat>
            {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}
        </ContainerColumnLogoAndSelects>
        <ContainerColumnBody>
        <ContainerUpItems>
          <HeaderItemsLeft>
            <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
            <p><img src="/images/TrophyWiibucks.svg" alt="wiibucks" />00</p>
          </HeaderItemsLeft> 
          <HeaderItemsRight>
            <img src="/images/avatarCompany1.svg" alt="Company Avatar"/>
            <House className="items"/>
            <BriefcaseBusiness className="items"/>
            <Mail className="items"/>
            <Bell className="items"/>
            <Menu className="items"/>
          </HeaderItemsRight>
          </ContainerUpItems>
            <ContainerBodyLeft>
              <ContainerPrincipalText>
                <h2>Historias sobre tu ADN:</h2>
              </ContainerPrincipalText>
              <ContainerTextBelowPrincipal>
                <p>Aquí explicarás cómo los valores, la misión y la visión de tu empresa, junto con sus proyectos destacados y logros,    reflejan la esencia y fortalezas que no se pueden captar solo con cifras o estadísticas.</p>
              </ContainerTextBelowPrincipal>
              <ContainerTellYourStoryParagraphGroup>
                <p>✍️ Cuenta tu historia de forma clara dentro de los caracteres permitidos.</p>
                <p>✍️ Puedes compartir varias experiencias sobre tu empresa, así que analiza todo lo que habéis logrado, que os diferencia y usa tu imaginación.</p>
                <p>🚀 ¿Necesitas ayuda? Nuestra IA está lista para potenciar tu texto.</p>
              </ContainerTellYourStoryParagraphGroup>
              <ContainerVoiceToText>
                <VoiceToTextArea
                  placeholder="Empezamos la semana con café e ideas, no con reuniones eternas. Creemos en la autonomía, la flexibilidad y en disfrutar lo que hacemos. Si buscas un lugar donde trabajar bien no signifique contar horas, esta es tu tribu."
                  >
                </VoiceToTextArea>
              </ContainerVoiceToText>
              <ContainerTextAndMicro>
                <TextAndMicro>Cuéntalo con voz y edita lo que quieras</TextAndMicro>
                <ContainerMicro><Mic id="micro" width={10} height={10} stroke="#460BFF"/></ContainerMicro>
              </ContainerTextAndMicro>
            <ContainerChecks >
              <CheckAndText >
                  <p ><input type="checkbox" name="one" id="one" />  Priorizamos el fit cultural.</p>
              </CheckAndText>
              <CheckAndText id="first">
                  <p><input type="checkbox" name="two" id="two" />  Buscamos un cambio de estructuras en los sectores.</p>
              </CheckAndText>
              <CheckAndText>
                  <p><input type="checkbox" name="three" id="three" />  Valoramos más las habilidades blandas que las técnicas.</p>
              </CheckAndText>
              <CheckAndText>
                <p><input type="checkbox" name="four" id="four" />  Queremos abrir nuevos departamentos.</p>
              </CheckAndText>
            </ContainerChecks>
            <ContainerRecognitionText>
              <p>RECONOCIMIENTO</p>
            </ContainerRecognitionText>
            <ContainerBlueLabels>
              <ContainerSingleRowLabels>
                  <SingleLabelBlue>Trabajo en equipo</SingleLabelBlue>
                  <SingleLabelBlue>Innovación</SingleLabelBlue>
                  <SingleLabelGray>Ámbito laboral</SingleLabelGray>
              </ContainerSingleRowLabels>
              <ContainerSingleRowLabels>
                  <SingleLabelGray>Medalla de mérito</SingleLabelGray>
                  <SingleLabelGray>Empleado del mes</SingleLabelGray>
                  <SingleLabelBlue>Organización</SingleLabelBlue>
              </ContainerSingleRowLabels>
              <ContainerSingleRowLabels>
                  <SingleLabelGray>Mejor servicio al cliente</SingleLabelGray>
                  <SingleLabelBlue>Años de servicio</SingleLabelBlue>
                  <SingleLabelGray>Gestión de equipo</SingleLabelGray>
              </ContainerSingleRowLabels>
            </ContainerBlueLabels>
            <ContainerMonetaryIncentives>
              <p>INCENTIVOS MONETARIOS</p>
            </ContainerMonetaryIncentives>
            <ContainerBlueLabelsTwo>
              <ContainerSingleRowLabels>
                  <SingleLabelBlue>Bonos por desempeño</SingleLabelBlue>
                  <SingleLabelBlue>Objetivos trimestrales</SingleLabelBlue>
                  <SingleLabelGray>Lorem Ipsum</SingleLabelGray>
              </ContainerSingleRowLabels>
              <ContainerSingleRowLabels>
                  <SingleLabelBlue>Comisiones</SingleLabelBlue>
                  <SingleLabelGray>Bonos por patentes</SingleLabelGray>
                  <SingleLabelGray>Lorem Ipsum</SingleLabelGray>
              </ContainerSingleRowLabels>
              <ContainerSingleRowLabels>
                  <SingleLabelBlue>Incentivos referidos</SingleLabelBlue>
                  <SingleLabelBlue>Premios de productividad</SingleLabelBlue>
                  <SingleLabelGray>Lorem Ipsum</SingleLabelGray>
              </ContainerSingleRowLabels>
            </ContainerBlueLabelsTwo>
            <ContainerBenefits>
              <p>BENEFICIOS</p>
            </ContainerBenefits>
            <ContainerBlueLabelsThree>
              <ContainerSingleRowLabels>
                  <SingleLabelBlue>Días libre extra</SingleLabelBlue>
                  <SingleLabelBlue>Seguro médico</SingleLabelBlue>
                  <SingleLabelGray>Gimnasio</SingleLabelGray>
              </ContainerSingleRowLabels>
              <ContainerSingleRowLabels>
                  <SingleLabelGray>Horarios flexibles</SingleLabelGray>
                  <SingleLabelGray>Plan de pensiones</SingleLabelGray>
                  <SingleLabelBlue>Desarrollo personal</SingleLabelBlue>
              </ContainerSingleRowLabels>
              <ContainerSingleRowLabels>
                  <SingleLabelGray>Home Office</SingleLabelGray>
                  <SingleLabelBlue>Beca de estudio</SingleLabelBlue>
                  <SingleLabelGray>Mentorías</SingleLabelGray>
              </ContainerSingleRowLabels>
            </ContainerBlueLabelsThree>
            <ContainerButtonNext>
            <Link to="/CompanyOverview">
              <ButtonNext>CONTINUAR</ButtonNext>
            </Link>
            </ContainerButtonNext>
            </ContainerBodyLeft>
            <ContainerBodyRight>
              <ContainerEyelashesRight>
                <EyelashesSingle>Cultura</EyelashesSingle>
                <EyelashesSingle>Liderazgo</EyelashesSingle>
                <EyelashesSingle>Propósito</EyelashesSingle>
                <EyelashesSingle>Innovación</EyelashesSingle>
                <EyelashesSingle>Ambiente</EyelashesSingle>
                <EyelashesSingle>Crecimiento</EyelashesSingle>
                <EyelashesSingle>Errores</EyelashesSingle>
                <EyelashesSingle>Talento</EyelashesSingle>
              </ContainerEyelashesRight>
            </ContainerBodyRight>
        </ContainerColumnBody>
    </ContainerAllUpToMobile>
    </>
  )
}
