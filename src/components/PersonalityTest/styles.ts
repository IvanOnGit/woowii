import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    @media (max-width: 768px){
    
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
        margin-left: 25rem;
        height: 7.25rem;
        width: 25.75rem;

    }
`

export const ImgFondoSecondPage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;

    @media(max-width: 768px){
        display:none;

    }


`
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 25rem;


    @media(max-width: 768px){
        
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
        margin-top: 115rem;
        margin-left: 22rem;
        width: 17rem;
        height: 4.5rem;
        border:none;
        box-shadow: 0px 4px 4px 0px #00000040;
        font-size: 1.6rem;

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
    margin-right: 1rem;

}

h1 {
    font-size: 3rem;
    margin-left: 0rem;

    @media(max-width: 768px){
        font-size: 5rem;
        margin-left: 25rem;

    }
}

p {
    font-size: 2rem;
    margin: 0;

    @media(max-width: 768px){
        font-size: 1.5rem;
        margin-left: 25rem;
        font-weight: bold;
    }
}

img {
    position: absolute;
    margin-left: 50rem;


    @media(max-width: 768px){
        margin-left: 30rem;
        margin-top: 40rem;

    }
}

img:last-of-type {
    margin-left: 0;
    position: absolute;

    @media(max-width: 768px){

    }
}
`;