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
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  width: 90%;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

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
  gap: 1rem;

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
`;

export const BaseQuestionsInputsFirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    color: white;
  }

  .questions {
  display: flex;
  flex-direction: row; /* Para que estén uno al lado del otro */
  gap: 1rem;
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
`;

export const BaseQuestionsInputsSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: white;
  }

  textarea {
    padding: 1rem;
    height: 10rem;
    border-radius: 1rem;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    resize: none;
  }
`;