
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

export const Wrapper = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  background:  azure;
  z-index: 0;  
  overflow: hidden;
  justify-content: center;
`;

export const ContainerFirstPage = styled.div `
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to top, #2020B3 0%, #181885 45.55%, #121264 77.84%, #0E0E4D);
  z-index: 0;  
  overflow: hidden;
  max-width: 90rem;
`;

export const ResponsiveSVG = styled.img`
  width: 105%;
  height: auto;
  margin-top: -8.75rem;
  /* margin-left: 1rem; */
  content: url("/images/NewLine.svg");
  ${mobileMedium}, ${mobileLarge}{
    width: 100%;
  }
  @media (min-width: 48rem) {
    max-width: 48rem;
    content: url("/images/LineMobile.svg");
    margin-top: 3.125rem;
  }
  @media (min-width: 64rem) {
    max-width: 64rem;
  } 
  @media (min-width: 90rem) {
    min-width: 90rem;
  }
  @media (min-width: 160rem) {
    max-width: 160rem;
  }
`;

export const FixedImageLogo = styled.img`
  position: fixed;
  top: 30%;
  left: 5%;
  width: 90%;
  height: auto;
  ${mobileLarge}{
    top: 28%;
  }
  ${tablet}{
    width: 70%;
    top: 30%;
    left: 5%;
  }
  ${laptop}{
    width: 45%;
    top: 20%;
    left: 20%;
  }
  ${desktop}{
    width: 40%;
    top: 20%;
    left: 20%;
  }
  ${bigdesk}{
    width: 31%;
    top: 25%;
    left: 30%;
  }
`;
 
export const FixedImageText = styled.img`
  position: fixed;
  top: 40%;
  left: 5%;
  width: 90%;
  height: auto;
  ${mobileMedium}{
    top: 42%;
  }
  ${mobileLarge}{
    top: 42%;
  }
  ${tablet}{
    width: 70%;
    top: 48%;
    left: 5%;
  }
  ${laptop}{
    width: 44%;
    top: 36%;
    left: 20%;
  }
  ${desktop}{
    width: 40%;
    top: 42%;
    left: 20%;
  }
  ${bigdesk}{
    width: 30%;
    top: 44%;
    left: 30%;
  }
`;

export const FixedImageButton = styled.img`
  position: fixed;
  top: 48%;
  left: 45%;
  width: 13%;
  height: auto;
  margin-top: 80%;
  border-radius: 100%;
  cursor: pointer;
  ${mobileMedium}{
    top: 48%;
    left: 47%;
  }
  ${mobileLarge}{
    top: 48%;
    left: 49%;
  }
  ${tablet}{
    width: 7%;
    top: -12%;
    left: 77%;
    border-radius: 0%;
  }
  ${laptop}{
    width: 6%;
    top: -29%;
    left: 79%;
    border-radius: 0%;
  }
  ${desktop}{
    width: 5%;
    top: -51%;
    left: 82%;
    border-radius: 0%;
  }
  ${bigdesk}{
    width: 4%;
    top: -78%;
    left: 75%;
    border-radius: 0%;
  }
`;

