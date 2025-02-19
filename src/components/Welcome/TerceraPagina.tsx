import { ButtonNextTerceraPage, ContainerWrapper, DivContainerLogoTerPage, ImgFondoTerceraPage, LogoTerceraPageStyled } from "./styles";

export default function TerceraPagina() {
  return (
      <>
          <ContainerWrapper>
                <DivContainerLogoTerPage>
                    <LogoTerceraPageStyled src="./src/images/GreenLogoDemo.svg" />
                </DivContainerLogoTerPage>
                    <ImgFondoTerceraPage src="./src/images/imgtercerapagina.svg" alt="Fondo Tercera Pagina" />
                <ButtonNextTerceraPage>
                    Continuar
                </ButtonNextTerceraPage>
        </ContainerWrapper>
    </>
  )
}
