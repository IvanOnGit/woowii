import { BackSecondScreen, ButtonNextInitSecond, DivContainerButton, DivContainerLogo, LateralBlueCover, LogoInitSecondStyled, WrapperImageSecond } from "./styles";


export default function InitSecond() {
  return (
    <>
        <BackSecondScreen>
            <WrapperImageSecond />
            <LateralBlueCover />
        </BackSecondScreen>
        <DivContainerLogo>
            <LogoInitSecondStyled src="/images/greenLogoLittle.svg" />
        </DivContainerLogo>
        <DivContainerButton>
            <ButtonNextInitSecond>
                ¡Comencemos!
            </ButtonNextInitSecond>
        </DivContainerButton>
    </>
  )
}
