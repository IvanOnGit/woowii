// import styled from "styled-components";

// export const ContainerWrapper = styled.div`
//   display: flex;
//   width: 100%;
// `;

// export const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   height: 10%;
//   padding: 1rem;
// `;

// export const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center; 
//   height: 2rem; 
//   width: 30%; 
//   margin-top: 1rem;
//   padding: 0rem;
//   margin-left: 35rem;
//   border-radius: 2.813rem;
//   background: transparent;
//   border: 0.063rem solid #000;
//   font-size: 0.75rem;
//   font-family: 'Roboto', sans-serif;
// `;

// export const HeaderItems = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
//   margin-top: 1rem;

//   p {
//     display: flex;
//     margin: 0; 
//   }

//   img {
//     width: 1rem;
//     height: 1rem;
//     margin-right: 0.5rem;
//   }
// `;

// export const ContainerDivisionColumns = styled.div`
//      display: grid;
//      grid-template-columns: 1fr 1fr;
// `;

// export const ContainerColumnSelects = styled.div`
//   width: 20vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   border-right: 0.063rem solid #460BFF;
// `;

// export const ContainerColumnBody = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: block;
//   margin-left: -19.375rem;
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

export const ContainerAllMobile = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 140vh;
    overflow-y: scroll;
    overflow-x: hidden;
    ${mobileLittle}{
        display: flex;
    }
    ${laptop}{
        display: none;
    }
    ${desktop}{
        display: none;
    }
    ${bigdesk}{
        display: none;
    }
`;
export const ContainerUpSearhAndItemsMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: -1rem;
  width: 100vw;
  height: 10vh;
  background: #FFF;
  ${tablet}{
    justify-content: space-around;
  }
`;
export const AvatarToMobile = styled.div`
    display: flex;
    width: 2rem;
    height: 2rem;
    img{
        width: 2rem;
        height: 2rem;
        ${mobileLarge}{
            width: 2.5rem;
            height: 2.5rem;
        }
        ${tablet}{
            width: 3.5rem;
            height: 3.5rem;
        }
    }
    ${tablet}{
        margin-left: -1rem;
    }
`;
export const SearchUpToMobile = styled.div`
    display: flex;
    width: 10rem;
    height: 1rem;
    input{
        width: 10rem;
        height: 1.3rem;
        border-radius: 2.813rem;
        padding-left: 0.25rem;
        font-size: 0.75rem;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        ${mobileLarge}{
            font-size: 0.85rem;
            width: 11rem;
            height: 1.5rem;
        }
        ${tablet}{
            font-size: 0.938rem;
            width: 18rem;
            height: 2rem;
            margin-top: 0.5rem;
        }
    }
    &::placeholder{
        font-size: 0.75rem;
        ${mobileLarge}{
            font-size: 0.85rem;
        }
        ${tablet}{
            font-size: 0.938rem;
        }
    }
    ${tablet}{
        width: 18rem;
        height: 2rem;
    }
`;
export const HeaderItemsToMobile = styled.div`
    display: flex;
    gap: 0.25rem;
    margin-top: 0.5rem;
    img{
        width: 1rem;
        height: 1rem;
        ${mobileLarge}{
            width: 1.2rem;
            height: 1.2rem;
        }
        ${tablet}{
            width: 1.5rem;
            height: 1.5rem;
            
        }
    }
    p{
        font-size: 0.75rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        ${mobileMedium}{
            font-size: 0.875rem;
        }
        ${mobileLarge}{
            font-size: 0.938rem;
        }
        ${mobileLarge}{
            font-size: 1rem;
        }
    }
    #menu{
        ${mobileLarge}{
            width: 1.563rem;
            height: 1.563rem;
        }
        ${tablet}{
            width: 1.688rem;
            height: 1.688rem;
        }
    }
    ${tablet}{
        margin-left: 1rem;
    }
`;
export const PrincipalTitleToMobile= styled.div`
    position: relative;
    top: -2%;
    left: -1%;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #460BFF;
        max-width: 17.5rem;
        ${mobileLarge}{
            font-size: 1.375rem;
            max-width: 19.5rem;
        }
        ${tablet}{
            font-size: 1.675rem;
            min-width: 23.5rem;
        }
    }
    ${mobileLarge}{
        left: -2%;
    }
    ${tablet}{
        top: 1%;
    }
`;
export const ContainerTextBelowPrincipalTitle = styled.div`
    position: relative;
    top: -1%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    height: 15vh;
    ${mobileMedium}{
        left: 2%;
    }
    ${tablet}{
        top: 3%;
        left: 18%;
    }
`;
export const ContainerGhostDiv = styled.div`
    display: flex;
    width: 1vw;
    height: 12vh;
    margin-left: 1rem;
    border-right: 2px solid #460BFF;
    ${tablet}{
        height: 13.5vh;
    }
`;
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width: 99vw;
    height: 15vh;
    margin-left: 1rem;
    p{
        font-size: 0.75rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        max-width: 16.825rem;
        ${mobileLarge}{
            font-size: 0.875rem;
            max-width: 21.5rem;
        }
        ${tablet}{
            font-size: 1rem;
            min-width: 25rem;
        }
    }
