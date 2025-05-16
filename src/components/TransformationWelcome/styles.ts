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

    h1 {
        color: white;
        font-size: 1.5rem;
        font-weight: 400;
    }

    @media (max-width: 768px) {
        img {
            width: 23rem;
            max-width: 90%;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`;

export const LeftToRightCard = styled.div`
    background: linear-gradient(to left, rgba(217, 217, 217, 0.62), #2020B3);
    padding: 1rem;
    color: white;
    width: 30rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    p {
        margin: 0;
        padding-left: 5rem;
    }
`;

export const RightToLeftCard = styled.div`
    background: linear-gradient(to right,rgba(217, 217, 217, 0.62), #2020B3);
    padding: 1rem;
    color: white;
    width: 30rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    p {
        margin: 0;
        padding-left: 5rem;

    }
`;

export const Button = styled.button`
    background-color: #8FFF00;
    border: none;
    color: #2020B3;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 1rem;
    margin-top: 2rem;
    font-weight: bold;
`;