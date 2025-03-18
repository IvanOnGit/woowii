import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ContainerWrapper, 
  Header, 
  HeaderItems, 
  MenuAside, 
  FirstMenuAsideItem, 
  ThirdMenuAsideItem, 
  MenuItem, 
  UserAndImageCombo
} from "./styles";
import NewPost from "../NewPost/NewPost";
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
          <MenuItem>
            <Link to="/Hardset">
              <p>Hardset</p> <ChevronDown size={16} />
            </Link>
          </MenuItem>
          <MenuItem><p>Softset</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Toolset</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Superpower</p> <ChevronDown size={16} /></MenuItem>
        </ThirdMenuAsideItem>
        <span></span>
        <ThirdMenuAsideItem>
          <MenuItem><p>Consejos</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Contactos</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Proyectos</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Tutoriales</p> <ChevronDown size={16} /></MenuItem>
        </ThirdMenuAsideItem>
        <span></span>
        <ThirdMenuAsideItem>
          <MenuItem><p>Mis datos</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Cuenta</p> <ChevronDown size={16} /></MenuItem>
          <MenuItem><p>Preguntas</p> <ChevronDown size={16} /></MenuItem>
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
      <NewPost />
      <MotivationText />
      <StepsProfileCreation />
    </>
  );
}