`;
export const ContainerImageBlueDegradedBars = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -1%;
    left: -1%;
    height: 11rem;
    ${mobileLarge}{
        content: url("/Images/DegradedBarsToLargeMobile.svg");
        left: -2%;
    }
    ${tablet}{
        content: url("/Images/DegradedBarsToTablet.svg");
        /* left: -2%; */
        top: 4%;
    }
`;
export const ContainerTextBelowDegradedBars = styled.div`
    position: relative;
    display: flex;
    top: 1%;
    left: 12%;
    h2{
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #460BFF;
        max-width: 16.875rem;
        ${mobileMedium}{
            font-size: 1.35rem;
        }
        ${tablet}{
            font-size: 1.65rem;
            min-width: 25rem;
        }
    }
    ${mobileMedium}{
        left: 16%;
    }
    ${tablet}{
        left: 28%;
        top: 6%;
    }
`;
export const ContainerImageAndTextOne = styled.div`
    position: relative;
    display: block;
    width: 14.375rem;
    height: 9rem;
    margin-bottom: 2rem;
    top: 4%;
    left: 12%;
    img{
        width: 4.274rem;
        height: 4.713rem;
        ${mobileLarge}{
            width: 4.574rem;
            height: 5.013rem;
            margin-top: 0.65rem;
        }
        ${tablet}{
            width: 5.074rem;
            height: 5.513rem;
            margin-top: 0.85rem;
        }
    }
    p{
        font-size: 1rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #460BFF;
        max-width: 8.5rem;
        margin:0.5rem 0 0 2rem;
        ${mobileLarge}{
            font-size: 1.3rem;
            min-width: 11rem;
        }
        ${tablet}{
            font-size: 1.6rem;
            min-width: 17rem;
        }
    }
    ${mobileMedium}{
        top: 3%;
        left: 14%;
    }
    ${tablet}{
        top: 7%;
        left: 27%;
    }
`;
export const ContainerImageAndTextTwo = styled(ContainerImageAndTextOne)`
    top: 5%;
    left: 12%;
    p{
        min-width: 9rem;
        margin-left: 2rem;
        ${mobileLarge}{
            font-size: 1.3rem;
            min-width: 11rem;
        }
        ${tablet}{
            font-size: 1.6rem;
            min-width: 17rem;
        }
    }
    ${mobileMedium}{
        top: 3%;
        left: 14%;
    }
    ${tablet}{
        top: 8%;
        left: 27%;
    }
`;
export const ContainerImageAndTextThree = styled(ContainerImageAndTextOne)`
    top: 9%;
    left: 12%;
    p{
        min-width: 9rem;
        margin-left: 2rem;
        ${mobileLarge}{
            font-size: 1.3rem;
            min-width: 11rem;
        }
        ${tablet}{
            font-size: 1.6rem;
            min-width: 17rem;
        }
    }
    ${mobileMedium}{
        left: 14%;
        top: 5%;
    }
    ${mobileLarge}{
        top: 8%;
    }
    ${tablet}{
        top: 11%;
        left: 27%;
    }
`;
export const ContainerImageAndTextUp = styled.div`
    display: flex;
`;
export const ContainerImageAndTextDown = styled.div`
    display: flex;
    p{
        font-size: 0.75rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        min-width: 15rem;
        margin-left: 0.3rem;
        ${mobileLarge}{
            font-size: 0.875rem;
            min-width: 17rem;
        }
        ${tablet}{
            font-size: 0.938rem;
            min-width: 23rem;
        }
    }
`;
export const ContainerButtonStartToMobile = styled.div`
    position: relative;
    top: 5%;
    left: 5%;
    width: 17.563rem;
    height: 2.438rem;
    ${mobileLittle}{
        top: 7%;
    }
    ${mobileMedium}{
        top: 6%;
        left: 10%;
    }
    ${mobileLarge}{
        top: 10%;
        left: 12%;
    }
    ${tablet}{
        top: 13%;
        left: 31%;
    }
`;
export const ButtonStartToMobile = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 17.563rem;
    height: 2.438rem;
    background: #460BFF;
    color: #FFF;
    font-size: 1.125rem;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    border-radius: 2.813rem;
    cursor: pointer;
    ${mobileLarge}{
        font-size: 1.25rem;
        width: 18.563rem;
    }
