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
    ${mobile}{
        background-size: cover;
    }
    ${desktop}{
        display: none;
    }
`;
export const ContainerWrapperDesktop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
    margin: 10rem auto;
    ${mobile}{
        display: none;
    }
    ${desktop}{
        display: flex;
    }
`;
export const DivContainerLogo = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    top: 3rem; 
    ${desktop}{
        position: absolute;
        margin-top: 5rem;
        z-index: 1;
    }
    
`;
export const LogoSecondPageStyled = styled.img`
    ${mobile}{
        width: 18.75rem;
        height: 5.25rem;
        
        z-index: 1;
    }
    ${desktop}{
        margin-top: -5rem;
    }
`;

export const ImgFondoSecondPage = styled.img`
    width: 100%;
    height: 100%;
`;
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;
export const ButtonNextSecondPage = styled.button`
    position: absolute;
    width: 182px;
    height: 37px;
    background: #8FFF00;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 45px;
    cursor: pointer;
    margin: -9rem 0 0 -6rem;
    z-index: 1;
    ${desktop}{
        margin-top: -3rem;
    }
`;