// import { Link } from "react-router-dom";
// import styled from "styled-components";

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
//   z-index: 999;

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
//     background-color: #C0C0C0;
//     color: white;
//     text-align: center;
//     justify-content: center;
//     align-content: center;
//     padding: 0.02rem;
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
//     padding: 0.5rem;
// `;

// export const Published = styled.div`
//      width: 70%;
//      margin: 1rem auto;
//      display: flex;
//      flex-direction: column;
//      font-weight: bold;
//      gap: 1rem;

//      h3 {
//         margin: 0;
//      }
     
//      p {
//         margin: 0;
//      }
// `;

// export const SearchBar = styled.div`
//     display: flex;
//     width: 100%;
//     margin-left: 45rem;
//     position: absolute;
//     margin-top: 2rem;
    
//     input {
//       border-radius: 1rem;
//       border: 1px solid black;
//       padding: 0.5rem;
//       width: 20rem;
//       text-align: center;
//     }
// `;

// export const MainTitleAndSubtitle = styled.div`
//     display: flex;
//     flex-direction: column;
//     font-family: 'Roboto', sans-serif;
//     width: 100%;
//     margin-top: 1rem;
//     margin-left: 25rem;
//     gap: 1rem;

//     h1 {
//       font-size: 3rem;
//       margin: 0;
//       background: linear-gradient(90deg, #6ABF4B, #37A139);
//       background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }

//     p {
//       font-size: 1.3rem;
//       margin: 0;
//     }
// `;

// export const GreenCentralContainer = styled.div`
//     display: flex;
//     margin-left: 25rem;
//     margin-top: 2rem;
//     gap: 5rem;
//     font-family: 'Roboto', sans-serif;
//     background-color: #B4EC51;
//     border: none;
//     border-radius: 1rem;
//     justify-content: center;
//     align-items: center;
//     text-align: left;
//     width: 40%;

//     h2 {
//       font-size: 2rem;
//       line-height: 2rem;
//     }

//     h3 {
//       margin: 0;
//     }
// `;

// export const LastParragraph = styled.div`
//   display: flex;
//   margin-left: 25rem;
//   margin-top: 1rem;
//   font-family: 'Roboto', sans-serif;
//   font-size: 1.2rem;

//   p {
//     font-weight: 500;
//   }
// `;

// export const LastThreeItems = styled.div`
//   display: flex;
//   margin-left: 25rem;
//   font-family: 'Roboto', sans-serif;
//   gap: 2rem;
// `;

// export const LastThreeGreenImages = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 1.5rem;
//   gap: 2.3rem;
// `;

// export const LastThreeTexts = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 1.2rem;
//   gap: 0.6rem;

//   h2 {
//     margin: 0;
//   }

//   p {
//     margin: 0;
//   }
// `;

// export const GreenPeople = styled.div``;

// export const JobsContainer = styled.div`
//   position: fixed;
//   top: 10%;
//   right: 0;
//   width: 20rem;
//   height: calc(100vh - 10%);
//   background-color: transparent;
//   border-left: 1px solid #ccc;
//   padding: 1rem;
//   font-family: 'Roboto', sans-serif;
//   overflow-y: auto;

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

//   h2 {
//     font-size: 1.5rem;
//     margin: 0;
//     color: #75B300;
//   }

//   p {
//     margin: 0;
//     margin-bottom: 0.5rem;
//   }

//   span {
//     width: 100%;
//     background-color: grey;
//     padding: 0.05rem;
//     position: absolute;
//   }

//   hr {
//     opacity: 0;
//   }
// `;

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
// `;

// export const StyledNotification = styled.span`
//   position: absolute;
//   top: -8px;
//   right: -8px;
//   background-color: #ff4757;
//   color: white;
//   font-size: 12px;
//   min-width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: bold;
// `;

// // Estilo para el contenedor del modal de notificaciones
// export const NotificationContainer = styled.div`
//   position: fixed;
//   top: 80px;
//   right: 20px;
//   width: 350px;
//   background-color: white;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   border-radius: 8px;
//   padding: 16px;
//   z-index: 1000;
//   font-family: 'Roboto', sans-serif;

  
//   h3 {
//     margin-top: 0;
//     color: #333;
//     border-bottom: 1px solid #eee;
//     padding-bottom: 8px;
//   }

//   p {
//     margin: 0;
//   }
  
