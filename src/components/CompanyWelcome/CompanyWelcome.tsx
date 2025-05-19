import { Link } from "react-router-dom";
import { Button, ButtonNextTerceraPage, ContainerWrapper, DivContainerLogoTerPage, ImgFondoTerceraPage, LogoTerceraPageStyled, MobileContainer, MobileLogo, StepsContainer, TextContainer, TitleAndSubtitleMobile } from "./styles";

export default function ThirdPage() {
  return (
      <>
          <ContainerWrapper>
                <DivContainerLogoTerPage>
                    <LogoTerceraPageStyled src="/images/LogoBlue.svg" />
                </DivContainerLogoTerPage>
              <ImgFondoTerceraPage src="/images/welcomeBlue.svg" alt="Fondo Tercera Pagina" />
              <Link to={"/RegisterCompanyProfile"}>
                <ButtonNextTerceraPage>
                    Continuar
                </ButtonNextTerceraPage>
              </Link>
        </ContainerWrapper>
        <MobileContainer>
          <MobileLogo src="/images/LogoBlue.svg" alt="Logo" />
          <TitleAndSubtitleMobile>
            <h1>¡Bienvenidos!</h1>
            <h2>Estamos cada vez más cerca de tu próxima experiencia. Haz este paso a paso para obtener tus primeros WIIbucks y destácate.</h2>
          </TitleAndSubtitleMobile>
          <StepsContainer>
            <img src="/images/CompanySteps.svg" alt="" />
            <TextContainer>
              <div>
                <h3>100 Wiibucks</h3>
                <p>Crea tu perfil</p>
              </div>
              <div>
                <h3>50 Wiibucks c/u</h3>
                <p>Completa tus historias para atraer el talento a través de tu ADN</p>
              </div>
              <div>
                <h3>50 Wiibucks c/u</h3>
                <p>Publica tus ofertas a través de nuestro formato especial para que brilles</p>
              </div>
              <div>
                <h3>100 Wiibucks</h3>
                <p>Publica tu perfil e inicia tus primeras busquedas</p>
              </div>
              </TextContainer>
          </StepsContainer>
          <Link to={"/RegisterCompanyProfile"}>
                  <Button>
                      Continuar
                  </Button>
          </Link>
        </MobileContainer>
    </>
  )
}