import styled from "styled-components";


export const ContainerAllOffer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('/images/backgroundOffer.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

export const ContainerArrow = styled.div`
  width: 8.75rem;
  height: 10rem;
  background: transparent;
  margin: 2rem 0 0 5rem;
  z-index: 1;
`;

export const ArrowCompanyOffer = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  margin: auto;
  cursor: pointer;
`;
export const ContainerOfferPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const ContainerColumnCard = styled.div`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  #logo{
    width: 11.625rem;
    height: 3.25rem;
    margin: 1.875rem 0 0 6.25rem;
  }
`;
export const LogoCompany = styled.img`
  margin: auto;
`;
export const ContainerCardOfferImage = styled.img`
  margin: -5rem 0 0 4.375rem;
`;
export const ContainerColumnBodyOffer = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  margin-left: -19.375rem;
`
export const ContainerHeaderSearch = styled.div`
  display: flex;
  width: 21rem;
  height: 2.5rem;
  margin: 0 16.875rem 0 18.75rem;
`;
export const HeaderSearch = styled.input`
  width: 21rem;
  height: 2.5rem;
  margin: auto;
  background: #000;
  color: #FFF;
  border: 0.063rem solid #FFF;
  border-radius: 2.813rem;
  padding-left: 8.125rem;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 10%;
  padding: 1rem;
  color: #FFF;
  margin: -1rem 0 0 10rem;
`;
export const ContainerDataOffer = styled.form`
  width: 31.25rem;
  height: 9.125rem;
  display: block;
  margin: 1.25rem 0 0 25rem;
`;
export const ContainerDataOfferName = styled.div`
  width: 34.375rem;
  height: 2.875rem;
  border-bottom: 0.188rem solid #FFF;
`;
export const DataOfferName = styled.input`
  width: 34.375rem;
  height: 2.875rem;
  border: none;
  background: #000;
  color: #FFF;
  font-size: 2.25rem;
  font-weight: 200;
  font-family: 'Roboto', sans-serif;
`;

export const ContainerDataOfferDetails = styled.div`
  width: 37.5rem;
  height: 2.875rem;
  background: #000;
  display: flex;
  margin-top: 1.25rem;
`;
export const ContainerDataOfferForAll = styled.div`
  display: block;
  width: 14.588rem;
  height: 3.438rem;
  gap: 6.25rem;
  label{
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    height: 1.625rem;
  }
  input{
    width: 6.25rem;
    height: 1.25rem;
    font-size: 0.75rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    background: #000;
    border: none;
    border-bottom: 0.125rem solid #FFF;
  }
`;

export const LabelAboutUs = styled.label`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
  height: 1.625rem;
  padding-top: 3.125rem;
  margin-bottom: 0.625rem;
`;
export const TextAreaExplainOffer = styled.textarea`
  width: 51.625rem;
  height: 8.813rem;
  resize: none;
  background: transparent;
  border: 0.063rem solid #FFF;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  border-radius: 0.938rem;
  color: #FFF;
  padding: 0.625rem;
`

export const ContainerDataOfferImage = styled.div`
  width: 100vw;
  height: 430vh;
  background: #FFF;
  margin-top: -62.5rem;
  img{
    margin: auto;
    margin-left: 3.125rem;
    margin-top: 6.25rem;
  }
  p{
    font-size: 2.813rem;
    font-weight: 300;
    margin: auto;
    margin-left: 21.875rem;
  }
  /* span{
   background: #8FFF00;
  } */
`
export const BtnAplicarOffer = styled.button`
  width: 18.688rem;
  height: 4.125rem;
  margin: auto;
  margin-top: 3.125rem;
  margin-left: 35.625rem;
  background: #8FFF00;
  border-radius: 2.813rem;
  font-size: 1.875rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
`
export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  p {
    display: flex;
    margin: 0; 
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;



export const ContainerBars = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  margin: auto;
  z-index: 1;
  top: -18.75rem;
  left: 10.625rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  margin: 0.625rem 0 -0.938rem 0;
  background: transparent;
  #leftCol, #left{
    margin-left: 6.25rem;
  }
  #rightCol, #right{
    margin-left: 3.125rem;
  }
  #barRadius{
    border-radius: 2.813rem;
  }
`;

export const LabelCol = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.313rem;
  color: #FFF;
  text-align: left;
`;

export const MatchContainer = styled.div`
  width: 16.563rem;
  height: 2.5rem;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  background-color: #8FFF00;
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin: -2.625rem 0 1.25rem -0.313rem;
  border-radius: 0.313rem;
`;

