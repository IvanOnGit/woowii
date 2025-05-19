// import { Link } from "react-router-dom";
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
//   justify-content: flex-end;
// `;

// export const SearchContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center; 
  
//   input {
//     height: 2rem; 
//     width: 30%; 
//     margin-top: 1rem;
//     padding: 0rem;
//     margin-left: 10rem;
//     border-radius: 1rem;
//     border: 1px solid black;
//   }

//   input::placeholder {
//     padding-left: 1rem;
//   }
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

// export const ThirdMenuAsideItem = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100%;

//   button {
//     width: 80%;
//     padding: 0.5rem;
//     border: 1px solid black;
//     background-color: transparent;
//     border-radius: 1rem;
//     color: black;
//     cursor: pointer;
//     font-size: 0.8rem;
//     margin-bottom: 1rem;
//   }

//   button:hover {
//     background-color: #f0f0f0;
//   }
// `;

// export const WelcomeContainer = styled.div`
//   background-color: #75B300;
//   font-family: 'Roboto', sans-serif;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   width: 72rem;
//   margin-left: 22rem;
//   padding-left: 4rem;

//   h1 {
//     color: white;
//     font-size: 1.5rem;
//   }
// `;

// export const ChevronIcon = styled.div`
//   width: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const MenuItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
//   width: 80%;
//   height: 25%;
// `;

// export const StyledButton = styled.button`
//   border: none;
//   background-color: #75B300;
//   color: white;
//   width: 8rem;
//   height: 1rem;
//   padding: 1rem;
//   cursor: pointer;
//   margin-left: 25.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 1rem;
//   position: absolute;
//   margin-top: -1rem;
// `;

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   display: inline-block;
// `;
// import { Link } from "react-router-dom";
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
//   justify-content: flex-end;
// `;

// export const SearchContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;

//   input {
//     height: 2rem;
//     width: 30%;
//     margin-top: 1rem;
//     padding: 0rem;
//     margin-left: 10rem;
//     border-radius: 1rem;
//     border: 1px solid black;
//   }

//   input::placeholder {
//     padding-left: 1rem;
//   }
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
//   justify-content: space-between;
//   font-family: 'Roboto', sans-serif;
//   span {
//     height: 1px;
//     width: 100%;
//     border-bottom: 1px solid black;
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
//   border-bottom: 1px solid black;
//   width: 100%;
//   text-align: center;
//   height: 25%;

//   img {
//     width: 10rem;
//     height: 4rem;}

//   h3 {
//     margin: 0;
//     font-size: 1rem;
//     font-weight: 500;
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
// `

// export const ThirdMenuAsideItem = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100%;

//   button {
//     width: 80%;
//     padding: 0.5rem;
//     border: 1px solid black;
//     background-color: transparent;
//     border-radius: 1rem;
//     color: black;
//     cursor: pointer;
//     font-size: 0.8rem;
//     margin-bottom: 1rem;
//   }

//   button:hover {
//     background-color: #f0f0f0;
//   }
// `;

// export const WelcomeContainer = styled.div`
//   background-color: #75B300;
//   font-family: 'Roboto', sans-serif;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   width: 72rem;
//   margin-left: 22rem;
//   padding-left: 4rem;

//   h1 {
//     color: white;
//     font-size: 1.5rem;
//   }
// `;

// export const ChevronIcon = styled.div`
//   width: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const MenuItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
//   width: 80%;
//   height: 25%;
// `;

// export const StyledButton = styled.button`
//   border: none;
//   background-color: #75B300;
//   color: white;
//   width: 8rem;
//   height: 1rem;
//   padding: 1rem;
//   cursor: pointer;
//   margin-left: 25.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 1rem;
//   position: absolute;
//   margin-top: -1rem;
// `;

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   display: inline-block;
// `;

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

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`

export const ContainerAllMobile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 140vh;
  overflow-y: scroll;
  overflow-x: hidden;
  ${mobile} {
    display: flex;
  }
  ${desktop} {
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
  background: #fff;
`;
export const AvatarToMobile = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export const SearchUpToMobile = styled.div`
  display: flex;
  width: 10rem;
  height: 1rem;
  input {
    width: 10rem;
    height: 1.3rem;
    border-radius: 2.813rem;
    padding-left: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }
  &::placeholder {
    font-size: 0.75rem;
  }
`;
export const HeaderItemsToMobile = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
  img {
    width: 1rem;
    height: 1rem;
  }
  p {
    font-size: 0.75rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
  }
  #menu {
    margin-top: 0.7rem;
  }
`;
export const PrincipalTitleToMobile = styled.div`
  position: relative;
  top: -1%;
  left: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Reem Kufi", sans-serif;
    color: #75b300;
    max-width: 17.313rem;
    line-height: 23px;
  }
`;
export const ContainerThreeMinuts = styled.div`
  position: relative;
  top: -3%;
  left: 2.5rem;
  p {
    font-size: 0.75rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #75b300;
    max-width: 18.75rem;
  }
