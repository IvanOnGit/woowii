import styled from "styled-components";

// export const MainContainer = styled.div`
//     overflow-y: auto;
//     overflow-x: hidden;
//     height: 100vh;

//     &::-webkit-scrollbar {
//     width: 6px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #f1f1f1;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 3px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: #555;
//   }
// `;

// export const ContainerWrapper = styled.div`
//   display: flex;
//   width: 100%;
// `;

// export const Header = styled.header`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 10%;
//   padding: 1rem;
//   justify-content: flex-end;
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

// export const MenuAside = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 19rem;
//   height: 100vh;
//   background-color: white;
//   border-right: 1px solid black;
//   color: black;
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   font-family: 'Roboto', sans-serif;
//   overflow-y: auto;
//   overflow-x: hidden;

//   /* Estilizar el scrollbar */
//   &::-webkit-scrollbar {
//     width: 6px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #f1f1f1;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 3px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: #555;
//   }

//   span {
//     width: 100%;
//     background-color: #460BFF;
//     color: white;
//     text-align: center;
//     justify-content: center;
//     align-content: center;
//     padding: 0.3rem;
//   }

//   a {
//     text-decoration: none;
//     color: black;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
//   }
// `;

// export const FirstMenuAsideItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   text-align: center;
//   height: 12rem;

//   img {
//     width: 10rem;
//     height: 4rem;
//   }

//   h3 {
//     margin: 0;
//     font-size: 1rem;
//     font-weight: 500;
//   }

//   span {
//     margin-top: 1rem;
//   }
// `;

// export const UserAndImageCombo = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     width: 4rem;
//     height: 4rem;
//     border-radius: 50%;
//   }

//   h3 {
//     font-size: 1.3rem;
//   }
// `;

// export const ThirdMenuAsideItem = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 25%;

//   button {
//     width: 80%;
//     padding: 0.5rem;
//     border: 1px solid black;
//     background-color: transparent;
//     border-radius: 1rem;
//     color: black;
//     cursor: pointer;
//     font-size: 0.8rem;
//   }

//   button:hover {
//     background-color: #f0f0f0;
//   }
// `;

// export const DropdownContainer = styled.div`
//   width: 80%;
//   margin: 1rem auto;
//   display: flex;
//   flex-direction: column;
//   font-weight: bold;
// `;

// export const DropdownButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.8rem;
//   font-size: 1rem;
//   background: transparent;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// export const DropdownList = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: transparent;
//   border-radius: 5px;
//   margin-top: 5px;
//   gap: 1rem;
//   font-weight: initial;
// `;

// export const DropdownItem = styled.div`
//   padding: 0.5rem;
//   cursor: pointer;
//   text-align: center;
//   border: 1px solid #ddd;
//   border-radius: 1rem;

//   &:hover {
//     background: #f0f0f0;
//   }
// `;

// export const SecondDropdownContainer = styled.div`
//   width: 80%;
//   margin: 1rem auto;
//   display: flex;
//   flex-direction: column;
//   font-weight: bold;
// `;

// export const SecondDropdownButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.8rem;
//   font-size: 1rem;
//   background: transparent;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// export const SecondDropdownList = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: transparent;
//   border-radius: 5px;
//   margin-top: 5px;
//   gap: 1rem;
//   font-weight: initial;
// `;

// export const SecondDropdownItem = styled.div`
//   padding: 0.5rem;
//   cursor: pointer;
//   text-align: center;
//   border: 1px solid #ddd;
//   border-radius: 1rem;

//   input {
//     border: none;
//   }

//   &:hover {
//     background: #f0f0f0;
//   }
// `;

// export const HelpButton = styled.button`
//     background-color: transparent;
//     width: 50%;
//     margin-left: 5rem;
//     margin-bottom: 1rem;
//     border-radius: 1rem;
//     border-color: #385500;
//     color: #385500;
// `;

// export const StoryExplanation = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   margin-left: 25rem;
//   font-family: 'Roboto', sans-serif;