export const Button = styled.button`
  position: relative;
  top: -55.625rem;
  left: 40.625rem;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #460BFF;
  color: white;
  border: none;
  border-radius: 0.313rem;
  z-index: 1;
  &:hover {
    background-color: #8FFF00;
    color: #000;
  }
`;
export const CustomTooltip = styled.div`
  position: relative ;
  background: white;
  padding: 0.313rem;
  border: 0.063rem solid #ccc;
  border-radius: 0.313rem;
  box-shadow: 0px 0px 0.313rem rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const ContainerValuesLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: auto;
  width: 1.875rem;
  height: 10rem;
  background: transparent;
  z-index: 1;
  left: -12.5rem;
  top: -9.063rem;
`;

export const ContainerValuesRight = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: auto;
  width: 1.875rem;
  height: 10rem;
  background: transparent;
  z-index: 1;
  left: 4.063rem;
  top: -29.063rem;
`;

export const ContainerIconsLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  margin: auto;
  width: 1.875rem;
  height: 10rem;
  background: transparent;
  z-index: 1;
  left: -22.5rem;
  top: -19.063rem;
`;

export const ContainerIconsRight = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  margin: auto;
  width: 1.875rem;
  height: 10rem;
  background: transparent;
  z-index: 1;
  left: -8.125rem;
  top: -39.063rem;
`;

export const ValuePercentageMatch = styled.label`
  left: 40.625rem;
  top: -29.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
`;

export const ValuePercentageTransparency = styled.label`
  left: 40.625rem;
  top: -26.375rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
`;

export const ValuePercentageRequirements = styled.label`
  left: 40.625rem;
  top: -23.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
`;

export const ValuePercentageSalary = styled.label`
  left: 40.625rem;
  top: -20.625rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
`;

export const ValuePercentageCulture = styled.label`
  left: 9.375rem;
  top: -20.125rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
`;
export const ValuePercentageTecnology = styled.label`
  left: 9.375rem;
  top: -17rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
`;
export const ValuePercentageLocation = styled.label`
  left: 9.375rem;
  top: -13.875rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
`;
export const ValuePercentageIdentity = styled.label`
  left: 9.375rem;
  top: -10.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #FFF;
`;

export const ContainerHeartIcon = styled.div`
  left: 29.375rem;
  top: -27.688rem;
  z-index: 2;
`;
export const ContainerGlassesIcon = styled.div`
  left: 29.375rem;
  top: -25rem;
  z-index: 2;
`;
export const ContainerSyringeIcon = styled.div`
  left: 29.375rem;
  top: -22.313rem;
  z-index: 2;
`;
export const ContainerSalaryIcon = styled.div`
  left: 29.375rem;
  top: -19.625rem;
  z-index: 2;
`;
export const ContainerCultureIcon = styled.div`
  left: 23.125rem;
  top: -19.625rem;
  z-index: 2;
`;
export const ContainerTechnologyIcon = styled.div`
  left: 23.125rem;
  top: -16.938rem;
  z-index: 2;
`;
export const ContainerLocationIcon = styled.div`
  left: 23.125rem;
  top: -14.25rem;
  z-index: 2;
`;
export const ContainerIdentityIcon = styled.div`
  left: 23.125rem;
  top: -11.563rem;
  z-index: 2;
`;

export const ContainerCompabilityMatch = styled.div`
  position: relative;
  top: -69.375rem;
  left: 28.125rem;
  display: block;
  margin: auto; 
  width: 18.75rem;
  height: 8.125rem;
  background: transparent;
  #compaText{
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Roboto',sans-serif;
    color: #FFF;
  }
  #perfilText{
    font-size: 2.25rem;
    font-weight: 600;
    font-family: 'Roboto',sans-serif;
    color: #FFF;
    margin-top: -2.5rem;
  }
`;

export const QueHarasText = styled.div`
  display: block;
  width: 100%;
  height: 2.75rem;
  margin-top: 3.125rem;
  p{
    margin: auto;
    text-align: center;
    font-size: 2.25rem;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }
  .BlueRectangle1{
    margin: auto;
    width: 6.063rem;
    height: 0.625rem;
    margin: 0.625rem 0 0 42.5rem;
    background: #460BFF;
  }
  .BlueRectangle2{
    margin: auto;
    width: 6.063rem;
    height: 0.625rem;
    margin: 0.625rem 0 0 42.5rem;
    background: #460BFF;
  }
`;
export const TextAreaQueHarasExplainOffer = styled.textarea`
  position: relative;
  width: 51.625rem;
  height: 8.813rem;
  margin: 6.5rem 0 0 20.625rem;
  resize: none;
  background: transparent;
  border: 1px solid #000;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  border-radius: 0.938rem;
  color: #000;
  padding: 0.625rem;
  z-index: 2;
`;

export const DivCuadriculaEquipo = styled.div`
  display: block;
  width: 20.125rem;
  height: 16.375rem;
  border: 0.063rem solid #000;
  margin: auto;
  margin-top: 5rem;
  border-radius: 0.625rem;
