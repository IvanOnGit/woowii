import { useEffect, useState } from "react";
import { Bell, Bookmark, BriefcaseBusiness, ChevronDown, ChevronUp,  Mail, Menu } from "lucide-react";
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
  SelectOption
} from "./styles";
import { Link } from "react-router-dom";
import VoiceTextInput from "../VoiceTextInput/VoiceTextInput";

export default function Hardset() {
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
  
      const [selectedSection, setSelectedSection] = useState<keyof SectionContent>("Cultura");

      interface SectionContent {
        [key: string]: { title: string } & { about: string };
      }
      
      const sectionContent: SectionContent = {
        Cultura: { title: "Historia sobre tu Cultura", about: "Sobre tu Cultura" },
        Liderazgo: { title: "Historia sobre tu Liderazgo", about: "Sobre tu Liderazgo" },
        Propósito: { title: "Historia sobre tu Propósito", about: "Sobre tu Propósito" },
        Innovación: { title: "Historia sobre tu Innovación", about: "Sobre tu Innovación" },
        Ambiente: { title: "Historia sobre tu Ambiente", about: "Sobre tu Ambiente" },
        Crecimiento: { title: "Historia sobre tu Crecimiento", about: "Sobre tu Crecimiento" },
        Errores: { title: "Historia sobre tus Errores", about: "Sobre tus Errores" },
        Talento: { title: "Historia sobre tu Talento", about: "Sobre tu Talento" },
      };
      
      const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({});
      
      const sectionOptions: { [key: string]: string[] } = {
        Cultura: [
          "Diversidad e inclusión",
          "Trabajo en equipo",
          "Respeto y valores",
          "Ética profesional",
          "Flexibilidad laboral",
          "Transparencia",
          "Comunicación abierta",
          "Colaboración",
        ],
        Liderazgo: [
          "Inspirador",
          "Transformacional",
          "Autocrático",
          "Democrático",
          "Coaching",
          "Liderazgo servicial",
          "Visionario",
          "Delegativo",
        ],
        Propósito: [
          "Impacto social",
          "Cambio positivo",
          "Sostenibilidad",
          "Innovación con sentido",
          "Crecimiento personal",
          "Educación y desarrollo",
          "Empoderamiento",
          "Justicia e igualdad",
        ],
        Innovación: [
          "Tecnología emergente",
          "Disrupción",
          "Creatividad aplicada",
          "Transformación digital",
          "Experimentación",
          "Agilidad",
          "Mentalidad abierta",
          "Investigación y desarrollo",
        ],
        Ambiente: [
          "Trabajo remoto",
          "Espacios colaborativos",
          "Cultura de confianza",
          "Bienestar laboral",
          "Ambiente relajado",
          "Sinergia entre equipos",
          "Política de puertas abiertas",
          "Diversidad generacional",
        ],
        Crecimiento: [
          "Plan de carrera",
          "Capacitación constante",
          "Mentoría",
          "Nuevas oportunidades",
          "Ascensos internos",
          "Feedback constructivo",
          "Desarrollo personal",
          "Habilidades en evolución",
        ],
        Errores: [
          "Aprendizaje del error",
          "Cultura de experimentación",
          "Flexibilidad ante fallos",
          "Tolerancia al riesgo",
          "Iteración constante",
          "Mentalidad de mejora",
          "Errores como oportunidades",
          "Resiliencia organizacional",
        ],
        Talento: [
          "Atracción de talento",
          "Gestión del talento",
          "Fidelización de empleados",
          "Desarrollo de habilidades",
          "Equipos de alto rendimiento",
          "Evaluaciones de desempeño",
          "Reconocimiento y motivación",
          "Diversidad de talentos",
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
        <span>COMPLETA TUS DATOS BÁSICOS</span>

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
        <span>ASPIRACIONES Y PREFERENCIAS</span>
        
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
            Tamaño de empresa {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Incorporación {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        <span>HABILIDADES Y EXPERIENCIA</span>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Metodologías {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Cursos | Certificados {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            IA | Big Data {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        <span>DATOS CLAVE PARA EL MATCHING</span>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Posibilidad de ascenso{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Impacto social{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Tu autonomía{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Tu liderazgo{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Tu principal motivación{isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        <HelpButton> Chat de ayuda</HelpButton>
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
              <Link to="/CompanyOverview">
              <ContinueButton>Continue</ContinueButton>
              </Link>
    </MainContainer>
    </>
  );
}