//   h2 {
//     font-size: 2rem;
//     color: #460BFF;
//     margin: 0;
//   }
// `;

// export const StoryForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   margin-left: 25rem;
//   font-family: 'Roboto', sans-serif;

//   h3 {
//     color: #460BFF;
//   }

//   p {
//     margin-bottom: 0.5rem;
//   }

//   input:last-of-type, textarea {
//   height: 9rem;
//   width: 35%;
//   resize: none;
//   white-space: pre-line;
//   padding: 0.5rem;
//   border-radius: 1rem;
//   border: 1px solid black;
//   margin-top: 1rem;
// }

// input:first-of-type {
//   width: 35%;
//   padding: 0;
//   height: 1rem;
//   padding: 0.5rem;
//   margin-top: 0;
// }
// `;

// export const AboutYou = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   margin-top: -30rem;
//   margin-left: 89rem;
//   gap: 0.2rem;

//   button {
//     width: 8rem;
//     padding: 1rem;
//     border-radius: 1rem;
//     background-color: transparent;
//     cursor: pointer;
//   }
// `;

// export const Container = styled.div`
//   font-family: Arial, sans-serif;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-left: 25rem;
//   margin-top: 2rem;
// `;

// export const OptionLabel = styled.label`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;

// export const Checkbox = styled.input`
//   margin-right: 8px;
//   cursor: pointer;
// `;

// export const AboutHardset = styled.div`
//   width: 100%;
//   margin-left: 25rem;
//   margin-top: 2rem;
//   font-family: 'Roboto', sans-serif;
// `;

// export const TalkWithWoody = styled.p`
// width: 100%;
// display: flex;
// margin-left: 85rem;
// color: #460BFF;
// `;

// export const ContinueButton = styled.button`
// width: 13rem;
// margin-left: 39rem;
// margin-bottom: 2rem;
// background-color: #460BFF;
// border-radius: 1rem;
// color: white;
// border: none;
// padding: 0.6rem;
// cursor: pointer;
// `;

// export const SelectContainer = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   flex-wrap: wrap;
//   margin-top: 1rem;
//   width: 40%;
// `;

// export const SelectOption = styled.div`
//   background-color: #460BFF;
//   border-radius: 0.5rem;
//   color: white;
//   font-size: 1rem;
//   padding: 5px 10px;
//   cursor: pointer;
// `;

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
  height: 100vh;
  overflow: hidden;
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
  ${mobileMedium}{
    left: 1rem;
  }
  ${mobileLarge}{
    left: 1rem;
  }
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
    ${mobileMedium}{
      margin-left: -2rem;
    }
    ${mobileLarge}{
      margin-left: -1rem;
    }
    ${tablet}{
      margin-left: -1rem;
    }
    
`;
export const SearchUpToMobile = styled.div`
    display: flex;
    width: 10rem;
    height: 1rem;
    ${mobileLarge}{
      margin-left: 2rem;
    }
    ${tablet}{
      width: 18rem;
      height: 2rem;
    }
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
    
`;
export const HeaderItemsToMobile = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
  cursor: pointer;
  ${tablet}{
    margin-right: 2rem;
  }
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
`;
export const ContainerADNHistoryTitle = styled.div`
  position: relative;
  display: flex;
  width: 18.625rem;
  height: 1.313rem;
  top: -1.5rem;
  left: 2rem;
  ${mobileMedium}{
    left: 3rem;
  }
  ${mobileLarge}{
    left: 5rem;
  }
  ${tablet}{
    left: 15rem;
  }
`;
export const ADNHistoryTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 1.375rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #460BFF;
  ${mobileLarge}{
    font-size: 1.575rem;
  }
`;
export const ContainerParagrafBelowTitle = styled.div`
  position: relative;
  display: flex;
  width: 18.438rem;
  height: 2.188rem;
  ${mobileMedium}{
    left: 1.7rem;
  }
  ${tablet}{
    left: 8.7rem;
    top: -0.5rem;
  }
