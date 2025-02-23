import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Section = styled.div`
  h3 {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "#80ff80" : "#ccc")};
  color: black;
  border: none;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#66cc66" : "#bbb")};
  }
`;
