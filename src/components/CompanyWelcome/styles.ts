// import styled from "styled-components"

// export const ContainerWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     height: 100vh;
//     gap: 3rem;
// `

// export const DivContainerLogoTerPage = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// export const LogoTerceraPageStyled = styled.img`
//     width: 18.75rem;
//     height: 5.25rem;
// `


// export const DivImagenFondoTerPage = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 50px;
// `

// export const ImgFondoTerceraPage = styled.img`
//     width: 50%;
// `

// export const ButtonNextTerceraPage = styled.button`
//     width: 182px;
//     height: 37px;
//     background: #460BFF;;
//     color: #FFF;
//     font-size: 20px;
//     font-weight: bold;
//     font-family: 'Inter', sans-serif;
//     border-radius: 45px;
//     cursor: pointer;
// `
import styled from "styled-components"

const WidthMeasurementMobile = 20;
const WidthMeasurementMobileMedium = 23.438;
const WidthMeasurementMobileIPhone12 = 24.375;
const WidthMeasurementMobileLarge = 26.563;
const WidthMeasurementTablet = 47.938;
const WidthMeasurementLaptop = 63.938;
const WidthMeasurementDesktop = 90;
const WidthMeasurementBigDesk = 90.063;

export const mobileLittle = `@media(min-width:${WidthMeasurementMobile}rem)`
export const mobileMedium = `@media(min-width:${WidthMeasurementMobileMedium}rem)`
export const mobileIPhone12 = `@media(min-width:${WidthMeasurementMobileIPhone12}rem)`
export const mobileLarge = `@media(min-width:${WidthMeasurementMobileLarge}rem)`
export const tablet = `@media(min-width:${WidthMeasurementTablet}rem)`
export const laptop = `@media(min-width:${WidthMeasurementLaptop}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`
export const bigdesk = `@media(min-width:${WidthMeasurementBigDesk}rem)`


export const Wrapper = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  background:  azure;
  z-index: 0;  
  overflow: hidden;
  justify-content: center;

`;

export const ContainerCompanyWelcome = styled.div `
  display: block;
  width: 100%;
  min-height: 100vh;
  background: #FFF;
  z-index: 0;  
  overflow: hidden;
  max-width: 90rem;
`;

export const ContainerBackWelcome = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  content: url("/images/VerticalNew.svg");
  ${mobileLittle}{
    width: 70%;
    left: 13%;
    top: 28%;
  }
  ${mobileMedium}{
    width: 60%;
    left: 16%;
    top: 28%;
  }
  ${mobileLarge}{
    width: 53%;
    left: 16%;
    top: 28%;
  }
  ${tablet}{
    content: url("/images/HorizontalWelcome.svg");
    left: 5%;
    top: 50%;
    width: 90%;
  }
  ${laptop}{
    left: 5%;
    top: 50%;
    width: 90%;
  }
  ${desktop}{
    width: 70%;
    left: 16%;
    top: 50%;
  }
  ${bigdesk}{
    left: 30%;
    top: 49%;
    width: 40%;
  }
`;

export const ImageWelcome = styled.img`
  width: 100%;
  height: auto;
  ${mobileLittle}{
    width: 55%;
  }
  ${mobileMedium}{
    width: 40%;
  }
  ${mobileLarge}{
    width: 43%;
  }
  ${tablet}{
    width: 100%;
  }
  ${laptop}{
    width: 90%;
  }
  ${desktop}{
    width: 70%;
  }
  ${bigdesk}{
    width: 48%;
  }
`;

