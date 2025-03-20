// import styled from "styled-components";

// export const ContainerChoose = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
// `
// export const ContainerChooseLeft = styled.div`
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
// `
// export const ContainerChooseCenter = styled.div`
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
// `
// export const ContainerChooseRight = styled.div`
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
// `
// export const MobileUserInit = styled.img`
//    margin: 180px 0 0 280px;
//    display: block;
//    width: 72%;
//    /* margin: auto; */
//    z-index: 1;
// `
// export const MobileCompanyInit = styled.img`
//    margin: 200px 0 0 -160px;
//    /* display: block; */
//    width: 75%;
//    /* margin: auto; */
//    z-index: 1;
// `
// export const DivContainerLogoChoose = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 70px;
// `;

// export const LogoChoose = styled.img`
//   width: 18.75rem;
//   height: 5.25rem;
// `;

// export const ContainerButtonsChoose = styled.div`
//     display: block;
//     flex-direction: column;
//     margin: 200px 0 0 120px;
    
// `
// export const BtnTalentChoose = styled.img`
//     width: 70%;
//     margin: auto;
//     padding-bottom: 20px;
//     cursor: pointer;
// `
// export const BtnCompanyChoose = styled.img`
//     width: 70%;
//     margin: auto;
//     cursor: pointer;
// `
// export const ContainerDegradado = styled.div`
//     display: block;
//     flex-direction: column;
// `
// export const DegradadoChoose = styled.img`
//     width: 130%;
//     margin: auto;
//     margin-left: -80px;
//     z-index: -1;
// `
import styled from "styled-components";

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

export const ContainerChoosePage = styled.div `
    display: block;
    width: 100%;
    min-height: 100vh;
    background: #FFF;
    z-index: 0;  
    overflow: hidden;
    max-width: 90rem;
`;

export const FixedImageLogo = styled.img`
  position: fixed;
  top: 8%;
  left: 25%;
  width: 50%;
  height: auto;
  ${mobileLarge}{
    top: 7%;
  }
  ${tablet}{
    width: 30%;
    top: 5%;
    left: 37%;
  }
  ${laptop}{
    width: 30%;
    top: 5%;
    left: 37%;
  }
  ${desktop}{
    width: 23%;
    top: 10%;
    left: 40%;
  }
  ${bigdesk}{
    width: 17%;
    top: 10%;
    left: 42%;
  }
`;

export const ContainerImageBackChoose = styled.div`
    display: flex;
    position: fixed;
    width: 300%;
    top: 3%;
    ${tablet}{
        top: 50%;
        left: 5%;
    }
    ${laptop}{
        top: 45%;
        left: 8%;
    }
    ${desktop}{
        top: 47%;
        left: 20%;
    }
    ${bigdesk}{
        width: 45%;
        top: 55%;
        left: 27.5%;
    }
`;

export const ImageBackChoose = styled.img`
    width: 100%;
    height: auto;
    content: url("/images/BackColorsChoose.svg");
    ${mobileLarge}{
        width: 100%;
    }
    ${tablet}{
        width: 30%;
        content: url("/images/DegradedChoose.svg");
    }
    ${desktop}{
        width: 22%;
    }
    ${bigdesk}{
        width: 100%;
    }
`;

export const ContainerMobileTalentChoose = styled.div`
    display: flex;
    position: fixed;
    width: 45%;
    top: 18%;
    z-index: 1;
    ${mobileLarge}{
        top: 16%;  
    }
    ${tablet}{
        width: 35%;
        top: 30%;
        left: 5%;
    }
    ${laptop}{
        width: 35%;
        top: 25%;
        left: 5%;
    }
    ${desktop}{
        width: 25%;
        top: 25%;
        left: 10%;
    }
    ${bigdesk}{
        width: 20%;
        top: 30%;
        left: 23%;
    }
`;

export const ImageMobileTalentChoose = styled.img`
    width: 100%;
    height: auto;
`;

export const ContainerByTalent = styled.div`
    display: flex;
    position: fixed;
    width: 50%;
    top: 48%;
    left: 28%;
    z-index: 1;
    cursor: pointer;
    ${mobileMedium}{
        top: 49%; 
    }
    ${mobileLarge}{
        top: 50%;  
    }
    ${tablet}{
        width: 25%;
        left: 40%;
        top: 45%;
    }
    ${laptop}{
        width: 25%;
        left: 39%;
        top: 40%;
    }
    ${desktop}{
        width: 22%;
        left: 40%;
        top: 40%;
    }
    ${bigdesk}{
        width: 14%;
        left: 43%;
        top: 40%;
    }
`;

export const ImageBtnByTalent = styled.img`
    width: 100%;
    height: auto;
`;

export const ContainerByCompany = styled.div`
    display: flex;
    position: fixed;
    width: 50%;
    top: 55%;
    left: 28%;
    z-index: 1;
    cursor: pointer;
    ${mobileMedium}{
        top: 56%;  
    }
    ${mobileLarge}{
        top: 58%;  
    }
    ${tablet}{
        width: 25%;
        left: 40%;
        top: 52%;
    }
    ${laptop}{
        width: 25%;
        left: 39%;
        top: 49%;
    }
    ${desktop}{
        width: 22%;
        left: 40%;
        top: 51%;
    }
    ${bigdesk}{
        width: 14%;
        left: 43%;
        top: 47%;
    }
`;

export const ImageBtnByompany = styled.img`
    width: 100%;
    height: auto;
`;

export const ContainerMobileCompanyChoose = styled.div`
    display: flex;
    position: fixed;
    width: 52%;
    top: 66%;
    z-index: 1;
    ${tablet}{
        width: 30%;
    }
    ${tablet}{
        width: 37%;
        top: 32%;
        left: 60%;
    }
    ${laptop}{
        width: 37%;
        top: 27%;
        left: 60%;
    }
    ${desktop}{
        width: 27%;
        top: 27%;
        left: 65%;
    }
    ${bigdesk}{
        width: 22%;
        top: 30%;
        left: 55%;
    }
`;

export const ImageMobileCompanyChoose = styled.img`
    width: 100%;
    height: auto;
`;