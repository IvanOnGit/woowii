import { Link } from "react-router-dom"
import { ButtonNextSecondPage, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoSecondPageStyled, ImgFondoSecondPageMask, ImgFondoSecondPageEllipse, ImgFondoSecondPageCoin, ImgFondoSecondPageWiibuck } from "./styles"


export default function UserSecondGift() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ImgFondoSecondPage src="/images/firstwiibuck.svg" alt="Fondo Wiibuck" />
            <ImgFondoSecondPageMask src="/images/mask_group.png" alt="Fondo Wiibuck" />
            <ImgFondoSecondPageEllipse src="/images/ellipsewhite.svg" alt="Fondo Wiibuck" />
            <ImgFondoSecondPageCoin src="/images/coin.png" alt="Fondo Wiibuck" />
            <ImgFondoSecondPageWiibuck src="/images/wiibucks100.png" alt="Fondo Wiibuck" />

            <DivContainerButton>
                <Link to={"/PersonalityTest"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper>
    </>
  )
}
