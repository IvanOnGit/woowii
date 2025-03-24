import { useState, useEffect } from "react";
import { 
  ContainerWrapper, 
  Header, 
  HeaderItems, 
  MenuAside, 
  FirstMenuAsideItem, 
  ThirdMenuAsideItem, 
  MenuItem, 
  UserAndImageCombo,
  StyledButton,
  StyledLink,
  WelcomeContainer
} from "./styles";
import MotivationText from "../MotivationText/MotivationText";
import StepsProfileCreation from "../StepsProfileCreation/StepsProfileCreation";
import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu, ChevronDown } from "lucide-react";

export default function UserHome() {
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
      <MenuAside>
        <FirstMenuAsideItem>
          <img src="/images/GreenLogoDemo.svg" alt="Logo" />
          <UserAndImageCombo>
              <img src={userData?.profile_picture || "/images/Avatar1.png"} alt="Avatar" />
              <h3>@{userData?.username || "Usuario"}</h3>
          </UserAndImageCombo>
        </FirstMenuAsideItem>
        <ThirdMenuAsideItem>
          <MenuItem><p>Consejos</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Contactos</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Proyectos</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Talent Data</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Tutoriales</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Alerts</p> <ChevronDown size={16} /></MenuItem>
        </ThirdMenuAsideItem>
        <span></span>
        <ThirdMenuAsideItem>
          <MenuItem><p>Preguntas</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Settings</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Terms and Agreements</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Testimonials</p> <ChevronDown size={16} /></MenuItem>
          <button>Chat de ayuda</button>
        </ThirdMenuAsideItem>
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
}