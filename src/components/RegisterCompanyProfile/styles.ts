
import styled from "styled-components";

export const avatars = [
  { id: 1, src: "/images/avatarCompany1.svg" },
  { id: 2, src: "/images/avatarCompany2.svg" },
  { id: 3, src: "/images/avatarCompany3.svg" },
  { id: 4, src: "/images/avatarCompany4.svg" },
  { id: 5, src: "/images/avatarCompany5.svg" },
  { id: 6, src: "/images/avatarCompany6.svg" },
  { id: 7, src: "/images/avatarCompany7.svg" },
];

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
  justify-content: center;
  overflow-y: scroll;
  ${mobileMedium}{
    margin-top: 1rem;
    margin-left: 2rem;
  }
  ${laptop}{
    overflow: hidden;
  }
`;
export const ContainerRegisterCompanyProfilePage = styled.div `
  display: block;
  width: 100%;
  height: 100vh;
  background: #FFF;
  z-index: 0;  
  ${laptop}{
    overflow: hidden;
    display: flex;
  }
`;
export const DivContainerLogoProfilePage = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 7%;
  ${mobileLittle}{
    left: 2%;
    top: 5%;
  }
  ${mobileMedium}{
   left: 2%;
  }
  ${mobileLarge}{
   left: 6%;
  }
  ${tablet}{
   left: 26%;
  }
  ${tablet}{
   left: 30%;
  }
  ${desktop}{
   left: 40%;
  }
`;
export const LogoProfilePage = styled.img`
  width: 60%;
  height: auto;
  ${tablet}{
    width: 75%;
  }
  ${laptop}{
    width: 80%;
  }
  ${desktop}{
    width: 90%;
  }
`;
export const ContainerWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  top: 2%;
  left: 2%;
  padding: 0.625rem;
  gap: 1rem;
  h2 {
    font-family: 'Roboto', sans-serif;
  }
  ${mobileLittle}{
    width: 70%;
    left: 36%;
    h2{
      position: fixed;
      left: 28%;
      top: 16%;
      font-size: 1.125rem;
      min-width: 15.625rem;
    }
  }
  ${mobileMedium}{
    width: 32%;
    left: 38%;
    h2{
      position: fixed;
      left: 29%;
      top: 16%;
      font-size: 1.125rem;
      min-width: 15.625rem;
    }
  }
  ${tablet}{
    width: 32%;
    left: 38%;
    h2{
      position: fixed;
      left: 38%;
      top: 18%;
      font-size: 1.35rem;
      min-width: 15.625rem;
    }
  }
  ${laptop}{
    width: 32%;
    left: 8%;
    h2{
      position: fixed;
      left: 15%;
      top: 24%;
      font-size: 1.35rem;
      min-width: 15.625rem;
    }
  }
`;
export const AvatarWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  ${mobileLittle}{
    top: 20%;
    left: 17%;
  }
  ${mobileMedium}{
    left: 21%;
  }
  ${tablet}{
    top: 22%;
    left: 33%;
  }
  ${laptop}{
    top: 32%;
    left: 11%;
  }
`;
export const AvatarImage = styled.img`
  width: 9.688rem;
  height: 9.688rem;
  border: 4px solid #460BFF;
  border-radius: 50%;
  ${mobileLittle}{
    width: 6.25rem;
    height: 6.25rem;
  }
  ${mobileMedium}{
    width: 6.75rem;
    height: 6.75rem;
  }
  ${tablet}{
    width: 8rem;
    height: 8rem;
  }
  ${laptop}{
    width: 10rem;
    height: 10rem;
  }
  ${desktop}{
    width: 12rem;
    height: 12rem;
  }
`;
export const Button = styled.button`
  background-color: #460BFF;
  color: #FFF;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-size: 0.625rem;
  transition: 0.3s;
  svg {
    color: white;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    background-color: #228b22;
  }
`;
export const ThumbnailsContainer = styled.div`
  position: fixed;
  display: flex;
  gap: 0.5rem;
  ${mobileLittle}{
    top: 33%;
    left: 6%;
  }
  ${mobileMedium}{
    left: 7%;
  }
  ${mobileLarge}{
    left: 10%;
  }
  ${tablet}{
    top: 38%;
    left: 24%;
  }
  ${laptop}{
    top: 53%;
    left: 5%;
  }
  ${desktop}{
    top: 53%;
    left: 5%;
  }
`;
export const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "4px solid #460BFF" : "none")};
  &:hover {
    opacity: 0.8;
  }
  ${mobileLittle}{
    width: 2rem;
    height: 2rem;
  }
  ${mobileMedium}{
    width: 2.5rem;
    height: 2.5rem;
  }
  ${tablet}{
    width: 3rem;
    height: 3rem;
  }
  ${laptop}{
    width: 3rem;
    height: 3rem;
  }
  ${desktop}{
    width: 4rem;
    height: 4rem;
  }
