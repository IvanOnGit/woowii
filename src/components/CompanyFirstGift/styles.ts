// import styled from "styled-components"

// export const ContainerWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     height: 100vh;
// `
// export const DivContainerLogo = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `
// export const LogoSecondPageStyled = styled.img`
//     width: 18.75rem;
//     height: 5.25rem;
// `

// export const ImgFondoSecondPage = styled.img`
//     width: 100%;
//     height: 70%;
// `
// export const DivContainerButton = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 50px;
// `
// export const ButtonNextSecondPage = styled.button`
//     width: 182px;
//     height: 37px;
//     background: #460BFF;
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
const WidthMeasurementMobileLarge = 26.563;
const WidthMeasurementTablet = 47.938;
const WidthMeasurementLaptop = 63.938;
const WidthMeasurementDesktop = 90;
const WidthMeasurementBigDesk = 90.063;

export const mobileLittle = `@media(min-width:${WidthMeasurementMobile}rem)`
export const mobileMedium = `@media(min-width:${WidthMeasurementMobileMedium}rem)`
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

export const ContainerFirstGiftPage = styled.div `
    display: block;
    width: 100%;
    min-height: 100vh;
    background: #FFF;
    z-index: 0;  
    overflow: hidden;
    max-width: 90rem;
`;

export const ContainerBackFirstGiftPage = styled.div`
    display: flex;
    position: fixed;
    width: 180%;
    ${mobileLittle}{
        left: -40%;
        top: 30%;
    }
    ${mobileMedium}{
        left: -40%;
    }
    ${tablet}{
        left: 5%;
        width: 90%;
    }
    ${laptop}{
        left: 12%;
        top: 25%;
        width: 90%;
    }
    ${desktop}{
        width: 90%;
    }
    ${bigdesk}{
        left: 27%;
        top: 30%;
        width: 98%;
    }
`;

export const ImageBackFirstGift = styled.img`
    width: 100%;
    height: auto;
    ${tablet}{
        width: 100%;
    }
    ${laptop}{
        width: 90%;
    }
    ${desktop}{
        width: 90%;
    }
    ${bigdesk}{
        width: 48%;
    }
`;

export const FixedImageLogo = styled.img`
  position: fixed;
  top: 8%;
  left: 10%;
  width: 80%;
  height: auto;

  ${mobileLarge}{
    top: 7%;
  }
  ${tablet}{
    width: 40%;
    top: 7%;
    left: 31%;
  }
  ${laptop}{
    width: 30%;
    top: 7%;
    left: 37%;
  }
  ${desktop}{
    width: 30%;
    top: 7%;
    left: 37%;
  }
  ${bigdesk}{
    width: 17%;
    top: 10%;
    left: 42%;
  }
`;

export const ContainerBtnFirstGift = styled.div`
    position: fixed;
    top: 80%;
    left: 27%;
    display: flex;
    ${mobileMedium}{
        top: 85%;
        left: 29%;
    }
    ${mobileLarge}{
        top: 90%;
        left: 32%;
    }
    ${tablet}{
        top: 85%;
        left: 41%;
    }
    ${laptop}{
        top: 90%;
        left: 46%;
    }
    ${desktop}{
        top: 90%;
        left: 48%;
    }
    ${bigdesk}{
        top: 90%;
        left: 47%;
    }
`;

export const ButtonNextFirstGift = styled.button`
    width: 10rem;
    height: 3rem;
    background: #460BFF;
    color: #FFF;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    border-radius: 2.813rem;
    cursor: pointer;
`;

