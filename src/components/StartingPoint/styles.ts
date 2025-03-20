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
    background: linear-gradient(to bottom , #070758,#2020B3);
    z-index: 0;  
    overflow: hidden;
    max-width: 90rem;
`;

export const ResponsiveSVG = styled.img`
  width: 100%;
  height: auto;
  max-width: 767px;
  margin-top: -140px;
  content: url("/images/NewLine.svg");
  ${mobileLittle}{
    width: 110%;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    content: url("/images/LineMobile.svg");
    margin-top: 3.125rem;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
  @media (min-width: 1870px) {
    max-width: 1870px;
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
    width: 70%;
    top: 30%;
    left: 5%;
  }
  ${desktop}{
    width: 60%;
    top: 20%;
    left: 10%;
  }
  ${bigdesk}{
    width: 40%;
    top: 25%;
    left: 25%;
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
    width: 70%;
    top: 54%;
    left: 5%;
  }
  ${desktop}{
    width: 60%;
    top: 46%;
    left: 10%;
  }
  ${bigdesk}{
    width: 40%;
    top: 43%;
    left: 25%;
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
  }
  ${laptop}{
    width: 6%;
    top: -29%;
    left: 79%;
  }
  ${desktop}{
    width: 5.5%;
    top: -49%;
    left: 82%;  
  }
  ${bigdesk}{
    width: 4.5%;
    top: -63%;
    left: 63%;
  }
`;