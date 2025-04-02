// import { Link } from "react-router-dom";
// import { ButtonNextTerceraPage, ContainerWrapper, DivContainerLogoTerPage, ImgFondoTerceraPage, LogoTerceraPageStyled } from "./styles";

// export default function ThirdPage() {
//   return (
//       <>
//           <ContainerWrapper>
//                 <DivContainerLogoTerPage>
//                     <LogoTerceraPageStyled src="/images/LogoBlue.svg" />
//                 </DivContainerLogoTerPage>
//               <ImgFondoTerceraPage src="/images/welcomeBlue.svg" alt="Fondo Tercera Pagina" />
//               <Link to={"/RegisterCompanyProfile"}>
//                 <ButtonNextTerceraPage>
//                     Continuar
//                 </ButtonNextTerceraPage>
//               </Link>
//         </ContainerWrapper>
//     </>
//   )
// }

import { Link } from "react-router-dom";
import { ButtonNextFirstGift, ContainerBackWelcome, 
  ContainerCompanyWelcome, 
  ContainerTextBelowBanner, 
  FixedImageLogo, 
  Header, 
  HeaderItems, 
  ImageWelcome, 
  TextsBelowBanner, 
  WelcomeBanner, 
  Wrapper } from "./styles";

export default function CompanyWelcome() {
  return (

    <Wrapper>
      <ContainerCompanyWelcome>
        <Header>
          <HeaderItems>
            <p><img src="/images/wiibucks.png" alt="wiibucks" />100</p>
            <p><img src="/images/TrophyWiibucks.svg" alt="wiibucks" />00</p>
          </HeaderItems>
        </Header>
        <FixedImageLogo src="/images/LogoBlue.svg" alt="Blue Logo"/>
        <WelcomeBanner src="/images/Welcome.svg"  alt="Welcome Title"/>
        <ContainerTextBelowBanner>
          <TextsBelowBanner>
            Estamos cada vez más cerca de tu próxima experiencia.
            Haz este paso a paso para obtener tus primeros WIIbucks y destácate.
          </TextsBelowBanner>
        </ContainerTextBelowBanner>
        <ContainerBackWelcome>
          <ImageWelcome src="/images/VerticalNew.svg" alt="Vertical Welcome Image" />
        </ContainerBackWelcome>
        <Link to={"/RegisterCompanyProfile"}>
          <ButtonNextFirstGift>Continuar</ButtonNextFirstGift>
        </Link>
      </ContainerCompanyWelcome>
    </Wrapper>
  )
}