import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media (max-width: 768px) {
        img {
           &.user {
                display: none;
            }

            &.business {
                display: none;
            }
        }
        
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    button {
        width: 100%;
        padding: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;

        &.talent {
            background-color: white;
            color: #75B300;
            border-color: #75B300;
            border: none;
            border-top: 2px solid;
            border-right: 2px solid;
            border-bottom: 7px solid;
            border-left: 2px solid;
            border-top-right-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
            border-bottom-left-radius: 1.5rem;
        }

        &.company {
            background-color: white;
            color: #2020B3;
            border-color: #2020B3;
            border: none;
            border-top: 2px solid;
            border-right: 2px solid;
            border-bottom: 7px solid;
            border-left: 2px solid;
            border-top-left-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
            border-bottom-left-radius: 1.5rem;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    width: 100%;
`;

export const StyledImage = styled.img`
    width: 20rem;
    position: absolute;
    margin-bottom: 35rem;
`;