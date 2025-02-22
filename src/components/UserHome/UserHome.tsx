import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu, ChevronDown } from "lucide-react";
import { 
  ContainerWrapper, 
  Header, 
  SearchContainer, 
  HeaderItems, 
  MenuAside, 
  FirstMenuAsideItem, 
  ThirdMenuAsideItem, 
  MenuItem 
} from "./styles";
import NewPost from "../NewPost/NewPost";
import MotivationText from "../MotivationText/MotivationText";
import StepsProfileCreation from "../StepsProfileCreation/StepsProfileCreation";

export default function UserHome() {
  return (
    <>
      <MenuAside>
        <FirstMenuAsideItem>
          <img src="/images/GreenLogoDemo.svg" alt="Avatar" />
          <h3>@User_23</h3>
          <div className="onboarding">
            <h3>Onboarding</h3>
          </div>
        </FirstMenuAsideItem>
        <ThirdMenuAsideItem>
          <MenuItem><p>Hardset</p> <ChevronDown size={16} /></MenuItem>
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
          <SearchContainer>
            <input type="text" placeholder="Buscar..." />
          </SearchContainer>
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