`;
export const ParagrafBelowTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  margin: -0.75rem 0 0 2rem;
  min-width: 15.625rem;
  ${mobileMedium}{
    font-size: 0.8rem;
  }
  ${mobileLarge}{
    font-size: 0.931rem;
    min-width: 20.625rem;
  }
  ${tablet}{
    font-size: 1rem;
    min-width: 26.625rem;
  }
`;
export const ContainerSubtitleBelowParagraf = styled.div`
  position: relative;
  display: flex;
  width: 18.438rem;
  height: 1.125rem;
  ${mobileMedium}{
    left: 1rem;
  }
  ${mobileLarge}{
    top: 0.5rem;
    left: 1rem;
  }
  ${tablet}{
    top: -1.2rem;
    left: 8.5rem;
  }
`;
export const SubtitleBelowParagraf = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin: 2rem 0 0 2rem;
  color: #460BFF;
  min-width: 15.625rem;
  ${mobileMedium}{
    margin-top: 2.5rem;
    font-size: 0.8rem;
  }
  ${mobileLarge}{
    font-size: 1rem;
    min-width: 20.625rem;
  }
  ${tablet}{
    font-size: 1.25rem;
    min-width: 26.625rem;
  }
`; 
export const ContainerInputBelowSubtitle = styled.div`
  position: relative;
  display: flex;
  width: 18.375rem;
  height: 0.938rem;
  left: 2rem;
  top: 3rem;
  ${mobileMedium}{
    left: 3rem;
  }
  ${mobileLarge}{
    top: 3.3rem;
    left: 3rem;
    width: 20.375rem;
  }
  ${tablet}{
    top: 1.7rem;
    left: 10.5rem;
    width: 26.305rem;
  }
  input{
    width: 15.375rem;
    height: 0.938rem;
    border: none;
    border-bottom: 1px solid #000;
    ${mobileLarge}{
      width: 20.375rem;
    }
    ${tablet}{
      width: 26.305rem;
    }
    &::placeholder{
      font-size: 0.625rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      ${mobileMedium}{
        font-size: 0.75rem;
      }
      ${mobileLarge}{
        font-size: 0.931rem;
      }
      ${tablet}{
        font-size: 1rem;
      }
    }
  }
`;
export const ContainerTextsWithStar = styled.div`
  display: block;
  width: 17.75rem;
  height: 6.875rem;
  margin: 3.5rem 0 0 2rem;
  ${mobileMedium}{
    margin-left: 3rem;
    margin-top: 2.5rem;
  }
  ${mobileLarge}{
    margin-top: 2.2rem;
  }
  ${tablet}{
    margin-left: 11.5rem;
    margin-top: 1rem;
  }
`;
export const TextWithStar = styled.div`
  display: flex;
  width: 18.75rem;
  height: 0.75rem;
  margin-top: 1rem;
  ${mobileLarge}{
    margin-top: 1.5rem;
    .star{
     margin-left: -0.4rem;
    }
  }
  ${tablet}{
    .star{
     margin-left: -0.5rem;
    }
  }
  .last{
    margin-top: 0.75rem;
    ${mobileMedium}{
      margin-top: 1.7rem;
    }
    ${mobileLarge}{
      margin-top: 2rem;
    }
    ${tablet}{
      margin-top: 2.2rem;
    }
  }
  p{
    margin-left: 0.3rem;
    max-width: 15.375rem;
    font-size: 0.65rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    ${mobileMedium}{
      font-size: 0.75rem;
    }
    ${mobileLarge}{
      font-size: 0.931rem;
      min-width: 18.075rem;
    }
    ${tablet}{
      font-size: 0.931rem;
      min-width: 18.075rem;
    }
  }
