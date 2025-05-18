import { useEffect, useState } from "react";
import { Bell, Bookmark, BriefcaseBusiness, ChevronDown, ChevronUp, House, Mail, Menu, Mic, Star } from "lucide-react";
import { 
  ContainerWrapper, 
  FirstMenuAsideItem, 
  Header, 
  HeaderItems, 
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
  HelpButton,
  StoryExplanation,
  StoryForm,
  Checkbox,
  Container,
  OptionLabel,
  MainContainer,
  AboutHardset,
  TalkWithWoody,
  ContinueButton,
  AboutYou,
  SelectContainer,
  SelectOption,
  Description,
  StyledLink,
  ContainerAllMobile,
  ContainerUpSearhAndItemsMobile,
  AvatarToMobile,
  SearchUpToMobile,
  HeaderItemsToMobile,
  ContainerADNHistoryTitle,
  ADNHistoryTitle,
  ContainerParagrafBelowTitle,
  ParagrafBelowTitle,
  ContainerSubtitleBelowParagraf,
  SubtitleBelowParagraf,
  ContainerInputBelowSubtitle,
  ContainerTextsWithStar,
  TextWithStar,
  ContainerVoiceToText,
  VoiceToTextArea,
  ContainerTextAndMicro,
  TextAndMicro,
  ContainerMicro,
  ContainerChecks,
  CheckAndText,
  ContainerThreeLargeSelect,
  LargeSelect,
  ContainerFooterToMobile
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import VoiceTextInput from "../VoiceTextInput/VoiceTextInput";

export default function Hardset() {
  const navigate = useNavigate();
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
  const [isFifthDropdownOpen, setIsFifthDropdownOpen] = useState(false);
  const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
  const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);
  const [userData, setUserData] = useState<{ 
    username: string; 
    profile_picture: string;
    title: string;
    description: string;
    email: string;
  } | null>(null);
  
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;
  
      try {
        const response = await fetch(`http://localhost:3000/api/auth/get-user?userId=${userId}`);
        const data = await response.json();
        setUserData(data);
        setTitle(data.title || "");
        setDescription(data.description || "");
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };
  
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const fetchUserSkills = async () => {
      if (!userId) return;
  
      try {
        const response = await fetch(`http://localhost:3000/api/auth/get-user-skills?userId=${userId}`);
        const data = await response.json();
        console.log("Skills recuperadas:", data);
  
        setSelectedOptions({
          Hardset: data.hardset || [],
          Toolset: data.toolset || [],
          Softset: data.softset || [],
          Superpower: data.superpower || [],
          Analysis: data.analysis || [],
        });
      } catch (error) {
        console.error("Error al obtener las habilidades del usuario:", error);
      }
    };
  
    fetchUserSkills();
  }, [userId]);
  
  // Función para verificar si el usuario tiene un test de personalidad
  const checkPersonalityTest = async () => {
    if (!userId) return false;

    try {
      const response = await fetch(`http://localhost:3000/api/auth/check-personality-test?userId=${userId}`);
      const data = await response.json();
      return data.hasTest || false;
    } catch (error) {
      console.error("Error al verificar test de personalidad:", error);
      return false;
    }
  };

  const handleSave = async () => {
    if (!userId) return;
  
    try {
      // Guardar las habilidades del usuario
      const response = await fetch('http://localhost:3000/api/auth/save-user-skills', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          hardset: selectedOptions.Hardset,
          toolset: selectedOptions.Toolset,
          softset: selectedOptions.Softset,
          superpower: selectedOptions.Superpower,
          analysis: selectedOptions.Analysis,
        }),
      });
  
      const data = await response.json();
      console.log("Datos actualizados:", data);
      
      // Verificar si el usuario tiene un test de personalidad y redirigir adecuadamente
      const hasPersonalityTest = await checkPersonalityTest();
      
      if (hasPersonalityTest) {
        navigate("/JobFinder");
      } else {
        navigate("/SecondGift");
      }
      
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  };

  interface UpdateUserInfoRequest {
    userId: string;
    title?: string;
    description?: string;
  }

  const handleUpdateUserInfo = async (field: string) => {
    if (!userId) return;
    
    // Create the request body with only the required fields
    const requestBody: UpdateUserInfoRequest = { userId };
    
    // Add only the field being updated
    if (field === 'title') {
      requestBody.title = title;
    } else if (field === 'description') {
      requestBody.description = description;
    }
    
    try {
      const response = await fetch('http://localhost:3000/api/auth/update-user-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log("Información actualizada correctamente:", data);
        // Actualizar el userData con los nuevos valores
        setUserData(prev => prev ? {...prev, [field]: field === 'title' ? title : description} : null);
        
        // Salir del modo edición
        if (field === 'title') {
          setEditingTitle(false);
        } else {
          setEditingDescription(false);
        }
      } else {
        console.error("Error al actualizar la información:", data);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };
      
  const [selectedSection, setSelectedSection] = useState("Hardset");

  interface SectionContent {
    [key: string]: { title: string } & { about: string };
  }
  
  const sectionContent: SectionContent = {
    Analysis: { title: 'Historia sobre tu Analysis', about: 'Sobre tu Analysis' },
    Hardset: { title: 'Historia sobre tu Hardset', about: 'Sobre tu Hardset' },
    Softset: { title: 'Historia sobre tu Softset', about: 'Sobre tu Softset' },
    Toolset: { title: 'Historia sobre tu Toolset', about: 'Sobre tu Toolset' },
    Superpower: { title: 'Historia sobre tu Superpower', about: 'Sobre tu Superpower' },
  };
  
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({});
  
  const sectionOptions: { [key: string]: string[] } = {
    Hardset: [
      "Análisis de Datos",
      "Ciberseguridad",
      "Desarrollo Web",
      "Soporte Técnico",
      "Testing de Software",
      "Infraestructura",
      "Diseño UX | UI",
      "Gestión de Proyectos",
    ],
    Toolset: [
      "React",
      "Node.js",
      "Figma",
      "Docker",
      "AWS",
      "Python",
      "Kubernetes",
      "SQL",
    ],
    Softset: [
      "Trabajo en equipo",
      "Comunicación efectiva",
      "Resolución de problemas",
      "Liderazgo",
      "Gestión del tiempo",
      "Empatía",
      "Pensamiento crítico",
      "Creatividad",
    ],
    Superpower: [
      "Pensamiento analítico",
      "Aprendizaje rápido",
      "Adaptabilidad",
      "Innovación",
      "Atención al detalle",
      "Resiliencia",
      "Habilidades de negociación",
    ],
    Analysis: [
      "Análisis de tendencias",
      "Visualización de datos",
      "Predicción de mercado",
      "Segmentación de clientes",
      "Optimización de procesos",
      "Estrategia de negocio",
    ],
  };
  return (
    <>
      <MenuAside>
        <FirstMenuAsideItem>
          <img src="/images/GreenLogoDemo.svg" alt="Avatar" />
          <UserAndImageCombo>
          <img src={userData?.profile_picture || "/images/Avatar1.png"} alt="Avatar" />
          <h3>@{userData?.username || "Usuario"}</h3>
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
            Años de experiencia {isSecondDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
            Disponibilidad horaria {isThirdDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
        
        {/* Quinto Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsFifthDropdownOpen(!isFifthDropdownOpen)}>
            Posibilidad de mudanza {isFifthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
            Idiomas y nivel {isSixthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSixthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" placeholder="Busca tu idioma aquí"/></SecondDropdownItem>
              <SecondDropdownItem>ingles</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        <span></span>
        
        {/* Séptimo Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsSeventhDropdownOpen(!isSeventhDropdownOpen)}>
            Interes de rol {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSeventhDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem>Rango salarial | <strong>€</strong> $</SecondDropdownItem>
              <SecondDropdownItem>Minimo</SecondDropdownItem>
              <SecondDropdownItem>Máximo</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
         <SecondDropdownContainer>
          <SecondDropdownButton>
            Contrato {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Modalidad {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Incorporación {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Expectativa salarial {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        <StyledLink to="/UserContactForm">
          <HelpButton> Chat de ayuda</HelpButton>
        </StyledLink>
      </MenuAside>
    <MainContainer>
      <ContainerWrapper>
        <Header>
          <HeaderItems>
            <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
            <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
            <Bell />
            <Mail />
            <BriefcaseBusiness />
            <Bookmark />
            <Menu />
          </HeaderItems>
        </Header>
      </ContainerWrapper>
      <Description>
        <div>
        <h1>Describite como profesional para las empresas</h1>
        {editingDescription ? (
          <textarea 
            maxLength={250} 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Utilizá una descripción clara y directa."
          />
        ) : (
          <p>{userData?.description || "Sin descripción. Haz clic en editar para agregar una."}</p>
        )}
        <div>
          <button onClick={() => setEditingDescription(true)}>editar</button>
          {editingDescription && (
            <button onClick={() => handleUpdateUserInfo('description')}>guardar</button>
          )}
        </div>
        </div>
        <div>
        <h2>Cuál es tu título cómo profesional</h2>
        {editingTitle ? (
          <input 
            maxLength={30} 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Por ejemplo "Desarrollador Frontend"'
          />
        ) : (
          <p>{userData?.title || "Sin título. Haz clic en editar para agregar uno."}</p>
        )}
        <div>
          <button onClick={() => setEditingTitle(true)}>editar</button>
          {editingTitle && (
            <button onClick={() => handleUpdateUserInfo('title')}>guardar</button>
          )}
        </div>
        </div>
      </Description>
      <StoryExplanation>
            <h2>{sectionContent[selectedSection].title}</h2>
            <p>Aquí explicarás como tu formación o experiencia, definen tus habilidades <br /> duras mediante ejemplos que tu CV no puede contar sólo en bullet points.</p>
      </StoryExplanation>
        <StoryForm>
        <h3>Escojamos un título llamativo para tu historia:</h3>
        <input type="text" placeholder="Cuando la web habla, habla JavaScript, y yo soy su traductor."/>
        <p>✍️ Cuenta tu historia de forma clara dentro de los caracteres permitidos.</p>
        <p>✍️ Puedes compartir varias experiencias sobre tu trabajo y formación, así <br /> que analiza tu recorrido y usa la imaginación.</p>
        <p>🚀 ¿Necesitas ayuda? Nuestra IA está lista para potenciar tu texto.</p>
        <VoiceTextInput />
        </StoryForm>
        <AboutYou>
          {Object.keys(sectionContent).map((section) => (
            <button key={section} onClick={() => setSelectedSection(section)}>
              {section}
            </button>
          ))}
        </AboutYou>
        <Container>
            <OptionLabel>
                <Checkbox
                type="checkbox"
                name="rol"
                value="permanente"
                />
                Trabajaría en este rol para toda la vida
            </OptionLabel>
            <OptionLabel>
                <Checkbox
                type="checkbox"
                name="rol"
                value="cambio"
                />
                No me siento cómodo y busco un cambio de rol
            </OptionLabel>
            <OptionLabel>
                <Checkbox
                type="checkbox"
                name="rol"
                value="responsabilidades"
                />
                Quiero tener cada vez más responsabilidades
            </OptionLabel>
            <OptionLabel>
                <Checkbox
                type="checkbox"
                name="rol"
                value="sin-cargo"
                />
                No quiero roles donde tener gente a cargo.
            </OptionLabel>
        </Container>
        <AboutHardset>
        <h2>{sectionContent[selectedSection].about}</h2>
        <select 
        onChange={(e) => {
          const option = e.target.value;
          setSelectedOptions((prev) => {
            const currentOptions = prev[selectedSection] || [];
            return {
              ...prev,
              [selectedSection]: currentOptions.includes(option) 
                ? currentOptions.filter(item => item !== option) 
                : [...currentOptions, option]
            };
          });
        }} 
        value=""
      >
          <option value="" disabled>Selecciona una opción</option>
          {sectionOptions[selectedSection]?.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <SelectContainer>
          {selectedOptions[selectedSection]?.map((option) => (
            <SelectOption key={option}>
              {option}
            </SelectOption>
          ))}
        </SelectContainer>
      </AboutHardset>
              <TalkWithWoody>¡Chatea con Woody! </TalkWithWoody>
              {/* Reemplazamos el Link con un botón que ejecuta handleSave */}
              <ContinueButton onClick={handleSave}>Guardar y continuar</ContinueButton>
    </MainContainer>
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
          <ADNHistoryTitle>Historias sobre tu hardset</ADNHistoryTitle>
        </ContainerADNHistoryTitle>
        <ContainerParagrafBelowTitle>
          <ParagrafBelowTitle>
            Aquí explicarás como tu formación o experiencia, definen tus habilidades duras mediante ejemplos que tu CV no puede contar sólo en bullet points.
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
            placeholder="Mi relación con JavaScript va más allá del simple uso de ES6. Hemos vivido juntos todos los cambios del ecosistema web: desde la época de jQuery hasta los días dorados de React y Node.js."
          >
          </VoiceToTextArea>
        </ContainerVoiceToText>
        <ContainerTextAndMicro>
          <TextAndMicro>Cuéntalo con voz y edita lo que quieras</TextAndMicro>
          <ContainerMicro><Mic width={10} height={10} stroke="#75B300"/></ContainerMicro>
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
            <Link to="/SecondGift">
              <img src="/images/greenRocket.svg" alt="Rocket Footer Image" />
            </Link>
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
    </ContainerAllMobile>
    </>
  );
}