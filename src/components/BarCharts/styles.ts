import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 28rem;
  height: 26rem;
  margin-top: 0.625rem;
`;

export const Button = styled.button`
  padding: 0.313rem 0.625rem;
  margin: -0.625rem 0 0 -3.125rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #460BFF;
  color: #FFF;
  border: none;
  border-radius: 2.813rem;
  &:hover {
    background-color: #8FFF00;
    color: #000;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  text-align: center;
  display: block;
  h3{
    text-align: center;
    margin-left: -6.25rem;
    margin-bottom: -0.5rem;
    margin-top: -0.5rem;
  }
  h2{
    text-align: center;
    max-width: 12.5rem;
    font-size: 0.875rem;
    margin-left: 0.625rem;
  }
  .division{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: -4.375rem;
    h4{
      font-weight: 300;
      margin-bottom: -0.3rem;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: -1.875rem;
  width: 100%;
`;