`;
export const ContainerVoiceToText = styled.div`
  position: relative;
  display: flex;
  width: 18.438rem;
  height: 5.063rem;
  margin: 2rem 0 0 0.75rem;
  ${mobileMedium}{
    width: 20.438rem;
    height: 7.063rem;
    left: 0.75rem;
  }
  ${mobileLarge}{
    width: 24.438rem;
    height: 9.063rem;
    left: 2rem;
    top: 2rem;
  }
  ${tablet}{
    width: 28.438rem;
    height: 7.063rem;
    left: 10rem;
    top: 2rem;
  }
  ${laptop}{
    width: 35.313rem;
    height: 16.125rem;
    left: -62rem;
    top: 12rem;
  }
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const VoiceToTextArea = styled.textarea`
  width: 18.438rem;
  height: 5.063rem;
  border: 1px solid #460BFF;
  border-radius: 0.625rem;
  text-transform: none;
  padding: 0.2rem;
  ${mobileMedium}{
    width: 20.438rem;
    height: 7.063rem;
  }
  ${tablet}{
    width: 26.438rem;
    height: 8.063rem;
  }
  ${laptop}{
    width: 35.313rem;
    height: 16.125rem;
    padding: 0.5rem;
  }
  &::placeholder{
    font-size: 0.5rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
    ${mobileMedium}{
      font-size: 0.75rem;
    }
    ${mobileLarge}{
      font-size: 0.875rem;
    }
    ${laptop}{
      font-size: 0.931rem;
    }
  }
`;
export const ContainerTextAndMicro = styled.div`
  position: relative;
  display: flex;
  left: 11rem;
  top: -1rem;
  gap: 0.3rem;
  ${mobileMedium}{
    left: 11.7rem;
    top: -1.5rem;
  }
  ${mobileLarge}{
    left: 10.3rem;
    top: -1rem;
  }
  ${tablet}{
    left: 23.3rem;
    top: 1rem;
  }
  ${laptop}{
    left: -43.3rem;
    top: 9rem;
  }
  ${desktop}{
    left: -67.3rem;
    top: 9rem;
  }
  ${bigdesk}{
    left: -82rem;
  }
`;
export const TextAndMicro = styled.p`
  font-size: 0.375rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #460BFF;
  ${mobileMedium}{
    font-size: 0.5rem;
  }
  ${mobileLarge}{
    font-size: 0.65rem;
  }
  ${laptop}{
    font-size: 0.875rem;
  }
`;
export const ContainerMicro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -0.3rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 100%;
  border: 2px solid #460BFF;
  cursor: pointer;
  ${mobileMedium}{
    width: 0.931rem;
    height: 0.931rem;
  }
  ${mobileMedium}{
    width: 1rem;
    height: 1rem;
  }
  ${laptop}{
    width: 1.3rem;
    height: 1.3rem;
    #micro{
      width: 0.981rem;
      height: 0.981rem;
    }
  }