export const FixedImageLogo = styled.img`
  position: fixed;
  top: 8%;
  left: 10%;
  width: 60%;
  height: auto;
  ${mobileLittle}{
    top: 5%;
    left: 20%;
  }
  ${mobileMedium}{
    top: 4%;
    left: 20%;
  }
  ${mobileLarge}{
    width: 50%;
    top: 4%;
    left: 27%;
  }
  ${tablet}{
    width: 25%;
    top: 12%;
    left: 40%;
  }
  ${laptop}{
    width: 22%;
    top: 8%;
    left: 41%;
  }
  ${desktop}{
    width: 20%;
    top: 9%;
    left: 41.5%;
  }
  ${bigdesk}{
    width: 17%;
    top: 10%;
    left: 42%;
  }
`;

export const WelcomeBanner = styled.img`
  position: fixed;
  top: 10%;
  left: 10%;
  width: 73.5%;
  height: auto;
  ${mobileLittle}{
    top: 14%;
    left: 13%;
  }
  ${mobileMedium}{
    width: 67%;
    top: 14%;
    left: 16%;
  }
  ${mobileLarge}{
    top: 13%;
  }
  ${tablet}{
    content: url("/images/UpBannerWelcome.svg");
    top: 25%;
    left: 18%;
  }
  ${desktop}{
    width: 50%;
    top: 25%;
    left: 26%;
  }
  ${bigdesk}{
    width: 30%;
    top: 25%;
    left: 35%;
  }
`;

export const ContainerTextBelowBanner = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 18%;
  left: 12%;
  ${mobileLittle}{
    top: 19%;
    left: 13%;
  }
  ${mobileMedium}{
    top: 19%;
    left: 16%;
  }
  ${mobileLarge}{
    top: 20%;
    left: 16%;
  }
  ${tablet}{
    top: 35%;
    left: 19%; 
  }
  ${laptop}{
    top: 37%;
    left: 22%;
    font-weight: 400;
  }
  ${desktop}{
    top: 38%;
    left: 30%; 
  }
  ${bigdesk}{
    top: 39%;
    left: 38%; 
  }
    
`;

export const TextsBelowBanner = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  max-width: 15rem;
  text-align: left;
  ${mobileMedium}{
    font-size: 0.813rem;
    max-width: 16rem;
  }
  ${mobileLarge}{
    font-size: 0.938rem;
    max-width: 19rem;
  }
  ${tablet}{
    font-size: 1rem;
    max-width: 30rem;
  }
  ${laptop}{
    font-size: 1.3rem;
    max-width: 40rem;
  }
`;

export const ButtonNextFirstGift = styled.button`
  position: fixed;
  top: 95%;
  left: 25%;
  width: 10rem;
  height: 2rem;
  background: #460BFF;
  color: #FFF;
  font-size: 0.938rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  border-radius: 2.813rem;
  cursor: pointer;
  ${mobileMedium}{
    top: 95%;
    left: 28%;
    font-size: 1rem;
  }
  ${mobileIPhone12}{
    top: 91%;
  }
  ${mobileLarge}{
    top: 93%;
    left: 35%;
  }
  ${tablet}{
    top: 80%;
    left: 42%;
  }
  ${laptop}{
    top: 83%;
    left: 45%;
  }
  ${desktop}{
    top: 85%;
    left: 46%;
  }
  ${bigdesk}{
    top: 88%;
    left: 47%;
  }
`;

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  margin: -1rem 0 0 -10rem;
  ${mobileLittle}{
    top: -2%;
    left: 112%;
  }
  ${tablet}{
    top: -2%;
    left: 105%;
  }
  ${desktop}{
    top: -2%;
    left: 100%;
  }
  ${bigdesk}{
    top: -2%;
    left: 95%;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  p {
    display: flex;
    margin: 0;
    ${tablet}{
      font-size: 1.2rem;
    } 
    ${tablet}{
      font-size: 1.3rem;
    }
  }
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.2rem;
    ${tablet}{
      width: 1.3rem;
      height: 1.3rem;
    } 
    ${tablet}{
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  ${tablet}{
    margin: 3rem 0 0 -1rem;
  }
  ${laptop}{
    margin-left: -1.8rem;
  }
  ${desktop}{
    margin-left: 1rem;
  }
`;

