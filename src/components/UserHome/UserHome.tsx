import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
import { ContainerWrapper, Header, SearchContainer, HeaderItems, MenuAside } from "./styles";
import NewPost from "../NewPost/NewPost";
import MotivationText from "../MotivationText/MotivationText";
import StepsProfileCreation from "../StepsProfileCreation/StepsProfileCreation";

export default function UserHome() {
  return (
    <>
      <MenuAside>
        <div>
          <img src="/images/GreenLogoDemo.svg" />
                
        </div>
      </MenuAside>
      <ContainerWrapper>
        <Header>
          <SearchContainer>
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