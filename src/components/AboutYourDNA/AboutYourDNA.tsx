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
  const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);
  const id = localStorage.getItem("id");
  const [companyData, setCompanyData] = useState<{ Company_username: string; Company_avatar: string } | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      if (!id) {
        console.error("ID is missing or invalid.");
        return; // No hacemos la solicitud si la id es inválida
      }

      const numericId = Number(id);
      if (isNaN(numericId) || numericId <= 0) {
        console.error("ID is not a valid number.");
        return; // Si no es un número válido, no hacemos la solicitud
      }

      // Cambié 'companyId' por 'id' en la URL
      const url = `https://api.woowiihr.com//api/auth/get-company?id=${numericId}`;
      console.log("Requesting URL:", url); // Verifica si la URL es correcta

      try {
        const response = await fetch(url);
        const data = await response.json();
        setCompanyData(data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, [id]);
  
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
                    <img src="/images/LogoBlue.svg" alt="Avatar" />
                  <span></span>
                    <UserAndImageCombo>
                    <img src={companyData?.Company_avatar || "/images/defaultCompanyAvatar.svg"} alt="Company Avatar" />
                    <h3>@{companyData?.Company_username || "Empresa"}</h3>
                    </UserAndImageCombo>  
                  </FirstMenuAsideItem>
          
                  {/* Primer Dropdown */}
                  <DropdownContainer>
                    <DropdownButton onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}>
                      Cultura y valores {isFirstDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
                      Estructura organizacional {isSecondDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
                      Ambiente laboral {isThirdDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
                      Tipo de liderazgo {isFourthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                    </SecondDropdownButton>
                    {isFourthDropdownOpen && (
                      <SecondDropdownList>
                        <SecondDropdownItem><input type="text" /></SecondDropdownItem>
                        <SecondDropdownItem>Madrid, España</SecondDropdownItem>
                      </SecondDropdownList>
                    )}
                  </SecondDropdownContainer>
                  <span></span>
                  
                  {/* Séptimo Dropdown */}
                  <SecondDropdownContainer>
                    <SecondDropdownButton onClick={() => setIsSeventhDropdownOpen(!isSeventhDropdownOpen)}>
                      Beneficios {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
                      Diversidad e inclusión {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                    </SecondDropdownButton>
                  </SecondDropdownContainer>
                  
                  <SecondDropdownContainer>
                    <SecondDropdownButton>
                      Comunicación {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                    </SecondDropdownButton>
                  </SecondDropdownContainer>
                  
                  <SecondDropdownContainer>
                    <SecondDropdownButton>
                      Colaboraciones {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                    </SecondDropdownButton>
                  </SecondDropdownContainer>
                  
                  <span></span>
                  
                  <SecondDropdownContainer>
                    <SecondDropdownButton>
                      Mis datos {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                    </SecondDropdownButton>
                  </SecondDropdownContainer>
                  
                  <SecondDropdownContainer>
                    <SecondDropdownButton>
                      Cuenta {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                    </SecondDropdownButton>
                  </SecondDropdownContainer>
                  
                  <SecondDropdownContainer>
                    <SecondDropdownButton>
                      Preguntas {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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