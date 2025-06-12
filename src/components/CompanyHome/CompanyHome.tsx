
import { Bell, Bookmark, BriefcaseBusiness, ChevronDown, ChevronUp, Mail } from "lucide-react";
import { 
  Container, 
  ContainerWrapper, 
  DropdownButton, 
  DropdownContainer, 
  DropdownItem, 
  DropdownList, 
  FirstMenuAsideItem, 
  Header, 
  HeaderItems, 
  HelpButton, 
  IdealTalent, 
  MainContainer, // Importar MainContainer
  MenuAside, 
  SecondDropdownButton, 
  SecondDropdownContainer, 
  SecondDropdownItem, 
  SecondDropdownList, 
  SpanContainer, 
  StepByStep, 
  Steps, 
  StyledLink, 
  UserAndImageCombo 
} from "./styles";
import { useEffect, useState } from "react";

export default function CompanyHome() {
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
        return;
      }

      const numericId = Number(id);
      if (isNaN(numericId) || numericId <= 0) {
        console.error("ID is not a valid number.");
        return;
      }

      const url = `https://api.woowiihr.com/api/auth/get-company?id=${numericId}`;
      console.log("Requesting URL:", url);

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
  
  return (
    <MainContainer> {/* Envolver todo en MainContainer */}
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
        <HelpButton>Chat de ayuda</HelpButton>
      </MenuAside>
      
      <ContainerWrapper>
        <Header>
          <HeaderItems>
            <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
            <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
            <Bell />
            <Mail />
            <BriefcaseBusiness />
            <Bookmark />
          </HeaderItems>
        </Header>
      </ContainerWrapper>
      
      <Container>
        <IdealTalent>
          <h2>El talento ideal no cae del cielo y Roma no se hizo en dos días</h2>
          <p>Podríamos decirte que completarás un perfil irresistible en 3 minutos, pero… te estaríamos mintiendo. Tu empresa tiene una historia, una cultura y un ADN único. Para atraer a los mejores talentos sin volverte loco filtrando CVs irrelevantes, tienes que ponerle cariño a tu perfil.</p>
          <SpanContainer>
            <span className="gradient-left-to-right">¡Solo lo completarás una vez! <br />pero siempre podrás actualizarlo</span>
            <span className="gradient-right-to-left">Cuánto más cuentes, mejor matchearaá el algoritmo.</span>
            <span className="gradient-left-to-right">Menos trabajo para ti, más atracción de talento top.</span>
            <span className="gradient-right-to-left">Hazlo bien desde el principio y dejanos hacer el resto.</span>
          </SpanContainer>
        </IdealTalent>
        <StepByStep>
          <h2>Paso a paso para la creación de tu perfil</h2>
          <Steps>
            <div>
              <h3>Tu historia vale mas que un logo en LinkedIn.</h3>
              <p>Las empresas se definen por su ADN, no sólo por lo que venden. Comparte qué te hace única y deja que nuestro algoritmo te conecte con el talento ideal.</p>
            </div>
            <div>
              <h3>Tu historia vale mas que un logo en LinkedIn.</h3>
              <p>Las empresas se definen por su ADN, no sólo por lo que venden. Comparte qué te hace única y deja que nuestro algoritmo te conecte con el talento ideal.</p>
            </div>
            <div>
              <h3>Tu historia vale mas que un logo en LinkedIn.</h3>
              <p>Las empresas se definen por su ADN, no sólo por lo que venden. Comparte qué te hace única y deja que nuestro algoritmo te conecte con el talento ideal.</p>
            </div>
          </Steps>
        </StepByStep>
      </Container>
      
      <StyledLink to="/AboutYourDNA">
        <button>Continuar</button>
      </StyledLink>
    </MainContainer>
  );
}