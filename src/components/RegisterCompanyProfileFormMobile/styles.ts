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

export const ContainerFormRegisterCompanyProfileMobile = styled.div`
  position: relative;
  margin-top: 6rem;
  width: 100%;
  height: 89vh;
  background: #FFF;
`;

export const DivContainerLogoProfilePageForMobile = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 7%;
  ${mobileLittle}{
    left: 2%;
    top: 5%;
  }
  ${mobileMedium}{
   left: 3%;
  }
  ${mobileLarge}{
   left: 6%;
  }
  ${tablet}{
   left: 28%;
   top: 5%;
  }
`;
export const LogoProfilePageForMobile = styled.img`
  width: 60%;
  height: auto;
  ${mobileLittle}{
    width: 70%;
  }
  ${mobileMedium}{
    width: 60%;
  }
  ${tablet}{
   width: 75%;
  }
`;

export const FormRegisterCompanyProfileMobile = styled.form`
  display: block;
  justify-content: center;
  height: 30vh;
  width: 30%;
  margin-left: 2rem;
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
    font-size: 0.875rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    min-width: 15.625rem;
    margin-top: 1rem;
    ${tablet}{
      font-size: 1rem;
    }
  }
  input[type = text], input[type = email]{
    width: 15.625rem;
    outline: none;
    align-items: right;
    margin-top: -0.5rem;
    &::placeholder{
      font-size: 0.875rem;
    }
    ${tablet}{
      width: 20rem;
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
    margin-top: 0.5rem 0 0.8rem 0;
    width: 15.625rem;
    height: 2rem;
    outline: none;
    align-items: right;
    ${tablet}{
      width: 20rem;
    }
  }
  input {
    border: none;
    border-bottom: 0.063rem solid grey;
  }
  ${mobileLittle}{
    margin-top: -1rem;
  }
  ${mobileMedium}{
    margin-left: 4rem;
  }
  ${mobileLarge}{
    margin: -4rem 0 0 5rem;
  }
  ${tablet}{
    margin-left: 14rem;
  }
 
`;

export const TitleAndSetDataForMobile = styled.div`
  margin-left: 2rem;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  ${mobileMedium}{
    margin-left: 4rem;
  }
  ${mobileLarge}{
    margin-left: 5rem;
  }
  ${tablet}{
    margin-left: 14rem;
  }
`;
export const TitleFormForMobile = styled.h3`
  
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: #460BFF;
  ${mobileLarge}{
    margin-top: 1rem;
  }
`;
export const ParagraphBelowTitleForMobile = styled.p`
  margin-top: 0.125rem;
  font-size: 0.75rem;
  max-width: 17.5rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  padding-bottom: 1rem;
  ${mobileLarge}{
    padding-bottom: 4rem;
  }
`;
export const ButtonNextPageForMobile = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.813rem;
  height: 1.625rem;
  background: #8FFF00;
  font-size: 0.875rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  border-radius: 2.813rem;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20rem 0 1.5rem 7rem;
  ${mobileMedium}{
    margin-left: 9rem;
  }
  ${mobileLarge}{
    margin-left: 10rem;
  }
  ${tablet}{
    margin-left: 21rem;
  }
`;

