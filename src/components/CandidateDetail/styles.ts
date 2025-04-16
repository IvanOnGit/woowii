import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    background-color: black;
    color: white;
`;

export const SideMenu = styled.div`
    width: 15rem;
    height: 100%;
    padding: 1rem;
    border-right: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export const DescriptionContainer = styled.div`
    text-align: left;
`;