import { Link } from "react-router-dom"
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
        display: none;
    }
    ${desktop}{
        display: flex;
    }
`;
export const DivContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogoSecondPageStyled = styled.img`
    width: 18.75rem;
    height: 5.25rem;
    position: absolute;
    margin-bottom: 35rem;
`

export const ImgFondoSecondPage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 25rem;
`
export const ButtonNextSecondPage = styled.button`
    width: 15rem;
    height: 2.5rem;
    background: #8FFF00;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 1rem;
    text-decoration: none;
    align-items: center;
    padding-left: 1rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none; /* Evita el subrayado del enlace */
`;

export const PersonalityText = styled.div`
display: flex;
position: absolute;
flex-direction: column;
font-family: 'Roboto', sans-serif;
margin-right: 40rem;

h1 {
    font-size: 3rem;
    margin: 0;
}

p {
    font-size: 2rem;
    margin: 0;
}

img {
    position: absolute;
    margin-left: 50rem;
}

img:last-of-type {
    margin-left: 0;
    position: absolute;
}
`;

// ---------------------------------mobile----------------------------------------------

export const ContainerAllMobile = styled.div`
    display: block;
    width: 100vw;
    height: 100vh;
    ${mobile}{
        display: block;
    }
    ${desktop}{
        display: none;
    }
`;
export const ContainerLogoNobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const LogoMobile = styled.img`
    width: 12.75rem;
    height: 5.25rem;
    position: relative;
    margin-top: 3rem;
`;
export const ContainerTitleQuestions = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 3rem;
    left: 1.5rem;
    width: 18.75rem;
`;
export const TitleQuestions = styled.h2`
    font-size: 1.65rem;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
`;
export const ContainerTextBelowTitle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4rem;
    left: 3.5rem;
    max-width: 16.75rem;
`;
export const TextBelowTitle = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
`;
export const ContainerImageQuestiosMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18.75rem;
    height: 20.063rem;
    margin: 5rem 0 0 2rem;
    ${desktop}{
        display: none;
    }
    img{
        width: 18.75rem;
        height: 20.063rem;
    }
`;
export const ContainerButtonInit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
`;
export const ButtonInit = styled.button`
    width: 13.875rem;
    height: 2.625rem;
    background: #8FFF00;
    color: #000;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    border-radius: 2.813rem;
    border: none;
    cursor: pointer;
`;