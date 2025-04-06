
import { Link } from "react-router-dom"
import { ButtonNextFirstGift, 
    ContainerBackFirstGiftPage, 
    ContainerBtnFirstGift, 
    ContainerFirstGiftPage, 
    FixedImageLogo, 
    ImageBackFirstGift, 
    Wrapper } from "./styles";


export default function CompanyFirstGift() {
  return (
    <Wrapper>
        <ContainerFirstGiftPage>
            <FixedImageLogo src="/images/LogoBlue.svg" alt="Blue Logo"/>
            <ContainerBackFirstGiftPage>
                <ImageBackFirstGift src="/images/oneHundred.svg" alt="One Hundred Wiibuckd" />
            </ContainerBackFirstGiftPage>
        </ContainerFirstGiftPage>
        <Link to={"/CompanyWelcome"}>
            <ContainerBtnFirstGift>
                <ButtonNextFirstGift>Continuar</ButtonNextFirstGift>
            </ContainerBtnFirstGift>
        </Link>
    </Wrapper>
  )
}