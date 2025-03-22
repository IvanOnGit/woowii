// import styled from "styled-components";

// export const DivContainerStyled = styled.div`
//     display: flex;
//     height: 100vh;
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
// `

// export const LogoAndTitleWrapper = styled.div`
//     display: flex;
//     height: 100%;
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
// `
// export const LogoRegistroUsuarioStyled = styled.img`
//     width: 40%;
//     height: 80%;
// `
// export const TxtInfoRegistroUsuarioStyled = styled.p`
//     text-align: center;
//     font-size: 1rem;
//     font-weight: 300;
//     font-family: 'Roboto', sans-serif;
// `

// export const LinkAccountButtons = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 10%;
//     gap: 1rem;
// `

// export const Buttons = styled.button`
//     padding: 0.5rem;
//     background-color: transparent;
//     border: 1px solid blue;
//     border-radius: 1rem;
//     width: 20%;
//     margin-bottom: 1rem;
//     color: blue;
//     cursor: pointer;
// `

// export const StyledSpan = styled.span`
//     height: 1px;
//     width: 20rem;
//     background-color: black;
//     margin-bottom: 1rem;
// `
// export const FormRegistroUsuario = styled.form`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     width: 100%;
//     gap: 0.4rem;
//     label{
//         font-size: 1rem;
//         width: 18.31rem;
//         font-family: 'Roboto', sans-serif;
//     }
//     input{
//         width: 18.31rem;
//         height: 2.1rem;
//         border-radius: 0.5rem;
//         outline: none;
//         border: 1px solid black;
//         padding-left: 1rem;
//     }
//     input[type = submit]{
//         margin-top: 1rem;
//         border-radius: 3rem;
//         border: none;
//         font-weight: 700;
//         color: #FFF;
//         background: #460BFF;
//         cursor: pointer;
//         padding-left: 0;
//     }
//     input[type = submit]:hover{
//         background-color: #75B300;
//         color: #FFF;
//     }
// `

// export const IniciaSesionStyled = styled.p`
//     font-size: 1rem;
//     font-weight: 500;
//     font-family: 'Roboto', sans-serif;
//     color: #460BFF;
//     margin: 0;
//     padding-top: 3rem;
//     a{
//         text-decoration: none ;
//         cursor: pointer;
//     }
//     a:hover{
//         color: #FF00CD;
//     }
// `
// export const BtnLinksSocialStyled = styled.div`
//     display: flex;
//     align-items: center;
//     height: 50%;
//     gap: 2rem;
//     img{
//         cursor: pointer;
//     }
//     #one:hover{
//         background-image: url('./src/images/linkedinColor.png');
//         background-size: cover;
//         transition: all 0.3s ease-in-out;
//     }
//     #two:hover{
//         background-image: url('./src/images/instagramcolor.png');
//         background-size: cover;
//         transition: all 0.3s ease-in-out;
//     }
//     #three:hover{
//         background-image: url('./src/images/twittercolor.png');
//         background-size: cover;
//         transition: all 0.3s ease-in-out;
//     }
//     #four:hover{
//         background-image: url('./src/images/spotifycolor.png');
//         background-size: cover; 
//         transition: all 0.3s ease-in-out;
//     }
// `

// export const TextoMiniInfoRegUser = styled.p`
//     font-size: 0.5rem;
//     font-weight: 400;
//     font-family: 'Roboto', sans-serif;
//     width: 100%;
//     margin-left: 50rem;
//     margin-bottom: 1rem;
// `

// export const SemiCircleStyled = styled.div`
//     position: absolute;
//     right: 0;
//     top: 0;
//     width: 60%;
//     height: 100vh;
//     background: #FFF;
//     border-radius: 50% 0 0 50%;
//     filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
// `

// export const WrapperImage = styled.img`
//   position: fixed;
//   top: 0;
//   left: -20.625rem;
//   width: 100vw;
//   height: 100vh;
//   background-image: url("/images/backgroundCompanyForm.svg");
//   background-position: center;
//   z-index: -1;  
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

export const ContainerRegisterCompanyFormPage = styled.div `
    display: block;
    width: 100%;
    min-height: 100vh;
    background: #FFF;
    z-index: 0;  
    overflow: hidden;
    max-width: 90rem;
`;

