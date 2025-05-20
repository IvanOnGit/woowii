import styled from "styled-components"

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 3rem;

    @media (max-width: 768px) {
        display: none;
    }
`

export const DivContainerLogoTerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LogoTerceraPageStyled = styled.img`
    width: 18.75rem;
    height: 5.25rem;
`


export const DivImagenFondoTerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

export const ImgFondoTerceraPage = styled.img`
    width: 50%;
`

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
`

export const MobileContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;

    h1 {
        color: #75B300;
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 400;
        text-align: justify;
        width: 20rem;
    }

    @media (min-width: 768px) {
        display: none;
    }

`

export const MobileLogo = styled.img`
    width: 15rem;
    margin-top: 2rem;
`

export const StepsContainer = styled.div`
    display: flex;
    gap: 2rem;

    img {
        height: 26rem;
    }
`

export const TextContainer = styled.div`
    width: 12rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    
    h3 {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
    }
`

export const Button = styled.button`
     width: 182px;
    height: 37px;
    background: #75B300;
    border: none;
    margin-top: 2rem;
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 45px;
    cursor: pointer;
`

export const TitleAndSubtitleMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`
