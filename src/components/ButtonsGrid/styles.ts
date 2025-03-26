import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
`;

export const StyledButton = styled.button`
  width: 13.125rem;
  height: 2.513rem;
  background-color: #460bff;
  color: white;
  font-size: 0.938rem;
  font-weight: 500;
  border: none;
  border-radius: 2.813rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;