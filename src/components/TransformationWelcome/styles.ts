
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

export const ContainerSecondPage = styled.div `
    display: block;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to top, #2020B3 0%, #181885 45.55%, #121264 77.84%, #0E0E4D);
    z-index: 0;  
    overflow: hidden;
    max-width: 90rem;
`;

export const FixedImageLogo = styled.img`
  position: fixed;
  top: 10%;
  left: 25%;
  width: 50%;
  height: auto;
  ${mobileLarge}{
    top: 10%;
  }
  ${tablet}{
    width: 30%;
    top: 5%;
    left: 35%;
  }
  ${laptop}{
    width: 30%;
    top: 5%;
    left: 35%;
  }
  ${desktop}{
    width: 18%;
    top: 7%;
    left: 40%;
  }
  ${bigdesk}{
    width: 25%;
    top: 7%;
    left: 38%;
  }
`;

export const ContainerTextBelowLogo = styled.div`
    display: flex;
    position: fixed;
    top: 25%;
    left: 5%;
    ${tablet}{
        top: 17%;
        left: 17%;
    }
    ${laptop}{
        top: 20%;
        left: 22%;
    }
    ${desktop}{
        top: 19%;
        left: 27%;
    }
    ${bigdesk}{
        top: 19%;
        left: 35%;
    }
`;
export const TextBelowLogo = styled.h3`
  font-size: 1.363rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: #FFF;
  min-width: 18rem;
  margin: -2rem 0 0 3rem;
  ${mobileMedium}{
    font-size: 1.563rem;
    min-width: 20rem;
    }
  ${mobileLarge}{
    font-size: 1.763rem;
    min-width: 20rem;
    }
  ${tablet}{
    font-size: 1.25rem;
    min-width: 48rem;
    margin: 1.5rem 0 0 -0.5rem;
  }
  ${laptop}{
    font-size: 1.375rem;
    min-width: 64rem;
    margin-top: -0.5rem;
  }
  ${desktop}{
    font-size: 1.5rem;
    min-width: 90rem;
    margin: 1rem 0 0 1.5rem;
  }
  ${bigdesk}{
    font-size: 2rem;
    min-width: 160rem;
  }
`;

export const ContainerImageFourPoints = styled.div`
    display: flex;
    position: fixed;
    top: 40%;
    left: 10%;
    ${tablet}{
        top: 30%;
        left: 16%;
    }
    ${laptop}{
        top: 30%;
        left: 20%;
    }
    ${desktop}{
        top: 30%;
        left: 22%;
    }
    ${bigdesk}{
        width: 45%;
        top: 30%;
        left: 27.5%;
    }
`;

export const ImageFourPoints = styled.img`
    width: 90%;
    height: auto;
    content: url("/images/SecondPageFourTexts.svg");
    ${mobileLarge}{
        width: 100%;
    }
    ${tablet}{
        width: 80%;
        content: url("/images/DegradedTextImage.svg");
    }
    ${desktop}{
        width: 100%;
    }
    ${bigdesk}{
        width: 100%;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    position: fixed;
    top: 75%;
    left: 35%;
    width: 100%;
    height: auto;
    z-index: 1;
    ${mobileMedium}{
        top: 80%;
    }
    ${mobileLarge}{
        top: 82%;
        z-index: 1;
    }
    ${tablet}{
        top: 78%;
        z-index: 1;
    }
    ${laptop}{
        top: 82%;
        left: 40%;
    }
    ${desktop}{
        top: 87%;
        left: 36%;
    }
    ${bigdesk}{
        top: 87%;
        left: 20%;
    }
`;

export const ButtonBelowFourPoints = styled.img`
    width: 35%;
    height: auto;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    
    ${mobileMedium}{
        width: 33%;
    }
    ${mobileLarge}{
        width: 34%;
    }
    ${tablet}{
        width: 30%;
        font-size: 1.25rem;
        height: 3.125rem;
    }
    ${laptop}{
        width: 25%;
        font-size: 1.25rem;
        height: 3.375rem;
    }
    ${desktop}{
        width: 27%;
        font-size: 1.25rem;
        height: 3.5rem;
    }
    ${bigdesk}{
        width: 60%;
        font-size: 1.375rem;
        height: 5.313rem;
    }
`;


export const ContainerSecondPageLine  = styled.div`
    display: flex;
    position: fixed;
    top: 77%;
    ${tablet}{
        top: 32%;
    }
    ${desktop}{
        top: 27%;
    }
    ${bigdesk}{
        width: 50%;
        top: 44%;
        left: 22%;
    }
`;

export const ResponsiveSVG = styled.img`
  width: 92%;
  height: auto;
  content: url("/images/LineSecondPageMobile.svg");
  ${tablet}{
    content: url("/images/LineSecondPageBigScreens.svg");
    width: 90%;
  }
  ${desktop}{
    width: 100%;
  }
  ${bigdesk}{
    width: 80%;
  }
`; 

export const ContainerDegradedSquares = styled.div`
  display: block;
  margin: auto;
  width: 50rem;
  height: 25rem;
  margin-top: 3.125rem;
`;
export const DegradedSquareToLeft = styled.div`
  margin-top: 1.25rem;
  width: 50rem;
  height: 4.813rem;
  border-radius: 0.625rem;
  background: linear-gradient(to left ,rgba(217,217,217,0.3),rgba(32, 32, 179, 0.4));
  h4{
    padding-top: 0.938rem;
    text-align: center;
    font-size: 1.375rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }
  p{
    text-align: center;
    font-size: 1.063rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }
`;
export const DegradedSquareToRight = styled.div`
  margin-top: 1.25rem;
  width: 50rem;
  height: 4.813rem;
  border-radius: 0.625rem;
  background: linear-gradient(to Left ,rgba(32, 32, 179, 0.4),rgba(217,217,217,0.3));
  h4{
    padding-top: 0.938rem;
    text-align: center;
    font-size: 1.375rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }
  p{
    text-align: center;
    font-size: 1.063rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }
`
