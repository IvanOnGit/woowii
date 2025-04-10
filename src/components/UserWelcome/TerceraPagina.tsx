import { Link } from "react-router-dom";
import { ButtonNextTerceraPage, ContainerWrapper, DivContainerLogoTerPage, ImgFondoTerceraPage, LogoTerceraPageStyled, ImgFondoTerceraPageWelcome, UsernameInput } from "./styles";

export default function TerceraPagina() {
  return (
      <>
          <ContainerWrapper>
                <DivContainerLogoTerPage>
                    <LogoTerceraPageStyled src="/images/original_Logo.svg" />
                    <UsernameInput>
                      <h3>¡Bienvenidos!</h3>
                      <p>Estamos cada vez más cerca de tu próxima experiencia. 
                        Haz este paso a paso para obtener tus primeros WIIbucks y destácate.
                      </p>
                  </UsernameInput>
                  <ImgFondoTerceraPageWelcome src="/images/Welcomeconcandados.svg" alt="Fondo Tercera Pagina" />

                </DivContainerLogoTerPage>
                
              <ImgFondoTerceraPage src="/images/imgtercerapagina.svg" alt="Fondo Tercera Pagina" />
              <Link to={"/SelectAvatar"}>
                 <ButtonNextTerceraPage>
                    Continuar
                  </ButtonNextTerceraPage>
              </Link>
        </ContainerWrapper>
    </>
  )
}
