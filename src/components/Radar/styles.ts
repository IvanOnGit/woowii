import styled from "styled-components"

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


export const TooltipContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border: 0.063rem solid #ccc;
  padding: 0.625rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.313rem rgba(0, 0, 0, 0.15);
  .label {
    margin: 0;
    font-weight: bold;
  }
`;
export const ContainerRadarToMobile = styled.div`
  width: 70%;
  height: 250px;
  margin-left: 2rem;
  ${mobileMedium}{
    margin-left: 2.8rem;
  }
  ${mobileLarge}{
    margin-left: 5rem;
  }
  ${tablet}{
    width: 100%;
    height: 350px;
    margin: 20rem 0 0 11rem;
  }
  ${laptop}{
    width: 100%;
    height: 300px;
    margin-left: 0rem;
    margin-top: 0rem;
  }
`;