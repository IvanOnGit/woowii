// import styled from "styled-components";
// import {keyframes} from "styled-components"

// export const slideIn = keyframes`
//   from {
//     transform: translateX(100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// `;

// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.3);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const Popup = styled.div`
//   position: relative;
//   width: 17.875rem;
//   height: 20rem;
//   padding: 1.25rem;
//   background: #460BFF;
//   color: #FFF;
//   border-radius: 0.625rem;
//   box-shadow: 0px 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
//   animation: ${slideIn} 0.5s forwards;
// `;

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 0.625rem;
//   right: 0.625rem;
//   background: none;
//   border: none;
//   color: #8FFF00;
//   font-size: 1.25rem;
//   cursor: pointer;
// `;

// export const TextArea = styled.textarea`
//   width: 95%;
//   height: 14.25rem;
//   margin-top: 0.625rem;
//   padding: 0.625rem;
//   border: 0.063rem solid #ccc;
//   border-radius: 0.313rem;
//   font-size: 0.875rem;
//   resize: none;
// `;

// export const SliderContainer = styled.div`
//   width: 47vw;
//   height: 85vh;
//   overflow-y: auto;
//   display: block;
//   gap: 0.625rem;
//   margin-top: 1.5rem;
//   margin-left: -1rem;
//   scrollbar-width: none;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

// export const SlideItem = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   width: 40rem;
//   height: 9.75rem;
//   margin: auto;
//   margin-top: 1.875rem;
//   border-radius: 0.625rem;
//   border: 0.125rem solid #000;
// `;

// export const Avatar = styled.img`
//   width: 6.25rem;
//   height: 6.25rem;
//   margin: auto;
// `;

// export const IntroCommentsAndMessageText = styled.div`
//   display: block;
// `;
// export const UserInfo = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 1.875rem;
//   min-width: 25rem;
//   h2{
//     color: #460BFF;
//     margin: -1rem 0 0 -1rem;

//   }
//   p{
//     margin-right: -5.5rem;
//   }
// `;

// export const IntroCommentsAndMessageTextUserComment = styled.p`
//   display: block;
//   margin: auto;
//   margin: -1.625rem 0 0 -1rem;
//   min-width: 25.25rem;
//   font-size: 1.25rem;
//   font-weight: 500;
//   font-family: 'Inter', sans-serif;
// `;

// export const IntroCommentsAndMessageButton = styled.button`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 5.25rem;
//     height: 1.813rem;
//     background: #460BFF;
//     color: #FFF;
//     margin: auto;
//     font-size: 0.938rem;
//     font-weight: 500;
//     font-family: 'Inter', sans-serif;
//     border-radius: 2.813rem;
//     margin: 6rem 0 0 1rem;
//     cursor: pointer;
//     &:hover{
//       background: #8FFF00;
//       color: #000;
//     }
// `;

// export const images = [
//     "/images/Avatar1.png",
//     "/images/Avatar2.png",
//     "/images/Avatar3.png",
//     "/images/Avatar4.png",
//     "/images/Avatar5.png",
//     "/images/Avatar6.png",
//     "/images/Avatar7.png",
//     "/images/Avatar8.png",
// ];
  
// export const users = [
//     { id: "User00124GF", time: "1 min ago",},
//     { id: "User00245HG", time: "3 min ago",}, 
//     { id: "User00378JK", time: "7 min ago",},
//     { id: "User00489LM", time: "10 min ago",},
//     { id: "User00567OP", time: "15 min ago",},
//     { id: "User00678QR", time: "20 min ago",},
//     { id: "User00789ST", time: "30 min ago",},
//     { id: "User00890UV", time: "50 min ago",},
// ];
import styled from "styled-components";
import {keyframes} from "styled-components"

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

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
export const Popup = styled.div`
  position: relative;
  width: 15.875rem;
  height: 20rem;
  padding: 1.25rem;
  background: #460BFF;
  color: #FFF;
  border-radius: 0.625rem;
  box-shadow: 0px 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s forwards;
  ${tablet}{
    width: 25.875rem;
    height: 30rem;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  background: none;
  border: none;
  color: #8FFF00;
  font-size: 1.25rem;
  cursor: pointer;
  ${tablet}{
    font-size: 1.75rem;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 14.25rem;
  margin-top: 0.625rem;
  padding: 0.625rem;
  border: 0.063rem solid #ccc;
  border-radius: 0.313rem;
  font-size: 0.875rem;
  resize: none;
  ${tablet}{
    height: 24.25rem;
  }
`;
export const SliderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 50vh;
  display: block;
  gap: 0.625rem;
  top: 0.5rem;
  left: 0.2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 0;
   ${tablet}{
    top: 0.5rem;
  }
  ${bigdesk}{
    left: 4rem;
  }
