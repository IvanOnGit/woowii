
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


export const Wrapper = styled.div `
    display: flex;
    width: 100vw;
    height: 100vh;
    background:  azure;
    z-index: 0;  
    overflow: hidden;
    justify-content: center;
`;

export const ContainerCompanyWelcome = styled.div `
    display: block;
    width: 100%;
    min-height: 100vh;
    background: #FFF;
    z-index: 0;  
    overflow: hidden;
    max-width: 90rem;
`;

export const ContainerBackWelcome = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    content: url("/images/VerticalWelcome.svg");
    ${mobileLittle}{
        width: 50%;
        left: 27%;
        top: 30%;
    }
    ${mobileMedium}{
        width: 45%;
        left: 27%;
        top: 28%;
    }
    ${mobileLarge}{
        width: 40%;
        left: 27%;
        top: 28%;
    }
    ${tablet}{
        content: url("/images/HorizontalWelcome.svg");
        left: 5%;
        top: 50%;
        width: 90%;
    }
    ${laptop}{
        left: 5%;
        top: 50%;
        width: 90%;
    }
    ${desktop}{
        width: 70%;
        left: 16%;
        top: 50%;
    }
    ${bigdesk}{
        left: 30%;
        top: 49%;
        width: 40%;
    }
`;

export const ImageWelcome = styled.img`
    width: 100%;
    height: auto;
    ${mobileLittle}{
        width: 55%;
    }
    ${mobileMedium}{
        width: 40%;
    }
    ${mobileLarge}{
        width: 43%;
    }
    ${tablet}{
        width: 100%;
    }
    ${laptop}{
        width: 90%;
    }
    ${desktop}{
        width: 70%;
    }
    ${bigdesk}{
        width: 48%;
    }
`;

export const FixedImageLogo = styled.img`
  position: fixed;
  top: 8%;
  left: 10%;
  width: 60%;
  height: auto;
  ${mobileLittle}{
    top: 5%;
    left: 20%;
  }
  ${mobileMedium}{
    top: 4%;
    left: 20%;
  }
  ${mobileLarge}{
    top: 4%;
  }
  ${tablet}{
    width: 40%;
    top: 10%;
    left: 31%;
  }
  ${laptop}{
    width: 30%;
    top: 10%;
    left: 37%;
  }
  ${desktop}{
    width: 30%;
    top: 7%;
    left: 37%;
  }
  ${bigdesk}{
    width: 17%;
    top: 10%;
    left: 42%;
  }
`;

export const WelcomeBanner = styled.img`
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
  height: auto;
  ${mobileLittle}{
    top: 13%;
    left: 10%;
  }
  ${tablet}{
    top: 25%;
    left: 12%;
  }
  ${desktop}{
    width: 50%;
    top: 25%;
    left: 26%;
  }
  ${bigdesk}{
    width: 30%;
    top: 25%;
    left: 35%;
  }
`;

export const ContainerTextBelowBanner = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 18%;
    left: 3%;
    ${mobileMedium}{
        top: 19%;
        left: 7%;
    }
    ${mobileLarge}{
        top: 19%;
        left: 12%;
    }
    ${tablet}{
        top: 38%;
        left: 12%; 
    }
    ${laptop}{
        top: 38%;
        left: 22%; 
    }
    ${desktop}{
        top: 38%;
        left: 30%; 
    }
    ${bigdesk}{
        top: 39%;
        left: 38%; 
    }
    
`;

export const TextsBelowBanner = styled.p`
    font-size: 0.813;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    max-width: 18.75rem;
    text-align: center;
    ${mobileLittle}{
        font-size: 0.813;
        font-weight: 300;
        margin-top: -1rem;
        max-width: 20rem;
    }
    ${mobileMedium}{
        font-size: 0.813;
        font-weight: 300;
        margin-top: -1rem;
        max-width: 20rem;
    }
    ${tablet}{
        font-size: 1.2rem;
        max-width: 48rem;
    }
`;

export const ButtonNextFirstGift = styled.button`
    position: fixed;
    top: 90%;
    left: 25%;
    width: 10rem;
    height: 2rem;
    background: #460BFF;
    color: #FFF;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    border-radius: 2.813rem;
    cursor: pointer;
    ${mobileMedium}{
        top: 92%;
        left: 28%;
    }
    ${mobileLarge}{
        top: 89%;
        left: 27%;
    }
    ${tablet}{
        top: 80%;
        left: 42%;
    }
    ${laptop}{
        top: 83%;
        left: 45%;
    }
    ${desktop}{
        top: 85%;
        left: 46%;
    }
    ${bigdesk}{
        top: 88%;
        left: 47%;
    }
`;

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  margin: -1rem 0 0 -10rem;
  ${mobileLittle}{
    top: -3%;
    left: 112%;
  }
  ${mobileMedium}{
    top: -4%;
    left: 112%;
  }
  ${tablet}{
    top: -2%;
    left: 105%;
  }
  ${desktop}{
    top: -2%;
    left: 100%;
  }
  ${bigdesk}{
    top: -2%;
    left: 95%;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  p {
    display: flex;
    margin: 0; 
  }
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.2rem;
  }
`;

