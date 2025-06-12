import { useState, useEffect } from "react";
import { 
  ContainerWrapper, 
  Header, 
  HeaderItems, 
  MenuAside, 
  FirstMenuAsideItem, 
  UserAndImageCombo,
  StyledButton,
  StyledLink,
  WelcomeContainer,
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
  SecondDropdownContainer,
  SecondDropdownButton,
  SecondDropdownList,
  SecondDropdownItem,
  HelpButton,
} from "./styles";
import MotivationText from "../MotivationText/MotivationText";
import StepsProfileCreation from "../StepsProfileCreation/StepsProfileCreation";
import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu, ChevronDown, ChevronUp } from "lucide-react";

export default function UserHome() {
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState<{ username: string; profile_picture: string } | null>(null);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
  const [isFifthDropdownOpen, setIsFifthDropdownOpen] = useState(false);
  const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
  const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);

    useEffect(() => {
      const fetchUserData = async () => {
          if (!userId) return;

          const response = await fetch(`https://api.woowiihr.com/api/auth/get-user?userId=${userId}`);
          const data = await response.json();
          console.log(data);  // Verifica qué datos estás recibiendo
          setUserData(data);
      };

      fetchUserData();
    }, [userId]);
  

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
        <HelpButton> Chat de ayuda</HelpButton>
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
            <Menu />
          </HeaderItems>
        </Header>
      </ContainerWrapper>
      <WelcomeContainer>
        <h1>¡BIENVENIDO! <br />TU PRÓXIMO EMPLEO ESTÁ A SOLO TRES PASOS</h1>
      </WelcomeContainer>
      <MotivationText />
      <StepsProfileCreation />
      <StyledLink to="/Hardset">
        <StyledButton>Continuar</StyledButton>
      </StyledLink>
    </>
  );
};