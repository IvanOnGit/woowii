import styled from "styled-components";

export const StyledMotivationText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;


  @media(max-width: 768px){
    margin-left: 0;

  }

  h2 {
    font-size: 1.5rem;
    text-align: left;
    color: #75B300;

    @media(max-width: 768px){
      margin-left: 0;
      font-size: 12px;
    }
  }

  p {
    text-align: justify;
    margin: 0;
    font-size: 0.8rem;
    margin-left: 3rem;

    @media(max-width: 768px){
      margin-left: 0;
      font-size: 12px;
      margin-left: 3rem;
     margin-right: 3rem;
    }
  }
`;