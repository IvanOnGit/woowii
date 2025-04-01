
import { Link } from "react-router-dom";
import { ButtonBelowFourPoints, 
    ContainerButton, 
    ContainerImageFourPoints, 
    ContainerSecondPage, 
    ContainerSecondPageLine, 
    ContainerTextBelowLogo, 
    FixedImageLogo, 
    ImageFourPoints, 
    ResponsiveSVG, 
    TextBelowLogo, 
    Wrapper} from "./styles";
import LogoSVG from "/images/GreenLogo.svg"


export default function InitSecond() {
  return (
    <>
        <Wrapper>
            <ContainerSecondPage>
                <FixedImageLogo src={LogoSVG} alt="Logo"  />
                <ContainerTextBelowLogo>
                    <TextBelowLogo>Bienvenidos a la transformación de los recursos humanos. </TextBelowLogo>
                </ContainerTextBelowLogo>
                <ContainerImageFourPoints>
                    <ImageFourPoints src="/images/SecondPageFourTexts.svg" />
                </ContainerImageFourPoints>
                <Link to={'/ChooseTalentCompany'}>
                    <ContainerButton>
                        <ButtonBelowFourPoints src="/images/ButtonSecondPage.svg"/>
                    </ContainerButton>
                </Link>
                <ContainerSecondPageLine>
                    <ResponsiveSVG src="/images/LineSecondPageMobile.svg" />
                </ContainerSecondPageLine>
            </ContainerSecondPage>
        </Wrapper>
    </>
  )
}