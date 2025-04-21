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

export const ContainerExpanded = styled.div`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.125rem solid #FFF;
  padding-bottom: 0.5rem;
  position: relative;
  margin: auto;
  ${mobileLittle}{
    border-bottom: 0.125rem solid #000;
  }
  ${mobileLarge}{
    width: 20.5rem;
  }
  ${tablet}{
    width: 30.5rem;
  }
  ${laptop}{
    width: 18.5rem;
    border-bottom: 0.125rem solid #FFF;
    margin-left: -3rem;
  }
  ${desktop}{
    width: 30.5rem;
    border-bottom: 0.125rem solid #FFF;
    margin-left: -1rem;
  }
  ${bigdesk}{
    width: 50.5rem;
    border-bottom: 0.125rem solid #FFF;
    padding-bottom: -2.5rem;
    margin-left: 5rem;
  }

  h2{
    font-size: 2.125rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    width: 34.813rem;
    ${mobileLittle}{
      color: #000;
      width: 17.5rem;
      font-size: 1.125rem;
    }
    ${mobileLarge}{
      color: #000;
      width: 20.5rem;
      font-size: 1.25rem;
    }
    ${tablet}{
      color: #000;
      width: 30.5rem;
      font-size: 1.875rem;
    }
    ${laptop}{
      font-size: 1.325rem;
      color: #FFF;
      width: 20.5rem;
    }
    ${desktop}{
      font-size: 1.625rem;
      color: #FFF;
      width: 30.5rem;
    }
    ${bigdesk}{
      font-size: 2rem;
      color: #FFF;
      width: 50.5rem;
    }
  }
`;

export const TextExpanded = styled.p<{ expanded: boolean }>`
  max-height: ${({ expanded }) => (expanded ? "none" : "3.125rem")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  text-align: left;
  color: #FFF;
  width: 34.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  margin-bottom: -0.625rem;
  ${mobileLittle}{
    color: #000;
    width: 17.5rem;
    font-size: 0.875rem;
  }
  ${mobileLarge}{
    color: #000;
    width: 20.5rem;
    font-size: 0.938rem;
  }
  ${tablet}{
    color: #000;
    width: 30.5rem;
    font-size: 1.25rem;
  }
  ${laptop}{
    color: #FFF;
    width: 20.5rem;
    font-size: 1rem;
  }
  ${desktop}{
    color: #FFF;
    width: 30.5rem;
    font-size: 1.25rem;
  }
  ${bigdesk}{
    color: #FFF;
    width: 50.5rem;
    font-size: 1.75rem;
  }
`;

export const ButtonExpanded = styled.button`
  position: relative;
  margin-top: 0.5rem;
  background: none;
  border: none;
  color: #FFF;
  cursor: pointer;
  font-weight: bold;
  bottom: -1.5rem;
  ${mobileLittle}{
    color: #000;
    font-size: 0.75rem;
  }
  ${laptop}{
    color: #FFF;
  }
  ${bigdesk}{
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #FFF;
  }
`;