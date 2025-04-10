import { Link } from "react-router-dom"
import { ButtonNextSecondPage, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage, ImgFondoSecondPageEllipse, ImgFondoSecondPageCongratulation, ImgFondoSecondPageMask,  LogoSecondPageStyled } from "./styles"


export default function UserFirstGift() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ImgFondoSecondPage src="/images/firstwiibuck.svg" alt="Fondo Wiibuck" />
            <ImgFondoSecondPageMask src="/images/mask_group.png" alt="Fondo Wiibuck" />
            <ImgFondoSecondPageEllipse src="/images/ellipsewhite.svg" alt="Fondo Wiibuck" />
            <ImgFondoSecondPageCongratulation src="/images/congratulations50.svg" alt="Fondo Wiibuck" />
            <DivContainerButton>
                <Link to={"/Welcome"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper>
    </>
  )
}
