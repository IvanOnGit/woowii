import { Link } from "react-router-dom"
import { ButtonNextSecondPage, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoSecondPageStyled } from "./styles"


export default function SegundaPagina() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="./public/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ImgFondoSecondPage src="./public/images/firstwiibuck.svg" alt="Fondo Wiibuck" />
            <DivContainerButton>
                <Link to={"/TerceraPagina"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper>
    </>
  )
}
