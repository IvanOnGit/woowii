import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;

    &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
      margin-left: 0; /* Remove margin on mobile */
    }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
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

export const MenuAside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 19rem;
  height: 100vh;
  background-color: white;
  border-right: 1px solid black;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: 'Roboto', sans-serif;
  overflow-y: auto;
  overflow-x: hidden;

  /* Estilizar el scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  span {
    width: 100%;
    background-color: grey;
    color: white;
    text-align: center;
    justify-content: center;
    align-content: center;
    padding: 0.005rem;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FirstMenuAsideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  height: 12rem;

  img {
    width: 10rem;
    height: 4rem;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    margin-top: 1rem;
  }
`;

export const UserAndImageCombo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  h3 {
    font-size: 1.3rem;
  }
`;

export const ThirdMenuAsideItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25%;

  button {
    width: 80%;
    padding: 0.5rem;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 1rem;
    color: black;
    cursor: pointer;
    font-size: 0.8rem;
  }

  button:hover {
    background-color: #f0f0f0;
  }
`;

export const DropdownContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 5px;
  margin-top: 5px;
  gap: 1rem;
  font-weight: initial;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;

  &:hover {
    background: #f0f0f0;
  }
`;

export const SecondDropdownContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const SecondDropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const SecondDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 5px;
  margin-top: 5px;
  gap: 1rem;
  font-weight: initial;
`;

export const SecondDropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;

  input {
    border: none;
  }

  &:hover {
    background: #f0f0f0;
  }
`;

export const HelpButton = styled.button`
background-color: white;
width: 50%;
margin-left: 5rem;
margin-bottom: 1rem;
border-radius: 1rem;
border: 2px solid #385500; /* Asegúrate de usar 'border' en lugar de 'border-color' */
color: #385500;
cursor: pointer;
transition: all 0.3s ease-in-out; /* Mover aquí */
&:hover {
  background-color: #75B300;
  color: white;
}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 25rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 3rem;

  h1 {
    font-size: 2rem;
    color: #75B300;
  }

  textarea {
    width: 30rem;
    height: 5rem;
    resize: none;
    padding: 0.5rem;
    border-radius: 1rem;
    border: 1px solid black;
  }

  h2 {
    font-size: 2rem;
    color: #75B300;
  }

  input {
    width: 20rem;
    height: 2rem;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }

  button {
    width: 10rem;
    height: 2rem;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    background-color: #75B300;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: 0rem;
    text-align: center;
  }
`;

export const StoryExplanation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 25rem;
  font-family: 'Roboto', sans-serif;

  h2 {
    font-size: 2rem;
    color: #75B300;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-left: 0rem;
    
    h2 {
      font-size: 1.5rem;
    }
    p {
      width: 90%;
      text-align: justify;
    }
  }
`;

export const StoryForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 25rem;
  font-family: 'Roboto', sans-serif;

  h3 {
    color: #75B300;
  }

  p {
    margin-bottom: 0.5rem;
  }

  input:last-of-type, textarea {
  height: 9rem;
  width: 35%;
  resize: none;
  white-space: pre-line;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid black;
  margin-top: 1rem;
}

textarea {
  @media (max-width: 768px) {
    width: 100%;
  }
}

input:first-of-type {
  width: 35%;
  padding: 0;
  height: 1rem;
  padding: 0.5rem;
  margin-top: 0;

  @media (max-width: 768px) {
    width: 95%;
  }
}

@media (max-width: 768px) {
    padding: 0 1rem;
    width: 90%;
    margin-left: 0rem;
  }
`;

export const AboutYou = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: -50rem;
  margin-left: 89rem;
  gap: 0.2rem;

  button {
    width: 8rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: transparent;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
    
    button {
      width: auto;
      padding: 0.5rem;
      margin: 0.25rem;
    }
  }
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 25rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-left: 0rem;
  }
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

export const AboutHardset = styled.div`
  width: 100%;
  margin-left: 25rem;
  margin-top: 2rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    padding: 0 1rem;
    width: 100%;
    margin-left: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TalkWithWoody = styled.p`
width: 100%;
display: flex;
margin-left: 85rem;
color: #75B300;

@media (max-width: 768px) {
    justify-content: center;
    padding: 0rem;
  }
`;

export const ContinueButton = styled.button`
width: 13rem;
margin-left: 39rem;
margin-bottom: 2rem;
background-color: #75B300;
border-radius: 1rem;
color: white;
border: none;
padding: 0.6rem;
cursor: pointer;

@media (max-width: 768px) {
    margin-left: 6.5rem;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectOption = styled.div`
  background-color: #75B300;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  padding: 5px 10px;
  cursor: pointer;
`;