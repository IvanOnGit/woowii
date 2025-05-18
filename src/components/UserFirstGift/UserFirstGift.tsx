import { Link } from "react-router-dom"
import { ButtonNextSecondPage, ContainerWrapper, ContainerWrapperDesktop, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoSecondPageStyled } from "./styles"


export default function UserFirstGift() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ImgFondoSecondPage src="/images/firstGift.svg" alt="Fondo Wiibuck" />
            <DivContainerButton>
                <Link to={"/Welcome"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper>
        <ContainerWrapperDesktop>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ImgFondoSecondPage src="/images/firstwiibuck.svg" alt="Fondo Wiibuck" />
            <DivContainerButton>
                <Link to={"/Welcome"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapperDesktop>
    </>
  )
}