`;

export const DivFirstLineCuadricula = styled.div`
  display: flex;
  width: 20.125rem;
  height: 3.125rem;
  border-radius: 0.625rem 0.625rem 0 0;
`;
export const DivSupervisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.063rem;
  height: 3.125rem;
  border: none;
  border-right: 0.063rem solid #000;
  font-size: 0.938rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

export const InputSupervisor = styled.input`
  width: 9.438rem;
  height: 3.125rem;
  border: none;
  border-radius: 0 0.625rem 0 0;
  padding-left: 0.625rem;
  font-size: 0.938rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
`;

export const DivSecondLineCuadricula = styled.div`
  display: flex;
  width: 20.125rem;
  height: 3.125rem;
  border-top: 0.063rem solid #000;
  border-bottom: 0.063rem solid #000;
`;

export const DivLider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.063rem;
  height: 3.125rem;
  border: none;
  border-right: 0.063rem solid #000;
  font-size: 0.938rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

export const InputLider = styled.input`
  width: 9.438rem;
  height: 2.938rem;
  border: none;
  border-top: 0.063rem solid #000;
  border-bottom: 0.063rem solid #000;
  padding-left: 0.625rem;
  font-size: 0.938rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
`;

export const DivCentralCuadricula = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.125rem;
  height: 3.563rem;
  border: none;
  font-size: 1.25rem;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
`;

export const DivThirdLineCuadricula = styled.div`
  display: flex;
  width: 20.125rem;
  height: 3.125rem;
  border-top: 0.063rem solid #000;
  border-bottom: 0.063rem solid #000;
`;

export const DivTeamRol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.063rem;
  height: 3.125rem;
  border: none;
  border-right: 0.063rem solid #000;
  font-size: 0.938rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

export const InputTeamRol = styled.input`
  width: 9.438rem;
  height: 2.938rem;
  border: none;
  padding-left: 0.625rem;
  font-size: 0.938rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
`;

export const DivFourthLineCuadricula = styled.div`
  display: flex;
  width: 20.125rem;
  height: 3.125rem;
  border: none;
`;

export const DivTeamRolBis = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.063rem;
  height: 3.125rem;
  border: none;
  border-right: 0.063rem solid #000;
  font-size: 0.938rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

export const InputTeamRolBis = styled.input`
  width: 9.438rem;
  height: 3.063rem;
  border: none;
  border-radius: 0 0 0.625rem 0;
  border-bottom: 0.063rem solid #000;
  padding-left: 0.625rem;
  font-size: 0.938rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
`;

export const DivKitSurvivor = styled.div`
  display: block;
  margin: auto;
  width: 39.75rem;
  height: 0.625rem;
  margin-top: 6.25rem;
`;

export const TitleKitSurvivor = styled.h3`
  text-align: center;
  font-size: 1.563rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

export const DivSelectionProcess = styled.div`
  display: block;
  margin: auto;
  width: 47.5rem;
  height: 28.75rem;
  margin-top: 9.375rem;
  .BlueRectangle3{
    margin: auto;
    width: 6.875rem;
    height: 0.625rem;
    margin: -1.875rem 0 0 8.125rem;
    background: #460BFF;
  }
`
export const TitleSelectionProcess = styled.h3`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

export const DivProcessSelectionNumbers = styled.div`
  display: flex;
  margin: auto;
  width: 47.5rem;
  height: 25rem;
  background: #FFF;
  z-index: 0;
`;

export const ProcessSelectionNumbers = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 11.875rem;
  height: 25rem;
  margin-top: 6.25rem;
  z-index: 0;
  h4{
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    margin: 1.25rem 0 0 -2.188rem;
  }
  #firstWiibuck{
    font-size: 0.75rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
  }
  input{
    margin-top: 1.25rem;
    text-align: center;
    border: none;
    border-bottom: 0.063rem solid #000;
  }
`;


export const BlueRingAndLine = styled.div`
  position: relative;
  display: flex;
  gap: 0.625rem;
  z-index: 0;
  img{
    margin-top: 3.125rem;
    margin-left: 3.75rem;
    z-index: 1;
  }
  .line{
    width: 6.25rem;
    height: 0.125rem;
    background: #000;
    margin-top: 4.063rem;
    z-index: 2;
  }
  .line2{
    position: absolute;
    width: 7.5rem;
    height: 0.125rem;
    background: #000;
    margin-top: 4.063rem;
    margin-left: -4.375rem;
    z-index: 2;
  }
`;

export const ProcessSelectionWiiBucks = styled.h5`
  display: flex;
  margin: auto;
  width: 6.25rem;
  font-size: 0.75rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  z-index: 1;
  
