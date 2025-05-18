import { Link } from "react-router-dom";
import styled from "styled-components";

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`

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
  ${mobile}{
    display: none;
  }
  ${desktop}{
    display: block;
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
  ${mobile}{
    display: none;
  }
  ${desktop}{
    display: flex;
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

input:first-of-type {
  width: 35%;
  padding: 0;
  height: 1rem;
  padding: 0.5rem;
  margin-top: 0;
}
`;

export const AboutYou = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: -50rem;
  margin-left: 97rem;
  gap: 0.2rem;

  button {
    width: 8rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 25rem;
  margin-top: 2rem;
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
`;

export const TalkWithWoody = styled.p`
width: 100%;
display: flex;
margin-left: 85rem;
color: #75B300;
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
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 40%;
`;

export const SelectOption = styled.div`
  background-color: #75B300;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  padding: 5px 10px;
  cursor: pointer;
`;

// ------------------------------------------------MOBILE------------------------------------------------

export const ContainerAllMobile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  ${mobile}{
    display: flex;
  }
  ${desktop}{
    display: none;
  }
`;
export const ContainerUpSearhAndItemsMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: -1rem;
  left: 1rem;
  width: 100vw;
  height: 10vh;
  background: #FFF;
`;
export const AvatarToMobile = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  margin-left: -2rem;
  img{
    width: 2rem;
    height: 2rem;
  }
`;
export const SearchUpToMobile = styled.div`
  display: flex;
  width: 10rem;
  height: 1rem;
  input{
    width: 10rem;
    height: 1.3rem;
    border-radius: 2.813rem;
    padding-left: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }
  &::placeholder{
    font-size: 0.75rem;
  }
    
`;
export const HeaderItemsToMobile = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
  cursor: pointer;
  img{
    width: 1rem;
    height: 1rem;
  }
  p{
    font-size: 0.875rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
  }
  #menu{
    margin-top: 0.8rem;
  }
`;
export const ContainerADNHistoryTitle = styled.div`
  position: relative;
  display: flex;
  width: 18.625rem;
  height: 1.313rem;
  top: -1.5rem;
  left: 3rem;
`;
export const ADNHistoryTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 1.375rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #75B300;
`;
export const ContainerParagrafBelowTitle = styled.div`
  position: relative;
  display: flex;
  width: 18.438rem;
  height: 2.188rem;
  left: 1.7rem;
`;
export const ParagrafBelowTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  margin: -0.75rem 0 0 2rem;
  min-width: 15.625rem;
`;
export const ContainerSubtitleBelowParagraf = styled.div`
  position: relative;
  display: flex;
  width: 18.438rem;
  height: 1.125rem;
  left: 1rem;
  top: -0.5rem;
`;
export const SubtitleBelowParagraf = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin: 2.5rem 0 0 2rem;
  color: #75B300;
  min-width: 15.625rem;
`; 
export const ContainerInputBelowSubtitle = styled.div`
  position: relative;
  display: flex;
  width: 18.375rem;
  height: 0.938rem;
  left: 3rem;
  top: 2.8rem;
  input{
    width: 15.375rem;
    height: 0.938rem;
    border: none;
    border-bottom: 1px solid #000;
    &::placeholder{
      font-size: 0.75rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
    }
  }
`;
export const ContainerTextsWithStar = styled.div`
  display: block;
  width: 17.75rem;
  height: 6.875rem;
  margin: 1.8rem 0 0 3rem;
`;
export const TextWithStar = styled.div`
  display: flex;
  width: 18.75rem;
  height: 0.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  .star{
    margin-left: -0.4rem;
    margin-top: 0.7rem;
  }
  .last{
    margin-top: 2rem;
  }
  p{
    margin-left: 0.3rem;
    max-width: 15.375rem;
    font-size: 0.75rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`;
export const ContainerVoiceToText = styled.div`
  position: relative;
  display: flex;
  width: 20.438rem;
  height: 7.063rem;
  margin: 4.5rem 0 0 1.75rem;
`;
export const VoiceToTextArea = styled.textarea`
  width: 20.438rem;
  height: 7.063rem;
  border: 1px solid #75B300;
  border-radius: 0.625rem;
  text-transform: none;
  padding: 0.2rem;
  &::placeholder{
    font-size: 0.75rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }
`;
export const ContainerTextAndMicro = styled.div`
  position: relative;
  display: flex;
  left: 11.7rem;
  top: -1rem;
  gap: 0.3rem;
`;
export const TextAndMicro = styled.p`
  font-size: 0.5rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;
export const ContainerMicro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -0.3rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  border: 2px solid #000;
  cursor: pointer;
`;
export const ContainerChecks = styled.div`
  position: relative;
  display: block;
  width: 18.75rem;
  height: 3.5rem;
  top: 1.5rem;
  left: 3rem;
  #first{
    margin-top: -1rem;
  }
`;
export const CheckAndText = styled.div`
  display: flex;
  width: 18.75rem;
  height: 0.511rem;
  margin-bottom: 1.8rem;
  p{
    font-size: 0.931rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    max-width: 17.5rem;
    input{
      width: 0.663rem;
      height: 0.663rem;
      color: #75B300;
    }
  }
`;
export const ContainerThreeLargeSelect = styled.div`
  position: relative;
  display: block;
  width: 18.438rem;
  height: 6.25rem;
  top: 10rem;
  left: 1.5rem;
`;
export const LargeSelect = styled.select`
  width: 20.438rem;
  height: 2.063rem;
  margin-bottom: 0.5rem;
  border: 2px solid #75B300;
  border-radius: 2.813rem;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  padding-left: 1rem;
  color: #75B300;
  cursor: pointer;
`;
export const ContainerFooterToMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 33%;
  width: 100vw;
  height: 8vh;
  background: #75B300;
  img{
    margin-top: -3rem;
    width: 4.438rem;
    height: 4.438rem;
    cursor: pointer;
  }
  .items{
    cursor: pointer;
  }
`;