`;
export const ContainerFooterToMobile = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    top: 12%;
    width: 100vw;
    height: 8vh;
    background: #460BFF;
    
    img{
        margin-top: -3rem;
        width: 4.438rem;
        height: 4.438rem;
        cursor: pointer;
        ${tablet}{
            width: 4.838rem;
            height: 4.838rem; 
        }
    }
    .items{
        cursor: pointer;
        ${tablet}{
            width: 1.875rem;
            height: 1.875rem;
        }
    }
    ${mobileLarge}{
        top: 16%;
        left: 0%;
    }
    ${tablet}{
        top: 20%;
        left: 0%;
    }
`;
//______________________________________________________________________________________________________________

export const ContainerAllUpToMobile = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${mobileLittle}{
        display: none;
    }
    ${mobileMedium}{
        display: none;
    }
    ${mobileLarge}{
        display: none;
    }
    ${tablet}{
        display: none;
    }
    ${laptop}{
        display: grid;
    }
`;

export const ContainerColumnSelects = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 23vw;
    height: 100vh;
    background: #FFF;
    border-right: 0.125rem solid #460BFF;
`;
export const ContainerColumnBody = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
`;
export const ContainerLeftColumnBody = styled.div`
    position: fixed;
    display: block;
    width: 70vw;
    height: 100vh;
`;
export const ContainerRightColumnBody = styled.div`
    position: relative;
    display: block;
    left: 70vw;
    width: 30vw;
    height: 100vh;
`;
export const ContainerUpSearchAndItems = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    height: 20vh;
    background: #FFF;
`;
export const ContainerSearchCompanyHome = styled.div`
    position: fixed;
    display: flex;
    width: 20rem;
    height: 2rem;
    top: 1rem;
    left: 20%;
    ${mobileLittle}{
        display: none;
    }
    ${laptop}{
        top: 1.2rem;
        display: flex;
        left: 30%;
    }
    ${desktop}{
        width: 33rem;
        height: 2rem;
    }
`;
export const SearchCompanyHome = styled.input`
    display: flex;
    width: 11rem;
    height: 1rem;
    border-radius: 2.813rem;
    font-size: 0.813rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    padding-left:  0.5rem;
    &::placeholder{
        font-size: 0.75rem;
        font-weight: 400;
    }
    ${laptop}{
        width: 20rem;
        height: 2rem;
    }
    ${desktop}{
        width: 30rem;
        height: 2rem;
    }
`;
export const ContainerBucksAndItems = styled.div`
    position: fixed;
    display: flex;
    left: 47rem;
    top: 1rem;
    width: 12.375rem;
    height: 1.813rem;
    ${laptop}{
        display: flex;
    }
    ${desktop}{
        left: 70rem;
    }
    ${bigdesk}{
        left: 85rem;
    }
`;
export const HeaderItemsHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-left: -4rem;
  cursor: pointer;
  p {
    display: flex;
    font-size: 1.25rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  }
  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
    margin-top: -0.125rem;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  }
  #items{
    width: 1.688rem;
    height: 1.688rem;
  }
`;
export const ContainerAvatarAnsPublishHome = styled.div`
    position: fixed;
    display: flex;
    width: 3rem;
    height: 3rem;
    left: 15rem;
    top: 8rem;
    ${desktop}{
        left: 23rem;
    }
    ${bigdesk}{
        left: 25rem;
    }
