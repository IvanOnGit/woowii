import { Link } from "react-router-dom";
import { Button, ButtonNextTerceraPage, ContainerWrapper, DivContainerLogoTerPage, ImgFondoTerceraPage, LogoTerceraPageStyled, MobileContainer, MobileLogo, StepsContainer, TextContainer, TitleAndSubtitleMobile } from "./styles";

export default function TerceraPagina() {
  return (
      <>
          <ContainerWrapper>
                <DivContainerLogoTerPage>
                    <LogoTerceraPageStyled src="/images/GreenLogoDemo.svg" />
                </DivContainerLogoTerPage>
              <ImgFondoTerceraPage src="/images/imgtercerapagina.svg" alt="Fondo Tercera Pagina" />
              <Link to={"/SelectAvatar"}>
                <ButtonNextTerceraPage>
                    Continuar
                  </ButtonNextTerceraPage>
              </Link>
      </ContainerWrapper>
      <MobileContainer>
                <MobileLogo src="/images/GreenLogoDemo.svg" alt="Logo" />
                <TitleAndSubtitleMobile>
                  <h1>¡Bienvenidos!</h1>
                  <h2>Estamos cada vez más cerca de tu próxima experiencia. Haz este paso a paso para obtener tus primeros WIIbucks y destácate.</h2>
                </TitleAndSubtitleMobile>
                <StepsContainer>
                  <img src="/images/UserSteps.svg" alt="" />
                  <TextContainer>
                    <div>
                      <h3>50 Wiibucks</h3>
                      <p>Crea tu perfil</p>
                    </div>
                    <div>
                      <h3>100 Wiibucks c/u</h3>
                      <p>Historias en lugar de CV</p>
                    </div>
                    <div>
                      <h3>200 Wiibucks c/u</h3>
                      <p>Assessment</p>
                    </div>
                    <div>
                      <h3>50 Wiibucks</h3>
                      <p>Publica tu perfil e inicia tus primeras búsquedas</p>
                    </div>
                    </TextContainer>
                </StepsContainer>
                <Link to={"/SelectAvatar"}>
                        <Button>
                            Continuar
                        </Button>
                </Link>
              </MobileContainer>
    </>
  )
}
