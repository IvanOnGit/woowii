import styled from "styled-components"

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 3rem;
    ${mobile}{
        display: none;
    }
    ${desktop}{
        display: flex;
    }
`;
export const ContainerWrapperMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 3rem;
    ${desktop}{
        display: none;
    }
`;

export const DivContainerLogoTerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile}{
        margin-top: 1rem;
    }
`;

export const LogoTerceraPageStyled = styled.img`
    width: 18.75rem;
    height: 5.25rem;
`;


export const DivImagenFondoTerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.125rem;
`;

export const ImgFondoTerceraPage = styled.img`
    width: 50%;
    ${mobile}{
        width: 60%;
        margin-top: -2rem;
    }
    ${desktop}{
        margin-top: 3rem;
    }
`;

export const ButtonNextTerceraPage = styled.button`
    width: 182px;
    height: 37px;
    background: #8FFF00;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 45px;
    cursor: pointer;
`;

export const WelcomeBanner = styled.img`
  margin-top: -2rem;
  left: 10%;
  width: 73.5%;
  height: auto;
`;

export const ContainerTextBelowBanner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -3.5rem;
  left: 12%;
`;

export const TextsBelowBanner = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  max-width: 15rem;
  text-align: left;
`;
