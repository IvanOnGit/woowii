import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
import {  BackgroundImage, Container, ContainerLogo, HeaderContainerWrapper, Header, HeaderItems, SearchBar, MainContainer, MainContainerImage, MainContainerText, MainContainerFirstText, MainContainerSecondText } from "./styles";

export default function Jo() {
    return (
        <>
        <Container>
            <HeaderContainerWrapper>
                <BackgroundImage />
                <ContainerLogo>
                    <img src="/images/GreenLogoDemo.svg" alt="" />
                </ContainerLogo>
                <SearchBar>
                <input type="text" name="" id="" placeholder="Búsqueda"/>
                </SearchBar>
                <Header>
                    <HeaderItems>
                        <p><img src="/images/wiibucks.png" alt="wiibucks" />400</p>
                        <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
                        <Bell />
                        <Mail />
                        <BriefcaseBusiness />
                        <Bookmark />
                        <Menu />
                    </HeaderItems>
                </Header>
            </HeaderContainerWrapper>
            <MainContainer>
                <MainContainerImage>
                <img src="/images/JobOpportunityBackground.png" alt="" />
                </MainContainerImage>
                <MainContainerText>
                    <h1>Desarrollador Web</h1>
                    <MainContainerFirstText>
                        <div>
                            <h3>Salario</h3>
                            <p>40 - 50 K</p>
                        </div>
                        <div>
                            <h3>Variable</h3>
                            <p>5K</p>
                        </div>
                        <div>
                            <h3>Presencial</h3>
                            <p>Madrid</p>
                        </div>
                        <div>
                            <h3>Remoto</h3>
                            <p>75%</p>
                        </div>
                    </MainContainerFirstText>
                    <MainContainerSecondText>
                        <h2>Sobre nosotros</h2>
                        <p>Somos un equipo que rompe moldes en el mundo del desarrollo web.<br /> Creemos en la innovación, el trabajo en equipo y las ideas frescas. Si te<br />gusta desafiar lo establecido y construir código que marque la diferencia,<br /> este es tu sitio.</p>
                    </MainContainerSecondText>
                </MainContainerText>
            </MainContainer>
        </Container>
        </>
  );
}