`;
export const ContainerChecks = styled.div`
  position: relative;
  display: block;
  width: 18.75rem;
  height: 3.5rem;
  left: 1.3rem;
  ${laptop}{
    width: 38.813rem;
  }
  #first{
    margin-top: -1rem;
    ${laptop}{
      margin-top: 1rem;
    }
  }
  ${mobileMedium}{
    left: 3rem;
  }
  ${tablet}{
    left: 11rem;
    top: 2.4rem;
  }
  ${laptop}{
    left: -61rem;
    top: 12.4rem;
  }
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const CheckAndText = styled.div`
  display: flex;
  width: 18.75rem;
  height: 0.511rem;
  margin-bottom: 1.8rem;
  p{
    font-size: 0.931rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    max-width: 17.5rem;
    ${mobileLarge}{
      font-size: 1rem;
      min-width: 20.5rem;
    }
    ${laptop}{
      font-size: 1rem;
      min-width: 38.813rem;
    }
    input{
      width: 0.563rem;
      height: 0.563rem;
      color: #460BFF;
      ${mobileMedium}{
        width: 0.663rem;
        height: 0.663rem;
      }
    }
  }
`;
export const ContainerThreeLargeSelect = styled.div`
  position: fixed;
  display: block;
  width: 18.438rem;
  height: 6.25rem;
  top: 38rem;
  left: 1rem;
  ${mobileMedium}{
    top: 39rem;
    left: 1.5rem;
  }
  ${mobileLarge}{
    top: 39.7rem;
    left: 2.7rem;
  }
  ${tablet}{
    top: 38.7rem;
    left: 10.5rem;
  }
`;
export const LargeSelect = styled.select`
  width: 18.438rem;
  height: 1.563rem;
  margin-bottom: 0.5rem;
  border: 2px solid #460BFF;
  border-radius: 2.813rem;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 0.625rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  padding-left: 1rem;
  color: #460BFF;
  cursor: pointer;
  ${mobileMedium}{
    width: 20.438rem;
    height: 2.063rem;
    font-size: 0.75rem;
  }
  ${tablet}{
    width: 26.938rem;
    height: 2.063rem;
    font-size: 0.875rem;
  }
`;
export const ContainerFooterToMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 30%;
  width: 100vw;
  height: 8vh;
  background: #460BFF;
  ${mobileMedium}{
    top: 28%;
  }
  ${mobileLarge}{
    top: 26%;
  }
  ${tablet}{
    top: 31%;
  }
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
`;
//--------------------------------------UP TO MOBILE AND TABLET---------------------------------------------------------

export const ContainerAllUpToMobile = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 0;
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
    display: flex;
  }
`;
export const ContainerColumnLogoAndSelects = styled.div`
  position: relative;
  display: block;
  width: 23vw;
  height: 380vh;
  background: #460BFF;
`; 
export const ContainerLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 23vw;
  height: 6.25rem;
  border-bottom: 1px solid #FFF;
  margin-bottom: 2rem;
  img{
    width: 13.438rem;
    height: 3.75rem;
  }
`;
export const ContainerFirstsSelects = styled.div`
  position: relative;
  width: 23vw;
  height: 100vh;
  border-bottom: 1px solid #FFF;
  select{
    width: 10.625rem;
    height: 1.5rem;
    margin-left: 2.125rem;
    margin-bottom: 2rem;
    border: none;
    background: #460BFF;
    color: #FFF;
    ${desktop}{
      width: 15.625rem;
      font-size: 1rem;
    }
    ${bigdesk}{
        width: 17.625rem;
    }
  }
`;
export const ContainerSecondSelects = styled.div`
  position: relative;
  width: 23vw;
  height: 100vh;
  #settings{
    margin-top: 2rem;
  }
  select{
    width: 10.625rem;
    height: 1.5rem;
    margin-left: 2.125rem;
    margin-bottom: 2rem;
    border: none;
    background: #460BFF;
    color: #FFF;
    ${desktop}{
      width: 15.625rem;
      font-size: 1rem;
    }
    ${bigdesk}{
        width: 17.625rem;
    } 
  }
`;
export const WoodyChat = styled.img`
  position: relative;
  display: flex;
  width: 10.688rem;
  height: 3.813rem;
  margin: -78vh 0 0 2rem;
  cursor: pointer;
  ${desktop}{
    width: 14.688rem;
    margin-left: 3rem;
  }