`;
export const UsernameInput = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h3 {
    justify-content: flex-start;
    width: 11%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #460BFF;
    ${mobileLittle}{
      position: fixed;
      left: 10%;
      top: 42%;
      font-size: 1.125rem;
      min-width: 15.625rem;
    }
    ${mobileMedium}{
      left: 13%;
    }
    ${mobileLarge}{
      left: 11%;
    }
    ${tablet}{
      left: 9%;
      top: 45%;
    }
    ${laptop}{
      left: 9%;
      top: 68%;
    }
    ${desktop}{
      font-size: 1.5rem;
      left: 9%;
      top: 68%;
    }
  }
  input {
    position: fixed;
    padding: 0.3rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid black;
    margin-bottom: 1rem;
    ${mobileLittle}{
      left: 10%;
      top: 45%;
    }
    ${mobileMedium}{
      left: 13%;
    }
    ${mobileLarge}{
      left: 11%;
    }
    ${tablet}{
      left: 9%;
      top: 48%;
    }
    ${laptop}{
      left: 9%;
      top: 72%;
    }
    ${desktop}{
      left: 9%;
      top: 72%;
      width: 15rem;
      height: 1.85rem;
    }
  }
  input::placeholder {
    padding-left: 0.5rem;
    ${desktop}{
      font-size: 0.985rem;
    }
  }
  p {
    margin: 0.3rem 0 0 5rem;
    width: 20rem;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    ${desktop}{
      font-size: 1rem;
      margin-left: -3rem;
    }
    svg {
      height: 0.8rem;
      width: 0.8rem;
      margin-right: 0.5rem;
    }
  }
  ${mobileLittle}{
    left: -5%;
    top: 48%;
  }
  ${mobileLarge}{
    left: -10%;
  }
  ${tablet}{
    left: -23%;
    top: 51%;
  }
  ${laptop}{
    left: -28%;
    top: 75%;
  }
`;
export const TitleAndSetData = styled.div`
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  text-align: left;
  top: 60%;
  ${mobileMedium}{
    margin-left: 5%;
  }
  ${laptop}{
    margin-left: 24%;
    margin-top: -125%;
  }
  ${desktop}{
    margin-left: 12%;
    margin-top: -135%;
  }
  ${bigdesk}{
    margin-top: -115%;
  }
`;
export const TitleForm = styled.h3`
  font-size: 1rem;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  color: #460BFF;
  ${mobileLarge}{
    margin-top: 1.25rem;
  }
  ${laptop}{
    margin-top: -3rem;
    font-size: 1.7rem;
  }
  ${desktop}{
    font-size: 2rem;
  }
`;
export const ParagraphBelowTitle = styled.p`
  margin-top: 0.625rem;
  font-size: 0.983rem;
  max-width: 15.625rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  padding-bottom: 2rem;
  ${laptop}{
    min-width: 30rem;
  }
  ${desktop}{
    font-size: 1.25rem;
  }
`;
export const ContainerFormRegisterCompany = styled.div`
  position: relative;
  margin-top: 34rem;
  width: 100%;
  height: 89vh;
  background: #FFF;
  ${mobileLarge}{
    height: 91%;
  }
  ${tablet}{
    height: 91%;
  }
  ${laptop}{
    width: 20%;
    height: 20vh;
    margin-left: 26rem;
    margin-top: 28rem;
  }
  ${desktop}{
    width: 30%;
    height: 20vh;
    margin-left: 40rem;
    margin-top: 50rem;
  }
`;
export const FormRegisterCompany = styled.form`
  display: block;
  justify-content: center;
  height: 30vh;
  width: 30%;
  margin-left: 1rem;
  gap: 2rem;
  .inputsForm{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${laptop}{
      display: flex;
      flex-direction: row;
      gap: 1rem;
      margin-top: 1.25rem;
    }
  }
  label{
    font-size: 1.125rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    min-width: 15.625rem;
    margin-top: 1rem;
    ${desktop}{
      font-size: 1.3rem;
    }
  }
  input[type = text], input[type = email]{
    width: 15.625rem;
    outline: none;
    align-items: right;
    margin-top: -0.5rem;
    ${laptop}{
      min-width: 15.5rem;
    }
    ${desktop}{
      min-width: 18rem;
    }
  }
  .btnChoose{
    display: flex;
    gap: 0.3rem;
    button{
      width: 3.251rem;
      height: 1.813rem;
      border-radius: 2.813rem;
      border: none;
      cursor: pointer;
      &:hover{
        background: #460BFF;
        color: red;
      }
    }
  } 
  select{
    margin-top: 0.5rem;
    width: 15.625rem;
    height: 2rem;
    outline: none;
    align-items: right;
    ${laptop}{
      min-width: 15.5rem;
    }
    ${desktop}{
      min-width: 18rem;
    }
  }
  input {
    border: none;
    border-bottom: 0.063rem solid grey;
  }
  ${mobileLittle}{
    margin-top: -1rem;
  }
  ${tablet}{
    margin-left: 3rem;
  }
  ${laptop}{
    margin-left: 3rem;
    margin-top: -0.625rem;
    gap: 1rem;
    width: 100%;
  }
  ${desktop}{
    margin-left: 3rem;
    margin-top: -0.625rem;
    gap: 1rem;
  }
`;

export const ButtonNextPage = styled.button`
  width: 6.25rem;
  height: 2.313rem;
  background: #460BFF;
  color: #FFF;
  font-size: 0.875rem;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  border-radius: 2.813rem;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin: 19rem 0 1.5rem 6rem;
  ${mobileLittle}{
    margin-top: 22rem;
  }
  ${laptop}{
    margin: 13rem 0 1rem 25rem;
    width: 8.125rem;
    height: 1.875rem;
  }
  ${desktop}{
    margin: 15rem 0 1rem 30rem;
    width: 8.125rem;
    height: 1.875rem;
  }
`;

