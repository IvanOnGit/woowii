import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: #2020B3 ;
    background-image: url(/images/FirstBackgroundLine.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    img {
    }
`;

export const Button = styled.button`
    background-color: #8FFF00;
    border: none;
    color: #2020B3;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    position: absolute;
    margin-left: 35rem;
    margin-top: 10rem;
`;