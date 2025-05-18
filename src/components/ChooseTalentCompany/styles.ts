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

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`



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
  left: 22%;
  width: 60%;
  height: auto;
  ${desktop}{
    width: 23%;
    top: 10%;
    left: 40%;
  }
`;

export const ContainerImageBackChoose = styled.div`
    display: flex;
    position: fixed;
    width: 300%;
    top: 3%;
    ${desktop}{
        top: 47%;
        left: 20%;
    }
`;

export const ImageBackChoose = styled.img`
    width: 100%;
    height: auto;
    content: url("/images/BackColorsChoose.svg");
    ${desktop}{
        width: 22%;
        content: url("/images/DegradedChoose.svg");
    }
`;

export const ContainerMobileTalentChoose = styled.div`
    display: flex;
    position: fixed;
    width: 45%;
    top: 18%;
    z-index: 1;
    ${mobile}{
        display: none;
    }
    ${desktop}{
        display: flex;
        width: 25%;
        top: 25%;
        left: 10%;
    }
`;

export const ImageMobileTalentChoose = styled.img`
    width: 100%;
    height: auto;
`;

export const ContainerByTalent = styled.div`
    display: flex;
    position: fixed;
    width: 70%;
    top: 48%;
    left: 16%;
    z-index: 1;
    cursor: pointer;
    ${mobile}{
        top: 49%; 
    }
    ${desktop}{
        width: 22%;
        left: 40%;
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
    width: 70%;
    top: 55%;
    left: 16%;
    z-index: 1;
    cursor: pointer;
    ${mobile}{
        top: 56%;  
    }
    ${desktop}{
        width: 22%;
        left: 40%;
        top: 51%;
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
    ${mobile}{
        display: none;
    }
    ${desktop}{
        display: flex;
        width: 27%;
        top: 27%;
        left: 65%;
    }
`;
export const ImageMobileCompanyChoose = styled.img`
    width: 100%;
    height: auto;
`;
