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
//   width: 28.125rem;
//   height: 50rem;
//   overflow-y: auto;
//   display: flex;
//   flex-direction: column;
//   gap: 0.625rem;
//   scrollbar-width: none;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

// export const SlideItem = styled.div`
//   width: 30.938rem;
//   min-height: 6.125rem;
//   display: flex;
//   background: transparent;
//   align-items: center;
//   padding: 0.625rem;
//   border-bottom: 0.125rem solid #000;
// `;

// export const ContentGrid = styled.div`
//   display: grid;
//   grid-template-columns: 3.75rem auto;
//   align-items: center;
//   width: 100%;
// `;

// export const Avatar = styled.img`
//   width: 8.75rem;
//   height: 6.25rem;
//   border-radius: 50%;
//   object-fit: contain;
// `;

// export const UserInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-left: 4.375rem;
// `;

// export const UserName = styled.div`
//   margin-top: -1.875rem;
//   font-size: 1.25rem;
//   font-weight: bold;
//   font-family: 'Roboto', sans-serif;
// `;

// export const UserRole = styled.div`
//   font-size: 1.125rem;
//   font-family: 'Roboto', sans-serif;
//   color: #666;
// `;

// export const CardContact = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 8.125rem;
//   margin-top: -2.5rem;
//   width: 8.125rem;
//   height: 1.875rem;
//   font-size: 1.25rem;
//   font-weight: 700;
//   font-family: 'Roboto', sans-serif;
//   border-radius: 2.438rem;
//   cursor: pointer;
//   background: #FFF;
//   color:  #460BFF ;
//   &:hover{
//     background: #8FFF00;
//     color: #000;
//   }
// `;

// export const images = [
//   "/images/Avatar1.png",
//   "/images/Avatar2.png",
//   "/images/Avatar3.png",
//   "/images/Avatar4.png",
//   "/images/Avatar5.png",
//   "/images/Avatar6.png",
//   "/images/Avatar7.png",
//   "/images/Avatar8.png",
//   "/images/Avatar9.png",
//   "/images/Avatar10.png",
//   "/images/Avatar11.png",
//   "/images/Avatar12.png",
//   "/images/Avatar13.png",
//   "/images/Avatar14.png",
// ];

// export const users = [
//   { id: "User 00124GF", role: "Graphic Designer" },
//   { id: "User 00245HG", role: "Web Developer" },
//   { id: "User 00378JK", role: "UX/UI Designer" },
//   { id: "User 00489LM", role: "Software Engineer" },
//   { id: "User 00567OP", role: "Product Manager" },
//   { id: "User 00678QR", role: "Data Analyst" },
//   { id: "User 00789ST", role: "Marketing Specialist" },
//   { id: "User 00890UV", role: "SEO Expert" },
//   { id: "User 00901WX", role: "Content Writer" },
//   { id: "User 01012YZ", role: "Social Media Manager" },
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
export const SliderContainer = styled.div`
  position: relative;
  top: 3rem;
  left: 2rem;
  width: 18.75rem;
  height: 30rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${mobileLarge}{
    width: 22.75rem;
  }
  ${tablet}{
    width: 40.75rem;
    left: 3rem;
  }
  ${laptop}{
    width: 14.75rem;
    left: 1rem;
  }
  ${desktop}{
    width: 23rem;
    left: 1rem;
  }
`;
export const SlideItem = styled.div`
  width: 17.75rem;
  min-height: 8.125rem;
  display: flex;
  background: transparent;
  align-items: center;
  padding: 0.313rem;
  margin-left: -1.875rem;
  ${mobileMedium}{
    width: 20.75rem;
    margin-left: -0.625rem;
  }
  ${mobileLarge}{
    width: 24.75rem;
    margin-left: -0.313rem;
  }
  ${tablet}{
    width: 40.75rem;
    margin-left: 0.313rem;
  }
  ${laptop}{
    width: 13.75rem;
    margin-left: -0.625rem;
  }
  ${desktop}{
    width: 23rem;
  }
`;
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 3.75rem auto;
  align-items: center;
  width: 100%;
  ${tablet}{
    margin-left: 7.525rem;
  }
  ${laptop}{
    margin-left: -1.95rem;
  }
  ${desktop}{
    margin-left: 3rem;
  }
`;
export const Avatar = styled.img`
  width: 8.75rem;
  height: 6.25rem;
  border-radius: 50%;
  object-fit: contain;
  ${tablet}{
    width: 10.625rem;
    height: 8.125rem;
  }
  ${laptop}{
    margin-left: 0.5rem;
    width: 7.5rem;
    height: 5rem;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4.375rem;
`;
export const UserName = styled.div`
  margin-top: -1.875rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  ${mobileMedium}{
    margin-top: -2.5rem;
    font-size: 1.25rem;
  }
  ${mobileLarge}{
    margin: -2.5rem 0 0 1rem;
    font-size: 1.35rem;
  }
  ${tablet}{
    margin: -2.5rem 0 0 1rem;
    font-size: 1.75rem;
  }
  ${laptop}{
    margin: -2.5rem 0 0 -1.5rem;
    font-size: 1rem;
    min-width: 3rem;
  }
`;
export const UserRole = styled.div`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #666;
  ${mobileMedium}{
    margin-top: 0.625rem;
    font-size: 1.125rem;
  }
  ${mobileLarge}{
    margin: 0.625rem 0 0 1rem;
    font-size: 1.125rem;
  }
  ${laptop}{
    margin: 0.625rem 0 0 -1.8rem;
    font-size: 0.931rem;
    min-width: 10rem;
  }
`;
export const CardContact = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8.125rem;
  margin-top: -2.5rem;
  width: 8.125rem;
  height: 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  border-radius: 2.438rem;
  cursor: pointer;
  background: #FFF;
  color:  #460BFF ;
  &:hover{
    background: #8FFF00;
    color: #000;
  }
  ${mobileLarge}{
    margin-left: 9.125rem;
  }
  ${laptop}{
    margin: -0.625rem 0 0 6.125rem;
    width: 6.25rem;
    height: 1.25rem;
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
  "/images/Avatar9.png",
  "/images/Avatar10.png",
  "/images/Avatar11.png",
  "/images/Avatar12.png",
  "/images/Avatar13.png",
  "/images/Avatar14.png",
];
export const users = [
  { id: "User 00124GF", role: "Graphic Designer" },
  { id: "User 00245HG", role: "Web Developer" },
  { id: "User 00378JK", role: "UX/UI Designer" },
  { id: "User 00489LM", role: "Software Engineer" },
  { id: "User 00567OP", role: "Product Manager" },
  { id: "User 00678QR", role: "Data Analyst" },
  { id: "User 00789ST", role: "Marketing Specialist" },
  { id: "User 00890UV", role: "SEO Expert" },
  { id: "User 00901WX", role: "Content Writer" },
  { id: "User 01012YZ", role: "Social Media Manager" },
];
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