//   ul {
//     list-style-type: none;
//     padding: 0;
//     margin: 0;
//     max-height: 300px;
//     overflow-y: auto;
//   }
  
//   li {
//     padding: 8px 0;
//     border-bottom: 1px solid #f0f0f0;
    
//     &:last-child {
//       border-bottom: none;
//     }
//   }
// `;

// // Estilo para el botón de cerrar notificaciones
// export const NotificationButton = styled.button`
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   padding: 8px 16px;
//   border-radius: 4px;
//   cursor: pointer;
//   font-weight: bold;
//   width: 100%;
//   margin-top: 10px;
  
//   &:hover {
//     background-color: #45a049;
//   }
// `;
import { Link } from "react-router-dom";
import styled from "styled-components";

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`


export const ContainerAllMobile = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  ${mobile} {
    display: block;
  }
  ${desktop} {
    display: none;
  }
  a:-webkit-any-link {
    text-decoration: none;
    cursor: pointer;
  }
`;
export const HeaderMobile = styled.header`
  display: flex;
  width: 100%;
  height: 10%;
  padding: 1rem;
  margin: 1rem 0 0 4rem;
`;
export const AvatarToMobile = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
  margin: -0.5rem 0 0 -2rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const SearchUpToMobile = styled.div`
  display: flex;
  width: 4rem;
  height: 0.6rem;
  margin-left: 0.5rem;
  input {
    width: 8rem;
    height: 1rem;
    border: 0.063rem solid #000;
    border-radius: 2.813rem;
    padding-left: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    margin: -0.2rem 0 0 0.5rem;
  }
  &::placeholder {
    font-size: 0.75rem;
  }
`;

export const HeaderItemsMobile = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-left: 7rem;
  cursor: pointer;
  img {
    width: 0.7rem;
    height: 0.7rem;
    
  }
  p {
    font-size: 0.875rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    margin-top: 0rem;
  }
  #menu {
    ${mobile} {
      margin-top: 0rem;
    }
  }
`;
export const InputContainerToMobile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  input {
    margin: -3.5rem 0 0 3rem;
    padding-left: 0.2rem;
    width: 17.2rem;
    height: 4.125rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    background: #fff;
    outline: none;
    font-size: 0.475rem;
  }
`;
export const ActionsToMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.2rem;
  margin: -1.2rem 4.5rem 0 0;
  svg {
    cursor: pointer;
    color: #000;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  }
`;
export const PublishButton = styled.button`
  background: #460bff;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 0.1rem 0.2rem;
  cursor: pointer;
  font-size: 0.5rem;
  font-weight: bold;
  filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  &:hover {
    background: #8fff00;
    color: #000;
  }
`;
export const ContainerTitleGreenUpSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.625rem;
  margin: 1rem 0 0 4rem;
`;
export const TitleGreenUpSlider = styled.h2`
  width: 15.625rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #75B300;
`;
export const ContainerTextBelowUpSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.6rem;
`;
export const TextBelowUpSlider = styled.p`
  max-width: 15.625rem;
  margin: 0.3rem 0 -0.5rem -2rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;
export const ContainerTextBelowSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextBelowSlider = styled.h2`
  max-width: 15.625rem;
  margin: 1rem 0 0 -1.2rem;
  font-size: 0.938rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;
export const ContainerImageGreenSquareWithText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.688rem;
  height: 15.688rem;
`;
export const ImageGrenSquareWithText = styled.img`
  margin: 1rem 0 0 7rem;
  width: 15.688rem;
  height: 15.688rem;
`;
export const ContainerTextBelowGreenSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextBelowGreenSquare = styled(TextBelowSlider)`
`;
export const ContainerThreeLittleGreenSquare = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
export const ContainerSquareAndText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15.688rem;
  height: 2rem;
  margin: 1rem 0 0 2rem;
`;
export const ContainerLittleGreenSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;
export const LittleGreenSquare = styled.img`
  width: 2rem;
  height: 2rem;
`;
export const ContainerTextBesideSquare = styled(ContainerThreeLittleGreenSquare)`
  #one, #two{
    margin-right: 3rem;
  }
`;
export const TextUpBesideSquare = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-top: 1rem;
`;
export const TextDownBesideSquare = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  width: 16.688rem ;
  margin-top: -1rem;
