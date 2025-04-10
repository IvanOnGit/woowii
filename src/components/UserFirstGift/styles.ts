import styled from "styled-components"

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`
export const DivContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogoSecondPageStyled = styled.img`
    width: 18.75rem;
    height: 5.25rem;


    @media (max-width: 768px){
        display: none;

    }
`

export const ImgFondoSecondPage = styled.img`
    width: 100%;
    height: 70%
    display: block;



    @media (max-width: 768px){
        display: none;

    }
`
export const ImgFondoSecondPageMask = styled.img`
    display: none;

    @media (max-width: 768px){
        display: block;

    }
`
export const ImgFondoSecondPageEllipse = styled.img`
    display: none;

    @media (max-width: 768px){
        display: block;
        position:absolute;
        margin-top: 35%;

    }
`
export const ImgFondoSecondPageCongratulation = styled.img`
    display: none;

    @media (max-width: 768px){
        display: block;
        position:absolute;
        padding-bottom: 85%;

    }
`
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 768px){
        margin-top: 170%;
        position: absolute;
    }
`
export const ButtonNextSecondPage = styled.button`
    width: 182px;
    height: 37px;
    background: #8FFF00;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 45px;
    cursor: pointer;



    @media(max-width: 768px){
        width: 109px;
        height: 26px;
        background: #8FFF00;
        color: #000;
        font-size: 12px;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
        border-radius: 27px;
        cursor: pointer;
    }
`