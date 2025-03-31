import styled from "styled-components";

export const ContainerExpanded = styled.div`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.125rem solid #FFF;
  padding-bottom: 0.5rem;
  position: relative;
  margin: auto;
  h2{
    font-size: 2.125rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    width: 34.813rem;
  }
`;

export const TextExpanded = styled.p<{ expanded: boolean }>`
  max-height: ${({ expanded }) => (expanded ? "none" : "3.125rem")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  text-align: left;
  color: #FFF;
  width: 34.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  margin-bottom: -0.625rem;
`;

export const ButtonExpanded = styled.button`
  position: relative;
  margin-top: 0.5rem;
  background: none;
  border: none;
  color: #FFF;
  cursor: pointer;
  font-weight: bold;
  bottom: -1.5rem;
`;