`;
export const ContainerButtonNext = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0 -3.5rem;
`;
export const ButtonNext = styled.button`
  padding: 0.5rem 4.3rem;
  background: #75B300;
  color: #FFF;
  font-size: 1rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  border: none;
  border-radius: 2.813rem;
  cursor: pointer;
  margin: 2rem 0 0 2rem;
`;
export const ContainerFooterToMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 5rem;
  width: 100%;
  height: 8vh;
  background: #75b300;
  img {
    margin-top: -3rem;
    width: 4.438rem;
    height: 4.438rem;
    cursor: pointer;
  }
  .items {
    cursor: pointer;
  }
`;
// ----------------------------------Up to mobile------------------------------------------

export const MainContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  z-index: -1;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ${mobile} {
    display: none;
  }
  ${desktop} {
    display: flex;
    margin-left: 8rem;
  }
`;

export const ContainerBucksAndItems = styled.div`
  position: fixed;
  display: flex;
  left: 19rem;
  top: 0;
  width: 78rem;
  height: 3rem;
  background: #FFF;
  z-index: 1;
`;
export const HeaderWiibucksImages = styled.div`
  display: flex;
  margin: 1rem 0 0 25rem;
  background: #FFF;
  z-index: 1;
  p {
    margin-left: -8rem;
    display: flex;
    font-size: 1.25rem;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  }
  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
    margin-top: -0.125rem;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));

  }
`;
export const HeaderItemsHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-left: 30rem;
  background: #FFF;
  z-index: 1;
  cursor: pointer;
  img {
    width: 1.85rem;
    height: 1.85rem;
    margin-right: 0.5rem;
    margin-top: -0.125rem;
    background: #6fc006;
    border-radius: 100%;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  }
  #items {
    width: 1.688rem;
    height: 1.688rem;
  }
`;

export const ContainerBelowMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const ContainerBelowMainLeft = styled.div`
  position: relative;
  left: 17rem;
  top: 12rem;
  display: block;
  width: 54rem;
  height: 100vh;
  a:-webkit-any-link {
    text-decoration: none;
    cursor: pointer;
  }
`;
export const ContainerBelowMainRight = styled.div`
  position: relative;
  left: 17rem;
  top: 12rem;
  display: block;
  width: 25rem;
  height: 150vh;
  border-left: 0.063rem solid #000;
  overflow-y: scroll;
`;
export const ContainerUserImageAndInput = styled.div`
  display: flex;
`;
export const ContainerImage = styled.div`
  position: relative;
  top: -5.5rem;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 3rem;
    height: 3rem;
    margin-right: 2rem;
    border-radius: 2.813rem;
    background: #6fc006;
  }
