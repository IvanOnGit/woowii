import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
import { ContainerWrapper, Header, SearchContainer, HeaderItems } from "./styles";
import CompanyNewPost from "../CompanyNewPost/CompanyNewPost";
import StepsProfileCompany from "../StepsProfileCompany/StepsProfileCompany";
import CompanyMotivationText from "../CompanyMotivationText/CompanyMotivationText";
import { ContainerColumnBody, ContainerColumnSelects, ContainerDivisionColumns } from "../StepsProfileCompany/styles";

export default function CompanyHome() {
  return (
    <>
    <ContainerDivisionColumns>
      <ContainerColumnSelects />
      <ContainerColumnBody>
      <ContainerWrapper>
        <Header>
          <SearchContainer>
            Búsqueda
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
      <CompanyNewPost />
      <CompanyMotivationText />
      <StepsProfileCompany />
      </ContainerColumnBody>
    </ContainerDivisionColumns>
    </>
  );
}