`;
export const AvatarHome = styled.div`
  flex-shrink: 0;
  width: 4rem;
  height: 6rem;
  overflow: hidden;
  margin: -2.5rem 0 0 1rem;
  img {
    margin-top: 1rem;
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }
`;
export const InputContainerHome = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    input {
        margin: -3rem 0 0 2rem;
        padding-left: 1rem;
        width: 40rem;
        height: 7.125rem;
        border: 1px solid #000;
        border-radius: 0.5rem;
        background: #FFF;
        outline: none;
        font-size: 1rem;
        ${desktop}{
            width: 58rem;
        }
        ${bigdesk}{
            width: 63rem;
        }
    }
`;
export const ActionsHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-top: -2.3rem;
  padding-right: 1rem;
  svg {
    cursor: pointer;
    color: #000;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  }
`;
export const PublishButton = styled.button`
  background: #460BFF;
  color: #FFF;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  &:hover {
    background: #8FFF00;
    color: #000;
  }
`;
export const ContainerLogo = styled.div`
  position: fixed;
  display: flex;
  width: 23vw;
  height: 10vh;
  background: #FFF;
  border-bottom: 0.063rem solid #460BFF;
  border-right: 0.125rem solid #460BFF;
`;
export const ImageLogoBlue = styled.img`
  margin: auto;
  width: 12.5rem;
  height: 3.5rem;
`;
export const ContainerLogoCompAndUser = styled.div`
  position: fixed;
  display: flex;
  left: -0.5rem;
  top: 4.5rem;
  ${desktop}{
    left: 1rem;
    top: 6rem;
  }
  p{
    font-size: 1.213rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
    margin-top: 1.875rem;
    ${desktop}{
        font-size: 1.513rem; 
    }
  }
`;
export const AvatarSelects = styled.div`
  height: 5rem;
  margin-left: 1.25rem;
  ${desktop}{
    margin-left: -0.25rem;
  }
  filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  img {
    margin: 1rem 0 0 1rem;
    width: 70%;
    height: 60%;
    ${desktop}{
        height: 70%;
        padding-right: 1rem;
    }
    ${bigdesk}{
        height: 75%;
        height: 65%;
        padding-right: 1.5rem;
    }
  }
`;
export const ContainerFirstThreeSelects = styled.div`
  display: block;
  width: 23vw;
  height: 13rem;
  margin-top: 9.25rem;
  z-index: 1;
  border-bottom: 0.063rem solid #460BFF;
  ${desktop}{
    height: 15rem;
    margin-top: 12rem;
  }
  ${bigdesk}{
    height: 16rem;
    margin-top: 12rem;
  }
  select{
    width: 10.625rem;
    height: 1.5rem;
    margin-left: 2.125rem;
    border: none;
    margin-bottom: 0.313rem;
    ${desktop}{
        width: 14.625rem;
    }
    ${bigdesk}{
        width: 17.625rem;
    }
  }
  label{
    font-size: 0.75rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    width: 100%;
    margin-left: 2.125rem;
    max-width: 37.5rem;
    ${desktop}{
        font-size: 1rem;
    }
    ${bigdesk}{
        font-size: 0.875rem;
        min-width: 37.5rem;
        margin-left: 1.825rem;
    }
  }
`;
export const ContainerSecondThreeSelects = styled.div`
  display: block;
  width: 23vw;
  height: 13rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  z-index: 1;
  border-bottom: 0.063rem solid #460BFF;
  ${desktop}{
    height: 15rem;
  }
  ${bigdesk}{
    height: 15.5rem;
  }
  select{
    width: 10.625rem;
    height: 1.5rem;
    margin-left: 2.125rem;
    border: none;
    margin-bottom: 0.313rem;
    ${desktop}{
        width: 14.625rem;
    }
    ${bigdesk}{
        width: 17.625rem;
    }
  }
  label{
    font-size: 0.75rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    width: 100%;
    margin-left: 2.125rem;
    max-width: 37.5rem;
    ${desktop}{
        font-size: 1rem;
    }
    ${bigdesk}{
        font-size: 0.875rem;
        min-width: 37.5rem;
        margin-left: 1.825rem;
    }
  }