`;
export const InputContainerUpToMobile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  input {
    margin-top: -7rem;
    padding-left: 0.2rem;
    width: 45rem;
    height: 7rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    background: #fff;
    outline: none;
    font-size: 0.75rem;
    &::placeholder{
     font-size: 1.25rem;
    }
  }
`;
export const ActionsUpToMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.2rem;
  margin: -2.2rem 4.3rem 0 0 ;
  .item{
    width: 1.5rem;
    height: 1.5rem;  
  }
  svg {
    cursor: pointer;
    color: #000;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  }

`;
export const PublishButtonUpToMobile = styled.button`
  background: #460bff;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: bold;
  filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  &:hover {
    background: #8fff00;
    color: #000;
  }
`;
export const ContainerFirstTextGreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  margin: -1rem 0 0 0.5rem;
`;
export const FirstTextGreen = styled.h2`
  min-width: 25rem;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #6fc006;
`;
export const ContainerSubtitleFirstText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  margin-left: 2.5rem;
`;
export const SubtitleFirstText = styled.p`
  min-width: 50rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;
export const ContainerGreenBannerLittle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48rem;
  height: 24.063rem;
  margin-left: 2rem;
`;
export const GreenBannerLittle = styled.img`
  width: 48rem;
  height: 24.063rem;
`; 
export const ContainerSubtitleBelowBanner = styled(ContainerSubtitleFirstText)`
`;
export const SubtitleBelowBanner = styled(SubtitleFirstText)`
`;
export const ContainerBelowBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -2rem;
`;
export const ContainerThreeLittleGreenSquareUpMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;
export const ContainerSquareAndTextUpMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25.688rem;
  height: 3rem;
  margin: 2rem 0 0 0.5rem;
`;
export const ContainerLittleGreenSquareUpMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
`;
export const LittleGreenSquareUpMobile = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const ContainerTextBesideSquareUpMobile = styled(ContainerThreeLittleGreenSquare)`
  #one, #two{
    margin-right: 3rem;
  }
`;
export const TextUpBesideSquareUpMobile = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-top: 1rem;
`;
export const TextDownBesideSquareUpMobile = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  width: 25rem ;
  margin-top: -1rem;
`;
export const ContainerImageMonigotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25.808rem;
  height: 26.188;
`;
export const ImageMonigotes = styled.img`
  width: 25.808rem;
  height: 26.188;
`;
export const ContainerButtonNextUpMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0 -3rem;
`;
export const ButtonNextUpMobile = styled.button`
  padding: 0.5rem 4.3rem;
  background: #75B300;
  color: #FFF;
  font-size: 1rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  border: none;
  border-radius: 2.813rem;
  cursor: pointer;
`;
export const MenuAside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 19rem;
  height: 200vh;
  background: #477B05;
  border-right: 1px solid black;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: "Roboto", sans-serif;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  span {
    width: 100%;
    background-color: #c0c0c0;
    color: white;
    text-align: center;
    justify-content: center;
    align-content: center;
    padding: 0.02rem;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  ${mobile} {
    display: none;
  }
  ${desktop} {
    display: flex;
  }
`;

export const FirstMenuAsideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  height: 12rem;
  border-bottom: 0.063rem solid #FFF;
  img {
    width: 12rem;
    height: 4rem;
    margin-top: 0.5rem;
  }
  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
  span {
    margin-top: 1rem;
  }
`;

export const UserAndImageCombo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: -1rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  h3 {
    font-size: 1.3rem;
  }
`;
export const DropdownContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
export const DropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 5px;
  margin-top: 5px;
  gap: 1rem;
  font-weight: initial;
`;
export const DropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;
  &:hover {
    background: #f0f0f0;
  }
`;
export const SecondDropdownContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
export const SecondDropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const SecondDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 5px;
  margin-top: 5px;
  gap: 1rem;
  font-weight: initial;
`;
export const SecondDropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;
  input {
    border: none;
  }
  &:hover {
    background: #f0f0f0;
  }
`;
export const ContainerChatButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 1.875rem 0 0 0.5rem;
    width: 13.313rem;
    height: 3.938rem;
    cursor: pointer;
    z-index: 1;
  }
  ${desktop} {
    margin: 1.875rem 0 0 2.5rem;
    width: 12.313rem;
    height: 2.138rem;
    font-size: 0.931rem;
  }
`;
export const Published = styled.div`
  width: 70%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 1rem;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin-left: 45rem;
  position: absolute;
  margin-top: 2rem;
  input {
    border-radius: 1rem;
    border: 1px solid black;
    padding: 0.5rem;
    width: 20rem;
    text-align: center;
  }
`;
export const MainTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  width: 100%;
  margin-top: 1rem;
  margin-left: 25rem;
  gap: 1rem;
  h1 {
    font-size: 3rem;
    margin: 0;
    background: linear-gradient(90deg, #6abf4b, #37a139);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.3rem;
    margin: 0;
  }
`;
export const GreenCentralContainer = styled.div`
  display: flex;
  margin-left: 25rem;
  margin-top: 2rem;
  gap: 5rem;
  font-family: "Roboto", sans-serif;
  background-color: #b4ec51;
  border: none;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 40%;
  h2 {
    font-size: 2rem;
    line-height: 2rem;
  }
  h3 {
    margin: 0;
  }
`;
export const LastParragraph = styled.div`
  display: flex;
  margin-left: 25rem;
  margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  p {
    font-weight: 500;
  }
`;
export const LastThreeItems = styled.div`
  display: flex;
  margin-left: 25rem;
  font-family: "Roboto", sans-serif;
  gap: 2rem;
`;
export const LastThreeGreenImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 2.3rem;
`;
export const LastThreeTexts = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  gap: 0.6rem;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
export const GreenPeople = styled.div``;
export const JobsContainer = styled.div`
  position: fixed;
  top: 10%;
  right: 0;
  width: 20rem;
  height: calc(100vh - 10%);
  background-color: transparent;
  border-left: 1px solid #ccc;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #75b300;
  }
  p {
    margin: 0;
    margin-bottom: 0.5rem;
  }
  span {
    width: 100%;
    background-color: grey;
    padding: 0.05rem;
    position: absolute;
  }
  hr {
    opacity: 0;
  }
  ${mobile} {
    display: none;
  }
  ${desktop} {
    display: flex;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