`;
export const ContainerTextBelowPrincipalTitle = styled.div`
  position: relative;
  top: 1%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 15vh;
`;
export const ContainerGhostDiv = styled.div`
  display: flex;
  width: 1vw;
  height: 15vh;
  margin: -2rem 0 0 2rem;
  border-right: 2px solid #75b300;
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 99vw;
  height: 15vh;
  margin:-3rem 0 0 2rem;
  p {
    font-size: 0.75rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    max-width: 16.825rem;
  }
`;

export const ContainerTextBelowDegradedBars = styled.div`
  position: relative;
  display: flex;
  top: 1%;
  left: 12%;
  h2 {
    font-size: 1.45rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #75b300;
    max-width: 16.875rem;
  }
`;
export const ContainerImageAndTextOne = styled.div`
  position: relative;
  display: block;
  width: 14.375rem;
  height: 9rem;
  margin-bottom: 2rem;
  top: 2%;
  left: 15%;
  img {
    width: 4.274rem;
    height: 4.713rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #75b300;
    max-width: 8.5rem;
    margin: 0.5rem 0 0 2rem;
  }
`;
export const ContainerImageAndTextTwo = styled(ContainerImageAndTextOne)`
  top: 2%;
  left: 15%;
  p {
    min-width: 9rem;
    margin-left: 2rem;
  }
`;
export const ContainerImageAndTextThree = styled(ContainerImageAndTextOne)`
  top: 2%;
  left: 15%;
  p {
    min-width: 9rem;
    margin-left: 2rem;
  }
`;
export const ContainerImageAndTextUp = styled.div`
  display: flex;
`;
export const ContainerImageAndTextDown = styled.div`
  display: flex;
  p {
    font-size: 0.938rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    min-width: 15rem;
    margin-left: 0.3rem;
    color: #000;
  }
`;
export const ContainerButtonStartToMobile = styled.div`
  position: relative;
  top: 5%;
  left: 12%;
  width: 17.563rem;
  height: 2.438rem;
  a:-webkit-any-link {
    text-decoration: none;
    cursor: pointer;
  }
`;
export const ButtonStartToMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.563rem;
  height: 2.438rem;
  background: #75b300;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 800;
  font-family: "Inter", sans-serif;
  border: none;
  border-radius: 2.813rem;
  cursor: pointer;
`;
export const ContainerFooterToMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 12%;
  width: 100vw;
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
//_________________________________________________UP TO MOBILE_____________________________________________________________

export const ContainerAllUpToMobile = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${mobile} {
    display: none;
  }
  ${desktop} {
    display: grid;
  }
`;

export const ContainerColumnSelects = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 23vw;
  height: 100vh;
  background: #477b05;
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
  background: #fff;
`;
export const ContainerBucksAndItems = styled.div`
  position: fixed;
  display: flex;
  left: 50rem;
  top: 1rem;
  width: 12.375rem;
  height: 1.813rem;
  ${desktop} {
    left: 70rem;
  }
`;
export const HeaderWiibucksImages = styled.div`
  display: flex;
  margin: 0rem 0 0 -30rem;
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
  margin-top: 2rem;
  margin-left: 47rem;
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
export const ContainerAvatarAndPublishHome = styled.div`
  position: fixed;
  display: flex;
  width: 72.563rem;
  height: 9rem;
  left: 32.3rem;
  top: 6rem;
  img {
    width: 72.563rem;
    height: 9rem;
  }
`;
export const ContainerLogo = styled.div`
  position: fixed;
  display: flex;
  width: 23vw;
  height: 10vh;
  background: #477b05;
  border-bottom: 0.063rem solid #fff;
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
  ${desktop} {
    left: 1rem;
    top: 6rem;
  }
  p {
    font-size: 1.213rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #460bff;
    margin-top: 1.875rem;
    ${desktop} {
      font-size: 1.513rem;
    }
  }
`;
export const AvatarSelects = styled.div`
  height: 5rem;
  margin-left: 1.25rem;
  ${desktop} {
    margin-left: -0.25rem;
  }
  filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  img {
    margin: 1rem 0 0 1rem;
    width: 70%;
    height: 60%;
    ${desktop} {
      height: 70%;
      padding-right: 1rem;
    }
  }
`;
export const ContainerFirstThreeSelects = styled.div`
  display: block;
  width: 23vw;
  height: 18rem;
  margin-top: 7.25rem;
  z-index: 1;
  border-bottom: 0.063rem solid #fff;
  ${desktop} {
    height: 21rem;
    margin-top: 10rem;
  }
  select {
    width: 10.625rem;
    height: 1.5rem;
    margin-left: 2.125rem;
    border: none;
    margin-bottom: 1rem;
    background: #477b05;
    color: #fff;
    ${desktop} {
      font-size: 1rem;
      width: 14.625rem;
      margin-bottom: 2rem;
    }
  }
