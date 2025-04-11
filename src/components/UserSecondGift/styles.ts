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

    @media (max-width: 768px){
        margin-bottom: 46rem;  
        position:absolute;  
    }
    
`
export const LogoSecondPageStyled = styled.img`
    width: 18.75rem;
    height: 5.25rem;
`

export const ImgFondoSecondPage = styled.img`
    display: flex
    width: 100%;
    height: 70%;

    @media (max-width: 768px){
        display: none;
    
    }

`
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 768px){
        margin-top: 40rem;
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
    box-shadow: 0px 4px 4px 0px #00000040;


    @media (max-width: 768px){
        border: none;
        font-size: 13px;
        width: 109px;
        height: 26px;
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
export const ImgFondoSecondPageCoin = styled.img`
    display: none;

    @media (max-width: 768px){
        display: block;
        position:absolute;

    }
`
export const ImgFondoSecondPageWiibuck = styled.img`
    display: none;

    @media (max-width: 768px){
        display: block;
        position:absolute;
        margin-bottom: 30rem;

    }
`