`;
export const ContainerColumnBody = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 180vh;
`;
export const ContainerUpItems = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  background: #FFF;
`;
export const HeaderItemsLeft = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  margin-left: 3rem;
  img{
    width: 1.25rem;
    height: 1.25rem;
  }
  p{
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
  }
`;
export const HeaderItemsRight = styled.div`
  position: relative;
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  margin-right: 18rem;
  cursor: pointer;
  img{
    width: 1.55rem;
    height: 1.55rem;
  }
  .itens{
    width: 1.625rem;
    height: 1.625rem;
    stroke: #FFF;
  }
  ${desktop}{
    margin-right: 24rem;
  }
  ${bigdesk}{
    margin-right: 27rem;
  }
`;
export const ContainerBodyLeft= styled.div`
  position: relative;
  display: block;
  width: 67vw;
  height: 170vh;
`;
export const ContainerBodyRight= styled.div`
  position: relative;
  display: block;
  width: 10vw;
  height: 170vh;
`;
export const ContainerPrincipalText = styled.div`
  position: relative;
  display: flex;
  width: 35.438rem;
  height: 2.563rem;
  left: -61rem;
  top: 10rem;
  h2{
    font-size: 1.75rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
  }
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerTextBelowPrincipal = styled.div`
  position: relative;
  display: flex;
  width: 35.438rem;
  height: 4.313rem;
  left: -61rem;
  top: 10rem;
  p{
    font-size: 1.125rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerEyelashesRight = styled.div`
  position: relative;
  display: block;
  width: 9.282rem;
  height: 29.69rem;
  top: -80rem;
  left: 40rem;
  ${desktop}{
    left: 60rem;
  }
  ${bigdesk}{
    top: -90rem;
    left: 70.7rem;
  }
`;
export const ContainerRecognitionText = styled.div`
  position: relative;
  display: flex;
  width: 13.313rem;
  height: 1.358rem;
  top: 20rem;
  left: -61rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #460BFF;
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerMonetaryIncentives = styled.div`
  position: relative;
  display: flex;
  width: 18.313rem;
  height: 1.358rem;
  top: 22rem;
  left: -61rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #460BFF;
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerBenefits = styled.div`
  position: relative;
  display: flex;
  width: 13.313rem;
  height: 1.358rem;
  top: 24rem;
  left: -61rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #460BFF;
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerBlueLabels = styled.div`
  position: relative;
  display: block;
  width: 39.75rem;
  height: 7.938rem;
  top: 21rem;
  left: -61rem;
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerBlueLabelsTwo = styled.div`
  position: relative;
  display: block;
  width: 39.75rem;
  height: 7.938rem;
  top: 23rem;
  left: -61rem;
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerBlueLabelsThree = styled.div`
  position: relative;
  display: block;
  width: 39.75rem;
  height: 7.938rem;
  top: 25rem;
  left: -61rem;
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerSingleRowLabels = styled.div`
  display: flex;
`;
export const SingleLabelBlue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13.125rem;
  height: 2.313rem;
  font-size: 0.931rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  background: #460BFF;
  color: #FFF;
  border-radius: 2.813rem;
  cursor: pointer;
  margin-right:  0.3rem;
  margin-bottom: 0.3rem;
`;
export const SingleLabelGray = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13.125rem;
  height: 2.313rem;
  font-size: 0.931rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  background: #D9D9D9;
  color: #000;
  border-radius: 2.813rem;
  cursor: pointer;
  margin-right:  0.3rem;
  margin-bottom: 0.3rem;
`;
export const EyelashesSingle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.25rem;
  height: 3.19rem;
  border-radius: 2.813rem 0 0 2.813rem;
  background: #FFF;
  color: #000;
  border: 2px solid #460BFF;
  font-size: 0.931rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  margin-bottom: 0.625rem;
  cursor: pointer;
  &:hover{
    background: #460BFF;
    color: #FFF;
  }
`;
export const ContainerTellYourStoryParagraphGroup = styled.div`
  position: relative;
  display: block;
  width: 35.438rem;
  height: 6.25rem;
  top: 11rem;
  left: -61rem;
  p{
    margin-bottom: 1rem;
  }
  ${desktop}{
    left: -85rem;
  }
  ${bigdesk}{
    left: -100rem;
  }
`;
export const ContainerButtonNext = styled.div`
  position: relative;
  display: flex;
  width: 14.938rem;
  height: 1.931rem;
  top: 30rem;
  left: -48.5rem;
  ${desktop}{
    left: -72.5rem;
  }
  ${bigdesk}{
    left: -87.5rem;
  }
`;
export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.938rem;
  height: 1.931rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  border-radius: 2.813rem;
  background:#460BFF;
  color: #FFF;
  cursor: pointer;
  &:hover{
    background:#BFFF00;
    color: #000;
  }
`;