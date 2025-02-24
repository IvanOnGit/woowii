import { ContainerColumnBody } from "../StepsProfileCompany/styles";
import { ColumnHirings, ColumnOverview, ContainerColumnSelects, ContainerFirstSelects, ContainerLogoColumnOverview, ContainerOverviewPage, ContainerSecondSelects, DivComment, DivHirings, DivOverview, DivOverviewAll, Header, LogoColumnOverview, WoodyChat } from "./styles";
import { HeaderItems, SearchContainer } from "../CompanyHome/styles";
import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function CompanyOverviewPage() {
  return (
    <ContainerOverviewPage>
          <ContainerColumnSelects>
            <ContainerLogoColumnOverview>
              <LogoColumnOverview src="/images/LogoWhiter.svg" alt="Logo Woowii Blue" />
            </ContainerLogoColumnOverview>
            <ContainerFirstSelects>
                <label htmlFor="dash">Dashboard</label>
                <br />
                <select name="dash">
                    <option value="" selected>Elige una opción</option>
                    <hr></hr>
                    <option value="value1">Colaborativa</option>
                    <option value="value2">Competitiva</option>
                    <option value="value3">Estructurada</option>
                    <option value="value4">Relajada</option>
                    <option value="value5">Ritmo Acelerado</option>
                </select>
                <br />
                <label htmlFor="inter">Interviews</label>
                <br />
                <select name="inter">
                    <option value="" selected>Elige una opción</option>
                    <hr></hr>
                    <option value="value1">Colaborativa</option>
                    <option value="value2">Competitiva</option>
                    <option value="value3">Estructurada</option>
                    <option value="value4">Relajada</option>
                    <option value="value5">Ritmo Acelerado</option>
                </select>
                <br />
                <label htmlFor="hiring">Hiring Summary</label>
                <br />
                <select name="hiring">
                    <option value="" selected>Elige una opción</option>
                    <hr></hr>
                    <option value="value1">Colaborativa</option>
                    <option value="value2">Competitiva</option>
                    <option value="value3">Estructurada</option>
                    <option value="value4">Relajada</option>
                    <option value="value5">Ritmo Acelerado</option>
                </select>
                <br />
                <label htmlFor="talent">Talent Data</label>
                <br />
                <select name="talent">
                    <option value="" selected>Elige una opción</option>
                    <hr></hr>
                    <option value="value1">Colaborativa</option>
                    <option value="value2">Competitiva</option>
                    <option value="value3">Estructurada</option>
                    <option value="value4">Relajada</option>
                    <option value="value5">Ritmo Acelerado</option>
                </select>
                <br />
                <label htmlFor="resources">Resources</label>
                <br />
                <select name="resources">
                    <option value="" selected>Elige una opción</option>
                    <hr></hr>
                    <option value="value1">Colaborativa</option>
                    <option value="value2">Competitiva</option>
                    <option value="value3">Estructurada</option>
                    <option value="value4">Relajada</option>
                    <option value="value5">Ritmo Acelerado</option>
                </select>
                <br />
                <label htmlFor="alerts">Alerts</label>
                <br />
                <select name="alerts">
                    <option value="" selected>Elige una opción</option>
                    <hr></hr>
                    <option value="value1">Colaborativa</option>
                    <option value="value2">Competitiva</option>
                    <option value="value3">Estructurada</option>
                    <option value="value4">Relajada</option>
                    <option value="value5">Ritmo Acelerado</option>
                </select>
            </ContainerFirstSelects>
            <ContainerSecondSelects>
                <label htmlFor="settings">Settings</label>
                    <br />
                    <select name="settings">
                        <option value="" selected>Elige una opción</option>
                        <hr></hr>
                        <option value="value1">Colaborativa</option>
                        <option value="value2">Competitiva</option>
                        <option value="value3">Estructurada</option>
                        <option value="value4">Relajada</option>
                        <option value="value5">Ritmo Acelerado</option>
                    </select>
                    <br />
                    <label htmlFor="sign">SignOut</label>
                    <br />
                    <select name="sign">
                        <option value="" selected>Elige una opción</option>
                        <hr></hr>
                        <option value="value1">Colaborativa</option>
                        <option value="value2">Competitiva</option>
                        <option value="value3">Estructurada</option>
                        <option value="value4">Relajada</option>
                        <option value="value5">Ritmo Acelerado</option>
                    </select>
                    <br />
                    <label htmlFor="help">Help</label>
                    <br />
                    <select name="help">
                        <option value="" selected>Elige una opción</option>
                        <hr></hr>
                        <option value="value1">Colaborativa</option>
                        <option value="value2">Competitiva</option>
                        <option value="value3">Estructurada</option>
                        <option value="value4">Relajada</option>
                        <option value="value5">Ritmo Acelerado</option>
                    </select>
            </ContainerSecondSelects>
            <Link to={"/CompanyOfferPage"}>
              <WoodyChat src="/images/woodyChat.svg" alt="Image Woody Chat" />
            </Link>
          </ContainerColumnSelects>
          <ContainerColumnBody>
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
          <DivOverviewAll>
            <ColumnOverview >
              <h3>Overview</h3>
              <DivOverview>
                <img src="/images/overviewImage.svg" alt="Overview Image" />
              </DivOverview>
              <h3>Comment & Message</h3>
              <DivComment>
                <img src="/images/imageComment.svg" alt="Comment Image" />
              </DivComment>
              <DivComment>
                <img src="/images/imageComment.svg" alt="Comment Image" />
              </DivComment>
            </ColumnOverview>
            <ColumnHirings>
              <h3>Hirings in Progress </h3>
              <DivHirings>
                <img src="/images/imageHirings.svg" alt="Hirings Image" />
              </DivHirings>
            </ColumnHirings>
          </DivOverviewAll>
          </ContainerColumnBody>
    </ContainerOverviewPage>
  )
}
