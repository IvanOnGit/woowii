import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    background-color: #70C800;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 1rem;

    h1 {
        font-size: 3rem;
        margin: 0;
        color: white;
    }
`;

export const ItsaMatch = styled.img`
    width: 15rem;
`;

export const HandShakeContainer = styled.div`
    display: flex;
    img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
    }
`;