import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50rem; /* Puedes ajustar esta altura */
  background-image: url("/images/backgroundOffer.svg"); /* Asegúrate que el nombre es correcto */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  width: 90%;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  width: 20rem;
  border: 1px solid white;
  background-color: transparent;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Roboto', sans-serif;

  p {
    display: flex;
    margin: 0; 
    color: white;
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

  svg {
    color: white;
  }
`;

export const BaseQuestions = styled.div`
  display: flex;
  margin-top: 12rem;
  gap: 3rem;
  font-family: 'Roboto', sans-serif;

  img {
    width: 15rem;
    height: 20rem;
    object-fit: cover;
    transform: scaleX(-1);
    border-top: 2rem solid white;
    border-bottom: 2rem solid white;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
`;

export const BaseQuestionsInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
`;

export const BaseQuestionsInputsFirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Roboto', sans-serif;

  input {
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    color: white;
  }

  .questions {
  display: flex;
  flex-direction: row; /* Para que estén uno al lado del otro */
  gap: 3rem;
}

.input-group {
  display: flex;
  flex-direction: column; /* Para que el label esté sobre el input */
}

.input-group label {
  color: white;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.input-group input {
  padding: 0.5rem;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
}

h1 {
  color: white;
  margin: 0;
}

p {
  color: white;
} 
`;

export const BaseQuestionsInputsSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;

  h2 {
    color: white;
    margin: 0;
  }

  p {
    padding: 1rem;
    height: 10rem;
    width: 40rem;
    border-radius: 1rem;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    resize: none;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  p {
    padding: 1rem;
    height: 10rem;
    width: 40rem;
    border-radius: 1rem;
    border: 1px solid black;
    background-color: transparent;
    color: black; 
    resize: none;
  }
`;

export const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-family: 'Roboto', sans-serif;

  p {
    text-align: center;
  }

  .Column {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  .Column:first-of-type {
    gap: 4.5rem;
  }
`;

export const ThirdContainerColumnsContainer = styled.div`
    border: 1px solid black;
    border-radius: 1rem;
    font-family: 'Roboto', sans-serif;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;
  font-family: 'Roboto', sans-serif;

  .skills-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
  }

  select {
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    width: 100%; // para que tenga mismo ancho que las tags
    max-width: 300px;
    text-align: center;
  }

  .tags-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    width: 30%;
}

  .tag {
    background-color: #4f46e5;
    color: white;
    padding: 0.6rem 1rem;
    border-radius: 2rem;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const FourthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  font-family: 'Roboto', sans-serif;
`;

export const ProcessStepsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  gap: 2rem; /* Espacio uniforme entre pasos */
  font-family: 'Roboto', sans-serif;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px; /* Ancho fijo para cada paso */
`;

export const Reward = styled.div`
  font-size: 1rem;
  color: #4f46e5;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;

export const StepLineContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  margin-left: 6rem;
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: white;
  border: 4px solid #4f46e5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ConnectingLine = styled.div`
  position: absolute;
  height: 3px;
  background-color: #e0e0e0;
  margin-left: 2rem;
  width: 100%;
  z-index: 1;
`;

export const StepNumber = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #4f46e5;
`;

export const StepInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  color: #888;
  font-size: 14px;
  margin-top: 1rem;
  
  &::placeholder {
    color: #888;
  }
`;

export const ResponsibilitiesContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const ResponsibilityInputGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const ResponsibilityInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  width: 22.5rem;
  text-align: center;
`;

export const ResponsibilityButton = styled.button`
  margin-left: 12px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #6a0dad;

  &:hover {
    transform: scale(1.2);
  }
`;

export const WhatWeLookingForContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  .Needs-Container {
    display: flex;
    gap: 4rem;

    h3 {
      text-align: center;
    }

      .Needs-Columns {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 1px solid black;
        border-radius: 1rem;
        padding: 1rem;

        p {
          border: none;
          border-bottom: 1px solid black;
      }
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  gap: 1.5rem;
  font-family: 'Roboto', sans-serif;

  h2 {
    margin: 0;
    padding: 0;
  }

  h3 {
    margin: 0;
    padding: 0;
  }

  button {
    background-color: #4f46e5;
    color: white;
    padding: 1rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const SuccessApply = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  font-family: 'Roboto', sans-serif;
`;

export const InnerSuccessApply = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

export const SuccessButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;