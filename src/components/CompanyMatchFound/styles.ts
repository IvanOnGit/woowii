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


export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #70C800;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    h1 {
        position: absolute;
        margin-top: 30rem;
        color: white;
        font-weight: 300;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        ${mobileLittle}{
            font-size: 1.375rem;
            margin-top: 28rem;
        }
        ${mobileMedium}{
            margin-top: 26rem; 
        }
        
    }

    input {
        position: absolute;
        margin-top: 38rem;
        padding: 1rem;
        border-radius: 1rem;
        border: none;
        font-weight: 300;
        z-index: 3;
        text-align: center;
        ${mobileLittle}{
            margin-top: 36rem;
        }
        ${mobileMedium}{
            margin-top: 34rem; 
        }
    }
`
export const ContainerUpNav = styled.div`
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    height: 5rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`;
export const BackgroundZigZag = styled.img`
    width: 100%;
    z-index: 1;
`;

export const ItsAMatch = styled.img`
    z-index: 2;
    width: 14rem;
    margin-top: 7rem;
    position: absolute;
    ${mobileLittle}{
        margin-top: 5rem; 
    }
    ${mobileMedium}{
        margin-top: 4rem; 
    }
`;

export const MatchHandShake = styled.img`
    z-index: 2;
    width: 20rem;
    margin-top: 14rem;
    position: absolute;
    ${mobileLittle}{
        margin-top: 12rem;
    }
    ${mobileMedium}{
        margin-top: 10rem; 
    }
`;

export const WhatWooWiiConnects = styled.img`
    z-index: 2;
    width: 20rem;
    margin-top: 33rem;
    position: absolute;
    ${mobileLittle}{
        width: 18rem;
        margin-top: 31rem;
    }
    ${mobileMedium}{
        margin-top: 29rem; 
    }
`;

export const BlueLogoWoowii = styled.img`
    z-index: 2;
    width: 10rem;
    margin-top: 42rem;
    position: absolute;
    ${mobileLittle}{
        margin-top: 40rem;
    }
    ${mobileMedium}{
        margin-top: 38rem; 
    }
`;

export const ContainerFooterToMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 1.2rem;
  left: -1.9rem;
  width: 100vw;
  height: 8vh;
  background: #460BFF;
  ${mobileLittle}{
    top: 46rem;
    left: -10rem;
    min-width: 100vw;
    height: 7vh;
  }
  ${mobileMedium}{
    top: 45.85rem;
    margin-left: -3.5rem;
  }
  ${mobileLarge}{
    top: 45.85rem;
    margin-left: -6.7rem;
  }
  ${tablet}{
    top: 45.85rem;
    margin-left: -28rem;
  }
  ${laptop}{
    top: 45.85rem;
    margin-left: -44rem;
  }
  ${desktop}{
    top: 55.85rem;
    margin-left: -70rem;
  }
  ${bigdesk}{
    top: 63.85rem;
    margin-left: -104.5rem;
  }
  img{
    margin-top: -3rem;
    width: 4.438rem;
    height: 4.438rem;
    cursor: pointer;
    ${tablet}{
      margin-top: -5rem;
      width: 6rem;
      height: 6rem; 
    }
  }
  .items{
    cursor: pointer;
    ${tablet}{
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;