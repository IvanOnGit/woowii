import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    @media (max-width: 768px){
        overflow: hidden;
    
    }
`
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


    @media(max-width: 768px){
        margin-bottom: 20rem;
        margin-left: 20rem;
        height: 10rem;
        width: 30rem;

    }
`

export const ImgFondoSecondPage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;

    @media(max-width: 768px){
        position: fixed;
        margin-top: 165rem;
        height: 90%;
        width: 180%;


    }


`
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 25rem;


    @media(max-width: 768px){
        margin-top: 250rem;
        margin-left: 100rem;

    }



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

    @media(max-width: 768px){
        font-size: 40px;
        padding: 4rem;
        width: 40rem;


    }

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


@media(max-width: 768px){
    margin-right: 0rem;
    margin-top: 70rem;
    margin-left:70rem;
}

h1 {
    font-size: 3rem;
    margin: 0;

    @media(max-width: 768px){
        font-size: 9rem;
        margin-right: 30rem;
    }
}

p {
    font-size: 2rem;
    margin: 0;

    @media(max-width: 768px){
        font-size: 4rem;
    }
}

img {
    position: absolute;
    margin-left: 50rem;


    @media(max-width: 768px){
        margin-left: 60rem;

    }
}

img:last-of-type {
    margin-left: 0;
    position: absolute;

    @media(max-width: 768px){
        height:370vh;

    }
}
`;