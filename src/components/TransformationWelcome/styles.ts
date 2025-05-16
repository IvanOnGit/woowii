import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #2020B3;
    background-image: url(/images/SecondBackgroundLine.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-family: 'Roboto', sans-serif;
    padding: 1rem;
    box-sizing: border-box;

    h1 {
        color: white;
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
        margin: 1rem 0;
    }

    @media (max-width: 768px) {
        img {
            width: 80%;
            max-width: 23rem;
        }
        
        h1 {
            font-size: 1.2rem;
            margin: 0.75rem 0;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 30rem;

    @media (max-width: 480px) {
        width: 95%;
    }
`;

export const LeftToRightCard = styled.div`
    background: linear-gradient(to left, rgba(217, 217, 217, 0.62), #2020B3);
    padding: 1rem;
    color: white;
    width: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    img {
        width: 2rem;
        height: auto;
    }

    p {
        margin: 0;
        padding-left: 5rem;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        min-height: 2rem; /* Altura mínima para alinear con la imagen */
    }

    @media (max-width: 480px) {
        padding: 0.75rem;
        
        p {
            padding-left: 1rem;
            font-size: 1rem;
        }
    }
`;

export const RightToLeftCard = styled.div`
    background: linear-gradient(to right, rgba(217, 217, 217, 0.62), #2020B3);
    padding: 1rem;
    color: white;
    width: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    img {
        width: 2rem;
        height: auto;
    }

    p {
        margin: 0;
        padding-left: 5rem;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        min-height: 2rem; /* Altura mínima para alinear con la imagen */
    }

    @media (max-width: 480px) {
        padding: 0.75rem;
        
        p {
            padding-left: 1rem;
            font-size: 1rem;
        }
    }
`;

export const Button = styled.button`
    background-color: #8FFF00;
    border: none;
    color: #2020B3;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    border-radius: 1rem;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1rem;

    @media (max-width: 480px) {
        margin-top: 1.5rem;
        padding: 0.5rem 1.25rem;
    }
`;