`;
export const ContainerThirdThreeSelects = styled.div`
  display: block;
  width: 23vw;
  height: 10rem;
  margin-top: 1rem;
  z-index: 1;
  border-bottom: 0.063rem solid #460BFF;
  ${bigdesk}{
    height: 12rem;
  }
  select{
    width: 10.625rem;
    height: 1.5rem;
    margin-left: 2.125rem;
    border: none;
    margin-bottom: 0.313rem;
    ${desktop}{
        width: 14.625rem;
    }
    ${bigdesk}{
        width: 17.625rem;
    }
  }
  label{
    font-size: 0.75rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    width: 100%;
    margin-left: 2.125rem;
    max-width: 37.5rem;
    ${desktop}{
        font-size: 1rem;
    }
    ${bigdesk}{
        font-size: 0.875rem;
        min-width: 37.5rem;
        margin-left: 1.825rem;
    }
  }
`;
export const BtnChatColumnSelects = styled.button`
  margin: 1.875rem 0 0 1.375rem;
  width: 11.313rem;
  height: 1.938rem;
  border-radius: 2.813rem;
  background: #460BFF;
  color: #FFF;
  ${desktop}{
    margin: 1.875rem 0 0 3.5rem;
    width: 12.313rem;
    height: 2.138rem;
    font-size: 0.931rem;
  }
  ${bigdesk}{
    margin: 1rem 0 0 4.5rem;
  }
  cursor: pointer;
  z-index: 1;
  &:hover{
    background: #8FFF00;
    color: #000;
  }
`;
export const ContainerMotivationAll = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80vw;
  height: 72vh;
  margin: 9rem 0 0 15rem;
`;
export const ContainerMotivationText = styled.div`
  display: block;
  width: 60vw;
  height: 72vh;
  filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
`;

export const StyledMotivationText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  margin-left: 1rem;
  margin-top: 3.75rem;
  ${desktop}{
    margin-top: 6.75rem;
  }
  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    width: 35rem;
    text-align: left;
    color: #460BFF;
    margin-left: 0rem;
    ${desktop}{
        font-size: 1.6rem;
        width: 45rem;
        margin-left: 5rem;
    }
  }
  p {
    width: 30rem; 
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin: 1.25rem 0 0 -5rem;
    ${desktop}{
        font-size: 1.25rem;
        width: 42rem;
        margin-left: 3rem;
    }
  }
`;
export const ContainerDegradedSquares = styled.div`
  display: block;
  margin: auto;
  width: 50rem;
  height: 25rem;
  margin-top: 3.125rem;
  ${bigdesk}{
    margin-top: 2.5rem;
  }
`;
export const DegradedSquareToLeft = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 1.25rem 0 0 3rem;
  width: 30rem;
  height: 4.813rem;
  border-radius: 0.625rem;
  background: linear-gradient(to left ,rgba(217,217,217,0.3),rgba(32, 32, 179, 0.4));
  ${desktop}{
    width: 45rem;
    margin-left: 6rem;
    height: 6rem;
  }
  ${bigdesk}{
    width: 48rem;
    height: 4.313rem;
  }
  h4{
    padding-top: 1.5rem;
    text-align: center;
    font-size: 0.938rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #000;
    ${desktop}{
        font-size: 1.25rem;
    }
  }
  p{
    text-align: center;
    font-size: 0.75rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #000;
    ${desktop}{
        font-size: 0.875rem;
    }
  }
`;
export const DegradedSquareToRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.25rem 0 0 3rem;
  width: 30rem;
  height: 4.813rem;
  border-radius: 0.625rem;
  background: linear-gradient(to Left ,rgba(32, 32, 179, 0.4),rgba(217,217,217,0.3));
  ${desktop}{
    width: 45rem;
    margin-left: 6rem;
    height: 6rem;
  }
  ${bigdesk}{
    width: 48rem;
    height: 4.313rem;
  }
  h4{
    text-align: center;
    font-size: 0.938rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #000;
    ${desktop}{
        font-size: 1.25rem;
    }
  }
  p{
    text-align: center;
    font-size: 0.75rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #000;
    ${desktop}{
        font-size: 0.875rem;
    }
  }