export const ContainerBackCompanyFormPage = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    content: url("/images/BackCompanyFormModified.svg");
    ${tablet}{
        content: url("/images/backgroundCompanyForm.svg");
        width: 110%;
    }
    ${laptop}{
        width: 90%;
    }
    ${desktop}{
        width: 60%;
    }
    ${bigdesk}{
        content: url("/images/BackCompanyFormModified.svg");
        width: 38%;
    }
`;

export const ImageBackCompanyForm = styled.img`
    width: 100%;
    height: auto;
    ${tablet}{
        width: 90%;
    }
    ${laptop}{
        width: 70%;
    }
    ${desktop}{
        width: 50%;
    }
    ${bigdesk}{
        width: 28%;
    }
`;

export const SemiCircleStyled = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 85%;
    height: 100vh;
    background: #FFF;
    border-radius: 50% 0 0 50%;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    ${tablet}{
        width: 70%;
    }
    ${laptop}{
        width: 60%;
    }
    ${desktop}{
        width: 60%;
    }
    ${bigdesk}{
        width: 45%;
        right: 13rem;
    }
`;

export const FixedImageLogo = styled.img`
  position: fixed;
  top: 12%;
  left: 25%;
  width: 65%;
  height: auto;
  ${mobileMedium}{
    top: 10%;
  }
  ${mobileLarge}{
    top: 9.5%;
  }
  ${tablet}{
    width: 50%;
    top: 5%;
    left: 30%;
  }
  ${laptop}{
    width: 50%;
    top: 5%;
    left: 37%;
  }
  ${desktop}{
    width: 50%;
    top: 6%;
    left: 30%;
  }
  ${bigdesk}{
    width: 50%;
    top: 8%;
    left: 31%;
  }
`;

export const ContainerTextBelowLogo = styled.div`
    display: flex;
    position: fixed;
    top: 20%;
    left: 26%;
    ${mobileLarge}{
        left: 23%;
    }
    ${tablet}{
        top: 17%;
        left: 33%;
    }
    ${laptop}{
        top: 20%;
        left: 40%;
    }
    ${desktop}{
        top: 22%;
        left: 37%;
    }
    ${bigdesk}{
        top: 21%;
        left: 37%;
    }
`;
export const TextBelowLogo = styled.h3`
  font-size: 0.626rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #000;
  min-width: 20rem;
  ${mobileLittle}{
    margin-left: -2.188rem;
  }
  ${mobileMedium}{
    font-size: 0.75rem;
    min-width: 23.438rem;
    }
  ${mobileLarge}{
    font-size: 0.875rem;
    min-width: 26.563rem;
    }
  ${tablet}{
    font-size: 0.775rem;
    min-width: 48rem;
  }
  ${laptop}{
    font-size: 0.875rem;
    min-width: 64rem;
  }
  ${desktop}{
    font-size: 1rem;
    min-width: 90rem;
  }
  ${bigdesk}{
    font-size: 1rem;
    min-width: 160rem;
  }
`;

export const LinkAccountButtons = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    top: 6%;
    left: 5%;
    ${mobileMedium}{
     left: 1%;
    }
    ${desktop}{
     margin-top: 1rem;
    }
`;

export const Buttons = styled.button`
    display: flex;
    padding: 0.2rem;
    background-color: transparent;
    border: 1px solid blue;
    border-radius: 1rem;
    width: 80%;
    margin-bottom: 1rem;
    color: blue;
    cursor: pointer;
    ${mobileMedium}{
      width: 80%;
      margin-left: 1.35rem;
      padding-left: 1.8rem;
    }
    ${mobileLarge}{
      padding-left: 2.8rem;
    }
    ${tablet}{
      width: 60%;
      margin-left: 1.35rem;
      padding-left: 3rem;
      padding-top: 0.3rem;
      font-size: 1.065rem;
    }
    ${laptop}{
      width: 50%;
      margin-left: 5.95rem;
      padding-left: 3rem;
      padding-top: 0.3rem;
      font-size: 1.065rem;
    }
    ${desktop}{
      width: 40%;
      margin-left: 2.5rem;
      padding-left: 4rem;
      padding-top: 0.3rem;
      font-size: 1.065rem;
    }
