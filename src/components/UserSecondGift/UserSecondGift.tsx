import { Link } from "react-router-dom"
import { ButtonNextSecondGift, 
    ContainerBackSecondGiftPage, 
    ContainerBtnSecondGift, 
    ContainerSecondGiftPage, 
    FixedImageLogo, 
    ImageBackSecondGift } from "./styles"
// import { ButtonNextSecondPage, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoSecondPageStyled } from "./styles"


export default function UserSecondGift() {
  return (
      <>
          {/* <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ImgFondoSecondPage src="/images/new100Wiibucks.svg" alt="Fondo Wiibuck" />
            <DivContainerButton>
                <Link to={"/PersonalityTest"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper> */}
        <ContainerSecondGiftPage>
            <FixedImageLogo src="/images/LogoGreen.svg" alt="Woowii Green Logo"/>
            <ContainerBackSecondGiftPage>
                <ImageBackSecondGift src="/images/new100Wiibucks.svg" alt="First Gift Wiibuckd" />
            </ContainerBackSecondGiftPage>
        </ContainerSecondGiftPage>
        <Link to={"/PersonalityTest"}>
            <ContainerBtnSecondGift>
                <ButtonNextSecondGift>Continuar</ButtonNextSecondGift>
            </ContainerBtnSecondGift>
        </Link>
    </>
  )
}