`;

export const DivProcessSelectionResponsibilities = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 47.5rem;
  height: 47.5rem;
  margin-bottom: -10.625rem;
  z-index: 0;
  .BlueRectangle4{
    margin: auto;
    width: 6.875rem;
    height: 0.625rem;
    margin: -1.875rem 0 0 13.75rem;
    background: #460BFF;
  }
`;

export const TitleSelectionProcessResponsibilities = styled.h3`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

export const DivDescriptionResponsabilities = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47.5rem;
  height: 3.125rem;
  img{
    position: relative;
    width: 1.369rem;
    height: 1.5rem;
    top: -2.5rem;
  }
  input{
    position: relative;
    width: 31.25rem;
    height: 1.125rem;
    left: -8.125rem;
    top: 2.813rem;
    font-size: 1.25rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    border: none;
    border-bottom: 0.063rem solid #000;
  }
  .rounded{
    position: relative;
    left: -6.25rem;
    top: 2.813rem;
    width: 0.938rem;
    height: 0.938rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #000;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export const DivDescriptionResponsabilitiesLast = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: 16.875rem;
  width: 25rem;
  height: 3.125rem;
  label{
    position: relative;
    width: 18.75rem;
    height: 1.125rem;
    top: 2.813rem;
    font-size: 1.25rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }
  .rounded{
    position: relative;
    right: 0.313rem;
    top: 2.813rem;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #000;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export const DivWhatLookingFor = styled.div`
  display: block;
  margin: auto;
  margin-top: 3.125rem;
  width: 52.5rem;
  height: 28.125rem;
  .BlueRectangle5{
    margin: auto;
    width: 6.875rem;
    height: 0.625rem;
    margin: 0.625rem 0 0 18.75rem;
    background: #460BFF;
  }
`;

export const DivWhatLookingForTitle = styled.div`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

export const DivContainerWhatLookingForSquares = styled.div`
  width: 52.5rem;
  height: 23.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.875rem;
  margin-top: 0.625rem;
`;

export const DivWhatLookingForSquaresTitles = styled.div`
  display: flex;
  justify-content: space-around;
  width: 52.5rem;
  height: 1.875rem;
  margin-top: 5rem;
  margin-left: -2.5rem;
  label{
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
  }
`;

export const DivContainerWhatLookingForSimpleSquare = styled.div`
  display: block;
  width: 17.063rem;
  height: 21.188rem;
  margin-left: -1.25rem;
  border: 5px solid #460BFF;
  border-radius: 1.813rem;
  gap: 0.313rem;
  img{
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    margin: -1.25rem 0 0 0.625rem;
    top: 3.125rem;
    left: 0.625rem;
  }
  input{
    width: 10.625rem;
    height: 1.875rem;
    margin: 1.875rem 0 0 1.875rem;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 1.25rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    z-index: 1;
  }
`;

export const FirstLineSimpleSquare = styled.div`
  display: flex;
  width: 100%;
  height: 1.875rem;
`;
export const SecondLineSimpleSquare = styled.div`
  display: flex;
  margin-top: 3.125rem;
  width: 100%;
  height: 1.875rem;
`;
export const ContainerFinalMatch = styled.div`
  width: 52.5rem;
  height: 25rem;
  /* margin: auto; */
  margin-left: 23.75rem;
  /* background: blueviolet; */
  margin-top: 12.5rem;
  #imgMatch{
    position: relative;
    top: 1.25rem;
    left: -3.75rem;
  }
  .DichosoMatch{
    display: flex;
  }
`;

export const FirstLineFinalMatch = styled.h3`
  width: 52.5rem;
  height: 1.875rem;
  margin: auto;
  font-size: 1.563rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: #000;
  
`;

export const SecondLineFinalMatch = styled.h3`
  width: 52.5rem;
  height: 3.125rem,;
  margin: auto;
  margin-top: -6.25rem;
  font-size: 2.813rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

export const SecondLineFinalMatchBis = styled.h3`
  width: 52.5rem;
  height: 3.125rem;
  margin: auto;
  margin-top: 1.875rem;
  margin-left: -7.5rem;
  font-size: 2.813rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

export const SpanImageMatch = styled.img`
  width: 10.063rem;
  height: 4.5rem;
`;

export const ThirdLineFinalMatch = styled.h3`
  width: 52.5rem;
  height: 3.125rem;
  margin: auto;
  font-size: 2.813rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

export const ButtonFinalMatch = styled.button`
  width: 18.688rem;
  height: 4.125rem;
  margin-top: 3.125rem;
  margin-left: 14.375rem;
  background: #460BFF;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.563rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  border-radius: 2.813rem;
  cursor: pointer;
  &:hover{
    background: #8FFF00;
    color: #000;
  }
`;