`;

export const StyledSpan = styled.span`
    position: fixed;
    height: 1px;
    width: 13rem;
    top: 38%;
    left: 16%;
    background-color: black;
    margin-bottom: 1rem;
    ${mobileMedium}{
        width: 15.5rem;
    }
    ${tablet}{
        width: 20rem;
        left: 23%;
    }
    ${laptop}{
        width: 20rem;
        left: 33%;
    }
    ${desktop}{
        width: 20rem;
        left: 33%;
        top: 40%;
    }
`;

export const ContainerFormRegisterCompany = styled.div`
    position: fixed;
    display: flex;
    width: 70%;
    height: auto;
    top: 40%;
    left: 15%;
    ${tablet}{
        width: 60%;
        left: 23%;
    }
    ${laptop}{
        left: 33%;
    }
    ${desktop}{
        left: 33%;
        width: 45%;
        top: 43%;
    }
`;

export const FormRegisterCompany = styled.form`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    label{
        font-size: 0.875rem;
        width: 18.31rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        ${mobileMedium}{
            font-size: 0.938rem;
        }
        ${tablet}{
            font-size: 1rem;
        }
        ${laptop}{
            font-size: 1.25rem;
        }
        ${desktop}{
            font-size: 1.35rem;
        }
    }
    input{
        width: 13.5rem;
        height: 2.1rem;
        border-radius: 1rem;
        outline: none;
        border: 1px solid black;
        padding-left: 1rem;
        margin-bottom: 0.625rem;
        ${mobileMedium}{
            width: 16rem;
        }
        ${mobileLarge}{
            width: 18rem;
        }
        ${tablet}{
            width: 20rem;
        }
        ${desktop}{
            width: 22rem;
        }
    }
    input[type = submit]{
        margin-top: 1rem;
        border-radius: 3rem;
        border: none;
        font-weight: 700;
        color: #FFF;
        background: #460BFF;
        cursor: pointer;
        padding-left: 0;
    }
    input[type = submit]:hover{
        background-color: #75B300;
        color: #FFF;
    }
`;

export const IniciaSesionStyled = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: auto;
    top: 70%;
    font-size: 0.938rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
    z-index: 1;
    a{
        text-decoration: none;
        cursor: pointer;
    }
    a:hover{
        color: #FF00CD;
    }
    ${mobileMedium}{
        font-size: 1.125rem;
    }
    ${mobileLarge}{
        font-size: 1.25rem;
    }
    ${tablet}{
        font-size: 1.4rem;
    }
    ${laptop}{
        margin-top: 0.5rem;
    }
    ${desktop}{
        top: 75%;
        left: 35%;
    }
    ${bigdesk}{
        top: 68%;
        left: 36%;
    }
`;

export const BtnLinksSocialStyled = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    gap: 1.7rem;
    top: 75%;
    left: 18%;
    z-index: 0;
    img{
        cursor: pointer;
    }
    #one:hover{
        background-image: url('./src/images/linkedinColor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #two:hover{
        background-image: url('./src/images/instagramcolor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #three:hover{
        background-image: url('./src/images/twittercolor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #four:hover{
        background-image: url('./src/images/spotifycolor.png');
        background-size: cover; 
        transition: all 0.3s ease-in-out;
    }
    ${mobileMedium}{
        gap: 2.7rem;
    }
    ${mobileLarge}{
        gap: 3.25rem;
    }
    ${tablet}{
        left: 33%;
        gap: 2rem;
    }
    ${laptop}{
        left: 43%;
        gap: 2rem;
    }
    ${desktop}{
        top: 82%;
        left: 43%;
        gap: 2rem;
    }
`;

export const LogoGoo = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    margin: -0.175rem 0.313rem 0 1rem;
    ${tablet}{
        width: 1.6rem;
        height: 1.6rem;
    }
`;
export const LogoLin = styled.img`
    width: 0.875rem;
    height: 0.875rem;
    margin: 0.063rem 0.375rem 0 1rem;
    ${tablet}{
        width: 1.15rem;
        height: 1.15rem;
    }
`;