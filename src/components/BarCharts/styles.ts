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


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 28rem;
  height: 26rem;
  margin-top: 0.625rem;
`;

export const Button = styled.button`
  padding: 0.313rem 0.625rem;
  margin: -0.625rem 0 0 -3.125rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #460BFF;
  color: #FFF;
  border: none;
  border-radius: 2.813rem;
  &:hover {
    background-color: #8FFF00;
    color: #000;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  text-align: center;
  display: block;
  
  h3{
    text-align: center;
    margin-left:-6.25rem;
  }
  h2{
    text-align: center;
    max-width: 12.5rem;
    font-size: 0.875rem;
    margin-left: 0.625rem;
  }
  .division{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: -4.375rem;
    h4{
        font-weight: 300;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: -1.875rem;
  width: 100%;
 
`;

