
import { Link } from "react-router-dom"
import { ButtonNextSecondPage, 
    ContainerText, 
    ContainerVerticalChecks, 
    ContainerWrapper, 
    ContalnerHorizontalChecks, 
    DivContainerButton, 
    DivContainerLogo, 
    HorizontalChecks, 
    ImgFondoSecondPage, 
    LogoSecondPageStyled, 
    VerticalChecks } from "./styles";

export default function CongratulationsSteps() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ContainerText>
            <h1>FELICITACIONES</h1>
            <h2>Culminaste tu paso a paso.<br />¡Ya sos parte del cambio!</h2>
            </ContainerText>
            <ContainerVerticalChecks>
                <VerticalChecks src="/images/CongratulationsChecks.svg" alt="Congratulations Vertical Checks Image"/>
            </ContainerVerticalChecks>
            <ContalnerHorizontalChecks>
                <HorizontalChecks src="/images/CongratHorizontalChecks.svg" alt="Congratulations Horizontal Checks Image" />
            </ContalnerHorizontalChecks>
            <ImgFondoSecondPage src="/images/RewardImage.png" alt="Fondo Wiibuck" />
            <DivContainerButton>
                <Link to={"/JobFinder"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper>
    </>
  )
}