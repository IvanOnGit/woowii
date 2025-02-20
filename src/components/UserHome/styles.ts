import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  
  input {
    height: 2rem; 
    width: 30%; 
    margin-top: 1rem;
    padding: 0rem;
    margin-left: 10rem;
    border-radius: 1rem;
    border: 1px solid black;
  }

  input::placeholder {
    padding-left: 1rem;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  p {
    display: flex;
    margin: 0; 
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

