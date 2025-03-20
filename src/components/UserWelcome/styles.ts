import styled from "styled-components"

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 3rem;

    @media (max-width: 768px){
        gap: 9rem;
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

    @media (max-width: 768px){
        width: 90%;
    }
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