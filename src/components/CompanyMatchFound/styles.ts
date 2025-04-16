import { Link } from "react-router-dom";
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
        width: 12rem;
        border-radius: 50%;
    }
`;

export const NamesContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 2rem;

    h1 {
        font-size: 2.5rem;
    }
`;

export const HandShake = styled.img`
    width: 8rem;
    position: absolute;
    margin-top: 9rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;

    button {
        background-color: white;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        padding: 0.5rem;
        width: 8.5rem;
        color: black;
    }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;