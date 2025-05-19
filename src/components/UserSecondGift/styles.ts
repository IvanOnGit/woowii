import styled from "styled-components"

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`

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
//     ${mobile}{
//         width: 100%;
//         height: 85%;
//     }
//     ${desktop}{
//         width: 100%;
//         height: 70%;
//         content: url(./images/oneHundred.svg);
//     }
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
//     background: #8FFF00;
//     color: #000;
//     font-size: 20px;
//     font-weight: bold;
//     font-family: 'Inter', sans-serif;
//     border-radius: 45px;
//     cursor: pointer;
// `
export const ContainerSecondGiftPage = styled.div `
    display: block;
    width: 100%;
    min-height: 100vh;
    background: #FFF;
    z-index: 0;  
    overflow: hidden;
    max-width: 90rem;
`;

export const ContainerBackSecondGiftPage = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 0;
    ${mobile}{
        width: 110%;
        height: 100vh;
        left: -5%;
    }
    ${desktop}{
        content: url("/images/oneHundred.svg");
        left: 15%;
        width: 70%;
    }
`;

export const ImageBackSecondGift = styled.img`
    width: 100%;
    height: auto;
    ${desktop}{
        width: 70%;
    }
`;

export const FixedImageLogo = styled.img`
  position: fixed;
  top: 8%;
  left: 10%;
  width: 80%;
  height: auto;
  z-index: 1;
  ${desktop}{
    width: 20%;
    top: 2%;
    left: 40%;
  }
`;

export const ContainerBtnSecondGift = styled.div`
    position: fixed;
    top: 80%;
    left: 27%;
    display: flex;
    ${mobile}{
        top: 85%;
        left: 29%;
    }
    ${desktop}{
        top: 90%;
        left: 45%;
    }
`;

export const ButtonNextSecondGift = styled.button`
    width: 10rem;
    height: 2rem;
    background: #BFFF00;
    color: #000;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    border-radius: 2.813rem;
    cursor: pointer;
    &:hover{
        background: #460BFF;
        color: #FFF;  
    }
`;