`;
export const ContainerSecondThreeSelects = styled.div`
  display: block;
  width: 23vw;
  height: 10rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  z-index: 1;
  border-bottom: 0.063rem solid #fff;
  ${desktop} {
    height: 12rem;
    margin-top: 3rem;
  }
  select {
    width: 10.625rem;
    height: 1.5rem;
    margin-left: 2.125rem;
    border: none;
    margin-bottom: 1rem;
    background: #477b05;
    color: #fff;
    ${desktop} {
      font-size: 1rem;
      width: 14.625rem;
      margin-bottom: 2rem;
    }
  }
`;

export const BtnChatColumnSelects = styled.div`
  img {
    margin: 1.875rem 0 0 1rem;
    width: 13.313rem;
    height: 3.938rem;
    cursor: pointer;
    z-index: 1;
  }
  ${desktop} {
    margin: 1.875rem 0 0 3.5rem;
    width: 12.313rem;
    height: 2.138rem;
    font-size: 0.931rem;
  }
`;
export const ContainerMotivationAll = styled.div`
  display: block;
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
  font-family: "Roboto", sans-serif;
  width: 100%;
  text-align: center;
  margin: 6.75rem 0 0 6rem;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    width: 55rem;
    text-align: left;
    color: #75b300;
    margin: 0.5rem 0 0 22rem;
  }
  p {
    width: 57rem;
    text-align: left;
    font-size: 1.45rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    margin: 0.2rem 0 0 24rem;
  } 
`;

export const ContainerMotivationImages = styled.div`
  position: relative;
  display: block;
  width: 17.563rem;
  height: 22vh;
  left: 24rem;
  top: 2rem;
  filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
  ${desktop} {
    left: 34.5rem;
    top: -25rem;
  }
`;

export const ContainerMotivationImagesUpGreenText = styled.div`
  width: 48rem;
  height: 5vh;
  margin: auto;
  margin-top: -5rem;
  margin-left: -13.5rem;
  p {
    min-width: 55rem;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #75b300;
    margin-bottom: -0.5rem;
  }
`;

export const ContainerMotivationImagesNumberOne = styled.div`
  margin: 1rem 0 0 -15rem;
  display: flex;
  width: 20vw;
  height: 18vh;
`;
export const ContainerNumberOneUp = styled.div`
  display: block;
  width: 20vw;
  height: 10vh;
  .textOne {
    display: block;
    margin:-2rem 0 0 -0.5rem;
    p {
      font-size: 1.45rem;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      color: #75b300;
      margin-left: 1.8rem;
      min-width: 10rem;
      margin-bottom: -1.8rem;
    }
  }
`;
export const ImageContainerNumberOne = styled.img`
  width: 9.063rem;
  height: 10.313rem;
  margin-left: 0.625rem;
  ${desktop} {
    width: 12.188rem;
    height: 13.438rem;
    margin-top: 0.5rem;
  }
`;
export const ContainerNumberOneDown = styled.div`
  display: block;
  width: 18vw;
  height: 7vh;
  padding: 0 1.25rem 0 1.25rem;
  margin-top: 0.5rem;
  h6 {
    font-size: 0.938rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;

export const ContainerNumberTwoUp = styled.div`
  display: block;
  width: 20vw;
  height: 10vh;
  margin-top: 3rem;
  .textTwo {
    display: block;
    margin:-2rem 0 0 -0.5rem;
    p {
      font-size: 1.45rem;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      color: #75b300;
      margin-left: 1.8rem;
      min-width: 10rem;
      margin-bottom: -1.8rem;
    }
  }
`;
export const ImageContainerNumberTwo = styled.img`
  width: 9.063rem;
  height: 10.313rem;
  margin-left: 0.625rem;
  ${desktop} {
    margin-top: -2.5rem;
    width: 12.188rem;
    height: 13.438rem;
  }
`;
export const ContainerNumberTwoDown = styled.div`
  display: block;
  width: 18vw;
  height: 7vh;
  padding: 0 1.25rem 0 1.7rem;
  margin: 0.5rem 0 0 -0.5rem;
  h6 {
    font-size: 0.938rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;

export const ContainerNumberThreeUp = styled.div`
  display: block;
  width: 20vw;
  height: 10vh;
  margin-top: -0.6rem;
  .textTwo {
    display: block;
    margin:-2rem 0 0 -0.5rem;
    p {
      font-size: 1.45rem;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      color: #75b300;
      margin-left: 1.8rem;
      min-width: 10rem;
      margin-bottom: -1.8rem;
    }
  }
`;
export const ImageContainerNumberThree = styled.img`
  width: 9.063rem;
  height: 10.313rem;
  margin-left: 0.625rem;
  ${desktop} {
    margin-top: 1.2rem;
    width: 12.188rem;
    height: 13.438rem;
  }
`;
export const ContainerNumberThreeDown = styled.div`
  display: block;
  width: 20vw;
  height: 7vh;
  padding: 0 1.25rem 0 1.25rem;
  margin-top: 0.5rem;
  h6 {
    font-size: 0.938rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
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
  background: #477b05;
  color: #fff;
  left: 20.5rem;
  top: -12rem;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background: #8fff00;
    color: #000;
  }
`;
