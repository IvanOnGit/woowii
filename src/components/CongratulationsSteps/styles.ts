
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
`;
export const DivContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const LogoSecondPageStyled = styled.img`
    width: 16.75rem;
    position: relative;
    margin-top: -31rem;
    ${desktop}{
        width: 20rem;
        margin-top: -35rem;
    }
`;
export const ImgFondoSecondPage = styled.img`
    position: absolute;
    width: 14rem;
    margin-top: 31rem;
    ${desktop}{
        width: 20rem;
        margin-top: 26rem;
    }
`;
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 38rem;
`;
export const ButtonNextSecondPage = styled.button`
    width: 12rem;
    height: 2rem;
    background: #8FFF00;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    margin-top: 11rem;
`;
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    text-align: center;
    margin-top: -32rem;
    ${desktop}{
        margin-top: -27rem;
    }
    h1 {
        margin: 0;
        font-size: 1.5rem;
        background: linear-gradient(90deg, #F4BE19, #654C00);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h2 {
        margin: 0;
        font-size: 1.5rem;
    }
`;
export const ContainerVerticalChecks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18.75rem;
    height: 18.063rem;
    margin-top: -5rem;
    ${desktop}{
        display: none;
        content: url("/images/CongratHorizontalChecks.svg");
    }
`;
export const VerticalChecks = styled.img`
    width: 18.75rem;
    height: 18.063rem;
`;
export const ContalnerHorizontalChecks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51.938rem;
    height: 10.938rem;
    margin-top: -6rem;
    ${mobile}{
        display: none;
    }
    ${desktop}{
        display: flex;
    }
`;
export const HorizontalChecks = styled.img`
    width: 51.938rem;
    height: 10.938rem;
`;