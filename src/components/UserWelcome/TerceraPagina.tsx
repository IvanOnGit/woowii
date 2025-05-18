import { Link } from "react-router-dom";
import { ButtonNextTerceraPage, ContainerTextBelowBanner, ContainerWrapper, ContainerWrapperMobile, DivContainerLogoTerPage, ImgFondoTerceraPage, LogoTerceraPageStyled, TextsBelowBanner, WelcomeBanner } from "./styles";

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
      <ContainerWrapperMobile>
        <DivContainerLogoTerPage>
          <LogoTerceraPageStyled src="/images/GreenLogoDemo.svg" />
        </DivContainerLogoTerPage>
        <WelcomeBanner src="/images/WelcomeGreen.svg" alt="Welcome Title" />
        <ContainerTextBelowBanner>
          <TextsBelowBanner>
            Estamos cada vez más cerca de tu próxima experiencia.
            Haz este paso a paso para obtener tus primeros WIIbucks y destácate.
          </TextsBelowBanner>
        </ContainerTextBelowBanner>
        <ImgFondoTerceraPage src="/images/WelcomeVerticalUser.svg" alt="Fondo Tercera Pagina" />
        <Link to={"/SelectAvatar"}>
          <ButtonNextTerceraPage>
            Continuar
          </ButtonNextTerceraPage>
        </Link>
      </ContainerWrapperMobile>
    </>
  )
}
