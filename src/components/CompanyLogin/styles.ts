// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f4f4f4;
// `;

// export const LoginForm = styled.form`
//   background: white;
//   padding: 2rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   width: 300px;
//   font-family: 'Roboto', sans-serif;
// `;

// export const Input = styled.input`
//   padding: 0.8rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 1rem;
// `;

// export const Button = styled.button`
//   padding: 0.8rem;
//   background: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background 0.3s;
//   width: 45%;

//   &:hover {
//     background: #0056b3;
//   }
// `;

// export const ButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 1rem;
// `;

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
  width: 110%;
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
  top: 13%;
  left: 25%;
  width: 65%;
  height: auto;
  ${mobileMedium}{
    top: 12%;
  }
  ${mobileLarge}{
    top: 11%;
  }
  ${tablet}{
    width: 50%;
    top: 5%;
    left: 33%;
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
    left: 33%;
  }
`;

export const ContainerTextBelowLogo = styled.div`
  display: flex;
  position: fixed;
  top: 20%;
  left: 26%;
  ${tablet}{
    top: 17%;
    left: 35%;
  }
  ${laptop}{
    top: 20%;
    left: 45%;
  }
  ${desktop}{
    top: 22%;
    left: 41%;
  }
  ${bigdesk}{
    top: 21%;
    left: 39%;
  }
`;
export const TextBelowLogo = styled.h3`
  font-size: 0.688rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #000;
  min-width: 20rem;
  ${mobileMedium}{
    font-size: 0.813rem;
    min-width: 23.438rem;
    }
  ${mobileLarge}{
    font-size: 0.938rem;
    min-width: 26.563rem;
    }
  ${tablet}{
    font-size: 1rem;
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
    font-size: 1.2rem;
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
    padding-left: 2rem;
  }
  ${mobileLarge}{
    padding-left: 3rem;
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
    width: 41%;
    margin-left: 1rem;
    padding-left: 3.7rem;
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
  ${tablet}{
    width: 20rem;
    left: 28%;
  }
  ${laptop}{
    width: 19rem;
    left: 38%;
  }
  ${desktop}{
    width: 21.5rem;
    left: 36%;
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
    left: 28%;
  }
  ${laptop}{
    left: 37%;
  }
  ${desktop}{
    left: 36%;
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
  top: 62%;
  left: 10%;
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
    font-size: 1.3rem;
    left: 28%;
  }
  ${laptop}{
    margin-top: 0.5rem;
    left: 37%;
  }
  ${desktop}{
    top: 70%;
    left: 38%;
  }
   ${bigdesk}{
    top: 63%;
    left: 38%;
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
    left: 38%;
    gap: 2rem;
  }
  ${laptop}{
    left: 46%;
    gap: 2rem;
  }
  ${desktop}{
    top: 82%;
    left: 44%;
    gap: 2rem;
  }
`;

export const LogoGoo = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin: -0.175rem 0.313rem 0 1.5rem;
  ${laptop}{
    width: 1.6rem;
    height: 1.6rem;
  }
`;
export const LogoLin = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  margin: 0.063rem 0.375rem 0 1.5rem;
  ${laptop}{
    width: 1.15rem;
    height: 1.15rem;
  }
`;