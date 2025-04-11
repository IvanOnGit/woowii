// import styled from "styled-components";

// export const Wrapper = styled.div`
//   width: 90%;
//   overflow: hidden;
//   padding: 0 1.25rem;
//   position: relative;
//   margin-top: 0.625rem;
// `;

// export const MaskContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: 100%;
// `;

// export const SliderContainer = styled.div<{ translateX: number; transition: boolean }>`
//   display: flex;
//   gap: 0.625rem;
//   transition: ${({ transition }) => (transition ? "transform 0.3s ease-in-out" : "none")};
//   transform: ${({ translateX }) => `translateX(${translateX}px)`};
// `;

// export const ImageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 3rem;
// `;

// export const Image = styled.img`
//   width: 10.625rem;
//   height: 7.5rem;
//   object-fit: contain;
//   border-radius: 0.5rem;
//   margin-right: -0.95rem;
// `;

// export const Username = styled.div`
//   margin-top: 0.313rem;
//   margin-left: 0.625rem;
//   font-size: 0.625rem;
//   font-family: 'Roboto', sans-serif;
//   color: #333;
//   font-weight: bold;
// `;

// export const Button = styled.button`
//   position: absolute;
//   top: 58%;
//   transform: translateY(-50%);
//   background: #FFF;
//   color: #000;
//   border: none;
//   padding: 0.625rem;
//   cursor: pointer;
//   z-index: 0;
//   font-size: 1.25rem;
// `;

// export const PrevButton = styled(Button)`
//   left: 0;
// `;

// export const NextButton = styled(Button)`
//   right: 0;
// `;

// export const GradientMask = styled.div`
//   position: absolute;
//   top: 0;
//   width: 1.25rem;
//   height: 100%;
//   z-index: 0;
//   pointer-events: none;
  
//   &:first-child {
//     left: 0;
//     background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
//   }
  
//   &:last-child {
//     right: 0;
//     background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
//   }
// `;

// // Lista de imágenes
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


// // Duplicamos imágenes para hacer el efecto infinito
// export const infiniteImages = [...images, ...images, ...images];
import styled from "styled-components";
const WidthMeasurementMobile = 20;
const WidthMeasurementMobileMedium = 23.438;
const WidthMeasurementMobileIPhone12 = 24.375;
const WidthMeasurementMobileLarge = 26.563;
const WidthMeasurementTablet = 47.938;
const WidthMeasurementLaptop = 63.938;
const WidthMeasurementDesktop = 90;
const WidthMeasurementBigDesk = 90.063;
export const mobileLittle = `@media(min-width:${WidthMeasurementMobile}rem)`
export const mobileMedium = `@media(min-width:${WidthMeasurementMobileMedium}rem)`
export const mobileIPhone12 = `@media(min-width:${WidthMeasurementMobileIPhone12}rem)`
export const mobileLarge = `@media(min-width:${WidthMeasurementMobileLarge}rem)`
export const tablet = `@media(min-width:${WidthMeasurementTablet}rem)`
export const laptop = `@media(min-width:${WidthMeasurementLaptop}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`
export const bigdesk = `@media(min-width:${WidthMeasurementBigDesk}rem)`
export const Wrapper = styled.div`
  width: 97%;
  overflow: hidden;
  padding: 0 1.25rem;
  position: relative;
  margin-top: 1.875rem;
`;
export const MaskContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 97%;
`;
export const SliderContainer = styled.div<{ translateX: number; transition: boolean }>`
  display: flex;
  gap: 0.625rem;
  transition: ${({ transition }) => (transition ? "transform 0.3s ease-in-out" : "none")};
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  ${mobileLittle}{
    gap: 0.313rem;
  }
  ${tablet}{
    margin-bottom: 1rem;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 10.625rem;
  height: 7.5rem;
  object-fit: contain;
  border-radius: 0.5rem;
  margin-right: -1.25rem;
  ${mobileLittle}{
    width: 3.875rem;
    height: 3.875rem;
    margin-right: -0.625rem;
  }
`;
export const Username = styled.div`
  margin-top: 0.313rem;
  margin-left: 0.625rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-weight: bold;
  ${mobileLittle}{
    font-size: 0.931rem;
  }
`;
export const Button = styled.button`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background: transparent;
  color: #000;
  border: none;
  padding: 0.313rem;
  cursor: pointer;
  z-index: 0;
  font-size: 1.25rem;
`;
export const PrevButton = styled(Button)`
  left: 0;
`;
export const NextButton = styled(Button)`
  right: 0;
`;
export const GradientMask = styled.div`
  position: absolute;
  top: 0;
  width: 1.25rem;
  height: 100%;
  z-index: 5;
  pointer-events: none;
  &:first-child {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
  &:last-child {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
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