`;
export const ContainerMotivationImages = styled.div`
  position: relative;
  display: block;
  width: 17.563rem;
  height: 72vh;
  left: -4rem;
  top: 2rem;
  filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  ${desktop}{
    left: 2rem;
    top: 3rem;
  }
`;

export const ContainerMotivationImagesUpBlueText = styled.div`
  width: 20vw;
  height: 5vh;
  margin: auto;
  margin-top: 1.875rem;
  margin-left: 1.25rem;
  p{
    font-size: 0.938rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
    ${desktop}{
        font-size: 1.438rem;
    }
  }
  #first{
    font-size: 0.938rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
    letter-spacing: 0.063rem;
    ${desktop}{
        font-size: 1.438rem;
    }
  }
`;

export const ContainerMotivationImagesNumberOne = styled.div`
  margin-top: 1.25rem;
  display: block;
  width: 20vw;
  height: 18vh;
`;
export const ContainerNumberOneUp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 20vw;
  height: 10vh;
  .textOne{
    display: block;
    margin-left: -1rem;
    p{
      font-size: 0.813rem;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: #460BFF;
      ${desktop}{
        font-size: 1.25rem;
        margin-left: -1.5rem;
        min-width: 10rem;
      }
    }
  }
`;
export const ImageContainerNumberOne = styled.img`
  width: 4.274rem;
  height: 4.713rem;
  margin-left: 0.625rem;
  ${desktop}{
    width: 5.274rem;
    height: 5.713rem;
  }
`;
export const ContainerNumberOneDown = styled.div`
  display: block;
  width: 20vw;
  height: 7vh;
  padding: 0 1.25rem 0 1.25rem;
  h6{
    font-size: 0.75rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    ${desktop}{
        font-size: 1rem; 
    }
  }
`;

export const ContainerNumberTwoUp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 20vw;
  height: 10vh;
  margin-top: 2.5rem;
  .textTwo{
    display: block;
    margin-left: -1rem;
    p{
      font-size: 0.813rem;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: #460BFF;
      ${desktop}{
        font-size: 1.25rem;
        margin-left: -1.5rem;
        min-width: 10rem;
      }
    }
  }
`;
export const ImageContainerNumberTwo = styled.img`
  width: 4.274rem;
  height: 4.713rem;
  margin-left: 0.625rem;
  ${desktop}{
    width: 5.274rem;
    height: 5.713rem;
  }
`;
export const ContainerNumberTwoDown = styled.div`
  display: block;
  width: 20vw;
  height: 7vh;
  padding: 0 1.25rem 0 1.25rem;
  margin-top: 0.125rem;
  h6{
    font-size: 0.75rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    ${desktop}{
        font-size: 1rem; 
    }
  }
`;

export const ContainerNumberThreeUp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 20vw;
  height: 10vh;
  margin-top: 3rem;
  ${desktop}{
    margin-top: 4rem;
  }
  .textTwo{
    display: block;
    margin-left: -1rem;
    p{
      font-size: 0.813rem;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: #460BFF;
      ${desktop}{
        font-size: 1.25rem;
        margin-left: -1.5rem;
        min-width: 10rem;
      }
    }
  }
`;
export const ImageContainerNumberThree = styled.img`
  width: 4.274rem;
  height: 4.713rem;
  margin-left: 0.625rem;
  ${desktop}{
    width: 5.274rem;
    height: 5.713rem;
  }
`;
export const ContainerNumberThreeDown = styled.div`
  display: block;
  width: 20vw;
  height: 7vh;
  padding: 0 1.25rem 0 1.25rem;
  margin-top: 0.125rem;
  h6{
    font-size: 0.75rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    ${desktop}{
        font-size: 1rem; 
    }
  }
`;

export const ContainerNextButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11.313rem;
    height: 1.938rem;
    border-radius: 2.813rem;
    background: #460BFF;
    color: #FFF;
    left: 20rem;
    top: 0.5rem;
    cursor: pointer;
    z-index: 1;
    ${desktop}{
        top: 4rem;
        left: 38rem;
    }
    ${bigdesk}{
        top: -2rem;
        left: 45rem;
    }
    &:hover{
        background: #8FFF00;
        color: #000;
    }
`;