`;
export const SlideItem = styled.div`
  display: flex;
  width: 18rem;
  height: 9.75rem;
  margin: auto;
  margin-top: 1.875rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #000;
  background: #FFF;
  ${mobileMedium}{
    width: 21rem;
    margin-left: 0.8rem;
  }
  ${mobileLarge}{
    width: 24rem;
    margin-left: 0.8rem;
  }
  ${tablet}{
    margin-left: 3.2rem;
    width: 40.2rem;
  }
  ${laptop}{
    width: 27.8rem;
    margin-left: 1rem;
  }
  ${desktop}{
    width: 32.2rem;
    margin-left: 6rem;
  }
`;
export const Avatar = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  margin: 2rem 0 0 0.5rem;
   ${tablet}{
    width: 6.25rem;
    height: 6.25rem;
    margin-top: 1.5rem;
  }
`;
export const IntroCommentsAndMessageText = styled.div`
  display: block;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.375rem;
  min-width: 10rem;
  h2{
    color: #460BFF;
    font-size: 0.931rem;
    margin-top: -6rem;
    margin-left: 0rem;
    ${mobileMedium}{
      font-size: 1.25rem;
    }
    ${tablet}{
      font-size: 1.5rem;
      margin-top: -5rem;
    }
    ${laptop}{
      font-size: 1.25rem;
      margin-top: -5rem;
      margin-left: -0.1rem;
    }
  }
  p{
    margin-right: 20rem;
    margin-top: 5.8rem;
    min-width: 5rem;
    ${mobileMedium}{
      margin-top: 6rem;
    }
    ${tablet}{
      font-size: 1.125rem;
      margin-left: 16rem;
      min-width: 5rem;
    }
    ${laptop}{
      font-size: 1.125rem;
      margin-left: 8rem;
    }
  }
`;
export const CommentsAndMessageUserComment = styled.div`
  display: block;
  width: 8.25rem;
  height: 8rem;
`;
export const IntroCommentsAndMessageTextUserComment = styled.p`
  margin-top: -5rem;
  min-width: 10.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  ${mobileMedium}{
    margin-top: -5.5rem;
    font-size: 0.981rem;
    min-width: 12.75rem;
  }
  ${mobileLarge}{
    margin-top: -5rem;
    font-size: 1rem;
    min-width: 16.75rem;
  }
  ${tablet}{
    font-size: 1.25rem;
    min-width: 35rem;
  }
  ${laptop}{
    margin-top: -5rem;
    font-size: 1rem;
    min-width: 17rem;
  }
`;
export const IntroCommentsAndMessageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.25rem;
  height: 1.513rem;
  background: #460BFF;
  color: #FFF;
  margin-left: -31.5rem;
  margin-top: 7rem;
  font-size: 0.938rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  border-radius: 2.813rem;
  cursor: pointer;
  ${mobileMedium}{
    margin-top: 7.3rem;
  }
  &:hover{
    background: #8FFF00;
    color: #000;
  }
  ${tablet}{
    margin-left: -50rem;
  }
  ${laptop}{
    margin-left: -41rem; 
  }
`;
export const images = [
  "/images/Avatar1.png",
  "/images/Avatar2.png",
  "/images/Avatar3.png",
  "/images/Avatar4.png",
  "/images/Avatar5.png",
  "/images/Avatar6.png",
  "/images/Avatar7.png",
  "/images/Avatar8.png",
];
export const users = [
  { id: "User00124GF", time: "1 min ago",},
  { id: "User00245HG", time: "3 min ago",}, 
  { id: "User00378JK", time: "7 min ago",},
  { id: "User00489LM", time: "10 min ago",},
  { id: "User00567OP", time: "15 min ago",},
  { id: "User00678QR", time: "20 min ago",},
  { id: "User00789ST", time: "30 min ago",},
  { id: "User00890UV", time: "50 min ago",},
];
